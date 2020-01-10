import PRODUCTS_ACTION_TYPES from './products-action-types'

export const getProducts = () => {
    return {
        type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS,
        payload: null
    }
}
export const getProductsInProgress = () => {
    return {
        type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_INPROGRESS,
        payload: null
    }
}
export const getProductsCompleted = (payload) => {
    return {
        type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_COMPLETED,
        payload: payload
    }
}