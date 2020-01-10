import { createSelector } from 'reselect'

import { FetchDataInfoSelector, AccountPositionsSelector } from './../entities/data-info-selector'

export const FetchDataInfo = createSelector(
    [
        FetchDataInfoSelector
    ], (
        FetchDataInfoEntity
    ) => {
        return FetchDataInfoEntity
    }
)

export const AccountPositions = createSelector(
    [
        AccountPositionsSelector
    ], (
        AccountPositionsEntity
    ) => {
        return AccountPositionsEntity
    }
)
