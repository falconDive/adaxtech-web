import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

import { closeSideBar } from './../../actions/layout-actions';
import { UtilityTokens, UtilityTokensV1 } from './../../selectors/containers/account-info-data-container';
import { OpenOrders, OrderHistory } from './../../selectors/containers/user-transaction-data-container';
import { InstrumentsData } from './../../selectors/containers/instruments-data-container';
import Loadable from './../../HOC/Loadable'
import { HBLink } from './../../components/HBButton'
import Tab from '../../components/Tab'
import { AdxAsset, FirstCol, SecondCol, FirstColRow1, TabWrapper, ColumnHeader } from '../../components/HBAssets'
import { AdxButton } from '../../components/HBButton';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SecurityToken = Loadable({
    loader: () => import(`./../../containers/Assets/SecurityToken`)
})

const UtilityToken = Loadable({
    loader: () => import(`./../../containers/Assets/UtilityToken`)
})

const OpenOrdersComponent = Loadable({
    loader: () => import(`./../../containers/Assets/OpenOrders`)
})

const OrderHistoryComponent = Loadable({
    loader: () => import(`./../../containers/Assets/OrderHistory`)
})

export class Assets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeOrderTab: 0
        }
        this.navItems = [{
            children: 'Open Orders'
        }, {
            children: 'Order History'
        }]
    }

    handleClickTab = (activeOrderTab) => {
        this.setState({ activeOrderTab })
    }

    render() {
        const { activeOrderTab } = this.state
        const {
            match,
            UtilityTokens,
            queryOpenOrders,
            cancelOrder,
            queryOrderHistory,
            advanceQueryOpenOrders,
            clearQueryOpenOrders,
            InstrumentsData,
            clearQueryOrderHistory,
            advanceQueryOrderHistory,
            history,
            ConversionTable
        } = this.props;

        return (
            <AdxAsset>
                <FirstCol>
                    <div className="header">&nbsp;</div>
                    <div className="content">
                        <SecurityToken />
                        <TabWrapper>
                            <Tab items={this.navItems} onChange={this.handleClickTab} />
                            <div className="tab-content">
                                <OpenOrdersComponent
                                    visible={activeOrderTab === 0}
                                    openOrderData={this.props.OpenOrders}
                                    queryOpenOrders={queryOpenOrders}
                                    cancelOrder={cancelOrder}
                                    advanceQueryOpenOrders={advanceQueryOpenOrders}
                                    clearQueryOpenOrders={clearQueryOpenOrders}
                                    InstrumentsData={InstrumentsData} />
                                <OrderHistoryComponent
                                    visible={activeOrderTab === 1}
                                    OrderHistory={this.props.OrderHistory}
                                    queryOrderHistory={queryOrderHistory}
                                    InstrumentsData={InstrumentsData}
                                    advanceQueryOrderHistory={advanceQueryOrderHistory}
                                    clearQueryOrderHistory={clearQueryOrderHistory} />
                            </div>
                        </TabWrapper>
                    </div>
                </FirstCol>
                <SecondCol>
                    <div className="header">
                        <AdxButton primary bold onClick={() => history.push(`${match.url}/deposit`)}>Deposit</AdxButton>
                        <AdxButton primary bold onClick={() => history.push(`${match.url}/withdraw`)}>Withdraw</AdxButton>
                    </div>
                    <div className="content">
                        <UtilityToken 
                            ConversionTable={ConversionTable}
                            UtilityTokens={UtilityTokens} />
                    </div>
                </SecondCol>
            </AdxAsset>
        );
    }
}

const mapStateToProps = (state) => ({
    // UtilityTokens: UtilityTokens(state),
    UtilityTokens: UtilityTokensV1(state),
    OpenOrders: OpenOrders(state),
    OrderHistory: OrderHistory(state),
    AccountInfo: state.UserData.AccountInfo,
    Products: Products(state),
    InstrumentsData: InstrumentsData(state)
});

const AssetConatainer = connect(mapStateToProps, {
    closeSideBar,
    queryOpenOrders,
    cancelOrder,
    queryOrderHistory,
    getDepositInfo,
    advanceQueryOpenOrders,
    clearQueryOpenOrders,
    advanceQueryOrderHistory,
    clearQueryOrderHistory
})(withRouter(Assets));

export default AssetConatainer