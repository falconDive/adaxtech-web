import { createSelector } from 'reselect'

const APSubscriptionsSelector = ({ APSubscriptions }) => APSubscriptions

export const SubscribeTickerSelector = createSelector(
    APSubscriptionsSelector,
    (APSubscriptionsEntity) => {
        return {
            ...APSubscriptionsEntity.SubscribeTicker
        }
    }
)