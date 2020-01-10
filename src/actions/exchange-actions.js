import ACTION_TYPES from './exchange-action-types'

export const getOrderFee = (payload) => {
    return {
        type: ACTION_TYPES.GET_ORDER_FEE,
        payload
    }
}
export const getOrderFeeInProgress = () => {
    return {
        type: ACTION_TYPES.GET_ORDER_FEE_INPROGRESS,
        payload: null
    }
}
export const getOrderFeeCompleted = (payload) => {
    return {
        type: ACTION_TYPES.GET_ORDER_FEE_COMPLETED,
        payload: payload
    }
}

export const sendOrder = (payload) => {
    return {
        type: ACTION_TYPES.SEND_ORDER,
        payload
    }
}
export const sendOrderInProgress = () => {
    return {
        type: ACTION_TYPES.SEND_ORDER_INPROGRESS,
        payload: null
    }
}
export const sendOrderCompleted = (payload) => {
    return {
        type: ACTION_TYPES.SEND_ORDER_COMPLETED,
        payload: payload
    }
}
