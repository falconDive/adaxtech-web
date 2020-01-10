import { fork, all } from 'redux-saga/effects'

import DatInfo from './data-info-saga'
import Instruments from './instruments-saga'
import Products from './products-saga'
import APSubscriptions from './ap-subscriptions-saga'
import UserCalls from './user-saga'
import UserTransactions from './user-transactions-saga'
import Exchange from './exchange-sagas'
// import wsStatus from './ws-status-saga'

export default function* sagas() {
    yield all([
        fork(DatInfo),
        fork(Instruments),
        fork(APSubscriptions),
        fork(Products),
        fork(UserCalls),
        fork(UserTransactions),
        fork(Exchange),
        // fork(wsStatus)
    ])
}