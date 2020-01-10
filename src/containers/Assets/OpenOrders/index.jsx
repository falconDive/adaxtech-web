import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Table, Icon } from 'semantic-ui-react';
import { ExportToCsv } from 'export-to-csv';

import HBDropdown from '../../Components/HBDropdown';
import {
	OrderList,
	FilterColumn
} from './../../../components/HBAssets/AdxOrderList';
import { 
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../components/Base/Scrollable';
import { AdxButton } from './../../../components/HBButton';
import { formatNumberToLocale, getTimeFormatEpoch } from './../../../helpers';
import closeMini from './../../../assets/close-mini.svg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class OpenOrders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowHight: 100
		};
	}

	ins = (v) => {
		let i = {
			ETHBTC: 'ETH/BTC',
			BTCETH: 'BTC/ETH',
			BTCUSD: 'BTC/USD',
			ETHUSD: 'ETH/USD',
			LTCBTC: 'LTC/BTC',
			HYBBTC: 'HYB/BTC',
			BCHBTC: 'BCH/BTC',
			XRPBTC: 'XRP/BTC',
			BCHETH: 'BCH/ETH',
			LTCETH: 'LTC/ETH',
			XRPETH: 'XRP/ETH',
			HYBETH: 'HYB/ETH',
			BTCHYB: 'BTC/HYB',
			BCHHYB: 'BCH/HYB',
			LTCHYB: 'LTC/HYB',
			XRPHYB: 'XRP/HYB',
			ETHHYB: 'ETH/HYB',
			HYBUSD: 'HYB/USD',
			LTCUSD: 'LTC/USD',
			NEOUSD: 'NEO/USD',
			XRPUSD: 'XRP/USD',
			BTCTUSD: 'BTC/TUSD',
			ETHTUSD: 'ETH/TUSD',
			LTCTUSD: 'LTC/TUSD',
			BCHTUSD: 'BCH/TUSD',
			HYBTUSD: 'HYB/TUSD',
			XRPTUSD: 'XRP/TUSD',
			BT_BTCTUSD: 'BT_BTC/TUSD',
			BT_ETHTUSD: 'BT_ETH/TUSD',
			BT_BCHTUSD: 'BT_BCH/TUSD',
			BT_LTCTUSD: 'BT_LTC/TUSD',
			BT_XRPTUSD: 'BT_XRP/TUSD',
			BT_HYBTUSD: 'BT_HYB/TUSD',
			H20BTC: 'H20/BTC',
			Test_BTCTUSD: 'Test_BTCTUSD'
		};
		return i[v];
	};

	handleResize = () => {
		this.setState({ windowHeight: window.innerHeight - 80 });
	};

	componentDidMount() {
		this.setState({ ins: window.innerHeight - 80 });
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		this.props.clearQueryOpenOrders();
	}

	hanldePageClick = (page) => {
		const query = this.props.openOrderData.Query;
		query.page = page;
		this.props.queryOpenOrders(query);
	};

	handleCancelOrder = ({ OrderId, AccountId }) => {
		this.props.cancelOrder({ OrderId: OrderId, AccountId: AccountId });
	};

	handleChangeQueryInstrument = (val) => {
		const { advanceQueryOpenOrders, openOrderData } = this.props;
		openOrderData.AdvanceQuery.filter.InstrumentId = val;
		advanceQueryOpenOrders(openOrderData.AdvanceQuery);
	};

	handleChangeQuerySide = (val) => {
		const { advanceQueryOpenOrders, openOrderData } = this.props;
		openOrderData.AdvanceQuery.filter.Side = val;
		advanceQueryOpenOrders(openOrderData.AdvanceQuery);
	};

	handleChangeQueryType = (val) => {
		const { advanceQueryOpenOrders, openOrderData } = this.props;
		openOrderData.AdvanceQuery.filter.Type = val;
		advanceQueryOpenOrders(openOrderData.AdvanceQuery);
	};

    handleChangeQueryStatus = (val) => {
        const { advanceQueryOpenOrders, openOrderData } = this.props
        openOrderData.AdvanceQuery.filter.Status = val
        advanceQueryOpenOrders(openOrderData.AdvanceQuery)
    }

	handleClickExportData = () => {
		const { openOrderData } = this.props;
		if (openOrderData.Completed) {
			const options = {
				fieldSeparator: ',',
				quoteStrings: '"',
				decimalSeparator: '.',
				showLabels: true,
				showTitle: false,
				title: 'Open Orders',
				useTextFile: false,
				useBom: true,
				useKeysAsHeaders: true
				// headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
			};
			const csvExporter = new ExportToCsv(options);

			let data = openOrderData.ExportData.map((obj) => {
				return {
					Account: obj.Account,
					Instrument: this.ins(obj.Symbol),
					Side: obj.Side,
					Type: obj.OrderType,
					Quantity: obj.Quantity,
					Price: formatNumberToLocale(obj.Price),
					'Date & Time': getTimeFormatEpoch(obj.ReceiveTime),
					Status: obj.OrderState === `Working` ? `Open` : obj.OrderState
				};
			});

			if (data.length) {
				csvExporter.generateCsv(data);
				return;
			}
			toast.info(`Empty collection`, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
		}
	};

	render() {
		const { ins, visible } = this.props;
		const DDSide = [
			{ key: 1, text: 'All', value: '' },
			{ key: 2, text: 'Buy', value: 'Buy' },
			{ key: 3, text: 'Sell', value: 'Sell' }
		];

		const DDType = [
			{ key: 1, text: 'All', value: '' },
			{ key: 2, text: 'Market', value: 'Market' },
			{ key: 3, text: 'Market Limit', value: 'Limit' }
		];

        const DDStatus = [
            { key: 1, text: 'All', value: '' },
            { key: 2, text: 'Working', value: 'Working' },
            { key: 3, text: 'Rejected', value: 'Rejected' },
            { key: 4, text: 'Canceled', value: 'Canceled' },
            { key: 5, text: 'Expired', value: 'Expired' },
            { key: 6, text: 'FullyExecuted', value: 'FullyExecuted' },
        ]

		const { openOrderData, InstrumentsData } = this.props;
		const DDInstrument = InstrumentsData.Completed
			? InstrumentsData.Data.map((obj) => {
					let name = obj.Product1Symbol + '/' + obj.Product2Symbol;
					return { key: obj.InstrumentId, text: name, value: obj.InstrumentId };
				})
			: [];
			
		DDInstrument.unshift({ key: 0, text: 'All', value: '' });

		let Lists = null;
		if (openOrderData.Completed) {
			Lists = openOrderData.Data.map((obj, key) => {
				return (
					<tr key={key}>
						<td>{obj.Account}</td>
						<td>{this.ins(obj.Symbol)}</td>
						<td>{obj.Side}</td>
						<td>{obj.OrderType}</td>
						<td>{formatNumberToLocale(obj.Quantity)}</td>
						<td>{formatNumberToLocale(obj.Price)}</td>
						<td>{getTimeFormatEpoch(obj.ReceiveTime)}</td>
						<td>{obj.OrderState === `Working` ? `Open` : obj.OrderState}</td>
						<td
							onClick={() => {
								this.handleCancelOrder(obj);
							}}
						>
							<img alt={``} src={closeMini} /> {`cancel`}
						</td>
					</tr>
				);
			});
		}

		// Lists = Array(100).fill('').map((v, i) => {
		// 	return <tr key={i}>
		// 		<td>879456</td>
		// 		<td>BTC/USD</td>
		// 		<td>Buy</td>
		// 		<td>Market</td>
		// 		<td>65.3245712</td>
		// 		<td>859.00345958</td>
		// 		<td>09/22/2018</td>
		// 		<td>Working</td>
		// 	</tr>
		// })

		const firstPage = openOrderData.Pages.filter((i) => i.tag === `first`).map((obj, key) => {
			return (
				<span
					className={`pagination-item`}
					key={key}
					onClick={() => {
						this.hanldePageClick(obj.page);
					}}
				>
					{' '}
					<Icon name="angle left" />{' '}
				</span>
			);
		});
		const lastPage = openOrderData.Pages.filter((i) => i.tag === `last`).map((obj, key) => {
			return (
				<span
					className={`pagination-item`}
					key={key}
					onClick={() => {
						this.hanldePageClick(obj.page);
					}}
				>
					{' '}
					<Icon name="angle right" />{' '}
				</span>
			);
		});
		const pages = openOrderData.Pages.filter((i) => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
			return (
				<span
					className={`pagination-item ${obj.selected ? `active` : ``}`}
					key={key}
					onClick={() => {
						this.hanldePageClick(obj.page);
					}}
				>
					{obj.page + 1}
				</span>
			);
		});

		return (
			<OrderList visible={visible}>
				<div className="filter-form">
					<div className="filter-column">
						<label>Instrument: </label>
						<HBDropdown options={DDInstrument} onChange={this.handleChangeQueryInstrument} />
					</div>
					<div className="filter-column">
						<label>Side: </label>
						<HBDropdown options={DDSide} onChange={this.handleChangeQuerySide} />
					</div>
					<div className="filter-column">
						<label>Type: </label>
						<HBDropdown options={DDType} onChange={this.handleChangeQueryType} />
					</div>
                    <div className="filter-column">
                        <label>Status:</label>
                        <HBDropdown options={DDStatus} onChange={this.handleChangeQueryStatus} />
                    </div>
					<div className="filter-column">
						<AdxButton
							onClick={this.handleClickExportData}
							bsstyle="center"
							default="border"
							size="small" >
							Export
						</AdxButton>
					</div>
				</div>
				<div className="list-container">
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
						<table>
							<thead>
								<tr>
									<th>Account</th>
									<th>Instrument</th>
									<th>Side</th>
									<th>Type</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Date & Time</th>
									<th>Status</th>
								</tr>
							</thead>

							<Table.Body>{Lists}</Table.Body>
						</table>
					</Scrollable>
				</div>
				{openOrderData.Data.length && openOrderData.Pages.length > 3 ? (
					<div style={{ textAlign: 'left' }}>
						{firstPage}
						{pages}
						{lastPage}
					</div>
				) : (
					``
				)}
			</OrderList>
		);
	}
}

export default OpenOrders;
