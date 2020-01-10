// import { take, fork, call, put } from 'redux-saga/effects'

// import { exchangeService } from './../App'

// import { wsConnect,  } from './../actions/ws-connection-actions'
// import WS_CONNECTION_ACTION_TYPES from './../actions/ws-connection-action-types'

// function* _getInstruments() {
//     yield put(getInstrumentsInProgress())
//     console.log(exchangeService, 'exchangeService')
//     const response = yield call(exchangeService.onSend, 'GetInstruments', { OMSId: 1 });
//     const data = {
//         Data: response
//     }

//     yield put(getInstrumentsCompleted(data))
// }

// export default function* instruments() {
//     while (true) {
//         const { type } = yield take([
//             INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS
//         ])

//         switch (type) {
//             case INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS: {
//                 yield fork(_getInstruments)
//                 break
//             }
//             default:
//         }
//     }
// }