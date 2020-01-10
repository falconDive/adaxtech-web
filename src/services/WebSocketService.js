
let webSocket = {};
const WebSocketService = {
    new(url) {
        webSocket = new WebSocket(url);
        return webSocket;
    },
    send(string) {
        if (webSocket.url) {
            webSocket.send(string);
        }
    },
    close() {
        webSocket.close();
    },
    onopen(openFunction) {
        webSocket.onopen = (event) => {
            openFunction(event);
        };
    },
    onmessage(callback) {
        webSocket.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            let parsedObject = {};
            if (parsedData.o) {
                parsedObject = this.validateJSON(parsedData.o);
            }
            return callback(parsedObject, parsedData.n, parsedData.i, parsedData.m);
        };
    },
    onerror(errorFunction) {
        webSocket.onerror = (error) => {
            errorFunction(error);
        };
    },
    onclose(closeFunction) {
        webSocket.onclose = (close) => {
            closeFunction(close);
        };
    },
    validateJSON(returnedData) {
        try {
            return JSON.parse(returnedData);
        } catch (e) {
            return {};
        }
    },
    checkStatus() {
        const status = webSocket.readyState;
        let returnedStatus = 'ACTIVE';
        if (status === webSocket.CLOSED || status === webSocket.CLOSING) {
            returnedStatus = 'CLOSED';
        } else if (status === 0) {
            returnedStatus = 'CLOSE';
        }
        return returnedStatus;
    },
};

export default WebSocketService;