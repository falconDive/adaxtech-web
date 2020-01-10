import { connect } from 'react-redux';
import WithdrawConfirmation from './WithdrawConfirmation';

const mapStateToProps = (state) => ({
	ResetPassword: state.UserData.ResetPassword
});

export default connect(mapStateToProps)(WithdrawConfirmation);
