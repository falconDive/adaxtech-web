import { createSelector } from 'reselect';

const APSubscriptionsSelector = ({ APSubscriptions }) => APSubscriptions;

export const OrderBookDataSelector = createSelector(APSubscriptionsSelector, (OrderBookDataEntity) => {
	return {
		...OrderBookDataEntity.SubscribeLevel2
	};
});

export default APSubscriptionsSelector;
