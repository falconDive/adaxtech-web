import { take, fork, call, put } from 'redux-saga/effects'
import { exchangeService } from './../App'

import USER_TRANSACTION_ACTION_TYPES from './../actions/user-transaction-action-types'
import {
    getAccountTransactionsInProgress,
    getAccountTransactionsCompleted,

    getWithdrawTicketsInProgress,
    getWithdrawTicketsCompleted,

    getDepositTicketsInProgress,
    getDepositTicketsCompleted,

    getRequestTransfersInProgress,
    getRequestTransfersCompleted,

    getRequestTransferRequestsReceivedInProgress,
    getRequestTransferRequestsReceivedCompleted,

    getRequestTransferRequestsRequestedInProgress,
    getRequestTransferRequestsRequestedCompleted,

    getTransfersInProgress,
    getTransfersCompleted,

    getTransfersReceivedInProgress,
    getTransfersReceivedCompleted,

    getOpenOrdersInProgress,
    getOpenOrdersCompleted,

    getOrderHistoryInProgress,
    getOrderHistoryCompleted,

    getAccountTradesInProgress,
    getAccountTradesCompleted,

    cancelOrderInProgress,
    cancelOrderCompleted,

    cancelWithdrawInProgress,
    cancelWithdrawCompleted,


    getDepositInfoInProgress,
    getDepositInfoCompleted,


    withdrawAssetInProgress,
    withdrawAssetCompleted,

    selectWithdrawAssetInProgress,
    selectWithdrawAssetCompleted,
    getWithdrawTickets,

    getSendFundFeeOnProgress,
    getSendFundFeeComplete
} from './../actions/user-transaction-actions'
import { WithdrawNotification } from './../services/NotificationServices'
import { formatResponse } from './../helpers'

function* _getAccountTransactions({ AccountId, StartIndex, Count }) {
    yield put(getAccountTransactionsInProgress())
    const response = yield call(exchangeService.sendData, 'GetAccountTransactions', { AccountId, StartIndex, Count, OMSId: 1 })

    const { responseData, Code } = formatResponse(response)
    yield put(getAccountTransactionsCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getWithdrawTickets({ AccountId, }) {
    yield put(getWithdrawTicketsInProgress())
    const response = yield call(exchangeService.sendData, 'GetWithdrawTickets', { AccountId, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getWithdrawTicketsCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getDepositTickets({ AccountId, }) {
    yield put(getDepositTicketsInProgress())
    const response = yield call(exchangeService.sendData, 'GetDepositTickets', { AccountId, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getDepositTicketsCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getRequestTransfers({ PayerAccountId, Status }) {
    yield put(getRequestTransfersInProgress())
    const response = yield call(exchangeService.sendData, 'GetRequestTransfers', { PayerAccountId, Status, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getRequestTransfersCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getRequestTransferRequestsReceived({ PayerAccountId }) {
    yield put(getRequestTransferRequestsReceivedInProgress())
    const response = yield call(exchangeService.sendData, 'GetRequestTransferRequestsReceived', { PayerAccountId, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getRequestTransferRequestsReceivedCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getRequestTransferRequestsRequested({ RequestorAccountId }) {
    yield put(getRequestTransferRequestsRequestedInProgress())
    const response = yield call(exchangeService.sendData, 'GetRequestTransferRequestsRequested', { RequestorAccountId, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getRequestTransferRequestsRequestedCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getTransfers({ AccountId }) {
    yield put(getTransfersInProgress())
    const response = yield call(exchangeService.sendData, 'GetTransfers', { AccountId, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getTransfersCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getTransfersReceived({ AccountId }) {
    yield put(getTransfersReceivedInProgress())
    const response = yield call(exchangeService.sendData, 'GetTransfersReceived', { AccountId, OMSId: 1, OperatorId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getTransfersReceivedCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getOpenOrders({ AccountId }) {
    yield put(getOpenOrdersInProgress())
    const response = yield call(exchangeService.sendData, 'GetOpenOrders', { AccountId, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getOpenOrdersCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _cancelOrder({ OrderId, AccountId }) {
    yield put(cancelOrderInProgress())
    const response = yield call(exchangeService.sendData, 'CancelOrder', { AccountId, OrderId, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(cancelOrderCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getOrderHistory({ AccountId, Depth }) {
    yield put(getOrderHistoryInProgress())
    const response = yield call(exchangeService.sendData, 'GetOrdersHistory', { AccountId, Depth, OMSId: 1 })
    let listOrder = []
    const excludedInstruments = [28, 27, 29, 30, 31, 32, 33]
    response.map(elm => {
        if (!excludedInstruments.includes(elm.Instrument)) {
            listOrder.push(elm)
        }
        return false
    })
    
    const { responseData, Code } = formatResponse(response)
    
    yield put(getOrderHistoryCompleted({
        Data: listOrder,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getAccountTrades({ AccountId, StartIndex, Count }) {
    yield put(getAccountTradesInProgress())
    const response = yield call(exchangeService.sendData, 'GetAccountTrades', { AccountId, StartIndex, Count, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(getAccountTradesCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _cancelWithdraw({ UserId, AccountId, RequestCode }) {
    yield put(cancelWithdrawInProgress())
    const response = yield call(exchangeService.sendData, 'CancelWithdraw', { UserId, AccountId, RequestCode, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    yield put(cancelWithdrawCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _getDepositInfo({ AccountId, ProductId, GenerateNewKey }) {
    yield put(getDepositInfoInProgress())
    const response = yield call(exchangeService.sendData, 'GetDepositInfo', { AccountId, ProductId, GenerateNewKey, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    if (responseData.hasOwnProperty(`DepositInfo`)) {
        try {
            responseData.DepositInfo = JSON.parse(responseData.DepositInfo)
        } catch (error) {

        }
    }

    yield put(getDepositInfoCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}

function* _withdrawAsset({ accountId, productId, amount, templateForm, templateType, }) {
    yield put(withdrawAssetInProgress())
    const templateFormStr = JSON.stringify({Comment: '', ExternalAddress: templateForm.ExternalAddress})
    const response = yield call(exchangeService.sendData, 'CreateWithdrawTicket', { accountId, productId, amount, TemplateForm: templateFormStr, TemplateType: templateType.TemplateName, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    // if (responseData.hasOwnProperty(`DepositInfo`)) {
    //     try {
    //         responseData.DepositInfo = JSON.parse(responseData.DepositInfo)
    //     } catch (error) {

    //     }
    // }
    WithdrawNotification.onNext(response)
    yield put(getWithdrawTickets({ AccountId: accountId }))
    yield put(withdrawAssetCompleted({
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}


function* _selectWithdrawAsset({ AccountId, ProductId, }) {
    yield put(selectWithdrawAssetInProgress())
    const response = yield call(exchangeService.sendData, 'GetWithdrawTemplateTypes', { AccountId, ProductId, OMSId: 1 })
    const { responseData, Code } = formatResponse(response)
    // if (responseData.hasOwnProperty(`DepositInfo`)) {
    //     try {
    //         responseData.DepositInfo = JSON.parse(responseData.DepositInfo)
    //     } catch (error) {

    //     }
    // }

    yield put(selectWithdrawAssetCompleted({
        ProductId: ProductId,
        Data: responseData,
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}


function* _getSendFundFee({ AccountId, ProductId, Amount, }) {
    yield put(getSendFundFeeOnProgress())
    const response = yield call(exchangeService.sendData, 'GetWithdrawFee', { AccountId, ProductId, Amount, OMSId: 1 });
    const { responseData, Code } = formatResponse(response)
    yield put(getSendFundFeeComplete({ 
        Data: {...responseData, ProductId},
        Code: Code,
        Message: Code < 1 ? `Unable to fetch data.` : ``
    }))
}




export default function* UserTransactions() {
    while (true) {
        const { type, payload } = yield take([
            USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS,
            USER_TRANSACTION_ACTION_TYPES.GET_WITHDRAW_TICKETS,
            USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_TICKETS,
            USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFERS,
            USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED,
            USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED,
            USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS,
            USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_RECEIVED,
            USER_TRANSACTION_ACTION_TYPES.GET_OPEN_ORDERS,
            USER_TRANSACTION_ACTION_TYPES.GET_ORDER_HISTORY,
            USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRADES,
            USER_TRANSACTION_ACTION_TYPES.CANCEL_ORDER,
            USER_TRANSACTION_ACTION_TYPES.CANCEL_WITHDRAW,
            USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_INFO,
            USER_TRANSACTION_ACTION_TYPES.WITHDRAW_ASSET,
            USER_TRANSACTION_ACTION_TYPES.SELECT_WITHDRAW_ASSET,
            USER_TRANSACTION_ACTION_TYPES.GET_SEND_FUND_FEE,
        ])

        switch (type) {
            case USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS:
                yield fork(_getAccountTransactions, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_WITHDRAW_TICKETS:
                yield fork(_getWithdrawTickets, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_TICKETS:
                yield fork(_getDepositTickets, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFERS:
                yield fork(_getRequestTransfers, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED:
                yield fork(_getRequestTransferRequestsReceived, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED:
                yield fork(_getRequestTransferRequestsRequested, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS:
                yield fork(_getTransfers, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_RECEIVED:
                yield fork(_getTransfersReceived, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_OPEN_ORDERS:
                yield fork(_getOpenOrders, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_ORDER_HISTORY:
                yield fork(_getOrderHistory, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRADES:
                yield fork(_getAccountTrades, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.CANCEL_ORDER:
                yield fork(_cancelOrder, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.CANCEL_WITHDRAW:
                yield fork(_cancelWithdraw, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_INFO:
                yield fork(_getDepositInfo, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.WITHDRAW_ASSET:
                yield fork(_withdrawAsset, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.SELECT_WITHDRAW_ASSET:
                yield fork(_selectWithdrawAsset, payload)
                break
            case USER_TRANSACTION_ACTION_TYPES.GET_SEND_FUND_FEE:
                yield fork(_getSendFundFee, payload)
                break
            default:
        }
    }
}
