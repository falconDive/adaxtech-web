import { take, fork, call, put, all } from 'redux-saga/effects';

import { exchangeService } from './../App';

import {
	getInstrumentsCompleted,
	getInstrumentsInProgress,
	selectInstrumentCompleted
} from './../actions/instruments-actions';
import {
	subscribeTrades,
	subscribeLevel1,
	subscribeLevel2,
	unsubscribeLevel2,
	unsubscribeTrades,
	unsubscribeTicker,
	subscribeTicker
} from './../actions/AP-subscriptions-actions';

import INSTRUMENTS_ACTION_TYPES from './../actions/instruments-action-types';
import { PAIRSID } from './../helpers/config';

function* _getInstruments() {
	yield put(getInstrumentsInProgress());
	const response = yield call(exchangeService.sendData, 'GetInstruments', { OMSId: 1 });

	// use below for STAGING
	//const excludedInstruments = [5, 8, 11, 12, 23, 28, 27, 29, 30, 31, 32, 33]
	// const allowedInstruments = [1, 2, 5, 6, 8, 011, 12, 17, 22, 23, 27, 34]

	// use below for PRODUCTION
	const excludedInstruments = [ 11, 12, 28, 29, 30, 31, 32, 33 ];
	const allowedInstruments = [ 3, 4, 5, 8, 9, 21, 22, 25 ];

	if (response.length) {
		yield all(
			response.map((elm) => {
				// if (!excludedInstruments.includes(elm.InstrumentId) && allowedInstruments.includes(elm.InstrumentId)) {
				// 	return put(subscribeLevel1({ InstrumentId: elm.InstrumentId }));
				// }
				if (PAIRSID.includes(elm.InstrumentId)) {
					return put(subscribeLevel1({ InstrumentId: elm.InstrumentId }));
				}
				return false;
			})
		);
	}

	const data = {
		// Data: response.filter(i => allowedInstruments.includes(i.InstrumentId)) CAN BE USE FOR MORE ACCURATE
		Data: response
	};

	yield put(getInstrumentsCompleted(data));
}

function* _selectInstrument({ InstrumentId, lastSelectedInstrumentId }) {
	yield put(unsubscribeLevel2({ InstrumentId: lastSelectedInstrumentId }));
	yield put(unsubscribeTrades({ InstrumentId: lastSelectedInstrumentId }));
	yield put(unsubscribeTicker({ InstrumentId: lastSelectedInstrumentId }));

	yield put(subscribeTrades({ InstrumentId: InstrumentId }));
	// yield put(subscribeLevel1({ InstrumentId: InstrumentId }))
	yield put(subscribeLevel2({ InstrumentId: InstrumentId, Depth: 250 }));
	yield put(subscribeTicker({ InstrumentId: InstrumentId, Interval: 86400, IncludeLastCount: 5000 }));
	window.localStorage.setItem(`InstrumentId`, InstrumentId);
	yield put(selectInstrumentCompleted({ InstrumentId }));
}

export default function* instruments() {
	while (true) {
		const { type, payload } = yield take([
			INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS,
			INSTRUMENTS_ACTION_TYPES.SELECT_INSTRUMENT
		]);

		switch (type) {
			case INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS: {
				yield fork(_getInstruments);
				break;
			}
			case INSTRUMENTS_ACTION_TYPES.SELECT_INSTRUMENT: {
				yield fork(_selectInstrument, payload);
				break;
			}
			default:
		}
	}
}
