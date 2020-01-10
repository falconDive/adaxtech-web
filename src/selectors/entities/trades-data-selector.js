import { createSelector } from 'reselect'

const APSubscriptionsSelector = ({ APSubscriptions }) => APSubscriptions

export const TradeDataSelector = createSelector(
    APSubscriptionsSelector,
    (APSubscriptionsEntity) => {
        return {
            ...APSubscriptionsEntity.SubscribeTrades
        }
    }
)