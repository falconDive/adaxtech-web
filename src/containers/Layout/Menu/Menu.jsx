import React, { Component, Fragment } from 'react';
import { HBMenu, HBMenuLink, HBStatus, HBMenuLinkCenter } from './../../../components/Base';
import { NavLink, Link } from 'react-router-dom';
import Loadable from '../../../HOC/Loadable';

import Logo from './../../../assets/stc/logo.svg';
import pathRight from './../../../assets/path-right.svg';

import { connect } from 'react-redux';

const BlockpassVerify = Loadable({
	loader: () => import(`../../User/BlockpassVerify/BlockpassVerify`)
});
class Menu extends Component {
	render() {
		const { state, props } = this;
		const { Data, Completed } = props.UserConfigData;
		const { SideBar, toggleBlockpassModal, Layout } = props;

		let MyStatus = '';
		const config = Data.levelIncreaseStatus;

		if (!Completed) {
			MyStatus = 'Loading';
		} else {
			switch (config) {
				case 'pass':
					MyStatus = `Verified`;
					break;
				case 'underReview':
					MyStatus = `In Review`;
					break;
				case 'waitingReview':
					MyStatus = `Waiting For Review`;
					break;
				case 'fail':
					MyStatus = (
						<a href={`mailto:support@adaxtech.com`} target="_top" style={{ color: '#F44336' }}>
							{`Failed`} <img src={pathRight} alt={``} />
						</a>
					);
					break;
				default:
					MyStatus = (
						<div onClick={toggleBlockpassModal} style={{ cursor: 'pointer' }}>
							{`Get Verified`} <img src={pathRight} alt={``} />
						</div>
					);
			}
		}

		return (
			<Fragment>
				<HBMenu className={SideBar.Open ? 'full' : ''}>
					<Link to="/account/assets">
						<img src={Logo} alt="Logo" className={`logo`} />
					</Link>

					<HBMenuLink>
						<HBMenuLinkCenter>
							<NavLink to="/account/trade">Trade</NavLink>
							<NavLink to="/account/assets">Assets</NavLink>
							<NavLink to="/account/settings">Account</NavLink>
						</HBMenuLinkCenter>
					</HBMenuLink>
					<HBStatus>
						<span>Status</span>
						<label>{MyStatus}</label>
					</HBStatus>

				</HBMenu>
				<BlockpassVerify toggleVisibility={toggleBlockpassModal} modalOpen={Layout.BlockpassModal.Open} />
			</Fragment>
		);
	}
}

export default Menu
