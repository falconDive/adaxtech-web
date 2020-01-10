import ACTION_TYPES from './../actions/products-action-types'

const initialState = {
    Fetch: {
        Data: [],
        Loading: false,
        Completed: false,
    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.GET_PRODUCTS_INPROGRESS: {
            return {
                ...state,
                Fetch: {
                    ...state.Fetch,
                    Loading: true,
                    Completed: false
                }
            }
        }
        case ACTION_TYPES.GET_PRODUCTS_COMPLETED: {
            return {
                ...state,
                Fetch: {
                    ...state.Fetch,
                    Data: payload.Data,
                    Loading: false,
                    Completed: true
                }
            }
        }
        default:
            return state
    }
}
