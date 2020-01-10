import promise from "promise";
import { remove } from "lodash";

import {
  subscribeLevel1UpdateEvent,
  subscribeLevel2UpdateEvent,
  tradeDataUpdateEvent,
  tickerDataUpdateEvent,
  accountPositionEvent
} from "./../actions/AP-subscriptions-actions";
import {
  orderStateEvent,
  orderTradeEvent
} from "./../actions/user-transaction-actions";

import WebSocketService from "./WebSocketService";
import { OrderStateEvent, OrderTradeEvent } from "./NotificationServices";

const subscriptionCallbacks = reduxStore => {
  return [
    {
      fxName: `Level1UpdateEvent`,
      callback: data => {
        reduxStore.dispatch(subscribeLevel1UpdateEvent(data));
      }
    },
    {
      fxName: `Level2UpdateEvent`,
      callback: data => {
        reduxStore.dispatch(subscribeLevel2UpdateEvent(data));
      }
    },
    {
      fxName: `TradeDataUpdateEvent`,
      callback: data => {
        reduxStore.dispatch(tradeDataUpdateEvent(data));
      }
    },
    {
      fxName: `OrderStateEvent`,
      callback: data => {
        OrderStateEvent.onNext(data);
        reduxStore.dispatch(orderStateEvent(data));
      }
    },
    {
      fxName: `OrderTradeEvent`,
      callback: data => {
        OrderTradeEvent.onNext(data);
        reduxStore.dispatch(orderTradeEvent(data));
      }
    },
    {
      fxName: `TickerDataUpdateEvent`,
      callback: data => {
        reduxStore.dispatch(tickerDataUpdateEvent(data));
      }
    },
    {
      fxName: `AccountPositionEvent`,
      callback: data => {
        reduxStore.dispatch(accountPositionEvent(data));
      }
    }
  ];
};

// const Reauthenticate = (wsIntance) => {
//     // wsIntance.send()
// }

class ExchangeService {
  onOpenCallbacks = [];
  onMessageCallbackQueue = [];
  eventSubscribeCallbacks = [];
  onOpenCallbackQueue = [];
  wsConnection = null;
  sequenceNumber = 0;

  reduxStore = null;

  startRetryInterval() {
    this.retryInterval = setInterval(() => {
      this.initializeWebSocket();
    }, 5000);
  }

  clearRetryInterval() {
    clearInterval(this.retryInterval);
    this.retryInterval = null;
  }

  initializeWebSocket() {
    WebSocketService.new(`wss://apihybridblockprod.alphapoint.com/WSGateway/`);
    // WebSocketService.new(`wss://api.hybex.io/WSGateway/`);
    WebSocketService.onopen(() => {
      this.clearRetryInterval();
      this.onOpenCallbackQueue.forEach(payload => {
        WebSocketService.send(payload);
      });
    });
  }
  constructor(store) {
    this.initializeWebSocket();
    this.reduxStore = store;
    subscriptionCallbacks(store).forEach(({ fxName, callback }) => {
      this.eventSubscriber(fxName, callback);
    });

    WebSocketService.onerror(() => {
      this.startRetryInterval();
      this.clearRetryInterval();
      window.localStorage.clear();
      window.location = "/";
    });
    WebSocketService.onclose(() => {
      this.startRetryInterval();
      this.clearRetryInterval();
      window.localStorage.clear();
      window.location = "/";
    });
    WebSocketService.onmessage((response, name, sequenceNum, type) => {
      if (type === 1 || type === 5) {
        const onMessageCallback = this.onMessageCallbackQueue.filter(
          i => i.sequenceNumber === sequenceNum
        );
        if (onMessageCallback && onMessageCallback[0].callback) {
          onMessageCallback[0].callback(response);
          remove(
            this.onMessageCallbackQueue,
            i => i.sequenceNumber === sequenceNum
          );
        }
      } else if (type === 3) {
        const fxEvent = this.eventSubscribeCallbacks[name];
        if (fxEvent) {
          fxEvent(response);
        }
      }
      // EventBusService.$emit(`websocket:${name}`, response);
    });
  }
  onAddOpenCallback = cb => {
    this.onOpenCallbacks.push(cb);
  };
  onOpen = () => {
    if (this.onOpenCallbacks) {
      this.onOpenCallbacks.reverse();
      this.onOpenCallbacks.forEach((cb, key) => {
        this.onSend(cb.fx, cb.params, cb.cb);
      });
    }
  };
  sendData = (fx, object, cb = d => {}, useOMS = true) => {
    return new promise((resolve, reject) => {
      if (useOMS) {
        object.OMSId = 1;
      }
      this.sequenceNumber += 2;

      const status = WebSocketService.checkStatus();
      const websocketData = JSON.stringify({
        m: 0,
        i: this.sequenceNumber,
        n: fx,
        o: JSON.stringify(object)
      });

      this.onMessageCallbackQueue.push({
        sequenceNumber: this.sequenceNumber,
        callback: resolve
      });

      if (status === `CLOSE`) {
        this.onOpenCallbackQueue.push(websocketData);
      } else {
        WebSocketService.send(websocketData);

        WebSocketService.onerror(error => {
          // this.handleExchangeError(error);
        });
      }
    });
  };

  eventSubscriber = (fx, cb) => {
    this.eventSubscribeCallbacks[fx] = cb;
  };
}

// let exchangeService = new ExchangeService(`wsConnection`)
// const setupSocket = (dispatch) => {
//     console.log(dispatch, 'dispatch')
// }

export const setupSocket = store => {
  // console.log(`store : `, store)
  // const aa = store.getState()
  // console.log(`aa : `, aa)
  const exchangeService = new ExchangeService(store);
  return exchangeService;
};

// export default exchangeService
// export {
//     setupSocket
// }
