import React, { Component } from 'react';
import { HBHeader, HBHeaderFlex, HBHeaderBackdrop } from './../../../components/Base'

import Logo from './../../../assets/stc/logo.svg';
import Menu from './../../../assets/stc/menu.svg';
import Close from './../../../assets/stc/close.svg';
import Logout from './../../../assets/logout.svg';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-138170698-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class Header extends Component {
    render() {
        const { toggleSideBar, SideBar, logoutUser } = this.props

        return (
            <HBHeader>
                <HBHeaderFlex custom={`menu`} className={SideBar.Open ? `open` : ``}><img src={SideBar.Open ? Close : Menu} alt="Menu" onClick={() => { toggleSideBar() }} /></HBHeaderFlex>
                <HBHeaderFlex custom={`logo`}><img src={Logo} alt="Logo" /></HBHeaderFlex>
                <HBHeaderFlex custom={`logout`} onClick={() => {
                        logoutUser()
                    }}><img src={Logout} alt="Logout" /><span>Logout</span></HBHeaderFlex>
                { SideBar.Open ? <HBHeaderBackdrop onClick={() => { toggleSideBar() }}></HBHeaderBackdrop> : '' }
            </HBHeader>
        )
    }
}

export default Header;