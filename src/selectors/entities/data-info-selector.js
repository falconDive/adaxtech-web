import { createSelector } from 'reselect'

const DataInfoSelector = ({ DataInfo }) => DataInfo

export const FetchDataInfoSelector = createSelector(
    DataInfoSelector,
    (DataInfoEntity) => {
        return {
            ...DataInfoEntity.Fetch
        }
    }
)

export default DataInfoSelector