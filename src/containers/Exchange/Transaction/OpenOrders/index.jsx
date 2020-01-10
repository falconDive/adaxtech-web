import React, { Component, Fragment } from 'react';
import { Header, Input, Popup, Grid, Icon } from 'semantic-ui-react';
import { HBForm, HBFormGroup } from '../../../../components/HBForm';

import { formatNumberToLocale, getTimeFormatEpoch } from './../../../../helpers';
import {
	Scrollable,
	View, 
	HorizontalTrack, 
	HorizontalThumb, 
	VerticalTrack, 
	VerticalThumb
} from '../../../../components/Base/Scrollable';
import { TransactionList, Pages } from '../../../../components/HBExchange/HBTransaction';
import closeMini from './../../../../assets/close-mini.svg';

class OpenOrders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: 100
		};
	}

	handleResize = () => {
		this.setState({ windowHeight: window.innerHeight - 80 });
	};

	componentDidMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	hanldePageClick = (page) => {
		const query = this.props.OpenOrders.Query;
		query.page = page;
		this.props.queryOpenOrders(query);
	};

	handleCancelOrder = ({ OrderId, AccountId }) => {
		this.props.cancelOrder({ OrderId: OrderId, AccountId: AccountId });
	};

	render() {
		const { OpenOrders, instrumentList } = this.props;
		let Lists = null;
		if (OpenOrders.Completed) {
			Lists = OpenOrders.Data.map((obj, key) => {
				return (
					<tr key={key}>
						<td>{obj.Account}</td>
						<td>{instrumentList[obj.Symbol] || ''}</td>
						<td>{obj.Side}</td>
						<td>{obj.OrderType}</td>
						<td>{formatNumberToLocale(obj.Quantity)}</td>
						<td>{formatNumberToLocale(obj.Price)}</td>
						<td>{getTimeFormatEpoch(obj.ReceiveTime)}</td>
						<td>{obj.OrderState === `Working` ? `Open` : obj.OrderState}</td>
						<td><img alt={``} src={closeMini} onClick={() => this.handleCancelOrder(obj)} /></td>
					</tr>
				);
			});
		}

		// Lists = Array.from(Array(100).keys()).map((v, k) => {
		// 	return <tr key={k}>
		// 		<td>35462</td>
		// 		<td>ETH/BTC</td>
		// 		<td>Buy</td>
		// 		<td>Limit</td>
		// 		<td>1.00000000</td>
		// 		<td>6,000.00</td>
		// 		<td>06/29/2018 01:52 PM</td>
		// 		<td>Open</td>
		// 		<td><img alt={``} src={closeMini} /></td>
		// 	</tr>
		// })

		const firstPage = OpenOrders.Pages.filter((i) => i.tag === `first`).map((obj, key) => {
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
		const lastPage = OpenOrders.Pages.filter((i) => i.tag === `last`).map((obj, key) => {
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
		const pages = OpenOrders.Pages.filter((i) => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
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
			<Fragment>
				<TransactionList>
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
									<th>
										<Popup trigger={<span>Account</span>} flowing hoverable position="top center">
											<Grid centered>
												<Grid.Column textAlign="center">
													<Header as="h4">Account</Header>
													<HBForm>
														<Input placeholder="Search..." type="text" />
													</HBForm>
												</Grid.Column>
											</Grid>
										</Popup>
									</th>
									<th>
										<Popup trigger={<span>Instrument</span>} flowing hoverable position="top center">
											<Grid centered>
												<Grid.Column textAlign="center">
													<Header as="h4">Instrument</Header>
													<HBForm>
														<Input placeholder="Search..." type="text" />
													</HBForm>
												</Grid.Column>
											</Grid>
										</Popup>
									</th>
									<th>Side</th>
									<th>Type</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Date & Time</th>
									<th>Status</th>
									<th></th>
								</tr>
							</thead>
							<tbody>{Lists}</tbody>
						</table>
					</Scrollable>
				</TransactionList>
				<Pages>
					{firstPage}
					{pages}
					{lastPage}
				</Pages>
			</Fragment>
		);
	}
}

export default OpenOrders;
