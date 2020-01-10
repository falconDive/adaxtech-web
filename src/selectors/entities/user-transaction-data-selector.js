import { createSelector } from 'reselect'

const UserTransactionsSelector = ({ UserTransactions }) => UserTransactions

export const OpenOrdersSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.OpenOrders
        }
    }
)

export const AccountTransactionsSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.AccountTransactions
        }
    }
)

export const AccountTradesSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.AccountTrades
        }
    }
)

export const OrderHistorySelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.OrderHistory
        }
    }
)

export const WithdrawTicketsSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.WithdrawTickets
        }
    }
)

export const DepositTicketsSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.DepositTickets
        }
    }
)

export const DepositInfoSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.DepositInfo
        }
    }
)

export const WithdrawTransactionSelector = createSelector(
    UserTransactionsSelector,
    (UserTransactionsEntity) => {
        return {
            ...UserTransactionsEntity.WithdrawTransaction
        }
    }
)







