import { createSelector } from 'reselect'

const APSubscriptionsSelector = ({ APSubscriptions }) => APSubscriptions

export const Level1DataSelector = createSelector(
    APSubscriptionsSelector,
    (OrderBookDataEntity) => {
        return {
            ...OrderBookDataEntity.SubscribeLevel1
        }
    }
)
export const Level1HistorySelector = createSelector(
    Level1DataSelector,
    (Level1DataEntity) => {
        return {
            ...Level1DataEntity.History
        }
    }
)

export default APSubscriptionsSelector