import { take, fork, call, put } from 'redux-saga/effects'

import { exchangeService } from './../App'

import { getProductsInProgress, getProductsCompleted } from './../actions/products-actions'
import ACTION_TYPES from './../actions/products-action-types'

function* _getProducts() {
    yield put(getProductsInProgress())
    const response = yield call(exchangeService.sendData, 'GetProducts', { OMSId: 1 });
    const data = {
        Data: response
    }

    yield put(getProductsCompleted(data))
}

export default function* instruments() {
    while (true) {
        const { type } = yield take([
            ACTION_TYPES.GET_PRODUCTS
        ])

        switch (type) {
            case ACTION_TYPES.GET_PRODUCTS: {
                yield fork(_getProducts)
                break
            }
            default:
        }
    }
}