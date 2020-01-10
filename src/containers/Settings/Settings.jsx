import React, { Component } from 'react';
import Loadable from './../../HOC/Loadable';
import { Route, Switch, Link } from 'react-router-dom';

import { HBLink } from './../../components/HBButton';
import { HBContainer } from './../../components/Base';
import { HBSettings, HBSettingsRow, HBSettingsColumn } from './../../components/HBSettings';
import { HBAPIKey } from './../../components/HBSettings/HBAPIKey';
import { AlternatingFillAreaSeries } from 'react-stockcharts/lib/series';
import { HBButton } from './../../components/HBButton';

const AccountOverview = Loadable({
	loader: () => import(`./AccountOverview`)
});

const APIKey = Loadable({
	loader: () => import(`./APIKey`)
});

const TwoFactorAuth = Loadable({
	loader: () => import(`./TwoFactorAuth`)
});

class Settings extends Component {
	componentDidMount() {
		this.props.closeSideBar({ Open: false });
	}

	render() {
		const {
			match,
			UserConfigData,
			UserInfo,
			AssociatedAccounts,
			enable2FA,
			TwoFactor,
			settingsAuthenticate2FA,
			disable2FA,
			Authenticate2FA
		} = this.props;
		const activeRoute = window.location.pathname.split('/')[3];
		return (
			<HBSettings>
				<HBContainer>
					{activeRoute !== `api-key` ? (
						<div>
							<AccountOverview
								AssociatedAccounts={AssociatedAccounts}
								UserConfigData={UserConfigData}
								UserInfo={UserInfo}
							/>
							<HBSettingsRow>
								{/* <HBSettingsColumn>
                                    <Profile />
                                </HBSettingsColumn> */}
								<HBSettingsColumn>
									<div>
										<h3>Use HYB to pay Fees</h3>
										<p>Got 50% Discount when using HYB to pay transaction fees.</p>
										<HBButton
											bsstyle="center"
											default="default"
											size="medium"
											border="theme"
											onClick={() => this.props.toggleUseHYB(this.props.AccountInfo.Data)}
										>
											{this.props.AccountInfo.Data.LoyaltyEnabled ? 'Disable' : 'Enable'}
										</HBButton>
									</div>
									{/* <TwoFactorAuth
										Authenticate2FA={Authenticate2FA}
										disable2FA={disable2FA}
										settingsAuthenticate2FA={settingsAuthenticate2FA}
										UserInfo={UserInfo}
										TwoFactor={TwoFactor}
										enable2FA={enable2FA}
									/> */}
								</HBSettingsColumn>
								<HBSettingsColumn>
									<HBAPIKey>
										<div>
											<h3>My API Key</h3>
											<p>All key user functions may be executed from the API.</p>
											<HBLink bsstyle="center" default="default" size="medium" border="theme">
												<Link to={`${match.url}/api-key`}>Generate API Key</Link>
											</HBLink>
										</div>
									</HBAPIKey>
								</HBSettingsColumn>
								<HBSettingsColumn>
									<TwoFactorAuth
										Authenticate2FA={Authenticate2FA}
										disable2FA={disable2FA}
										settingsAuthenticate2FA={settingsAuthenticate2FA}
										UserInfo={UserInfo}
										TwoFactor={TwoFactor}
										enable2FA={enable2FA}
									/>
								</HBSettingsColumn>
							</HBSettingsRow>
						</div>
					) : (
						''
					)}

					<Route
						path={`${match.url}/api-key`}
						component={() => {
							return (
								<APIKey
									UserData={this.props.UserInfo}
									APIKey={this.props.APIKey}
									deleteAPIKey={this.props.deleteAPIKey}
									addAPIKey={this.props.addAPIKey}
								/>
							);
						}}
					/>
				</HBContainer>
			</HBSettings>
		);
	}
}

export default Settings;
