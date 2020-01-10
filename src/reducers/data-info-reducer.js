import DATA_INFO_ACTION_TYPES from './../actions/data-info-action-types'

const initialState = {
    Fetch: {
        Data: [],
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
        case DATA_INFO_ACTION_TYPES.GET_DATA_INFO_INPROGRESS: {
            return {
                ...state,
                Fetch: {
                    ...state.Fetch,
                    Loading: true,
                    Completed: false
                }
            }
        }
        case DATA_INFO_ACTION_TYPES.GET_DATA_INFO_COMPLETED: {
            return {
                ...state,
                Fetch: {
                    ...state.Fetch,
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
