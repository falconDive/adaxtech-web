import USER_TRANSACTION_ACTION_TYPES from './user-transaction-action-types';

export const getAccountTransactions = ({ AccountId, StartIndex, Count }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS,
		payload: { AccountId, StartIndex, Count }
	};
};
export const getAccountTransactionsInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS_INPROGRESS,
		payload: null
	};
};
export const getAccountTransactionsCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS_COMPLETED,
		payload: payload
	};
};

export const getWithdrawTickets = ({ AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_WITHDRAW_TICKETS,
		payload: { AccountId }
	};
};
export const getWithdrawTicketsInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_WITHDRAW_TICKETS_INPROGRESS,
		payload: null
	};
};
export const getWithdrawTicketsCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_WITHDRAW_TICKETS_COMPLETED,
		payload: payload
	};
};
export const queryWithdrawTickets = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_WITHDRAW_TICKETS,
		payload: Query
	};
};
export const cancelWithdraw = ({ UserId, AccountId, RequestCode }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_WITHDRAW,
		payload: { UserId, AccountId, RequestCode }
	};
};
export const cancelWithdrawInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_WITHDRAW_INPROGRESS,
		payload: null
	};
};
export const cancelWithdrawCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_WITHDRAW_COMPLETED,
		payload: payload
	};
};

export const getDepositTickets = ({ AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_TICKETS,
		payload: { AccountId }
	};
};
export const getDepositTicketsInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_TICKETS_INPROGRESS,
		payload: null
	};
};
export const getDepositTicketsCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_TICKETS_COMPLETED,
		payload: payload
	};
};
export const queryDepositTickets = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_DEPOSIT_TICKETS,
		payload: Query
	};
};

export const getRequestTransfers = ({ PayerAccountId, Status }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFERS,
		payload: { PayerAccountId, Status }
	};
};
export const getRequestTransfersInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFERS_INPROGRESS,
		payload: null
	};
};
export const getRequestTransfersCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFERS_COMPLETED,
		payload: payload
	};
};

export const getRequestTransferRequestsReceived = ({ PayerAccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED,
		payload: { PayerAccountId }
	};
};
export const getRequestTransferRequestsReceivedInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED_INPROGRESS,
		payload: null
	};
};
export const getRequestTransferRequestsReceivedCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED_COMPLETED,
		payload: payload
	};
};

export const getRequestTransferRequestsRequested = ({ RequestorAccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED,
		payload: { RequestorAccountId }
	};
};
export const getRequestTransferRequestsRequestedInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED_INPROGRESS,
		payload: null
	};
};
export const getRequestTransferRequestsRequestedCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED_COMPLETED,
		payload: payload
	};
};

export const getTransfers = ({ AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS,
		payload: { AccountId }
	};
};
export const getTransfersInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_INPROGRESS,
		payload: null
	};
};
export const getTransfersCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_COMPLETED,
		payload: payload
	};
};

export const getTransfersReceived = ({ AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_RECEIVED,
		payload: { AccountId }
	};
};
export const getTransfersReceivedInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_RECEIVED_INPROGRESS,
		payload: null
	};
};
export const getTransfersReceivedCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_TRANSFERS_RECEIVED_COMPLETED,
		payload: payload
	};
};

export const getOpenOrders = ({ AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_OPEN_ORDERS,
		payload: { AccountId }
	};
};
export const getOpenOrdersInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_OPEN_ORDERS_INPROGRESS,
		payload: null
	};
};
export const getOpenOrdersCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_OPEN_ORDERS_COMPLETED,
		payload: payload
	};
};
export const queryOpenOrders = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_OPEN_ORDERS,
		payload: Query
	};
};
export const advanceQueryOpenOrders = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.ADVANCE_QUERY_OPEN_ORDERS,
		payload: Query
	};
};
export const clearQueryOpenOrders = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CLEAR_QUERY_OPEN_ORDERS,
		payload: null
	};
};

export const cancelOrder = ({ OrderId, AccountId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_ORDER,
		payload: { OrderId, AccountId }
	};
};
export const cancelOrderInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_ORDER_INPROGRESS,
		payload: null
	};
};
export const cancelOrderCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CANCEL_ORDER_COMPLETED,
		payload: payload
	};
};

export const getOrderHistory = ({ AccountId, Depth }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ORDER_HISTORY,
		payload: { AccountId, Depth }
	};
};
export const getOrderHistoryInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ORDER_HISTORY_INPROGRESS,
		payload: null
	};
};
export const getOrderHistoryCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ORDER_HISTORY_COMPLETED,
		payload: payload
	};
};
export const queryOrderHistory = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_ORDER_HISTORY,
		payload: Query
	};
};
export const queryInactiveOrderHistory = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_INACTIVE_GET_ORDER_HISTORY,
		payload: Query
	};
};
export const advanceQueryOrderHistory = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.ADVANCE_QUERY_ORDER_HISTORY,
		payload: Query
	};
};
export const clearQueryOrderHistory = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CLEAR_QUERY_ORDER_HISTORY,
		payload: null
	};
};

export const getAccountTrades = ({ AccountId, StartIndex, Count }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRADES,
		payload: { AccountId, StartIndex, Count }
	};
};
export const getAccountTradesInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRADES_INPROGRESS,
		payload: null
	};
};
export const getAccountTradesCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_ACCOUNT_TRADES_COMPLETED,
		payload: payload
	};
};
export const queryAccountTrades = (Query) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.QUERY_ACCOUNT_TRADES,
		payload: Query
	};
};

export const orderStateEvent = (data) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.ORDER_STATE_EVENT,
		payload: data
	};
};

export const orderTradeEvent = (data) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.ORDER_TRADE_EVENT,
		payload: data
	};
};

export const getDepositInfo = ({ AccountId, ProductId, GenerateNewKey = false }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_INFO,
		payload: { AccountId, ProductId, GenerateNewKey }
	};
};
export const getDepositInfoInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_INFO_INPROGRESS,
		payload: null
	};
};
export const getDepositInfoCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.GET_DEPOSIT_INFO_COMPLETED,
		payload: payload
	};
};
export const clearDepositInfo = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.CLEAR_DEPOSIT_INFO
		// payload: { AccountId, ProductId, GenerateNewKey }
	};
};

export const withdrawAsset = ({ accountId, productId, amount, templateForm, templateType }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.WITHDRAW_ASSET,
		payload: { accountId, productId, amount, templateForm, templateType }
	};
};
export const withdrawAssetInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.WITHDRAW_ASSET_INPROGRESS,
		payload: null
	};
};
export const withdrawAssetCompleted = (payload) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.WITHDRAW_ASSET_COMPLETED,
		payload: payload
	};
};
export const resetWithdrawAsset = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.RESET_WITHDRAW_ASSET,
		payload: null
	};
};

export const selectWithdrawAsset = ({ AccountId, ProductId }) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.SELECT_WITHDRAW_ASSET,
		payload: { AccountId, ProductId }
	};
};

export const selectWithdrawAssetInProgress = () => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.SELECT_WITHDRAW_ASSET_INPROGRESS
	};
};

export const selectWithdrawAssetCompleted = (data) => {
	return {
		type: USER_TRANSACTION_ACTION_TYPES.SELECT_WITHDRAW_ASSET_COMPLETED,
		payload: data
	};
};




export const getSendFundFee = ({ AccountId, ProductId, Amount, }) => {
    return {
        type:'GET_SEND_FUND_FEE',
        payload: { AccountId, ProductId, Amount, }
    }
}
export const getSendFundFeeOnProgress = () => {
    return {
        type: USER_TRANSACTION_ACTION_TYPES.GET_SEND_FUND_FEE_IN_PROGRESS
    }
}
export const getSendFundFeeComplete = (payload) => {
    return {
        type: USER_TRANSACTION_ACTION_TYPES.GET_SEND_FUND_FEE_COMPLETE,
        payload: payload
    }
}