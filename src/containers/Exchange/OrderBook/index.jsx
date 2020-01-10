import React, { Component } from 'react';
import { Scrollcontent } from './../../../components/HBCard';
import _ from 'lodash'

import { propTypes, defaultProps } from './index.props';

import {
	HBOrderBook,
	HBOrderBookHead,
	HBOrderBookItem,
	HBOrderBookItemAnimate,
	HBOrderBookSpread,
	Row,
	ListCont
} from '../../../components/HBExchange/HBOrderBook';
import {
	Scrollable,
	View, 
	HorizontalTrack, 
	HorizontalThumb, 
	VerticalTrack, 
	VerticalThumb
} from '../../../components/Base/Scrollable';

import { formatNumberToLocale } from './../../../helpers';
class OrderBook extends Component {
	centerOrderBookTimeout = null
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillUnmount () {
		const { centerOrderBook } = this
		if (centerOrderBook) {
			clearTimeout(centerOrderBook)
		}
	}

	componentDidUpdate = (prevProps) => {
		const { SelectedTickerDataBasic: { Data: prevTicker } } = prevProps
		const {SelectedTickerDataBasic} = this.props
		const {SelectedTickerDataBasic: { Data: ticker, Completed } } = this.props

		if (Completed && _.get(prevTicker, 'InstrumentId') !== _.get(ticker, 'InstrumentId')) {
			// this.centerOrderBook()
		}
	}

	componentDidMount() {
		this.centerOrderBook = setTimeout(this.centerOrderBook, 2000)
	}

	centerOrderBook(options) {
		document.getElementById('center-order-book').scrollIntoView({
			block: 'center'
		})
	}

	orderBookItemClicked = (price) => {
		// this.props.callback(price);
		// console.log(price, "orderBookItemClicked")
	};

	render() {
		const { OrderBookData: { Buy, Sell, TotalOrderQuantity }, SelectedTickerDataBasic } = this.props;

		let Product1Symbol = ``,
			Product2Symbol = ``,
			spreadSymbol = ``;
		if (SelectedTickerDataBasic.Completed) {
			Product1Symbol = `(${SelectedTickerDataBasic.Data.Product1Symbol})`;
			Product2Symbol = `(${SelectedTickerDataBasic.Data.Product2Symbol})`;
			spreadSymbol = SelectedTickerDataBasic.Data.Product2Symbol;
		}

		const blankSell = 15 - Sell.length;
		const blankBuy = 15 - Buy.length;

		let blankSellDisplay = [];
		let blankBuyDisplay = [];
		for (let i = 0; i < blankSell; i++) {
			blankSellDisplay.push(
				<HBOrderBookItem key={i}>
					<HBOrderBookItemAnimate sell style={{ width: 0 }} />
					<span className="sell" children="-" />
					<span children="-" />
				</HBOrderBookItem>
			);
		}
		for (let i = 0; i < blankBuy; i++) {
			blankBuyDisplay.push(
				<HBOrderBookItem key={i}>
					<HBOrderBookItemAnimate buy style={{ width: 0 }} />
					<span className="buy" children="-" />
					<span children="-" />
				</HBOrderBookItem>
			);
		}
		const sell = Sell.map((item, key) => (
			<HBOrderBookItem
				key={key}
				onClick={() => {
					this.orderBookItemClicked(formatNumberToLocale(item.price, 8));
				}}
			>
				<HBOrderBookItemAnimate sell style={{ width: item.positionSum / TotalOrderQuantity * 100 }} />
				<span className="sell">
					{formatNumberToLocale(item.price, spreadSymbol === 'TUSD' ? 8 : 8)}
				</span>
				<span>{formatNumberToLocale(item.quantity, 8)}</span>
				{/*<span>{item.orders} - {item.traders}</span>*/}
			</HBOrderBookItem>
		));

		const buy = Buy.map((item, key) => (
			<HBOrderBookItem
				key={key}
				onClick={() => {
					this.orderBookItemClicked(formatNumberToLocale(item.price, 8));
				}}
			>
				<HBOrderBookItemAnimate buy style={{ width: item.positionSum / TotalOrderQuantity * 100 }} />
				<span className="buy">
					{formatNumberToLocale(item.price, spreadSymbol === 'TUSD' ? 8 : 8)}
				</span>
				<span>{formatNumberToLocale(item.quantity, 8)}</span>
				{/*<span>{item.orders} - {item.traders}</span>*/}
			</HBOrderBookItem>
		));
		let spread = 0;
		if (Buy.length && Sell.length) {
			spread = formatNumberToLocale(Sell[Sell.length - 1].price - Buy[0].price, spreadSymbol === 'TUSD' ? 2 : 8);
		}

		return (
			<HBOrderBook>
				<HBOrderBookHead>
					<span>Price {Product2Symbol}</span>
					<span>Quantity {Product1Symbol}</span>
				</HBOrderBookHead>
				<ListCont>
					<Scrollable
					autoHide={true}
					hideTracksWhenNotNeeded={true}
					autoHeightMax={'100%'}
					universal={true}
					renderView={props => <View {...props} />}
					renderTrackHorizontal={props => <HorizontalTrack {...props} />}
					renderThumbHorizontal={props => <HorizontalThumb {...props} />}
					renderTrackVertical={props => <VerticalTrack {...props} />}
					renderThumbVertical={props => <VerticalThumb {...props} />} >
						{blankSellDisplay}
						{sell}
						<HBOrderBookSpread id="center-order-book">
							{spread} {spreadSymbol} spread
						</HBOrderBookSpread>
						{buy}
						{blankBuyDisplay}
					</Scrollable>
				</ListCont>
			</HBOrderBook>
		);
	}
}

export default OrderBook;
