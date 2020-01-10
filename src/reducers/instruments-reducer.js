import INSTRUMENTS_ACTION_TYPES from './../actions/instruments-action-types';

const initialState = {
	Fetch: {
		Data: [],
		Loading: false,
		Completed: false
	},
	Selected: {
		InstrumentId: +window.localStorage.getItem(`InstrumentId`) || 3
		// InstrumentId: 3 // NOTE: For testing purposes only
	}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS_INPROGRESS: {
			return {
				...state,
				Fetch: {
					...state.Fetch,
					Loading: true,
					Completed: false
				}
			};
		}
		case INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS_COMPLETED: {
			return {
				...state,
				Fetch: {
					...state.Fetch,
					Data: payload.Data,
					Loading: false,
					Completed: true
				}
			};
		}
		case INSTRUMENTS_ACTION_TYPES.SELECT_INSTRUMENT_COMPLETED: {
			return {
				...state,
				Selected: {
					InstrumentId: payload.InstrumentId
				}
			};
		}
		default:
			return state;
	}
};
