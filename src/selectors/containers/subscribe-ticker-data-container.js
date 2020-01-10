import { createSelector } from 'reselect';
import { SubscribeTickerSelector } from './../entities/subscribe-ticker-data';

export const SubscribeTickerData = createSelector([ SubscribeTickerSelector ], (SubscribeTickerEntity) => {
	if (SubscribeTickerEntity.Completed) {
		const data = SubscribeTickerEntity.Data.map(parseData).sort((a, b) => {
			if (a.date > b.date) return 1;
			if (a.date > b.date) return -1;
			return 0;
		});
		return {
			Data: data,
			Completed: true
		};
	}
	return {
		Data: [],
		Completed: false
	};
});

function parseData(obj) {
	const dt = new Date(+obj[0]);
	return {
		date: dt,
		high: +obj[1],
		low: +obj[2],
		open: +obj[3],
		close: +obj[4],
		volume: +obj[5]
	};
}
