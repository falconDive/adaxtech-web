import WS_CONNECTION_ACTION_TYPES from './ws-connection-action-types'

export const wsConnect = () => {
    return {
        type: WS_CONNECTION_ACTION_TYPES.WS_CONNECTION_CONNECT,
        payload: null
    }
}

export const wsConnecting = () => {
    return {
        type: WS_CONNECTION_ACTION_TYPES.WS_CONNECTION_CONNECTING,
        payload: null
    }
}

export const wsConnected = (connected) => {
    return {
        type: WS_CONNECTION_ACTION_TYPES.WS_CONNECTION_CONNECTED,
        payload: { connected }
    }
}

export const wsDisconnected = (connected) => {
    return {
        type: WS_CONNECTION_ACTION_TYPES.WS_CONNECTION_DISCONNECTED,
        payload: { connected }
    }
}