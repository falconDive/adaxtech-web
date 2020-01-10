import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Dimmer, Loader, Table, Input, Icon, Dropdown } from 'semantic-ui-react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { HBWithdraw, HBWithdrawLabel, CoinWrap, Instruction } from './../../../components/HBAssets/HBWithdraw';
import { HBDropdownStyle } from './../../../components/HBDropdown';
import { HBButton } from './../../../components/HBButton';
import { HBForm, HBFormGroup } from './../../../components/HBForm';
import { HBModal } from './../../../components/HBModal';
import { ExportToCsv } from 'export-to-csv';
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';

import { WithdrawNotification } from './../../../services/NotificationServices';
import { formatNumberToLocale, getTimeFormatEpoch, getDecimalPrecision, parseNumberToLocale } from './../../../helpers';
import {
	HBModalCustomize,
	HBModalCustomizeHeader,
	HBModalCustomizeContent,
	HBModalCustomizeActions
} from './../../../components/HBModalCustomize';

import Close from './../../../assets/close.svg';
import IconClose from './../../../assets/two-fa/close.png';
import instruments from '../../../sagas/instruments-saga';

class Withdraw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedText: 'Select Token',
			selectedValue: 0,
			amount: 0,
			amountString: '',
			ExternalAddress: ''
		};
		this.notificationDOMRef = React.createRef();
	}
	componentDidMount() {
		WithdrawNotification.filter((i) => i).subscribe((obj) => {
			if (obj.result) {
				this.setState({
					amount: 0,
					ExternalAddress: ``
				});
				this.addNotification({
					title: `Success`,
					message: `Withdraw success, Please check your email to confirm. Request Code : ${obj.detail}`,
					type: `success`
				});
			} else {
				this.addNotification({ title: `${obj.errormsg}`, message: `${obj.detail}`, type: `danger` });
			}
		});
	}
	addNotification = ({ title = ``, message = ``, type = `success` }) => {
		this.notificationDOMRef.current.addNotification({
			title: title,
			message: message,
			type: type,
			insert: 'top',
			container: 'top-right',
			animationIn: [ 'animated', 'fadeIn' ],
			animationOut: [ 'animated', 'fadeOut' ],
			dismiss: { duration: 5000 },
			dismissable: { click: true }
		});
	};
	hanldePageClick = (page) => {
		const query = this.props.WithdrawTickets.Query;
		query.page = page;
		this.props.queryWithdrawTickets(query);
	};
	handleSelectToken = (e, { value, options }) => {
		const { AccountInfo } = this.props;
		const selectedText = options.find((i) => i.value === value);
		if (selectedText.value) {
			this.setState({
				selectedText: selectedText.text,
				selectedValue: value
			});
			if (value !== this.state.selectedValue) {
				this.setState({
					amount: 0,
					ExternalAddress: '',
					amountString: ''
				});
			}
			// this.props.withdrawAsset({ AccountId: AccountInfo.Data.AccountId, ProductId: value })
			this.props.selectWithdrawAsset({ AccountId: AccountInfo.Data.AccountId, ProductId: value });
		}
	};
	handleClickWithdrawAsset = () => {
		const { AccountInfo, WithdrawTransaction, Products, WithdrawFee } = this.props;
		const { selectedValue, amount, ExternalAddress, amountString } = this.state;
		if (
			WithdrawTransaction &&
			WithdrawTransaction.TemplateTypes &&
			WithdrawTransaction.TemplateTypes.TemplateTypes.length
		) {
			if (ExternalAddress && amount && selectedValue) {
				const templateForm = {
					TemplateType: WithdrawTransaction.TemplateTypes.TemplateTypes[0],
					ExternalAddress,
					Comment: ``
				};
				let fee = 0
				if (Products.Completed && WithdrawFee.Data.SelectedAssetId && WithdrawFee.Data.SelectedAssetId === selectedValue && amountString) {
					const selectedFeeProduct = Products.Data.find(i => i.ProductId === WithdrawFee.Data.SelectedAssetId)
					if (selectedFeeProduct) {
						fee = WithdrawFee.Data.FeeAmount;
					}
				}
				const templateType = WithdrawTransaction.TemplateTypes.TemplateTypes[0];
				this.props.withdrawAsset({
					accountId: AccountInfo.Data.AccountId,
					productId: selectedValue,
					amount: amount - fee,
					templateForm,
					templateType
				});
			} else {
				this.addNotification({ title: `Invalid`, message: `Please supply data`, type: `danger` });
			}
		} else {
			this.addNotification({ title: `Invalid`, message: `Please supply data`, type: `danger` });
		}
	};

	handleChangeAmount = (e) => {
		const { value } = e.target;
		const { selectedValue, } = this.state;
		const state = {};

		state.amount = parseNumberToLocale(value);
		state.amountString = value;
		const amountDecimals = getDecimalPrecision(state.amount);
		if (amountDecimals <= 8 && !isNaN(state.amount)) {
			const { AccountInfo : { Data: {AccountId}} } = this.props
			this.props.getSendFundFee({ AccountId, ProductId: selectedValue, Amount: state.amount, })
			this.setState(state);
		}
	};

	handleChangeExternalAddress = (e) => {
		const { value } = e.target;
		this.setState({ ExternalAddress: value });
	};
	/**
     * handles export data 
     */
	handleClickExportData = (e) => {
		let data = this.props.WithdrawTickets.AllData.map((item) => {
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
			filename: 'Withrawal History',
			title: 'Withrawal History',
			useTextFile: false,
			useBom: true,
			useKeysAsHeaders: true
			// headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
		};
		const csvExporter = new ExportToCsv(options);

		csvExporter.generateCsv(data);
	};

	handleCloseModal = () => {
		const { WithdrawTransaction } = this.props;
		this.props.resetWithdrawAsset();
		if (WithdrawTransaction.Data) {
			if (WithdrawTransaction.Data.hasOwnProperty('result') && WithdrawTransaction.Data.result) {
				this.setState({ ExternalAddress: '', amountString: '', selectedValue: 0 });
			} else if (WithdrawTransaction.Data.hasOwnProperty('result') && !WithdrawTransaction.Data.result) {
				// invalid request
			}
		}
	};

	render() {
		const { WithdrawTickets, Products, WithdrawTransaction, WithdrawFee } = this.props;
		const { selectedText, ExternalAddress, amountString, selectedValue } = this.state;

		let feeProduct = '0.00';
		if (Products.Completed && WithdrawFee.Data.SelectedAssetId && WithdrawFee.Data.SelectedAssetId === selectedValue && amountString) {
			const selectedFeeProduct = Products.Data.find(i => i.ProductId === WithdrawFee.Data.SelectedAssetId)
			if (selectedFeeProduct) {
				feeProduct = `${formatNumberToLocale(WithdrawFee.Data.FeeAmount, 6)} ${selectedFeeProduct.Product}`;
			}
		}
		let selectOptions = [];
		let trigger = <span>{selectedText}</span>;
		if (Products.Completed) {
			selectOptions = Products.Data.map((p) => {
				return { key: p.ProductId, text: p.Product, value: p.ProductId };
			});

			// if (DepositInfo.Data) {
			//     const selectedAsset = Products.Data.find(i => i.ProductId === DepositInfo.Data.AssetId)
			//     if (selectedAsset) {
			//         trigger = (
			//             <span>
			//                 {selectedAsset.Product}
			//             </span>
			//         )
			//     }
			// }
		}
		let List = null;
		if (WithdrawTickets.Completed && selectedValue !== 0) {
			List = WithdrawTickets.Data.map((item) => {
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

		const firstPage = WithdrawTickets.Pages.filter((i) => i.tag === `first`).map((obj, key) => {
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
		const lastPage = WithdrawTickets.Pages.filter((i) => i.tag === `last`).map((obj, key) => {
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
		const pages = WithdrawTickets.Pages.filter((i) => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
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
			<HBWithdraw>
				<div className={`close-screen`}>
					<Link to={`/account/assets`}>
						<img src={Close} alt="" />
					</Link>{' '}
					<h3>Withdraw</h3>
				</div>
				<HBForm>
					<CoinWrap>
						<HBWithdrawLabel>Select Coin to Withdraw</HBWithdrawLabel>
						{/* <HBDropdown options={DDCurrency} /> */}

						<HBDropdownStyle className={`HBDropdownStyle`}>
							<Dropdown
								trigger={trigger}
								options={selectOptions}
								onChange={this.handleSelectToken}
								value={selectedText}
							/>
						</HBDropdownStyle>
						<HBFormGroup style={{ maxWidth: '528px' }}>
							<label>Enter Amount</label>
							<Input
								placeholder=""
								onChange={this.handleChangeAmount}
								value={amountString}
								type="number"
								step="0.00000001"
							/>
						</HBFormGroup>

						<HBFormGroup style={{ maxWidth: '528px' }}>
							<label>Fee</label>
							<span>{feeProduct}</span>
						</HBFormGroup>
						
						<HBFormGroup style={{ maxWidth: '528px' }}>
							<label>External Address</label>
							<Input
								placeholder=""
								type="text"
								onChange={this.handleChangeExternalAddress}
								value={ExternalAddress}
							/>
						</HBFormGroup>

						<Instruction>
							<p>Instructions:</p>
							<ol>
								<li>
									Please double check the external address before submission of the withdraw request.
								</li>
								<li>
									After submitting your withdraw request, we will send a confirmation email. Please
									click on the confirmation link in your email to confirm your withdrawal.
								</li>
								<li>
									Once confirmed your transaction will be processed, network confirmations may take up
									to 1 hour.
								</li>
							</ol>
							<HBButton
								onClick={this.handleClickWithdrawAsset}
								bsstyle="center"
								default="default"
								size="small"
								border="theme"
								style={{ maxWidth: '280px' }}
								disabled={WithdrawTransaction.Loading}
							>
								Withdraw
							</HBButton>
						</Instruction>
					</CoinWrap>
				</HBForm>

				<div style={{ display: 'flex' }}>
					<div style={{ flex: '1' }}>
						<HBWithdrawLabel size={`md`}>Withdraw History</HBWithdrawLabel>
					</div>
					<div style={{ marginTop: '-20px' }}>
						<HBButton
							onClick={this.handleClickExportData}
							bsstyle="center"
							default="border"
							size="small"
							style={{ width: '110px' }}
						>
							Export
						</HBButton>
					</div>
				</div>
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

				<div style={{ textAlign: 'right' }}>
					{firstPage}
					{pages}
					{lastPage}
				</div>
				<ReactNotification ref={this.notificationDOMRef} />
				<Modal
					closeOnEscape={true}
					closeOnDimmerClick={true}
					open={
						WithdrawTransaction.hasOwnProperty('Data') &&
						WithdrawTransaction.Data.hasOwnProperty('result') ? (
							true
						) : (
							false
						)
					}
					size="medium"
				>
					<HBModal style={{ maxWidth: '460px', margin: '0 auto' }}>
						<HBModalCustomize padding={'pl-huge'}>
							<HBModalCustomizeHeader>
								<h4>Withdraw funds</h4>
								<img
									src={IconClose}
									alt=""
									onClick={() => this.handleCloseModal()}
									className="icon-header icon-header--next"
								/>
							</HBModalCustomizeHeader>
							<HBModalCustomizeContent>
								<h5>
									{WithdrawTransaction.hasOwnProperty('Data') &&
									WithdrawTransaction.Data.hasOwnProperty('result') &&
									!WithdrawTransaction.Data.true ? (
										WithdrawTransaction.Data.detail
									) : (
										'Withdrawal successfully processed.'
									)}
								</h5>
							</HBModalCustomizeContent>
							<HBModalCustomizeActions>
								<HBButton
									bsstyle="center"
									default="default"
									size="small"
									border="theme"
									style={{ maxWidth: '100px', alignSelf: 'end' }}
									onClick={() => this.handleCloseModal()}
								>
									Close
								</HBButton>
							</HBModalCustomizeActions>
						</HBModalCustomize>
					</HBModal>
				</Modal>
			</HBWithdraw>
		);
	}
}

export default Withdraw;
