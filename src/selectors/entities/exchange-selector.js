import { createSelector } from 'reselect'

const ExchangeDataSelector = ({ Exchange }) => Exchange

export const OrderFeeDataSelector = createSelector(
    ExchangeDataSelector,
    (ExchangeDataSelector) => {
        return {
            ...ExchangeDataSelector.OrderFee
        }
    }
)