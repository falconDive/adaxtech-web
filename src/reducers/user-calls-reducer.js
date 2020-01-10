import USER_ACTION_TYPES from './../actions/user-action-types';
import AP_SUBSCRIPTIONS_ACTION_TYPES from './../actions/AP-subscriptions-action-types';
import { remove } from 'lodash';
const initialState = {
	Authenticate: {
		Data: {
			UserName: ``,
			Password: ``,
			Authenticated: ``,
			SessionToken: ``,
			UserId: ``,
			Requires2FA: ``
		},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	UserInfo: {
		Data: {},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	Config: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	AccountInfo: {
		Data: {},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	AccountPositions: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	RegisterNew: {
		Data: {},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	ResetPassword: {
		Data: {},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	AssociatedAccounts: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	TwoFactor: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	Authenticate2FA: {
		Data: {},
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false,
		Completed: false
	},
	APIKey: {
		Data: [],
		Response: {
			Code: 0,
			Message: ``
		},
		Loading: false
	}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_ACTION_TYPES.AUTHENTICATE_USER_INPROGRESS: {
			return {
				...state,
				Authenticate: {
					...state.Authenticate,
					Loading: true,
					Completed: false,
					Response: {
						Code: 0,
						Message: ``
					}
				}
			};
		}
		case USER_ACTION_TYPES.AUTHENTICATE_USER_COMPLETED: {
			return {
				...state,
				Authenticate: {
					...state.Authenticate,
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
		case USER_ACTION_TYPES.GET_USER_INFO_INPROGRESS: {
			return {
				...state,
				UserInfo: {
					...state.UserInfo,
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_USER_INFO_COMPLETED: {
			return {
				...state,
				UserInfo: {
					...state.UserInfo,
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
		case USER_ACTION_TYPES.GET_USER_CONFIG_INPROGRESS: {
			return {
				...state,
				Config: {
					...state.Config,
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_USER_CONFIG_COMPLETED: {
			return {
				...state,
				Config: {
					...state.Config,
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
		case USER_ACTION_TYPES.GET_USER_BLOCKPASS_INPROGRESS: {
			return {
				...state,
				Config: {
					...state.Config,
					Loading: true,
					Completed: false
				},
				Blockpass: {
					...state.Blockpass,
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_USER_BLOCKPASS_COMPLETED: {
			return {
				...state,
				Config: {
					...state.Config,
					...payload.Config,
					Loading: false,
					Completed: true
				},
				AccountInfo: {
					...state.AccountInfo,
					Data: {
						...state.AccountInfo.Data,
						...payload.AccountInfoData
					}
				}
			};
		}
		case USER_ACTION_TYPES.GET_ACCOUNT_INFO_INPROGRESS: {
			return {
				...state,
				AccountInfo: {
					...state.AccountInfo,
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_ACCOUNT_INFO_COMPLETED: {
			return {
				...state,
				AccountInfo: {
					...state.AccountInfo,
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
		case USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS_INPROGRESS: {
			return {
				...state,
				AccountPositions: {
					...state.AccountPositions,
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS_COMPLETED: {
			return {
				...state,
				AccountPositions: {
					...state.AccountPositions,
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
		case AP_SUBSCRIPTIONS_ACTION_TYPES.ACCOUNT_POSITION_EVENT: {
			let Data = [ ...state.AccountPositions.Data ];

			remove(Data, (n) => {
				return n.ProductId === payload.Data.ProductId;
			});

			Data = [ ...Data, payload.Data ];
			return {
				...state,
				AccountPositions: {
					...state.AccountPositions,
					Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case USER_ACTION_TYPES.SIGN_UP_USER_INPROGRESS: {
			return {
				...state,
				RegisterNew: {
					...state.RegisterNew,
					Response: {
						Code: 0,
						Message: ``
					},
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.SIGN_UP_USER_COMPLETED: {
			return {
				...state,
				RegisterNew: {
					...state.RegisterNew,
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
		case USER_ACTION_TYPES.FORGOT_PASSWORD_INPROGRESS: {
			return {
				...state,
				ResetPassword: {
					...state.ResetPassword,
					Response: {
						Code: 0,
						Message: ``
					},
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.FORGOT_PASSWORD_COMPLETED: {
			return {
				...state,
				ResetPassword: {
					...state.ResetPassword,
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
		case USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS_INPROGRESS: {
			return {
				...state,
				AssociatedAccounts: {
					...state.AssociatedAccounts,
					Response: {
						Code: 0,
						Message: ``
					},
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS_COMPLETED: {
			state.AssociatedAccounts.Data.push(payload.Data);
			return {
				...state,
				AssociatedAccounts: {
					...state.AssociatedAccounts,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false,
					Completed: true
				}
			};
		}
		case USER_ACTION_TYPES.ENABLE2FA_INPROGRESS: {
			return {
				...state,
				TwoFactor: {
					...state.TwoFactor,
					Response: {
						Code: 0,
						Message: ``
					},
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.ENABLE2FA_COMPLETED: {
			return {
				...state,
				TwoFactor: {
					...state.TwoFactor,
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
		case USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA_INPROGRESS: {
			return {
				...state,
				Authenticate2FA: {
					...state.Authenticate2FA,
					Response: {
						Code: 0,
						Message: ``
					},
					Loading: true,
					Completed: false
				}
			};
		}
		case USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA_COMPLETED: {
			return {
				...state,
				Authenticate2FA: {
					...state.Authenticate2FA,
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

		case USER_ACTION_TYPES.GET_API_KEY_COMPLETED: {
			return {
				...state,
				APIKey: {
					...state.APIKey,
					Data: payload.Data,
					Response: {
						Code: payload.Code,
						Message: payload.Message
					},
					Loading: false
				}
			};
		}
		default:
			return state;
	}
};
