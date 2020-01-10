import { connect } from 'react-redux';
import Settings from './Settings';

import { UserConfigData } from './../../selectors/containers/user-data-container';
import {
	enable2FA,
	settingsAuthenticate2FA,
	disable2FA,
	deleteAPIKey,
	addAPIKey,
	toggleUseHYB
} from './../../actions/user-actions';
import { closeSideBar } from './../../actions/layout-actions';

const mapStateToProps = (state) => ({
	UserConfigData: UserConfigData(state),
	UserInfo: state.UserData.UserInfo,
	AccountInfo: state.UserData.AccountInfo,
	AssociatedAccounts: state.UserData.AssociatedAccounts,
	TwoFactor: state.UserData.TwoFactor,
	Authenticate2FA: state.UserData.Authenticate2FA,
	APIKey: state.UserData.APIKey
});

export default connect(mapStateToProps, {
	closeSideBar,
	enable2FA,
	settingsAuthenticate2FA,
	disable2FA,
	deleteAPIKey,
	addAPIKey,
	toggleUseHYB
})(Settings);
