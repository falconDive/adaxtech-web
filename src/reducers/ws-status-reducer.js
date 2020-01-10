import WSCONNECTION_ACTION_TYPES from './../actions/ws-connection-action-types'



const initialState = {
    connected: 0,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case WSCONNECTION_ACTION_TYPES.WS_CONNECTION_CONNECTING: {
            console.log(`connecting`)
            return {
                connected: 1,
            }
        }
        case WSCONNECTION_ACTION_TYPES.WS_CONNECTION_CONNECTED: {
            console.log(`connected`)
            return {
                connected: 2,
            }
        }
        case WSCONNECTION_ACTION_TYPES.WS_CONNECTION_DISCONNECTED: {
            console.log(`disconnected`)
            return {
                connected: 0,
            }
        }
        default:
            return state
    }
}
