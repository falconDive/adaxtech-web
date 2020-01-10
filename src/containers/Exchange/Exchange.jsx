import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Loadable from '../../HOC/Loadable';
import Tab from '../../components/Tab'
import { HBContainer } from '../../components/Base';
import { HBCard, ScrollContent } from '../../components/HBCard';
import MainChart from './Charts/MainChart';

import {
	HBExchange,
	HBExchangeHeader,
	HBExchangeHeaderColumn,
	HBExchangeRow,
	HBExchangeColumn
} from './../../components/HBExchange';
import {
	AdxExchange,
	FirstCol,
	SecondCol,
	ThirdCol,
	Chart,
	BottomTab,
	ThirdColTabNav,
	TradeHistoryCol,
	ChartWrapper,
	Header,
	Content
} from './../../components/AdxExchange';

import Logo from './../../assets/logo.svg';
import Menu from './../../assets/menu.svg';
import Close from './../../assets/close.svg';
import Logout from './../../assets/logout.svg';

const InstrumentSelect = Loadable({
	loader: () => import(`./InstrumentSelect`)
});

const WalletBalance = Loadable({
	loader: () => import(`./WalletBalance`)
});

const OrderForm = Loadable({
	loader: () => import(`./OrderForm`)
});

const OrderBook = Loadable({
	loader: () => import(`./OrderBook`)
});

const PriceChart = Loadable({
	loader: () => import(`./PriceChart`)
});

const StoMarket = Loadable({
	loader: () => import(`./StoMarket`)
});

const TradeHistory = Loadable({
    loader: () => import(`./TradeHistory`)
})

const Transaction = Loadable({
	loader: () => import(`./Transaction/Transaction`)
});

const TickerHeader = Loadable({
	loader: () => import(`./TickerHeader`)
});

const TokenDetail = Loadable({
	loader: () => import(`./TokenDetail`)
});

const TokenDetailPreview = Loadable({
	loader: () => import(`./TokenDetailPreview`)
});

class Exchange extends Component {
    thirdRowTabItems = [{
        children: 'Chart'
    }, {
        children: 'Orders'
    }, {
        children: 'STO Markets'
    }]

	constructor(props) {
		super(props);
		this.state = {
			priceString: 0,
			thirdRowActiveTab: 0,
			chartData: {
				main: {}
			}
		};
	}

	componentDidUpdate (prevProps) {
		const { SelectedInstrumentData: { InstrumentId : prevInstrumentId }, SubscribeTickerData : prevSubscribeTickerData } = prevProps
		const { SelectedInstrumentData: { InstrumentId }, SubscribeTickerData } = this.props
		const {ohlc} = this.state.chartData.main

		if (SubscribeTickerData.Completed && SubscribeTickerData.Completed !== prevSubscribeTickerData.Completed) {
			this.loadChartData()
		}
	}

	componentDidMount () {
		// this.props.subscribeTrades({ InstrumentId: 1 })
	    // this.props.subscribeLevel2({ InstrumentId: 1, Depth: 250 })
	    // this.props.closeSideBar({ Open: false })

		this.props.closeSideBar({ Open: false });
		// this.chartDataInterval = setInterval(this.loadChartData, 300000)
	}

	componentWillUnmount() {
		if (this.chartDataInterval) {
			clearInterval(this.chartDataInterval)
		}
	}

	formOrderBook(priceValue) {
		this.setState({
			priceString: priceValue
		});
	}

	handleClickTab = (thirdRowActiveTab) => {
		this.setState({ thirdRowActiveTab })
	}

	loadChartData = () => {
		const { SelectedInstrumentData: { InstrumentId }, RawSubscribeTickerData: { Data } } = this.props

		let mainChart = {
			ohlc: [],
			volume: []
		};

		Data.forEach(info => {
			const [ date, high, low, open, close, volume, bidPrice, askPrice ] = info;

			mainChart.ohlc.push([
				date,
				open,
				high,
				low,
				close,
			]);

			mainChart.volume.push([
				date, 
				volume
			])
		})

		this.setState({
			chartData: {
				main: mainChart
			}
		})
	}

	render() {
		const activeRoute = window.location.pathname.split('/')[3];
		const {
			InstrumentsData,
			TradeData,
			OrderBookData,
			OpenOrders,
			AccountTrades,
			OrderHistoryCancelled,
			WithdrawTickets,
			InstrumentsTickerData,
			selectInstrument,
			logoutUser,
			queryAccountTrades,
			toggleSideBar,
			SideBar,
			UserInfo,
			SubscribeTickerData,
			AccountPositions,
			SelectedAccountPosition,
			OrderFeeData,
			ConversionTable,
			SelectedInstrumentData,
			cancelWithdraw,
			cancelOrder,
			queryOpenOrders,
			queryInactiveOrderHistory,
			queryWithdrawTickets,
			getOrderFee,
			sendOrder,
			match
		} = this.props;
		const { thirdRowActiveTab, chartData } = this.state
		let thirdRowTabContent = null

		return (
			<AdxExchange>
				{activeRoute !== `preview` ? (
					<Fragment>
						<FirstCol>
							<div className="header">Order Form</div>
							<div className="content">
								<WalletBalance SelectedAccountPosition={SelectedAccountPosition} />
								<OrderForm
									routerHistory={this.props.history}
									sendOrder={sendOrder}
									getOrderFee={getOrderFee}
									SelectedAccountPosition={SelectedAccountPosition}
									OrderFeeData={OrderFeeData}
									OrderBookData={OrderBookData}
									InstrumentsTickerData={InstrumentsTickerData}
									SelectedTickerDataBasic={InstrumentsTickerData.Selected}
									AccountPositions={AccountPositions}
									priceFromOrderBook={this.state.priceString}
									ConversionTable={ConversionTable} />
							</div>
						</FirstCol>
						<SecondCol>
							<div className="header">Order Book</div>
							<div className="content">
								<OrderBook
									SelectedTickerDataBasic={InstrumentsTickerData.Selected}
									OrderBookData={OrderBookData}
									callback={this.formOrderBook.bind(this)}
								/>
							</div>
						</SecondCol>
						<ThirdCol>
							<div className="header">Instruments</div>
							<div className="content">
								<InstrumentSelect
									selectInstrument={selectInstrument}
									SelectedTickerDataBasic={InstrumentsTickerData.Selected}
									InstrumentsTickerData={InstrumentsTickerData.Data}
								/>

								<ThirdColTabNav>
                					<Tab items={this.thirdRowTabItems} onChange={this.handleClickTab} />
								</ThirdColTabNav>

								<Chart visible={thirdRowActiveTab == 0}>
									<TickerHeader TickerDataBasic={InstrumentsTickerData.Selected} />
									<ChartWrapper>
										<MainChart 
											height={(4 / 6.4 * 100) + '%'} 
											seriesData={chartData.main} 
											SelectedInstrument={SelectedInstrumentData} />
									</ChartWrapper>
								</Chart>
								<Transaction
									visible={thirdRowActiveTab == 1}
									AccountTrades={AccountTrades}
									OpenOrders={OpenOrders}
									OrderHistoryCancelled={OrderHistoryCancelled}
									WithdrawTickets={WithdrawTickets}
									UserInfo={UserInfo}
									cancelOrder={cancelOrder}
									cancelWithdraw={cancelWithdraw}
									queryInactiveOrderHistory={queryInactiveOrderHistory}
									queryAccountTrades={queryAccountTrades}
									queryWithdrawTickets={queryWithdrawTickets}
									queryOpenOrders={queryOpenOrders} />
								<StoMarket visible={thirdRowActiveTab == 2} />

								{/* <TokenDetail /> */}
							</div>
						</ThirdCol>
			            <TradeHistoryCol>
			                <div className="header">Trade History</div>
			                <div className="content">
								<TradeHistory TradeData={TradeData} selectedInstrument={SelectedInstrumentData} instrumentsData={InstrumentsData} />
			                </div>
			            </TradeHistoryCol>
					</Fragment>
				) : (
					''
				)}
				<Switch>
					<Route path={`${match.url}/preview`} component={TokenDetailPreview} />
				</Switch>
			</AdxExchange>
		);
	}
}

export default Exchange;
