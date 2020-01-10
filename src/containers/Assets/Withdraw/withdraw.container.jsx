import { connect } from 'react-redux';
import { WithdrawTicketsBySelectedAsset } from './../../../selectors/containers/user-transaction-data-container';
import { Products } from './../../../selectors/containers/products-data-container';
import {
	queryWithdrawTickets,
	withdrawAsset,
	selectWithdrawAsset,
	resetWithdrawAsset,
	getSendFundFee
} from './../../../actions/user-transaction-actions';

import Withdraw from './index';

const mapStateToProps = (state) => ({
	AccountInfo: state.UserData.AccountInfo,
	Products: Products(state),
	DepositInfo: state.UserTransactions.DepositInfo,
	WithdrawTickets: WithdrawTicketsBySelectedAsset(state),
	WithdrawTransaction: state.UserTransactions.WithdrawTransaction,
	WithdrawFee: state.UserTransactions.WithdrawFee
});

export default connect(mapStateToProps, {
	queryWithdrawTickets,
	withdrawAsset,
	selectWithdrawAsset,
	resetWithdrawAsset,
	getSendFundFee,
})(Withdraw);
