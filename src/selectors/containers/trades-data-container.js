import { createSelector } from 'reselect'

import { TradeDataSelector } from './../entities/trades-data-selector'

import { formatTrades } from './../../helpers'

export const TradeData = createSelector(
    [
        TradeDataSelector
    ], (
        TradeDataEntity
    ) => {
        const tradeColors = [`#ffffff`, `#05FA96`, `#FF4200`]
        if (TradeDataEntity.Data.length) {
            const formattedData = formatTrades(TradeDataEntity.Data)
            const TradeDataSorted = formattedData.sort((a, b) => {
                if (a.TradeId < b.TradeId) return 1;
                if (a.TradeId > b.TradeId) return -1;
                return 0;
            })
            TradeDataEntity.Data = TradeDataSorted
        }
        return { ...TradeDataEntity, tradeColors }
    }
)