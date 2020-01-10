import React, { Component, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import Loadable from '../../../HOC/Loadable';
import { UserConfigData } from '../../../selectors/containers/user-data-container'
import { closeSideBar, toggleBlockpassModal } from  '../../../actions/layout-actions'
import { SideNav } from './../../../components/Base'
import Logo from './../../../assets/stc/logo.svg';

ReactGA.initialize('UA-138170698-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const BlockpassVerify = Loadable({
    loader: () => import(`../../User/BlockpassVerify/BlockpassVerify`)
});
const assets = require.context('./../../../assets/')

class MainNav extends Component {
    render() {
        const { state, props } = this;
        const { Data, Completed } = props.UserConfigData;
        const config = Data.levelIncreaseStatus;

        let status = '';
        if (! Completed) {
            status = 'Loading';
        } else {
            switch (config) {
                case 'pass':
                    status = `Verified`;
                    break;
                case 'underReview':
                    status = `In Review`;
                    break;
                case 'waitingReview':
                    status = `Waiting Review`;
                    break;
                case 'fail':
                    status = (
                        <a href={`mailto:support@adaxtech.com`} target="_top" style={{ color: '#F44336' }}>
                            {`Failed`} <img src={assets('./path-right.svg')} />
                        </a>
                    );
                    break;
                default:
                    status = (
                        <div className="unverified" onClick={props.toggleBlockpassModal}>
                            Unverified <img src={assets('./path-right.svg')} />
                            <div className="instruct">CLICK TO GET VERIFIED</div>
                            <BlockpassVerify />
                        </div>
                    );
            }
        }

        const currentPath = this.props.location.pathname

        let navItems = [{
                text: 'Trade',
                link: '/account/trade'
            }, {
                text: 'Assets',
                link: '/account/assets'
            }, {
                text: 'Account',
                link: '/account/settings'
            }].map(navItem => {
                const { text, link, icon } = navItem
                const iconName = text.toLowerCase()
                const active = currentPath.startsWith(link) ? 'active-' : '';
                return <NavLink to={link} key={text}>
                    <img src={assets(`./layout/${active}${iconName}-icon.svg`)} />
                    {text}
                </NavLink>
            })

        return (
            <Fragment>
                <SideNav>
                    <a className="logo"><img src={Logo} alt="Logo" /></a>
                    <div className="nav">
                        <div className="items">{navItems}</div>
                    </div>
                    <div className="kyc">
                        <div>STATUS</div>
                        <div className="status">{status}</div>
                    </div>
                </SideNav>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    UserConfigData: UserConfigData(state)
})

export default connect(mapStateToProps, { closeSideBar, toggleBlockpassModal })(withRouter(MainNav))