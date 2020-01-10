import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Route, Switch, NavLink, Redirect, Link } from 'react-router-dom';

import Loadable from './../../HOC/Loadable'

import {
    User,
    UserContainer,
    UserTab,
    UserLogo,
    UserForm
} from './../../components/User'
import Logo from './../../assets/logo.svg';


const SignInComponent = Loadable({
    loader: () => import(`./SignIn/SignIn`)
})

const SignUpComponent = Loadable({
    loader: () => import(`./SignUp/SignUp`)
})




class UserComponent extends Component {

    render() {
        const { match } = this.props
        return (
            <User>
                <UserContainer>
                    <UserLogo>
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    </UserLogo>
                    <UserForm>
                        <UserTab>
                            <Link to={`${match.url}/sign-in`}>Log In</Link>
                            <Link to={`${match.url}/sign-up`} className={`active`}>Sign Up</Link>
                        </UserTab>
                        <Switch>
                            <Route path={`${match.url}/sign-in`} component={() => {
                                return <SignInComponent UserData={this.props.UserData} authenticateUser={this.props.authenticateUser} />
                            }} />
                            <Route path={`${match.url}/sign-up`} component={() => {
                                return <SignUpComponent />
                            }} />
                        </Switch>
                    </UserForm>
                </UserContainer>
            </User>
        )
    }
}

export default UserComponent;