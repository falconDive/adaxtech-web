import { take, fork, call, put, all, delay, select } from "redux-saga/effects";
import { exchangeService } from "./../App";
import { get, cloneDeep, findIndex } from 'lodash'
import axios from 'axios';

import { API_GATEWAY, PRODUCTIDS } from '../helpers/config';
import USER_ACTION_TYPES from "./../actions/user-action-types";
import {
  authenticateUserInProgress,
  authenticateUserCompleted,
  getUserInfo,
  getUserInfoInProgress,
  getUserInfoCompleted,
  getUserConfig,
  getUserConfigInProgress,
  getUserConfigCompleted,
  getAccountInfo,
  getAccountInfoInProgress,
  getAccountInfoCompleted,
  getAccountPositions,
  getAccountPositionsInProgress,
  getAccountPositionsCompleted,
  signUpUserInProgress,
  signUpUserCompleted,
  forgotPasswordInProgress,
  forgotPasswordCompleted,
  getUserAccounts,
  getUserAccountsInProgress,
  getAssociatedAccounts,
  getAssociatedAccountsInProgress,
  getAssociatedAccountsCompleted,
  enable2FAInProgress,
  enable2FACompleted,
  settingsAuthenticate2FAInProgress,
  settingsAuthenticate2FACompleted,
  apiKeyInProgress,
  getAPIKeyCompleted,
  getAPIKey,
  toggleUseHYBComplete,
  getUserBlockpass,
  getUserBlockpassInProgress,
  getUserBlockpassCompleted
} from "./../actions/user-actions";

import {
  getAccountTransactions,
  getWithdrawTickets,
  getDepositTickets,
  getRequestTransfers,
  getRequestTransferRequestsReceived,
  getRequestTransferRequestsRequested,
  getTransfers,
  getTransfersReceived,
  getOpenOrders,
  getOrderHistory,
  getAccountTrades,
  getDepositInfo
} from "./../actions/user-transaction-actions";

import { formatResponse } from "./../helpers";
import { SettingsAuthenticate2FA } from "./../services/NotificationServices";
import { PAIRSID } from "./../helpers/config";

function* _authenticateUser({ UserName, Password }) {
  yield put(authenticateUserInProgress());
  const response = yield call(exchangeService.sendData, "WebAuthenticateUser", {
    UserName,
    Password
  });
  let Data = {},
    Code = 0,
    Message = ``;
  if (
    response.Authenticated &&
    response.hasOwnProperty(`Requires2FA`) &&
    response.Requires2FA
  ) {
    Data = {
      UserName,
      Password,
      Authenticated: response.Authenticated,
      SessionToken: ``,
      UserId: 0,
      Requires2FA: response.Requires2FA
    };

    Code = 1;
    Message = `Two factor authentication is required.`;
  } else if (response.Authenticated) {
    Data = {
      UserName,
      Password,
      Authenticated: response.Authenticated,
      SessionToken: response.SessionToken,
      UserId: response.UserId,
      Requires2FA: false
    };
    Code = 1;
    Message = `Successfully authenticated.`;

    window.localStorage.setItem(`SessionToken`, response.SessionToken);
    window.localStorage.setItem(`user_id`, response.UserId);
    yield put(getUserInfo({ UserId: response.UserId }));
  } else {
    Data = {
      UserName,
      Password,
      Authenticated: false,
      SessionToken: ``,
      UserId: 0,
      Requires2FA: false
    };
    Code = -1;
    Message = `Invalid username or password.`;
  }
  yield put(
    authenticateUserCompleted({
      Data,
      Code,
      Message
    })
  );

  yield put(
    authenticateUserCompleted({
      Data,
      Code,
      Message
    })
  );
}

function* _authenticate2FAUser(payload) {
  yield put(authenticateUserInProgress());
  const response = yield call(exchangeService.sendData, "Authenticate2FA", {
    Code: payload.Code
  });
  let Data = {},
    Code = 0,
    Message = ``;
  if (response.Authenticated) {
    Data = {
      Authenticated: response.Authenticated,
      SessionToken: response.SessionToken,
      UserId: response.UserId,
      Requires2FA: true
    };
    Code = 1;
    Message = `Successfully authenticated.`;

    window.localStorage.setItem(`SessionToken`, response.SessionToken);
    window.localStorage.setItem(`user_id`, response.UserId);
    yield put(getUserInfo({ UserId: response.UserId }));
  } else {
    Data = {
      Authenticated: false,
      SessionToken: ``,
      UserId: 0,
      Requires2FA: true
    };
    Code = -1;
    Message = `Invalid username or password.`;
  }
  yield put(
    authenticateUserCompleted({
      Data,
      Code,
      Message
    })
  );
}

function* _autoAuthenticateUser({ SessionToken }) {
  yield put(authenticateUserInProgress());
  const response = yield call(exchangeService.sendData, "WebAuthenticateUser", {
    SessionToken
  });
  let Data = {},
    Code = 0,
    Message = ``;
  if (response.Authenticated) {
    Data = {
      Authenticated: response.Authenticated,
      SessionToken: response.SessionToken,
      UserId: response.UserId,
      Requires2FA: false
    };
    Code = 1;
    Message = `Successfully authenticated.`;

    window.localStorage.setItem(`SessionToken`, response.SessionToken);
    window.localStorage.setItem(`user_id`, response.UserId);
    yield put(getUserInfo({ UserId: response.UserId }));
  } else {
    Data = {
      Authenticated: false,
      SessionToken: ``,
      UserId: 0,
      Requires2FA: false
    };
    Code = -1;
    Message = `Invalid username or password.`;
  }
  yield put(
    authenticateUserCompleted({
      Data,
      Code,
      Message
    })
  );
}

function* _logoutUser(payload) {
  yield put(authenticateUserInProgress());
  const response = yield call(exchangeService.sendData, "Logout", {});
  window.localStorage.removeItem(`SessionToken`);
  // window.localStorage.removeItem(`InstrumentId`)
  // window.localStorage.removeItem(`SetAmountByZero`)
  // window.localStorage.removeItem(`completeProfileLater`)
  // window.localStorage.removeItem(`user_id`)
  let Data = {},
    Code = 0,
    Message = ``;
  Data = {
    Authenticated: false,
    SessionToken: ``,
    UserId: 0,
    Requires2FA: true
  };
  Code = 1;
  Message = `Loggedout`;
  yield put(
    authenticateUserCompleted({
      Data,
      Code,
      Message
    })
  );
  yield (window.location = "/signin");
}

function* _getUserInfo({ UserId }) {
  yield put(getUserInfoInProgress());
  const response = yield call(exchangeService.sendData, "GetUserInfo", {
    UserId
  });
  if (response && response !== {}) {
    yield put(getUserConfig(response));
    yield put(
      getAccountTransactions({
        AccountId: response.AccountId,
        StartIndex: 0,
        Count: 100
      })
    );
    yield put(getAccountInfo({ AccountId: response.AccountId }));
    yield put(getAccountPositions({ AccountId: response.AccountId }));
    yield put(getWithdrawTickets({ AccountId: response.AccountId }));
    yield put(getDepositTickets({ AccountId: response.AccountId }));
    yield put(
      getRequestTransfers({ PayerAccountId: response.AccountId, Status: 0 })
    );
    yield put(
      getRequestTransferRequestsReceived({ PayerAccountId: response.AccountId })
    );
    yield put(
      getRequestTransferRequestsRequested({
        RequestorAccountId: response.AccountId
      })
    );
    yield put(getTransfers({ AccountId: response.AccountId }));
    yield put(getTransfersReceived({ AccountId: response.AccountId }));
    yield put(getOpenOrders({ AccountId: response.AccountId }));
    yield put(getOrderHistory({ AccountId: response.AccountId, Depth: 1000 }));
    yield put(
      getAccountTrades({
        AccountId: response.AccountId,
        StartIndex: 0,
        Count: 1000
      })
    );
    yield put(getAPIKey({ UserId: response.UserId }));
    yield call(exchangeService.sendData, "SubscribeAccountEvents", {
      OMSId: 1,
      AccountId: response.AccountId
    });
    yield put(getUserAccounts());
    yield all(
      PRODUCTIDS.map(productId => {
        return put(
          getDepositInfo({
            AccountId: response.AccountId,
            ProductId: productId,
            GenerateNewKey: true
          })
        );
      })
    )
  }
  const Data = response,
    Code = response === {} ? -1 : 1,
    Message = response === {} ? `Invalid request` : ``;
  yield put(
    getUserInfoCompleted({
      Data,
      Code,
      Message
    })
  );
}

function* _getUserConfig(userInfo) {
  yield put(getUserConfigInProgress());
  const response = yield call(exchangeService.sendData, "GetUserConfig", {
    UserId: userInfo.UserId
  });

  const { responseData, Code } = formatResponse(response);
  yield put(
    getUserConfigCompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );

  if (Code === 1) {
    yield put(getUserBlockpass({ userInfo, userConfig: responseData }))
  }
}

function* _getAccountInfo({ AccountId }) {
  yield put(getAccountInfoInProgress());
  const response = yield call(exchangeService.sendData, "GetAccountInfo", {
    AccountId
  });
  const { responseData, Code } = formatResponse(response, 2);

  yield put(
    getAccountInfoCompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
}

function* _getUserBlockpass(data) {
  yield put(getUserBlockpassInProgress());

  const { userInfo } = data
  const configIndexes = {}
  let AccountInfoData
  let kycVerified
  let userConfig = cloneDeep(data.userConfig || [])
  userConfig.forEach(({ Key, Value }, i) => {
    configIndexes[Key] = i;
    kycVerified = (kycVerified || Key === 'levelIncreaseStatus' && Value === 'pass')
  })

  if (! kycVerified) {
    let blockpass

    try {
      const response = yield axios({
        method: 'POST',
        data: userInfo,
        url: `${API_GATEWAY}/api/v1/kyc/status`,
        contentType: 'application/json'
      })
      blockpass = get(response, 'data.data', {})
    } catch (e) {}

    if (blockpass) {
      let kycStatus
      let { status, identities = {} } = blockpass
      const identityFieldMap = {
        firstName: 'given_name',
        lastName: 'family_name',
        telephone: 'phone',
        dob: 'dob'
      }
      const addressFieldMap = {
        billingStreetAddress: 'address',
        billingCity: 'city',
        billingState: 'state',
        billingZip: 'postalCode',
        billingCountry: 'country'
      }
      let blockpassAddress = get(identities, 'address.value')
      try {
        blockpassAddress = JSON.parse(blockpassAddress)
      } catch(e) {
        blockpassAddress = {}
      }

      if (status === 'approved' && get(blockpass, 'updatedApVerificationLevel') === true) {
        kycStatus = 'pass'
        AccountInfoData = { VerificationLevel: 3 }
      } else if (status === 'inreview') {
        kycStatus = 'underReview'
      } else {
        kycStatus = 'waitingReview'
      }

      if (configIndexes.hasOwnProperty('levelIncreaseStatus')) {
        const index = configIndexes['levelIncreaseStatus']
        userConfig[index].Value = kycStatus
      } else {
        userConfig.push({
          Key: 'levelIncreaseStatus',
          Value: kycStatus,
        })
      }

      for (let Key in identityFieldMap) {
        let i = identityFieldMap[Key]
        let Value = get(identities, `${i}.value`)
        if (configIndexes.hasOwnProperty(Key)) {
          userConfig[ configIndexes[Key] ].Value = Value;
        } else {
          userConfig.push({ Key, Value })
        }
      }

      for (let Key in addressFieldMap) {
        let i = addressFieldMap[Key]
        let Value = get(blockpassAddress, `${i}`)
        if (configIndexes.hasOwnProperty(Key)) {
          userConfig[ configIndexes[Key] ].Value = Value;
        } else {
          userConfig.push({ Key, Value })
        }
      }

      const { UserId, UserName } = userInfo
      const setConfigResponse = yield call(exchangeService.sendData, "SetUserConfig", {
        UserId,
        UserName,
        Config: userConfig
      });
    }
  }
  
  yield put(getUserBlockpassCompleted({
    Config: {
      Data: userConfig
    }
  }))

  yield put(getUserBlockpassCompleted({
    Config: {
      Data: userConfig
    },
    AccountInfoData,
  }))
}

function* _getAccountPositions({ AccountId }) {
  yield put(getAccountPositionsInProgress());
  const response = yield call(exchangeService.sendData, "GetAccountPositions", {
    AccountId
  });
  const { responseData, Code } = formatResponse(response);
  yield put(
    getAccountPositionsCompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
}

function* _signUpUser({ UserName, Email, PasswordHash }) {
  yield put(signUpUserInProgress());
  const response = yield call(exchangeService.sendData, "RegisterNewUser", {
    userInfo: {
      UserName,
      Email,
      PasswordHash
    },
    OperatorId: 1,
    UserConfig: []
  });

  if (response.hasOwnProperty(`result`) && !response.result) {
    yield put(
      signUpUserCompleted({
        Data: response,
        Code: -1,
        Message: response.errormsg
      })
    );
  } else {
    yield put(
      signUpUserCompleted({
        Data: response,
        Code: 1,
        Message: `User successfully created.`
      })
    );
  }
}

function* _forgotPassword({ UserName }) {
  yield put(forgotPasswordInProgress());
  const response = yield call(exchangeService.sendData, "ResetPassword", {
    UserName
  });

  if (response.hasOwnProperty(`result`) && !response.result) {
    yield put(
      forgotPasswordCompleted({
        Data: response,
        Code: -1,
        Message: `Email does not exists`
      })
    );
  } else {
    yield put(
      forgotPasswordCompleted({
        Data: response,
        Code: 1,
        Message: `Sent Password Link`
      })
    );
  }
}

function* _getUserAccounts() {
  yield put(getUserAccountsInProgress());
  const response = yield call(exchangeService.sendData, "GetUserAccounts", {
    OMSId: 1
  });
  if (response.length) {
    yield all(
      response.map(elm => {
        return put(getAssociatedAccounts({ AccountId: elm }));
      })
    );
  }
}

function* _getAssociatedAccounts({ AccountId }) {
  yield put(getAssociatedAccountsInProgress());
  const response = yield call(exchangeService.sendData, "GetAccountInfo", {
    OMSId: 1,
    AccountId
  });
  const { responseData, Code } = formatResponse(response, 2);

  yield put(
    getAssociatedAccountsCompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
}

function* _enable2FA() {
  yield put(enable2FAInProgress());
  const response = yield call(exchangeService.sendData, "EnableGoogle2FA", {});
  const { responseData, Code } = formatResponse(response, 2);

  yield put(
    enable2FACompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
}

function* _settingsAuthenticate2FA({ TFACode, AccountId, UserId }) {
  yield put(settingsAuthenticate2FAInProgress());
  const response = yield call(exchangeService.sendData, "Authenticate2FA", {
    Code: TFACode
  });
  if (response.hasOwnProperty(`Authenticated`)) {
    if (response.Authenticated) {
      SettingsAuthenticate2FA.onNext(response);
      yield delay(2000);
      window.location.reload();
      // yield put(getUserInfoInProgress())
      // const GetUserInfoResponse = yield call(exchangeService.sendData, 'GetUserInfo', { UserId })

      // const Data = GetUserInfoResponse,
      //     Code = response === {} ? -1 : 1,
      //     Message = response === {} ? `Invalid request` : ``
      // yield put(getUserInfoCompleted({
      //     Data,
      //     Code,
      //     Message,
      // }))

      // const { responseData, Code1 } = formatResponse(response, 2)

      // yield put(settingsAuthenticate2FACompleted({
      //     Data: responseData,
      //     Code: Code1,
      //     Message: Code1 < 1 ? `Unable to fetch data.` : ``
      // }))
    } else {
      const { responseData, Code } = formatResponse(response, 2);
      // SettingsAuthenticate2FA.onNext(response)

      yield put(
        settingsAuthenticate2FACompleted({
          Data: responseData,
          Code: Code,
          Message: Code < 1 ? `Unable to fetch data.` : ``
        })
      );
    }
  }
}

function* _disable2FA() {
  yield put(enable2FAInProgress());
  const response = yield call(exchangeService.sendData, "Disable2FA", {});
  // const { responseData, Code } = formatResponse(response, 2)

  // yield put(enable2FACompleted({
  //     Data: responseData,
  //     Code: Code,
  //     Message: Code < 1 ? `Unable to fetch data.` : ``
  // }))
}

function* _getAPIKey({ UserId }) {
  yield put(apiKeyInProgress());
  const response = yield call(exchangeService.sendData, "GetUserAPIKeys", {
    UserId
  });
  const { responseData, Code } = formatResponse(response);
  yield put(
    getAPIKeyCompleted({
      Data: responseData,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
}

function* _deleteAPIKey({ UserId, APIKey }) {
  yield put(apiKeyInProgress());
  const response = yield call(exchangeService.sendData, "RemoveUserAPIKey", {
    UserId,
    APIKey
  });
  const { responseData, Code } = formatResponse(response);
  yield put(getAPIKey({ UserId }));
}

function* _addAPIKey({ UserId, Permissions }) {
  yield put(apiKeyInProgress());
  const list_api = yield call(exchangeService.sendData, "GetUserAPIKeys", {
    UserId
  });
  const response = yield call(exchangeService.sendData, "AddUserAPIKey", {
    UserId,
    Permissions
  });
  const { responseData, Code } = formatResponse(response);
  list_api.push(responseData);
  yield put(
    getAPIKeyCompleted({
      Data: list_api,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
  // yield put(getAPIKey({UserId}))
}
function* _toggleUseHYB(data) {
  data.LoyaltyProductId = data.LoyaltyEnabled ? 0 : 6;
  data.LoyaltyEnabled = !data.LoyaltyEnabled;
  const toggleUseHYB = yield call(
    exchangeService.sendData,
    "UpdateAccount",
    data
  );

  const { responseData, Code } = formatResponse(toggleUseHYB, 2);
  yield put(
    getAccountInfoCompleted({
      Data: data,
      Code: Code,
      Message: Code < 1 ? `Unable to fetch data.` : ``
    })
  );
  // toggleUseHYBComplete
}

export default function* UserCalls() {
  while (true) {
    const { type, payload } = yield take([
      USER_ACTION_TYPES.AUTHENTICATE_USER,
      USER_ACTION_TYPES.AUTO_AUTHENTICATE_USER,
      USER_ACTION_TYPES.GET_USER_INFO,
      USER_ACTION_TYPES.GET_USER_CONFIG,
      USER_ACTION_TYPES.GET_USER_BLOCKPASS,
      USER_ACTION_TYPES.GET_ACCOUNT_INFO,
      USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS,
      USER_ACTION_TYPES.AUTHENTICATE2FA_USER,
      USER_ACTION_TYPES.LOGOUT_USER,
      USER_ACTION_TYPES.SIGN_UP_USER,
      USER_ACTION_TYPES.FORGOT_PASSWORD,
      USER_ACTION_TYPES.GET_USER_ACCOUNTS,
      USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS,
      USER_ACTION_TYPES.ENABLE2FA,
      USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA,
      USER_ACTION_TYPES.DISABLE2FA,
      USER_ACTION_TYPES.GET_API_KEY,
      USER_ACTION_TYPES.DELETE_API_KEY,
      USER_ACTION_TYPES.ADD_API_KEY,
      USER_ACTION_TYPES.TOGGLE_USE_HYB
    ]);

    switch (type) {
      case USER_ACTION_TYPES.AUTHENTICATE_USER:
        yield fork(_authenticateUser, payload);
        break;
      case USER_ACTION_TYPES.AUTO_AUTHENTICATE_USER:
        yield fork(_autoAuthenticateUser, payload);
        break;
      case USER_ACTION_TYPES.GET_USER_INFO:
        yield fork(_getUserInfo, payload);
        break;
      case USER_ACTION_TYPES.GET_USER_CONFIG:
        yield fork(_getUserConfig, payload);
        break;
      case USER_ACTION_TYPES.GET_USER_BLOCKPASS:
        yield fork(_getUserBlockpass, payload);
        break;
      case USER_ACTION_TYPES.GET_ACCOUNT_INFO:
        yield fork(_getAccountInfo, payload);
        break;
      case USER_ACTION_TYPES.GET_ACCOUNT_POSITIONS:
        yield fork(_getAccountPositions, payload);
        break;
      case USER_ACTION_TYPES.AUTHENTICATE2FA_USER:
        yield fork(_authenticate2FAUser, payload);
        break;
      case USER_ACTION_TYPES.LOGOUT_USER:
        yield fork(_logoutUser, payload);
        break;
      case USER_ACTION_TYPES.SIGN_UP_USER:
        yield fork(_signUpUser, payload);
        break;
      case USER_ACTION_TYPES.FORGOT_PASSWORD:
        yield fork(_forgotPassword, payload);
        break;
      case USER_ACTION_TYPES.GET_USER_ACCOUNTS:
        yield fork(_getUserAccounts, payload);
        break;
      case USER_ACTION_TYPES.GET_ASSOCIATED_ACCOUNTS:
        yield fork(_getAssociatedAccounts, payload);
        break;
      case USER_ACTION_TYPES.ENABLE2FA:
        yield fork(_enable2FA, payload);
        break;
      case USER_ACTION_TYPES.SETTINGS_AUTHENTICATE_2FA:
        yield fork(_settingsAuthenticate2FA, payload);
        break;
      case USER_ACTION_TYPES.DISABLE2FA:
        yield fork(_disable2FA, payload);
        break;
      case USER_ACTION_TYPES.GET_API_KEY:
        yield fork(_getAPIKey, payload);
        break;
      case USER_ACTION_TYPES.DELETE_API_KEY:
        yield fork(_deleteAPIKey, payload);
        break;
      case USER_ACTION_TYPES.ADD_API_KEY:
        yield fork(_addAPIKey, payload);
        break;
      case USER_ACTION_TYPES.TOGGLE_USE_HYB:
        yield fork(_toggleUseHYB, payload);
        break;
      default:
    }
  }
}
