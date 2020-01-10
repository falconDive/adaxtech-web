import { connect } from 'react-redux';
import ForgotPassword from './ResetPassword';

import { forgotPassword } from './../../../actions/user-actions';

const mapStateToProps = (state) => ({
	ResetPassword: state.UserData.ResetPassword
});

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
