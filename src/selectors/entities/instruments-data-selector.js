import { createSelector } from 'reselect';

import { PAIRSID } from './../../helpers/config';
const InstrumentsSelector = ({ Instruments }) => Instruments;

export const InstrumentsDataSelector = createSelector(InstrumentsSelector, (InstrumentsSelector) => {
	return {
		...InstrumentsSelector.Fetch
	};
});

export const SelectedInstrumentDataSelector = createSelector(InstrumentsSelector, (InstrumentsSelector) => {
	return {
		...InstrumentsSelector.Selected
	};
});

export const AllowedInstruments = createSelector(InstrumentsSelector, () => {
	//return [1, 2, 5, 6, 8, 11, 12, 17, 22, 23, 27]
	// return [25]
	return PAIRSID;
});

export default InstrumentsSelector;
