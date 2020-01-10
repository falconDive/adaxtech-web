import INSTRUMENTS_ACTION_TYPES from './instruments-action-types'

export const getInstruments = () => {
    return {
        type: INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS,
        payload: null
    }
}
export const getInstrumentsInProgress = () => {
    return {
        type: INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS_INPROGRESS,
        payload: null
    }
}
export const getInstrumentsCompleted = (payload) => {
    return {
        type: INSTRUMENTS_ACTION_TYPES.GET_INSTRUMENTS_COMPLETED,
        payload: payload
    }
}

export const selectInstrument = ({ InstrumentId, lastSelectedInstrumentId }) => {
    return {
        type: INSTRUMENTS_ACTION_TYPES.SELECT_INSTRUMENT,
        payload: { InstrumentId, lastSelectedInstrumentId }
    }
}
export const selectInstrumentCompleted = ({ InstrumentId }) => {
    return {
        type: INSTRUMENTS_ACTION_TYPES.SELECT_INSTRUMENT_COMPLETED,
        payload: { InstrumentId }
    }
}