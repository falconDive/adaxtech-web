import { take, fork, call, put } from 'redux-saga/effects'

import { exchangeService } from './../App'

import {
    subscribeTradesInProgress,
    subscribeTradesCompleted,

    tradeDataUpdateEventCompleted,

    unsubscribeTradesInProgress,
    unsubscribeTradesCompleted,

    subscribeLevel1InProgress,
    subscribeLevel1Completed,

    unsubscribeLevel1InProgress,
    unsubscribeLevel1Completed,

    subscribeLevel2Completed,
    subscribeLevel2InProgress,
    subscribeLevel2UpdateEventCompleted,

    unsubscribeLevel2InProgress,
    unsubscribeLevel2Completed,


    subscribeTicker,
    subscribeTickerInProgress,
    subscribeTickerCompleted,
} from './../actions/AP-subscriptions-actions'
import AP_SUBSCRIPTIONS_ACTION_TYPES from './../actions/AP-subscriptions-action-types'

function* _subscribeTrades({ InstrumentId }) {
    yield put(subscribeTradesInProgress())
    const response = yield call(exchangeService.sendData, 'SubscribeTrades', { OMSId: 1, InstrumentId, IncludeLastCount: 100 });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeTradesCompleted(data))
}
function* _tradeDataUpdateEvent(response) {
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(tradeDataUpdateEventCompleted(data))
}

function* _unsubscribeTrades({ InstrumentId }) {
    yield put(unsubscribeTradesInProgress())
    const response = yield call(exchangeService.sendData, 'UnsubscribeTrades', { OMSId: 1, InstrumentId, });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(unsubscribeTradesCompleted(data))
}

function* _subscribeLvl1({ InstrumentId }) {
    yield put(subscribeLevel1InProgress())
    const response = yield call(exchangeService.sendData, 'SubscribeLevel1', { OMSId: 1, InstrumentId });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeLevel1Completed(data))
}

function* _subscribeLvl1UpdateEvent(response) {
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeLevel1Completed(data))
}

function* _unsubscribeLvl1({ InstrumentId }) {
    yield put(unsubscribeLevel1InProgress())
    const response = yield call(exchangeService.sendData, 'UnsubscribeLevel1', { OMSId: 1, InstrumentId });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(unsubscribeLevel1Completed(data))
}

function* _subscribeLvl2({ InstrumentId, Depth }) {
    yield put(subscribeLevel2InProgress())
    const response = yield call(exchangeService.sendData, 'SubscribeLevel2', { OMSId: 1, InstrumentId, Depth });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeLevel2Completed(data))
}
function* _subscribeLvl2UpdateEvent(response) {
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeLevel2UpdateEventCompleted(data))
}

function* _unsubscribeLvl2({ InstrumentId }) {
    yield put(unsubscribeLevel2InProgress())
    const response = yield call(exchangeService.sendData, 'UnsubscribeLevel2', { OMSId: 1, InstrumentId });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(unsubscribeLevel2Completed(data))
}

function* _subscribeTicker({ InstrumentId, Interval, IncludeLastCount }) {
    yield put(subscribeTickerInProgress())
    const response = yield call(exchangeService.sendData, 'SubscribeTicker', { OMSId: 1, InstrumentId, Interval, IncludeLastCount });
    const data = {
        Data: response,
        Code: 1,
        Message: ``
    }
    yield put(subscribeTickerCompleted(data))
}

function* _unsubscribeTicker({ InstrumentId }) {
    // const response =
    yield call(exchangeService.sendData, 'UnsubscribeTicker', { OMSId: 1, InstrumentId });
    // const data = {
    //     Data: response,
    //     Code: 1,
    //     Message: ``
    // }
}


export default function* APSubscriptions() {
    while (true) {
        const { type, payload } = yield take([
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TRADES,
            AP_SUBSCRIPTIONS_ACTION_TYPES.TRADE_DATA_UPDATE_EVENT,
            AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TRADES,
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1,
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1_UPDATE_EVENT,
            AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL1,
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2,
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_UPDATE_EVENT,
            AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL2,
            AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TICKER,
            AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TICKER,
        ])

        switch (type) {
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TRADES: {
                yield fork(_subscribeTrades, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.TRADE_DATA_UPDATE_EVENT: {
                yield fork(_tradeDataUpdateEvent, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TRADES: {
                yield fork(_unsubscribeTrades, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1: {
                yield fork(_subscribeLvl1, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1_UPDATE_EVENT: {
                yield fork(_subscribeLvl1UpdateEvent, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL1: {
                yield fork(_unsubscribeLvl1, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2: {
                yield fork(_subscribeLvl2, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_UPDATE_EVENT: {
                yield fork(_subscribeLvl2UpdateEvent, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL2: {
                yield fork(_unsubscribeLvl2, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TICKER: {
                yield fork(_subscribeTicker, payload)
                break
            }
            case AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TICKER: {
                yield fork(_unsubscribeTicker, payload)
                break
            }
            default:
        }
    }
}