
import { take, fork, call, put } from 'redux-saga/effects' // eslint-disable-line
import { exchangeService } from './../App'
import ACTION_TYPES from './../actions/exchange-action-types'
import {
    getOrderFeeInProgress,
    getOrderFeeCompleted,

    sendOrderInProgress,
    sendOrderCompleted,
} from './../actions/exchange-actions'
import { SendOrderRes } from './../services/NotificationServices'
import { formatResponse } from './../helpers'

// import axios from 'axios'

function* _getOrderFee(payload) {
    yield put(getOrderFeeInProgress())
    const response = yield call(exchangeService.sendData, 'GetOrderFee', { OMSId: 1, ...payload })
    const { responseData, Code } = formatResponse(response)
    yield put(getOrderFeeCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))

    // yield put(getOrderFeeCompleted({
    //     Data,
    //     Code: 1,
    //     Message: `Successfully fetched data`
    // }))
}

function* _sendOrder(payload) {
    yield put(sendOrderInProgress())
    const response = yield call(exchangeService.sendData, 'SendOrder', { ...payload })
    SendOrderRes.onNext(response)
    const { responseData, Code } = formatResponse(response)
    yield put(getOrderFeeCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))

    // yield put(sendOrderCompleted({
    //     Data,
    //     Code: 1,
    //     Message: `Successfully fetched data`
    // }))
}




export default function* Exchange() {
    while (true) {
        const { type, payload } = yield take([
            ACTION_TYPES.GET_ORDER_FEE,
            ACTION_TYPES.SEND_ORDER,
        ])

        switch (type) {
            case ACTION_TYPES.GET_ORDER_FEE:
                yield fork(_getOrderFee, payload)
                break
            case ACTION_TYPES.SEND_ORDER:
                yield fork(_sendOrder, payload)
                break
            default:
        }
    }
}