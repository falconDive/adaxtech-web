import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import {
	HBAPIKey,
	HBAPIKeyGenerate,
	HBAPIKeyNote,
	HBAPIKeyOptionsContainer
} from './../../../components/HBSettings/HBAPIKey';
import { HBButton, HBLink } from './../../../components/HBButton';
import { Link } from 'react-router-dom';

import iconSecure from './../../../assets/settings/secure.png';

class APIKey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trading: false,
			deposit: false,
			withdraw: false,
			showOptions: false
		};
	}

	showOptions = (showOptions) => this.setState({ showOptions });

	selectTrading = (e) => this.setState({ trading: e.target.checked });

	selectDeposit = (e) => this.setState({ deposit: e.target.checked });

	selectWithdraw = (e) => this.setState({ withdraw: e.target.checked });

	deleteAPIKey = (APIKey) => {
		let UserId = this.props.UserData.Data.UserId;
		console.log(APIKey);
		this.props.deleteAPIKey({ UserId, APIKey });
	};

	addAPIKey = () => {
		const Permissions = [];
		let UserId = this.props.UserData.Data.UserId;

		this.setState({ processing: true, skip: true });

		if (this.state.trading) Permissions.push('Trading');
		if (this.state.withdraw) Permissions.push('Withdraw');
		if (this.state.deposit) Permissions.push('Deposit');

		this.props.addAPIKey({ UserId, Permissions });
	};

	showApiPage = () => {
		document.location.href = '/api.html';
	};

	render() {
		console.log(this.props);
		let item = this.props.APIKey.Data;
		const Lists = item.map((item, key) => (
			<Table.Row key={key}>
				<Table.Cell>{item.APIKey}</Table.Cell>
				<Table.Cell>{item.APISecret}</Table.Cell>
				<Table.Cell>
					{item.Permissions[0] === 'Deposit' ? (
						'True'
					) : item.Permissions[1] === 'Deposit' ? (
						'True'
					) : item.Permissions[2] === 'Deposit' ? (
						'True'
					) : (
						'False'
					)}
				</Table.Cell>
				<Table.Cell>
					{item.Permissions[0] === 'Withdraw' ? (
						'True'
					) : item.Permissions[1] === 'Withdraw' ? (
						'True'
					) : item.Permissions[2] === 'Withdraw' ? (
						'True'
					) : (
						'False'
					)}
				</Table.Cell>
				<Table.Cell>
					{item.Permissions[0] === 'Trading' ? (
						'True'
					) : item.Permissions[1] === 'Trading' ? (
						'True'
					) : item.Permissions[2] === 'Trading' ? (
						'True'
					) : (
						'False'
					)}
				</Table.Cell>
				<Table.Cell>
					<HBButton
						bsstyle="center"
						default="border"
						size="small"
						onClick={() => this.deleteAPIKey(item.APIKey)}
					>
						Delete
					</HBButton>
				</Table.Cell>
			</Table.Row>
		));

		return (
			<HBAPIKeyGenerate>
				<h3>API Key</h3>
				<p>
					The Public API is available in HTTP, WebSocket, and Get Request, with streaming data on products,
					product pairs, ticker activity, trades, and the order book.
				</p>
				<p>
					The Private API is accessible only to registered users and enables access and control of a user's
					account. All key user functions may be executed from the API, including account and order management
					activities.
				</p>
				{/* <HBLink bsstyle="center" default="border" size="medium" border="theme" style={{width: '240px', margin: '50px 0'}} onClick={() => this.showApiPage()}>View API Documentation</HBLink> */}

				<HBAPIKeyNote>
					Please write the Secret Key down as it will not be displayed again. If you lose your Secret Key you
					will have to delete your key and generate a new one.
				</HBAPIKeyNote>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell className="bg-black">Public Key</Table.HeaderCell>
							<Table.HeaderCell className="bg-black">Secret Key</Table.HeaderCell>
							<Table.HeaderCell className="bg-black">Allow Deposits</Table.HeaderCell>
							<Table.HeaderCell className="bg-black">Allow Withdrawals</Table.HeaderCell>
							<Table.HeaderCell className="bg-black">Allow Trading</Table.HeaderCell>
							<Table.HeaderCell className="bg-black">Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>{Lists}</Table.Body>
				</Table>
				<HBAPIKeyOptionsContainer>
					{!this.state.showOptions ? (
						<HBButton
							bsstyle="center"
							default="default"
							size="medium"
							onClick={() => this.showOptions(true)}
							border="theme"
						>
							Generate New Key
						</HBButton>
					) : (
						<div>
							<ul className="list-unstyled">
								<li>
									<label className="button-toggle-wrap">
										<input
											className="toggler"
											type="checkbox"
											name="allow_orders"
											onClick={this.selectDeposit}
											value={this.state.deposit}
										/>
										<div className="button-toggle">
											<div className="handle">
												<div className="bars" />
											</div>
										</div>
										<span>Deposits</span>
									</label>
								</li>
								<li>
									<label className="button-toggle-wrap">
										<input
											className="toggler"
											type="checkbox"
											name="allow_withdraw"
											onClick={this.selectWithdraw}
											value={this.state.withdraw}
										/>
										<div className="button-toggle">
											<div className="handle">
												<div className="bars" />
											</div>
										</div>
										<span>Withdrawals</span>
									</label>
								</li>
								<li>
									<label className="button-toggle-wrap">
										<input
											className="toggler"
											type="checkbox"
											name="allow_trading"
											onClick={this.selectTrading}
											value={this.state.trading}
										/>
										<div className="button-toggle">
											<div className="handle">
												<div className="bars" />
											</div>
										</div>
										<span>Trading</span>
									</label>
								</li>
							</ul>
							<HBButton
								bsstyle="center"
								default="default"
								size="medium"
								onClick={() => this.addAPIKey()}
								border="theme"
							>
								Generate Key
							</HBButton>
						</div>
					)}
				</HBAPIKeyOptionsContainer>
			</HBAPIKeyGenerate>
		);
	}
}

export default APIKey;
