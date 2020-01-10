import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash';

import './Account.css';
import Loadable from './../../HOC/Loadable';
import { Products } from './../../selectors/containers/products-data-container';
import { subscribeTicker } from './../../actions/AP-subscriptions-actions';
import { getDepositInfo, clearDepositInfo } from './../../actions/user-transaction-actions';
import { UserConfigData } from './../../selectors/containers/user-data-container';
import { subscribeTrades, subscribeLevel2 } from './../../actions/AP-subscriptions-actions';
import { autoAuthenticateUser, logoutUser } from './../../actions/user-actions';
import { toggleSideBar } from './../../actions/layout-actions';
import { OrderStateEvent, OrderTradeEvent, SendOrderRes } from './../../services/NotificationServices';
import { HBApp, AdxApp, HBMain, LogoutLink, PreLoader } from './../../components/Base';
import Logout from '../../assets/logout.svg';
import Logo from '../../assets/stc/logo.svg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = Loadable({
	loader: () => import(`./../../containers/Layout/Header/Header`)
});
const MainNav = Loadable({
	loader: () => import(`./../../containers/Layout/MainNav/MainNav`)
});
const Menu = Loadable({
	loader: () => import(`./../../containers/Layout/Menu/Menu.container`)
});
const Footer = Loadable({
	loader: () => import(`./../../containers/Layout/Footer/Footer`)
});
const Exchange = Loadable({
	loader: () => import(`./../Exchange`)
});
const Assets = Loadable({
	loader: () => import(`./../Assets`)
});
const Sto = Loadable({
	loader: () => import(`../../containers/Sto`)
});
const Settings = Loadable({
	loader: () => import(`./../Settings`)
});
const AccountVerification = Loadable({
	loader: () => import(`./../AccountVerification`)
});
const ModalWelcome = Loadable({
	loader: () => import(`./../../containers/Modal/Welcome`)
});
const Deposit = Loadable({
	loader: () => import(`./../../containers/Assets/Deposit/index.container`)
});
const Withdraw = Loadable({
	loader: () => import(`./../../containers/Assets/Withdraw/withdraw.container`)
});
class Account extends Component {
	constructor(props) {
		super(props);
		this.notificationDOMRef = React.createRef();
		this.state = {
			preload: {
				percent: 0,
				visible: true
			}
		}
	}

	updateLoadProgress = () => {
		let counter = 0;
		let stateProps = [
			'UserData.UserInfo',
			'Instruments.Fetch',
			'APSubscriptions.SubscribeLevel1'
		]

		if (this.props.match.url.search('account/trade')) {
			stateProps.concat([
				'APSubscriptions.SubscribeTrades',
				'APSubscriptions.SubscribeLevel2',
				'APSubscriptions.SubscribeTicker'
			])
		}
		
		stateProps.forEach(state => {
			const stateValue = _.get(this.props, `${state}.Completed`)
			if (stateValue === true) {
				counter++
			}
		})

		const percent = (counter / stateProps.length * 100);
		this.setState(({preload}) => {
			return {
				preload: {
					...preload,
					percent
				}
			} 
		}, () => {
			setTimeout(this.updateLoadProgress, 2000)

			if (counter === stateProps.length) {
				setTimeout(() => {
					this.setState(({preload}) => ({
						preload: {
							...preload,
							visible: false
						}
					}))
				}, 1000)
			}
		})

	}

	componentDidMount() {
		this.updateLoadProgress()

		const { Selected: { InstrumentId } } = this.props.Instruments;
		// this.props.subscribeTrades({ InstrumentId: InstrumentId });
		// this.props.subscribeLevel2({ InstrumentId: InstrumentId, Depth: 250 });
		// this.props.subscribeTicker({ InstrumentId: InstrumentId, Interval: 900, IncludeLastCount: 5000 });
		if (window.localStorage.getItem(`SessionToken`)) {
			this.props.autoAuthenticateUser({ SessionToken: window.localStorage.getItem(`SessionToken`) });
		} else {
			return (window.location = '/signin');
		}
		OrderStateEvent.filter((i) => i).subscribe((obj) => {
			let message = ``;
			if (obj.RejectReason) {
				message = obj.RejectReason;
			} else {
				message = `Order Id ${obj.OrigOrderId} ${obj.OrigQuantity} ${obj.OrderState}`;
			}
			this.addNotification({
				title: obj.Side,
				message
			});
		});
		OrderTradeEvent.filter((i) => i).subscribe((obj) => {
			this.addNotification({
				title: obj.Side,
				message: `Quantity ${obj.Quantity} 
                Price ${obj.Price}
                Fee ${obj.Fee}`
			});
		});
		SendOrderRes.filter((i) => i).subscribe((obj) => {
			// this.addNotification(
			// {
			// title: obj.Side,
			// message: `Quantity ${obj.Quantity}
			// Price ${obj.Price}
			// Fee ${obj.Fee}`,

			// }
			// )
			// console.log(obj, `SendOrderRes`);
		});
	}
	addNotification = ({ title = ``, message = ``, type = `success` }) => {
		this.notificationDOMRef.current.addNotification({
			title,
			message,
			type,
			insert: 'top',
			container: 'top-right',
			animationIn: [ 'animated', 'fadeIn' ],
			animationOut: [ 'animated', 'fadeOut' ],
			dismiss: { duration: 5000 },
			dismissable: { click: true }
		});
	};
	render() {
		const {
			match,
			Layout: { SideBar },
			getDepositInfo,
			AccountInfo,
			Products,
			clearDepositInfo,
			DepositInfo
		} = this.props;
		const { preload } = this.state;
		const activeRoute = window.location.pathname.split('/')[2];
		const pendingReviewStatuses = ['underReview', 'fail', '']
		const config = this.props.UserConfigData.Data.levelIncreaseStatus;
		let showWelcomeModal = false;

		if (config === 'pass') {
			showWelcomeModal = false;
		} else if (pendingReviewStatuses.includes(config)) {
			showWelcomeModal = false;
		} else {
			if (this.props.UserConfigData.Completed && localStorage.getItem('kycSubmitted') === null) {
				showWelcomeModal = true;
			}
		}

		if (localStorage.getItem('completeProfileLater') === null && showWelcomeModal !== false) {
			showWelcomeModal = true;
		} else {
			if (localStorage.getItem('completeProfileLater')) {
				showWelcomeModal = false;
			}
		}

		return (
			<Fragment>
                <LogoutLink onClick={this.props.logoutUser}><img src={Logout} /> Logout</LogoutLink>
				<MainNav />

				<AdxApp>
					{/*<Header SideBar={SideBar} toggleSideBar={this.props.toggleSideBar} logoutUser={this.props.logoutUser} />
					<Menu SideBar={SideBar} />
					{showWelcomeModal && activeRoute !== 'verification' ? (
						<ModalWelcome show={true} routerHistory={this.props.history} />
					) : (
						''
					)}*/}
					<HBMain>
						<Switch>
							<Route path={`${match.url}/trade`} component={Exchange} />
							<Route exact path={`${match.url}/assets`} component={Assets} />
							<Route path={`${match.url}/settings`} component={Settings} />
							<Route path={`${match.url}/verification`} component={AccountVerification} />
							<Route path={`${match.url}/assets/sto/:id`} component={Sto} />
							{AccountInfo.Completed &&
							Products.Completed && <Route path={`${match.url}/assets/deposit`} component={Deposit} />}
							{AccountInfo.Completed &&
							Products.Completed && <Route path={`${match.url}/assets/withdraw`} component={Withdraw} />}
						</Switch>

					</HBMain>

					<ReactNotification ref={this.notificationDOMRef} />
				</AdxApp>
				<Footer />
				<PreLoader className={(preload.visible === false) ? 'hidden' : ''} >
					<div className="inner-cont">
						<CircularProgressbarWithChildren value={preload.percent}>
							<img src={Logo} />
						</CircularProgressbarWithChildren>
					</div>
				</PreLoader>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	UserData: state.UserData,
	UserConfigData: UserConfigData(state),
	Layout: state.Layout,
	Instruments: state.Instruments,
	AccountInfo: state.UserData.AccountInfo,
	Products: Products(state),
	APSubscriptions: state.APSubscriptions,
	DepositInfo: state.UserTransactions.DepositInfo
});

export default connect(mapStateToProps, {
	autoAuthenticateUser,
	subscribeTrades,
	subscribeLevel2,
	subscribeTicker,
	toggleSideBar,
	logoutUser,
	getDepositInfo,
	clearDepositInfo
})(Account);
