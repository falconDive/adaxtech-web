import ACTION_TYPES from './../actions/user-transaction-action-types';
import { remove } from 'lodash';
const initialState = {
	AccountTransactions: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	WithdrawTickets: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		Loading: false,
		Completed: false
	},
	DepositTickets: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		Loading: false,
		Completed: false
	},
	RequestTransfers: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	RequestTransferRequestsReceived: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	RequestTransferRequestsRequested: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	GetTransfers: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	TransfersReceived: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	OpenOrders: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		AdvanceQuery: {
			filter: {
				InstrumentId: 0,
				Side: ``,
				Type: ``
			}
		},
		Loading: false,
		Completed: false
	},
	OrderHistory: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		QueryInactive: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		AdvanceQuery: {
			filter: {
				InstrumentId: 0,
				Side: ``,
				Type: ``,
				Status: ``
			}
		},
		Loading: false,
		Completed: false
	},
	AccountTrades: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		Loading: false,
		Completed: false
	},
	DepositInfo: {
		Data: null,
		Response: {
			Code: 0,
			Message: ``
		},
		Query: {
			filter: ``,
			filterBy: ``,
			sort: ``,
			sortBy: ``,
			page: 0
		},
		Loading: false,
		Completed: false
	},
	WithdrawTransaction: {
		Response: {
			Code: 0,
			Message: ``
		},
		Data: {},
		TemplateTypes: null,
		SelectedAssetId: 8,
		Loading: false,
		Completed: false
	},
	WithdrawFee: {
		Response: {
			Code: 0,
			Message: ``
		},
		Data: {
			FeeAmount: 0,
			SelectedAssetId: 0,
		},
		Loading: false,
		Completed: false
	}
};
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS_INPROGRESS: {
			return {
				...state,
				AccountTransactions: {
					...state.AccountTransactions,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_ACCOUNT_TRANSACTIONS_COMPLETED: {
			return {
				...state,
				AccountTransactions: {
					...state.AccountTransactions,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_WITHDRAW_TICKETS_INPROGRESS: {
			return {
				...state,
				WithdrawTickets: {
					...state.WithdrawTickets,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_WITHDRAW_TICKETS_COMPLETED: {
			return {
				...state,
				WithdrawTickets: {
					...state.WithdrawTickets,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_WITHDRAW_TICKETS: {
			return {
				...state,
				WithdrawTickets: {
					...state.WithdrawTickets,
					Query: payload,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.CANCEL_WITHDRAW_COMPLETED: {
			const newResponse = {};
			const Data = state.WithdrawTickets.Data;
			if (payload.Data.result) {
				newResponse.Code = 1;
				newResponse.Message = ``;
				remove(Data, (n) => {
					return n.RequestCode === payload.Data.detail;
				});
			} else {
				newResponse.Code = -1;
				newResponse.Message = payload.Data.errormsg;
			}

			return {
				...state,
				WithdrawTickets: {
					...state.WithdrawTickets,
					Data,
					Response: newResponse,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_DEPOSIT_TICKETS_INPROGRESS: {
			return {
				...state,
				DepositTickets: {
					...state.DepositTickets,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_DEPOSIT_TICKETS_COMPLETED: {
			return {
				...state,
				DepositTickets: {
					...state.DepositTickets,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFERS_INPROGRESS: {
			return {
				...state,
				RequestTransfers: {
					...state.RequestTransfers,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFERS_COMPLETED: {
			return {
				...state,
				RequestTransfers: {
					...state.RequestTransfers,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED_INPROGRESS: {
			return {
				...state,
				RequestTransferRequestsReceived: {
					...state.RequestTransferRequestsReceived,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_RECEIVED_COMPLETED: {
			return {
				...state,
				RequestTransferRequestsReceived: {
					...state.RequestTransferRequestsReceived,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED_INPROGRESS: {
			return {
				...state,
				RequestTransferRequestsRequested: {
					...state.RequestTransferRequestsRequested,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_REQUEST_TRANSFER_REQUESTS_REQUESTED_COMPLETED: {
			return {
				...state,
				RequestTransferRequestsRequested: {
					...state.RequestTransferRequestsRequested,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_TRANSFERS_INPROGRESS: {
			return {
				...state,
				GetTransfers: {
					...state.GetTransfers,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_TRANSFERS_COMPLETED: {
			return {
				...state,
				GetTransfers: {
					...state.GetTransfers,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_TRANSFERS_RECEIVED_INPROGRESS: {
			return {
				...state,
				TransfersReceived: {
					...state.TransfersReceived,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_TRANSFERS_RECEIVED_COMPLETED: {
			return {
				...state,
				TransfersReceived: {
					...state.TransfersReceived,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_OPEN_ORDERS_INPROGRESS: {
			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_OPEN_ORDERS_COMPLETED: {
			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_OPEN_ORDERS: {
			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					Query: payload,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.ADVANCE_QUERY_OPEN_ORDERS: {
			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					AdvanceQuery: payload,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.CLEAR_QUERY_OPEN_ORDERS: {
			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					},
					AdvanceQuery: {
						filter: {
							InstrumentId: 0,
							Side: ``,
							Type: ``
						}
					}
				}
			};
		}
		case ACTION_TYPES.ORDER_STATE_EVENT: {
			let Data = state.OpenOrders.Data;
			if (payload.OrderState === `Working`) {
				Data.push(payload);
			} else {
				remove(Data, (n) => {
					return n.OrderId === payload.OrderId;
				});
			}

			return {
				...state,
				OpenOrders: {
					...state.OpenOrders,
					Data: Data,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.ORDER_TRADE_EVENT: {
			let Data = state.AccountTrades.Data;
			Data.push(payload);
			return {
				...state,
				AccountTrades: {
					...state.AccountTrades,
					Data,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_ORDER_HISTORY_INPROGRESS: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_ORDER_HISTORY_COMPLETED: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_ORDER_HISTORY: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					Query: payload,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_INACTIVE_GET_ORDER_HISTORY: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					QueryInactive: payload,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.ADVANCE_QUERY_ORDER_HISTORY: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					AdvanceQuery: payload,
					Query: {
						...state.OrderHistory.Query,
						page: 0
					},
					QueryInactive: {
						...state.OrderHistory.QueryInactive,
						page: 0
					}
				}
			};
		}
		case ACTION_TYPES.CLEAR_QUERY_ORDER_HISTORY: {
			return {
				...state,
				OrderHistory: {
					...state.OrderHistory,
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					},
					QueryInactive: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					},
					AdvanceQuery: {
						filter: {
							InstrumentId: 0,
							Side: ``,
							Type: ``,
							Status: ``
						}
					}
				}
			};
		}
		case ACTION_TYPES.GET_ACCOUNT_TRADES_INPROGRESS: {
			return {
				...state,
				AccountTrades: {
					...state.AccountTrades,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_ACCOUNT_TRADES_COMPLETED: {
			return {
				...state,
				AccountTrades: {
					...state.AccountTrades,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_ACCOUNT_TRADES: {
			return {
				...state,
				AccountTrades: {
					...state.AccountTrades,
					Query: payload,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.GET_DEPOSIT_INFO_INPROGRESS: {
			return {
				...state,
				DepositInfo: {
					...state.DepositInfo,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.GET_DEPOSIT_INFO_COMPLETED: {
			return {
				...state,
				DepositTickets: {
					...state.DepositTickets,
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					}
				},
				DepositInfo: {
					...state.DepositInfo,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.QUERY_DEPOSIT_TICKETS: {
			return {
				...state,
				DepositInfo: {
					...state.DepositInfo,
					Query: payload,
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.CLEAR_DEPOSIT_INFO: {
			return {
				...state,
				DepositInfo: {
					Data: null,
					Response: {
						Code: 0,
						Message: ``
					},
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					},
					Loading: false,
					Completed: false
				}
			};
		}
		// case ACTION_TYPES.SELECT_WITHDRAW_ASSET: {
		//     const { ProductId } = payload
		//     return {
		//         ...state,
		//         WithdrawTransaction: {
		//             Response: {
		//                 Code: 0,
		//                 Message: ``
		//             },
		//             SelectedAssetId: ProductId,
		//             Loading: false,
		//             Completed: false,
		//         }
		//     }
		// }
		case ACTION_TYPES.WITHDRAW_ASSET_INPROGRESS: {
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.WITHDRAW_ASSET_COMPLETED: {
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case ACTION_TYPES.RESET_WITHDRAW_ASSET: {
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					Response: {
						Code: 0,
						Message: ``
					},
					Data: {},
					// TemplateTypes: null,
					Loading: false,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.SELECT_WITHDRAW_ASSET_INPROGRESS: {
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					Loading: true,
					Completed: false
				}
			};
		}
		case ACTION_TYPES.SELECT_WITHDRAW_ASSET_COMPLETED: {
			const { ProductId } = payload;
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					TemplateTypes: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					SelectedAssetId: ProductId,
					Loading: false,
					Completed: true
				},
				Data: null,
				WithdrawTickets: {
					...state.WithdrawTickets,
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					}
				}
			};
		}
		case ACTION_TYPES.SELECT_WITHDRAW_ASSET_RESET: {
			const { ProductId } = payload;
			return {
				...state,
				WithdrawTransaction: {
					...state.WithdrawTransaction,
					SelectedAssetId: ProductId,
					Loading: false,
					Completed: true
				},
				WithdrawTickets: {
					...state.WithdrawTickets,
					Query: {
						filter: ``,
						filterBy: ``,
						sort: ``,
						sortBy: ``,
						page: 0
					}
				}
			};
		}
		case ACTION_TYPES.GET_SEND_FUND_FEE_COMPLETE: {
			const { Data: {ProductId, FeeAmount}, Code, Message } = payload;
			return {
				...state,
				WithdrawFee: {
					...state.WithdrawFee,
					Data: {
						SelectedAssetId: ProductId,
						FeeAmount: FeeAmount
					},
					Response: {
						Code,
						Message
					},
					Loading: false,
					Completed: true
				},
			};
		}
		case ACTION_TYPES.GET_SEND_FUND_FEE_IN_PROGRESS: {
			return {
				...state,
				WithdrawFee: {
					...state.WithdrawFee,
					Data: {
						SelectedAssetId: 0,
						FeeAmount: 0
					},
					Response: {
						Code:0,
						Message: 11
					},
					Loading: true,
					Completed: false
				},
			};
		}
		default:
			return state;
	}
};
