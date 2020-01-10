import ACTION_TYPES from './layout-action-types'

export const openSideBar = () => {
    return {
        type: ACTION_TYPES.SIDEBAR_OPEN,
        payload: { Open: true }
    }
}

export const closeSideBar = () => {
    return {
        type: ACTION_TYPES.SIDEBAR_CLOSE,
        payload: { Open: false }
    }
}
export const toggleSideBar = () => {
    return {
        type: ACTION_TYPES.TOGGLE_SIDEBAR,
        payload: null
    }
}
export const toggleBlockpassModal = () => {
    return {
        type: ACTION_TYPES.TOGGLE_BLOCKPASS_MODAL
    }
}

