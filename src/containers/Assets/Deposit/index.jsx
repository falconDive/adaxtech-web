import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { Table, Input, Icon, Dropdown, Popup } from 'semantic-ui-react';
import { QRCode } from 'react-qr-svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import HBDropdown from './../../Components/HBDropdown'
import {
	HBDeposit,
	HBDepositLabel,
	CoinWrap,
	QRCodeWrap,
	QRCodeWrapBody
} from './../../../components/HBAssets/HBDeposit';
import { HBDropdownStyle } from './../../../components/HBDropdown';
import { HBButton } from './../../../components/HBButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExportToCsv } from 'export-to-csv';

// import { Products } from './../../../selectors/containers/products-data-container'
// import { DepositTicketsBySelected } from './../../../selectors/containers/user-transaction-data-container'
// import { getDepositInfo, clearDepositInfo, queryDepositTickets } from './../../../actions/user-transaction-actions'

import { formatNumberToLocale, getTimeFormatEpoch } from './../../../helpers';

import Close from './../../../assets/close.svg';

class Deposit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedText: `Select Token`,
			selectedValue: 0,
			disableExport: true
		};
	}
	handleSelectToken = (e, { value, options }) => {
		const { AccountInfo } = this.props;
		const selectedText = options.find((i) => i.value === value);
		if (selectedText.value) {
			this.setState({ selectedText: selectedText.text, selectedValue: value });
			this.props.getDepositInfo({ AccountId: AccountInfo.Data.AccountId, ProductId: value });
		}
		if (this.props.DepositTickets) {
			this.setState({ disableExport: false });
		} else {
			this.setState({ disableExport: true });
		}
	};
	handlenGenerateNewAddress = () => {
		const { selectedValue } = this.state;
		const { AccountInfo } = this.props;
		this.props.getDepositInfo({
			AccountId: AccountInfo.Data.AccountId,
			ProductId: selectedValue,
			GenerateNewKey: true
		});
	};

	copyCode() {
		toast.success('Copied to clipboard', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true
		});
	}

	hanldePageClick = (page) => {
		const query = this.props.DepositTickets.Query;
		query.page = page;
		this.props.queryDepositTickets(query);
	};

	handleClickExportData = (e) => {
		// let data =this.props.DepositTickets.Data.map(item=>{
		let data = this.props.DepositTickets.AllData.map((item) => {
			return {
				Coin: item.AssetSymbol,
				Amount: formatNumberToLocale(item.Amount, item.DecimalPlaces),
				'Date & Time': getTimeFormatEpoch(item.CreatedTimestamp),
				Status: item.Status,
				Information: item.RequestCode
			};
		});

		const options = {
			fieldSeparator: ',',
			quoteStrings: '"',
			decimalSeparator: '.',
			showLabels: true,
			showTitle: true,
			filename: 'Deposit History',
			title: 'Deposit History',
			useTextFile: false,
			useBom: true,
			useKeysAsHeaders: true
			// headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
		};
		const csvExporter = new ExportToCsv(options);

		csvExporter.generateCsv(data);
	};

	render() {
		const { disableExport, selectedValue, selectedText } = this.state;
		const { Products, DepositInfo, DepositTickets } = this.props;

		let latestDepositInfo = ``;
		let trigger = <span>{selectedText}</span>;
		if (DepositInfo.Data && DepositInfo.Data.DepositInfo && DepositInfo.Data.DepositInfo.length) {
			latestDepositInfo = DepositInfo.Data.DepositInfo[DepositInfo.Data.DepositInfo.length - 1];
		}

		let List = null;
		if (DepositTickets.Completed) {
			List = DepositTickets.Data.map((item) => {
				return (
					<Table.Row key={item.TicketNumber}>
						<Table.Cell style={{ display: 'flex' }}>
							<img src={item.CryptoIcon} alt="" height="40" />
							<span style={{ alignSelf: 'center', marginLeft: '10px' }}>{item.AssetSymbol}</span>
						</Table.Cell>
						<Table.Cell>{formatNumberToLocale(item.Amount, item.DecimalPlaces)}</Table.Cell>
						<Table.Cell>{getTimeFormatEpoch(item.CreatedTimestamp)}</Table.Cell>
						<Table.Cell>{item.Status}</Table.Cell>
						<Table.Cell>Request Code: {item.RequestCode}</Table.Cell>
						{/* <Table.Cell>
                        <div>Address: jaklsdjflaksdjlfkklljdklfjlaksjdkfljlaskdjfklasdlfkj</div>
                    </Table.Cell> */}
					</Table.Row>
				);
			});
		}
		let selectOptions = [];
		if (Products.Completed) {
			selectOptions = Products.Data.map((p) => {
				return { key: p.ProductId, text: p.Product, value: p.ProductId };
			});

			if (DepositInfo.Data) {
				const selectedAsset = Products.Data.find((i) => i.ProductId === DepositInfo.Data.AssetId);
				if (selectedAsset) {
					trigger = <span>{selectedAsset.Product}</span>;
				}
			}
		}
		selectOptions.unshift({ key: 0, text: `Select token`, value: 0 });

		const firstPage = DepositTickets.Pages.filter((i) => i.tag === `first`).map((obj, key) => {
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
		const lastPage = DepositTickets.Pages.filter((i) => i.tag === `last`).map((obj, key) => {
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
		const pages = DepositTickets.Pages.filter((i) => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
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
			<HBDeposit>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				/>
				<div className={`close-screen`}>
					<Link to={`/account/assets`}>
						<img src={Close} alt="" />
					</Link>{' '}
					<h3>Deposit</h3>
				</div>
				<CoinWrap>
					<HBDepositLabel>Select Token</HBDepositLabel>
					{/* <HBDropdown onChange={this.handleSelectToken} options={selectOptions} width={`full`} /> */}

					<HBDropdownStyle className={`HBDropdownStyle`}>
						<Dropdown
							trigger={trigger}
							options={selectOptions}
							onChange={this.handleSelectToken}
							value={selectedText}
						/>
					</HBDropdownStyle>
					<QRCodeWrap>
						<div className={`QRCodeSample`}>
							<QRCode
								bgColor="#FFFFFF"
								fgColor="#000000"
								level="Q"
								style={{ width: 170 }}
								value={latestDepositInfo}
							/>
						</div>
						<QRCodeWrapBody>
							<Input>
								<Input readOnly type="text" value={latestDepositInfo} />
								<CopyToClipboard text={latestDepositInfo}>
									<HBButton
										disabled={selectedValue === 0}
										bsstyle="center"
										default="border"
										size="small"
										border="theme"
										onClick={this.copyCode}
									>
										Copy
									</HBButton>
								</CopyToClipboard>
							</Input>
							<Popup
								trigger={
									<HBButton
										disabled={selectedValue === 0}
										bsstyle="center"
										default="border"
										size="small"
										border="theme"
										onClick={this.handlenGenerateNewAddress}
									>
										<Icon name="repeat" />
									</HBButton>
								}
								content="Generate a new address"
							/>
						</QRCodeWrapBody>
						<p>
							<strong>Instructions:</strong>Deposit only “token name” to this deposit address, sending
							other tokens to this address may result in the loss of your deposit.
						</p>
					</QRCodeWrap>
				</CoinWrap>

				<div style={{ display: 'flex' }}>
					<div style={{ flex: '1' }}>
						<HBDepositLabel size={`md`}>Deposit History</HBDepositLabel>
					</div>
					<div style={{ marginTop: '-20px' }}>
						<HBButton
							onClick={this.handleClickExportData}
							disabled={disableExport}
							bsstyle="center"
							default="border"
							size="small"
							style={{ width: '110px' }}
						>
							Export
						</HBButton>
					</div>
				</div>

				<Scrollbars
					onScroll={this.handleScroll}
					onScrollFrame={this.handleScrollFrame}
					onScrollStart={this.handleScrollStart}
					onScrollStop={this.handleScrollStop}
					onUpdate={this.handleUpdate}
					renderView={this.renderView}
					renderTrackHorizontal={this.renderTrackHorizontal}
					renderThumbHorizontal={this.renderThumbHorizontal}
					autoHideTimeout={1000}
					autoHideDuration={200}
					autoHeight
					autoHeightMin={280}
					autoHeightMax={280}
					thumbMinSize={30}
					universal={true}
				>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell className="bg-black">Coin</Table.HeaderCell>
								<Table.HeaderCell className="bg-black">Amount</Table.HeaderCell>
								<Table.HeaderCell className="bg-black">Date & Time</Table.HeaderCell>
								<Table.HeaderCell className="bg-black">Status</Table.HeaderCell>
								<Table.HeaderCell className="bg-black">Information</Table.HeaderCell>
								{/* <Table.HeaderCell className="bg-black">Information</Table.HeaderCell> */}
							</Table.Row>
						</Table.Header>

						<Table.Body>{List}</Table.Body>
					</Table>
				</Scrollbars>

				<div style={{ textAlign: 'right' }}>
					{firstPage}
					{pages}
					{lastPage}
				</div>
			</HBDeposit>
		);
	}
}

// const mapStateToProps = state => ({
//     AccountInfo: state.UserData.AccountInfo,
//     Products: Products(state),
//     DepositInfo: state.UserTransactions.DepositInfo,
//     DepositTickets: DepositTicketsBySelected(state)
// })

// export default connect(mapStateToProps, {
//     getDepositInfo,
//     clearDepositInfo,
//     queryDepositTickets
// })(Deposit);
export default Deposit;
