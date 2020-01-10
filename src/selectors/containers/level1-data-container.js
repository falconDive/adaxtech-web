import { createSelector } from 'reselect'

import { Level1DataSelector } from './../entities/level1-data-selector'

export const SelectedInstrumentData = createSelector(
    [
        Level1DataSelector
    ],
    (
        Level1DataEntity
    ) => {

    }
)

// Instruments
// Selected
// InstrumentId

export const TickerDataBasic = createSelector(
    [
        Level1DataSelector
    ], (
        Level1DataEntity
    ) => {
        return Level1DataEntity
    }
)