import ACTION_TYPES from './../actions/layout-action-types'

const initialState = {
    SideBar: { Open: false },
    BlockpassModal: { Open: false }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SIDEBAR_OPEN: {
            return {
                ...state,
                SideBar: { Open: payload.Open }
            }
        }
        case ACTION_TYPES.SIDEBAR_CLOSE: {
            return {
                ...state,
                SideBar: { Open: payload.Open }
            }
        }
        case ACTION_TYPES.TOGGLE_SIDEBAR: {
            return {
                ...state,
                SideBar: {
                    Open : !state.SideBar.Open
                }
            }
        }
        case ACTION_TYPES.TOGGLE_BLOCKPASS_MODAL: {
            return {
                ...state,
                BlockpassModal: {
                    Open : !state.BlockpassModal.Open
                }
            }
        }
        case ACTION_TYPES.TOGGLE_BLOCKPASS_MODAL: {
            return {
                ...state,
                BlockpassModal: {
                    Open : !state.BlockpassModal.Open
                }
            }
        }
        default:
            return state
    }
}
