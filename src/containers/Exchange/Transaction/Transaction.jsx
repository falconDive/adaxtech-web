import React, { Component, Fragment } from 'react';

import Loadable from '../../../HOC/Loadable';
import {
	HBTransaction,
	OptionRow,
	OptionColumn,
} from './../../../components/HBExchange/HBTransaction';

const OpenOrders = Loadable({
	loader: () => import(`./OpenOrders`)
});
const FilledOrders = Loadable({
	loader: () => import(`./FilledOrders`)
});
const InactiveOrders = Loadable({
	loader: () => import(`./InactiveOrders`)
});
const WithdrawStatus = Loadable({
	loader: () => import(`./WithdrawStatus`)
});

class Transaction extends Component {
	instrumentList = {
		'REPETH': 'REP/ETH',
        "ETHBTC": "ETH/BTC",
        "BTCETH": "BTC/ETH",
        "BTCUSD": "BTC/USD",
        "ETHUSD": "ETH/USD",
        "LTCBTC": "LTC/BTC",
        "HYBBTC": "HYB/BTC",
        "BCHBTC": "BCH/BTC",
        "XRPBTC": "XRP/BTC",
        "BCHETH": "BCH/ETH",
        "LTCETH": "LTC/ETH",
        "XRPETH": "XRP/ETH",
        "HYBETH": "HYB/ETH",
        "BTCHYB": "BTC/HYB",
        "BCHHYB": "BCH/HYB",
        "LTCHYB": "LTC/HYB",
        "XRPHYB": "XRP/HYB",
        "ETHHYB": "ETH/HYB",
        "HYBUSD": "HYB/USD",
        "LTCUSD": "LTC/USD",
        "NEOUSD": "NEO/USD",
        "XRPUSD": "XRP/USD",
        "BTCTUSD": "BTC/TUSD",
        "ETHTUSD": "ETH/TUSD",
        "LTCTUSD": "LTC/TUSD",
        "BCHTUSD": "BCH/TUSD",
        "HYBTUSD": "HYB/TUSD",
        "XRPTUSD": "XRP/TUSD",
        "BT_BTCTUSD": "BT_BTC/TUSD",
        "BT_ETHTUSD": "BT_ETH/TUSD",
        "BT_BCHTUSD": "BT_BCH/TUSD",
        "BT_LTCTUSD": "BT_LTC/TUSD",
        "BT_XRPTUSD": "BT_XRP/TUSD",
        "BT_HYBTUSD": "BT_HYB/TUSD",
        "H20BTC": "H20/BTC",
        "Test_BTCTUSD": "Test_BTCTUSD"
    }

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1
		};
	}

	handleClickTab = (val) => {
		this.setState({ activeTab: val });
	};

	render() {
		const { instrumentList } = this;
		const { activeTab } = this.state;
		const {
			AccountTrades,
			OrderHistoryCancelled,
			WithdrawTickets,
			UserInfo,

			queryAccountTrades,
			queryOpenOrders,
			queryInactiveOrderHistory,
			queryWithdrawTickets,
			cancelOrder,
			cancelWithdraw,
			visible
		} = this.props;
		let tabContent = null

		switch (activeTab) {
			case 1: 
				tabContent = <OpenOrders
						instrumentList={instrumentList}
						OpenOrders={this.props.OpenOrders}
						cancelOrder={cancelOrder}
						queryOpenOrders={queryOpenOrders}
					/>
				break;
			case 2: 
				tabContent = <FilledOrders
					instrumentList={instrumentList}
					AccountTrades={AccountTrades}
					queryAccountTrades={queryAccountTrades} />
				break;
			case 3: 
				tabContent = <InactiveOrders
					instrumentList={instrumentList}
					OrderHistoryCancelled={OrderHistoryCancelled}
					queryInactiveOrderHistory={queryInactiveOrderHistory} />
				break;
			case 4: 
				tabContent = <WithdrawStatus
					queryWithdrawTickets={queryWithdrawTickets}
					UserInfo={UserInfo}
					cancelWithdraw={cancelWithdraw}
					WithdrawTickets={WithdrawTickets} />
				break;
		}

		return (
			<HBTransaction visible={visible}>
				<OptionRow>
					<OptionColumn
						onClick={() => {
							this.handleClickTab(1);
						}}
						active={activeTab === 1 ? `active` : ``}
					>
						Open Orders
					</OptionColumn>
					<OptionColumn
						onClick={() => {
							this.handleClickTab(2);
						}}
						active={activeTab === 2 ? `active` : ``}
					>
						Filled Orders
					</OptionColumn>
					<OptionColumn
						onClick={() => {
							this.handleClickTab(3);
						}}
						active={activeTab === 3 ? `active` : ``}
					>
						Inactive Orders
					</OptionColumn>
					<OptionColumn
						onClick={() => {
							this.handleClickTab(4);
						}}
						active={activeTab === 4 ? `active` : ``}
					>
						Withdraw Status
					</OptionColumn>
				</OptionRow>
				{tabContent}
			</HBTransaction>
		);
	}
}

export default Transaction;
