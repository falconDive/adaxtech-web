import React, { Component } from 'react';

import { HBInstrumentSelect, HBPair, HBPairColumn, InstrumentTabs } from './../../../components/HBExchange/HBInstrumentSelect';
import { formatNumberToLocale } from './../../../helpers';
import { PAIRSID } from './../../../helpers/config';
import Tab from '../../../components/Tab'
import LineChart from '../Charts/LineChart';

class InstrumentSelect extends Component {
    orderTypeItems = [{
        children: 'BTC'
    }, {
        children: 'ETH'
    }, {
		children: 'TUSD'
	}, {
        children: 'USDT'
    }]

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			selectedInstrument: 3, 
			listInstrument: []
		};
	}

	componentDidMount() {
		let tabNumber = parseInt(localStorage.getItem('SetAmountByZero'));
		if (isNaN(tabNumber)) {
			tabNumber = this.state.activeTab;
		}
		this.setState({ activeTab: tabNumber });
		// this.getInstrument(tabNumber);

		let instrumentId = +window.localStorage.getItem(`InstrumentId`)
			? PAIRSID.includes(+window.localStorage.getItem(`InstrumentId`))
				? +window.localStorage.getItem(`InstrumentId`)
				: 3
			: 3;

		if (isNaN(instrumentId)) {
			instrumentId = this.state.selectedInstrument;
		}
		this.handleSelectInstrument({ InstrumentId: instrumentId, lastSelectedInstrumentId: instrumentId });
	}

	getInstrument = (activeTab) => {
		const { InstrumentsTickerData } = this.props;
		const sorted = InstrumentsTickerData[activeTab];
		let list = [];
		sorted
			.map((elm, key) => {
				list.push({
					Pair: elm.Product1Symbol + '/' + elm.Product2Symbol,
					InstrumentId: elm.InstrumentId,
					LastPrice: elm.LastTradedPx.toFixed(8),
					HRChange: elm.Rolling24HrPxChange.toFixed(2) + '%',
					HRVolume: elm.Rolling24HrVolume.toFixed(2)
				});
			})
			.filter((obj) => {
				return obj !== false;
			});
		list.reverse();
		this.setState({ listInstrument: list });
	};

	handleClickTab = (val) => {
		this.setState({ activeTab: (val + 1) });
	};

	simulateMouseClick = (element) => {
		const mouseClickEvents = [ 'mousedown', 'click', 'mouseup' ];
		mouseClickEvents.forEach((mouseEventType) =>
			element.dispatchEvent(
				new MouseEvent(mouseEventType, {
					view: window,
					bubbles: true,
					cancelable: true,
					buttons: 1
				})
			)
		);
	};

	handleSelectInstrument = ({ InstrumentId, lastSelectedInstrumentId }) => {
		let els = document.querySelectorAll('div.rc-slider-step span.rc-slider-dot-active');
		if (els.length > 1) {
			let el = document.querySelector("div.rc-slider-step span[style='left: 0%;']");
			if (el) {
				this.simulateMouseClick(el);
			}
		}

		this.props.selectInstrument({ InstrumentId, lastSelectedInstrumentId });
		this.setState({ selectedInstrument: InstrumentId });
		localStorage.setItem('InstrumentId', InstrumentId);
	};

	filterList(event) {
		this.setState({ searchInstrument: event.target.value });
	}

	render() {
		const { activeTab, selectedInstrument, searchInstrument } = this.state;
		const { InstrumentsTickerData, SelectedTickerDataBasic } = this.props;
		let lists = null
		if (InstrumentsTickerData.Completed && activeTab) {
			lists = InstrumentsTickerData[activeTab]
				.filter(
					(obj) =>
						searchInstrument
							? obj.Symbol.toUpperCase().startsWith(searchInstrument.toUpperCase()) ||
								obj.Symbol.toUpperCase().endsWith(searchInstrument.toUpperCase())
							: // obj.Symbol.toUpperCase().indexOf(searchInstrument.toUpperCase())
								true
				)
				.map((obj, i) => {
					return (
						<tr
							key={i}
							columns={4}
							className={selectedInstrument === obj.InstrumentId ? `active` : ``}
							onClick={() => {
								this.handleSelectInstrument({
									InstrumentId: obj.InstrumentId,
									lastSelectedInstrumentId: SelectedTickerDataBasic.Data.InstrumentId
								});
							}}
						>
							<td>{obj.Product1Symbol + '/' + obj.Product2Symbol}</td>
							<td>
								{formatNumberToLocale(obj.LastTradedPx, obj.Product2DecimalPlaces)}
							</td>
							<td>{formatNumberToLocale(obj.Rolling24HrPxChange, 2) + '%'}</td>
							<td>{formatNumberToLocale(obj.Rolling24HrVolume, 5)}</td>
						</tr>
					);
				});
		}

		return (
			<HBInstrumentSelect>
				<InstrumentTabs>
                	<Tab items={this.orderTypeItems} onChange={this.handleClickTab} />
				</InstrumentTabs>
				{/*<div>
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Search"
						onChange={this.filterList.bind(this)}
						style={{ padding: `0 15px` }}
					/>
				</div>*/}

				<div className="col-wrap">
					<table className="instruments">
						<thead>
							<tr>
								<td>Pair</td>
								<td>Last Price</td>
								<td>24H Change</td>
								<td>24H Volume</td>
							</tr>
						</thead>
						<tbody>
							{lists}
						</tbody>
					</table>

					<div className="chart">
						<LineChart height="100px" />
					</div>
				</div>
			</HBInstrumentSelect>
		);
	}
}

export default InstrumentSelect;
