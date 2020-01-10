import AP_SUBSCRIPTIONS_ACTION_TYPES from './AP-subscriptions-action-types'


export const subscribeTrades = ({ InstrumentId }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TRADES,
        payload: { InstrumentId }
    }
}
export const subscribeTradesInProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TRADES_INPROGRESS,
        payload: null
    }
}
export const subscribeTradesCompleted = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TRADES_COMPLETED,
        payload: payload
    }
}
export const tradeDataUpdateEvent = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.TRADE_DATA_UPDATE_EVENT,
        payload: payload
    }
}
export const tradeDataUpdateEventCompleted = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.TRADE_DATA_UPDATE_EVENT_COMPLETED,
        payload: payload
    }
}




export const unsubscribeTrades = ({ InstrumentId }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TRADES,
        payload: { InstrumentId }
    }
}
export const unsubscribeTradesInProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TRADES_INPROGRESS,
        payload: null
    }
}
export const unsubscribeTradesCompleted = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TRADES_COMPLETED,
        payload: payload
    }
}


export const subscribeLevel1 = ({ InstrumentId }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1,
        payload: { InstrumentId }
    }
}
export const subscribeLevel1InProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1_INPROGRESS,
        payload: null
    }
}
export const subscribeLevel1Completed = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1_COMPLETED,
        payload: payload
    }
}
export const subscribeLevel1UpdateEvent = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL1_UPDATE_EVENT,
        payload: payload
    }
}


export const unsubscribeLevel1 = ({ InstrumentId }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL1,
        payload: { InstrumentId }
    }
}
export const unsubscribeLevel1InProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL1_INPROGRESS,
        payload: null
    }
}
export const unsubscribeLevel1Completed = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL1_COMPLETED,
        payload: payload
    }
}


export const subscribeLevel2 = ({ InstrumentId, Depth }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2,
        payload: { InstrumentId, Depth }
    }
}
export const subscribeLevel2InProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_INPROGRESS,
        payload: null
    }
}
export const subscribeLevel2Completed = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_COMPLETED,
        payload: payload
    }
}
export const subscribeLevel2UpdateEvent = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_UPDATE_EVENT,
        payload: payload
    }
}
export const subscribeLevel2UpdateEventCompleted = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_LEVEL2_UPDATE_EVENT_COMPLETED,
        payload: payload
    }
}


export const unsubscribeLevel2 = ({ InstrumentId }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL2,
        payload: { InstrumentId }
    }
}
export const unsubscribeLevel2InProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL2_INPROGRESS,
        payload: null
    }
}
export const unsubscribeLevel2Completed = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_LEVEL2_COMPLETED,
        payload: payload
    }
}


export const subscribeTicker = ({ InstrumentId, Interval, IncludeLastCount }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TICKER,
        payload: { InstrumentId, Interval, IncludeLastCount }
    }
}
export const subscribeTickerInProgress = () => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TICKER_INPROGRESS,
        payload: null
    }
}
export const subscribeTickerCompleted = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.SUBSCRIBE_TICKER_COMPLETED,
        payload: payload
    }
}
export const unsubscribeTicker = ({ InstrumentId, }) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.UNSUBSCRIBE_TICKER,
        payload: { InstrumentId, }
    }
}
export const tickerDataUpdateEvent = (data) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.TICKER_DATA_UPDATE_EVENT,
        payload: data
    }
}

export const accountPositionEvent = (payload) => {
    return {
        type: AP_SUBSCRIPTIONS_ACTION_TYPES.ACCOUNT_POSITION_EVENT,
        payload: { Data: payload }
    }
}