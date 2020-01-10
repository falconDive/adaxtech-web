import { createSelector } from 'reselect'
import { UserConfigSelector, UserInfoSelector, AccountInfoSelector } from './../entities/user-data-selector'

export const UserConfigData = createSelector(
    [
        UserConfigSelector,
        UserInfoSelector,
        AccountInfoSelector
    ],
    (
        UserConfigEntity,
        UserInfoEntity,
        AccountInfoEntity
    ) => {
        if (UserConfigEntity.Completed && UserInfoEntity.Completed && AccountInfoEntity.Completed) {

            let data = {}
            UserConfigEntity.Data.forEach((obj, key) => {
                data[obj.Key] = obj.Value

            })
            data[`Email`] = UserInfoEntity.Data.Email
            data[`VerificationLevel`] = AccountInfoEntity.Data.VerificationLevel

            return {
                Data: data,
                Completed: true
            }
        }
        return {
            Data: {},
            Completed: false
        }
    }
)