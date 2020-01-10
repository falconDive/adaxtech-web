import { connect } from 'react-redux';
import Assets from './Assets';

import { closeSideBar } from './../../actions/layout-actions';
import { UtilityTokens, UtilityTokensV1 } from './../../selectors/containers/account-info-data-container';
import { OpenOrders, OrderHistory } from './../../selectors/containers/user-transaction-data-container';
import { InstrumentsData } from './../../selectors/containers/instruments-data-container';
import { ConversionTable } from './../../selectors/containers/conversion-data-container'

import {
	queryOpenOrders,
	cancelOrder,
	queryOrderHistory,
	getDepositInfo,
	advanceQueryOpenOrders,
	clearQueryOpenOrders,
	advanceQueryOrderHistory,
	clearQueryOrderHistory
} from './../../actions/user-transaction-actions';
import { Products } from './../../selectors/containers/products-data-container';
const mapStateToProps = (state) => ({
	// UtilityTokens: UtilityTokens(state),
	UtilityTokens: UtilityTokensV1(state),
	OpenOrders: OpenOrders(state),
	OrderHistory: OrderHistory(state),
	AccountInfo: state.UserData.AccountInfo,
	Products: Products(state),
	InstrumentsData: InstrumentsData(state),
	ConversionTable: ConversionTable(state)
});

export default connect(mapStateToProps, {
	closeSideBar,
	queryOpenOrders,
	cancelOrder,
	queryOrderHistory,
	getDepositInfo,
	advanceQueryOpenOrders,
	clearQueryOpenOrders,
	advanceQueryOrderHistory,
	clearQueryOrderHistory
})(Assets);
