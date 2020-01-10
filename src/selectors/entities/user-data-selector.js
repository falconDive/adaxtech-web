import { createSelector } from 'reselect'

const UserDataSelector = ({ UserData }) => UserData

export const UserInfoSelector = createSelector(
    UserDataSelector,
    (UserDataEntity) => {
        return {
            ...UserDataEntity.UserInfo
        }
    }
)


export const AccountPositionsSelector = createSelector(
    UserDataSelector,
    (UserDataEntity) => {
        return {
            ...UserDataEntity.AccountPositions
        }
    }
)


export const UserConfigSelector = createSelector(
    UserDataSelector,
    (UserDataEntity) => {
        return {
            ...UserDataEntity.Config
        }
    }
)


export const AccountInfoSelector = createSelector(
    UserDataSelector,
    (UserDataEntity) => {
        return {
            ...UserDataEntity.AccountInfo
        }
    }
)

export const BlockpassSelector = createSelector(
    UserDataSelector,
    (UserDataEntity) => {
        return {
            ...UserDataEntity.Blockpass
        }
    }
)



