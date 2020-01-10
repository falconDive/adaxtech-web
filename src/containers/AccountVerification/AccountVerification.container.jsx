import { connect } from 'react-redux';
// import AccountVerification from './AccountVerification'
import AccountVerification from './AccountVerificationnew';

import { UserConfigData } from './../../selectors/containers/user-data-container';
import { closeSideBar } from './../../actions/layout-actions';
const mapStateToProps = (state) => ({
	UserConfigData: UserConfigData(state),
	AccountInfo: state.UserData.AccountInfo
});

export default connect(mapStateToProps, { closeSideBar })(AccountVerification);
