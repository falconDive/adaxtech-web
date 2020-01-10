import ACTION_TYPES from './../actions/exchange-action-types'

const initialState = {
    OrderFee: {
        Data: {},
        Response: {
            Code: 0,
            Message: ``
        },
        Loading: false,
        Completed: false,
    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.GET_ORDER_FEE_INPROGRESS: {
            return {
                ...state,
                OrderFee: {
                    ...state.OrderFee,
                    Loading: true,
                    Completed: false
                }
            }
        }
        case ACTION_TYPES.GET_ORDER_FEE_COMPLETED: {
            return {
                ...state,
                OrderFee: {
                    ...state.OrderFee,
                    Data: payload.Data,
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        default:
            return state
    }
}
