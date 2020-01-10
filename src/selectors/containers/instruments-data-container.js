import { createSelector } from 'reselect';

import {
	InstrumentsDataSelector,
	SelectedInstrumentDataSelector,
	AllowedInstruments
} from './../entities/instruments-data-selector';

export const InstrumentsData = createSelector(
	[ InstrumentsDataSelector, AllowedInstruments ],
	(InstrumentsDataEntity, AllowedInstrumentsEntity) => {
		if (InstrumentsDataEntity.Completed) {
			const Data = InstrumentsDataEntity.Data.filter((obj) => {
				return AllowedInstrumentsEntity.includes(obj.InstrumentId);
			});
			return {
				Completed: true,
				Data: Data
			};
		}
		return {
			Completed: false,
			Data: []
		};
	}
);

export const SelectedInstrumentData = createSelector(
	[ SelectedInstrumentDataSelector ],
	(SelectedInstrumentDataEntity) => {
		return SelectedInstrumentDataEntity;
	}
);

// export const TickerDataBasic = createSelector(
//     [
//         Level1DataSelector
//     ], (
//         Level1DataEntity
//     ) => {
//         return Level1DataEntity
//     }
// )
