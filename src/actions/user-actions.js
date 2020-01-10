import USER_ACTION_TYPES from './user-action-types';

export const authenticateUser = ({ UserName, Password }) => {
	return {
		type: USER_ACTION_TYPES.AUTHENTICATE_USER,
		payload: { UserName, Password }
	};
};
export const authenticateUserInProgress = () => {
	return {
		type: USER_ACTION_TYPES.AUTHENTICATE_USER_INPROGRESS,
		payload: null
	};
};
export const authenticateUserCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.AUTHENTICATE_USER_COMPLETED,
		payload: payload
	};
};

export const authenticate2FAUser = ({ Code }) => {
	return {
		type: USER_ACTION_TYPES.AUTHENTICATE2FA_USER,
		payload: { Code }
	};
};

export const autoAuthenticateUser = ({ SessionToken }) => {
	return {
		type: USER_ACTION_TYPES.AUTO_AUTHENTICATE_USER,
		payload: { SessionToken }
	};
};

export const logoutUser = () => {
	return {
		type: USER_ACTION_TYPES.LOGOUT_USER,
		payload: null
	};
};

export const getUserInfo = ({ UserId }) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_INFO,
		payload: { UserId }
	};
};
export const getUserInfoInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_USER_INFO_INPROGRESS,
		payload: null
	};
};
export const getUserInfoCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_INFO_COMPLETED,
		payload: payload
	};
};

export const getUserConfig = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_CONFIG,
		payload
	};
};
export const getUserConfigInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_USER_CONFIG_INPROGRESS,
		payload: null
	};
};
export const getUserConfigCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_CONFIG_COMPLETED,
		payload: payload
	};
};

export const getAccountInfo = ({ AccountId }) => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_INFO,
		payload: { AccountId }
	};
};
export const getAccountInfoInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_INFO_INPROGRESS,
		payload: null
	};
};
export const getAccountInfoCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_INFO_COMPLETED,
		payload: payload
	};
};

export const getAccountPositions = ({ AccountId }) => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS,
		payload: { AccountId }
	};
};
export const getAccountPositionsInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS_INPROGRESS,
		payload: null
	};
};
export const getAccountPositionsCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS_COMPLETED,
		payload: payload
	};
};

export const signUpUser = ({ UserName, Email, PasswordHash }) => {
	return {
		type: USER_ACTION_TYPES.SIGN_UP_USER,
		payload: { UserName, Email, PasswordHash }
	};
};
export const signUpUserInProgress = () => {
	return {
		type: USER_ACTION_TYPES.SIGN_UP_USER_INPROGRESS,
		payload: null
	};
};
export const signUpUserCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.SIGN_UP_USER_COMPLETED,
		payload: payload
	};
};

export const forgotPassword = ({ UserName }) => {
	return {
		type: USER_ACTION_TYPES.FORGOT_PASSWORD,
		payload: { UserName }
	};
};
export const forgotPasswordInProgress = () => {
	return {
		type: USER_ACTION_TYPES.FORGOT_PASSWORD_INPROGRESS,
		payload: null
	};
};
export const forgotPasswordCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.FORGOT_PASSWORD_COMPLETED,
		payload: payload
	};
};

export const getUserAccounts = () => {
	return {
		type: USER_ACTION_TYPES.GET_USER_ACCOUNTS,
		payload: null
	};
};
export const getUserAccountsInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_USER_ACCOUNTS_INPROGRESS,
		payload: null
	};
};
export const getUserAccountsCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_ACCOUNTS_COMPLETED,
		payload: payload
	};
};

export const getAssociatedAccounts = ({ AccountId }) => {
	return {
		type: USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS,
		payload: { AccountId }
	};
};
export const getAssociatedAccountsInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS_INPROGRESS,
		payload: null
	};
};
export const getAssociatedAccountsCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS_COMPLETED,
		payload: payload
	};
};

export const enable2FA = () => {
	return {
		type: USER_ACTION_TYPES.ENABLE2FA,
		payload: null
	};
};
export const enable2FAInProgress = () => {
	return {
		type: USER_ACTION_TYPES.ENABLE2FA_INPROGRESS,
		payload: null
	};
};
export const enable2FACompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.ENABLE2FA_COMPLETED,
		payload: payload
	};
};

export const disable2FA = () => {
	return {
		type: USER_ACTION_TYPES.DISABLE2FA,
		payload: null
	};
};
export const disable2FAInProgress = () => {
	return {
		type: USER_ACTION_TYPES.DISABLE2FA_INPROGRESS,
		payload: null
	};
};
export const disable2FACompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.DISABLE2FA_COMPLETED,
		payload: payload
	};
};

export const settingsAuthenticate2FA = ({ TFACode, AccountId, UserId }) => {
	return {
		type: USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA,
		payload: { TFACode, AccountId, UserId }
	};
};
export const settingsAuthenticate2FAInProgress = () => {
	return {
		type: USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA_INPROGRESS,
		payload: null
	};
};
export const settingsAuthenticate2FACompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA_COMPLETED,
		payload: payload
	};
};

export const apiKeyInProgress = () => {
	return {
		type: USER_ACTION_TYPES.API_KEY_INPROGRESS,
		payload: null
	};
};

export const getAPIKey = ({ UserId }) => {
	return {
		type: USER_ACTION_TYPES.GET_API_KEY,
		payload: { UserId }
	};
};

export const getAPIKeyCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_API_KEY_COMPLETED,
		payload: payload
	};
};

export const deleteAPIKey = ({ UserId, APIKey }) => {
	return {
		type: USER_ACTION_TYPES.DELETE_API_KEY,
		payload: { UserId, APIKey }
	};
};

export const addAPIKey = ({ UserId, Permissions }) => {
	return {
		type: USER_ACTION_TYPES.ADD_API_KEY,
		payload: { UserId, Permissions }
	};
};

export const toggleUseHYB = (data) => {
	return {
		type: USER_ACTION_TYPES.TOGGLE_USE_HYB,
		payload: data
	};
};
export const toggleUseHYBComplete = (data) => {
	return {
		type: USER_ACTION_TYPES.TOGGLE_USE_HYB_COMPLETE,
		payload: data
	};
};
export const getUserBlockpass = (payload) => {
	return {
		payload,
		type: USER_ACTION_TYPES.GET_USER_BLOCKPASS
	};
};
export const getUserBlockpassInProgress = () => {
	return {
		type: USER_ACTION_TYPES.GET_USER_BLOCKPASS_INPROGRESS,
		payload: null
	};
};
export const getUserBlockpassCompleted = (payload) => {
	return {
		type: USER_ACTION_TYPES.GET_USER_BLOCKPASS_COMPLETED,
		payload: payload
	};
};
