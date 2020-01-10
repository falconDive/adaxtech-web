import DATA_INFO_ACTION_TYPES from './data-info-action-types'

export const getDataInfo = () => {
    return {
        type: DATA_INFO_ACTION_TYPES.GET_DATA_INFO,
        payload: null
    }
}
export const getDataInfoInProgress = () => {
    return {
        type: DATA_INFO_ACTION_TYPES.GET_DATA_INFO_INPROGRESS,
        payload: null
    }
}
export const getDataInfoCompleted = (payload) => {
    return {
        type: DATA_INFO_ACTION_TYPES.GET_DATA_INFO_COMPLETED,
        payload: payload
    }
}