import React, { Component } from 'react';

import styles from "./styles.scss"
import { BrowserRouter, HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import {connect } from 'react-redux';

import { 
    Modal,
    Button, 
    OverlayTrigger, 
    Popover, 
    Tooltip, 
    Image, 
    Row, 
    Col,
    Alert } from 'react-bootstrap';
    
class Authenticate2FA extends Component {
    constructor (props) {
        super(props)
        this.state = {
          showAlert: false,
          typeAlert: 'success',
          titleAlert: 'This is Title',
          messageAlert: 'I am messagea lert'
        }
      }
    render () {
        // if (localStorage.getItem('SessionToken') == '') {
        //     this.props.user_logout()
        // }
        // const { match } = this.props;
        
        // const {
        //         first_name,
        //         last_name,
        //         middle_name,
        //         billing_address,
        //         email
        //     } = this.props.userDetils;
        return (
            <div>
                <div className={`row`}>
                    <div className={`col-md-12`}>
                        <h2> Authenticate2FA </h2>
                        <p><strong> No authentication required </strong></p>
                        <p>Completes the second part of a two-factor authentication by sending the authentication token from the non-ADAX Tech authentication system to the Order Management System. The call returns a verification that the user logging in has been authenticated, and a token. </p>
                        <p>Here is how the two-factor authentication process works:</p>
                        <ul>
                            <li> Call <strong>WebAuthenticateUser</strong>. The response includes values for <i>TwoFAType</i> and <i>TwoFAToken</i>. For example, <i>TwoFAType</i> may return “Google,” and the <i>TwoFAToken</i> then returns a Google-appropriate token (which in this case would be a QR code). </li>
                            <li> Enter the <i>TwoFAToken</i> into the two-factor authentication program, for example, Google Authenticator. The authentication program returns a different token. </li>
                            <li> Call <strong>Authenticate2FA</strong> with the token you received from the two-factor authentication program (shown as <i>YourCode</i> in the request example below). </li>
                        </ul>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Code”: “YourCode”"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p> Where: </p>
                        <div className={`tableCont`}>
                            <table className={`table backgroundInfoTbl`}>
                                <thead>
                                    <tr>
                                        <td>String</td>
                                        <td>Value</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Code </td>
                                        <td>   
                                            <div><strong>string.</strong> Code holds the token obtained from the other authentication source. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Authenticated”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionToken”: “YourSessionToken”"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p> Where: </p>
                        <div className={`tableCont`}>
                            <table className={`table backgroundInfoTbl`}>
                                <thead>
                                    <tr>
                                        <td>String</td>
                                        <td>Value</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Authenticated </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> A successful authentication returns <i>true</i>. Unsuccessful returns <i>false</i>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionToken </td>
                                        <td>   
                                            <div><strong>string.</strong> The <i>SessionToken</i> is valid during the current session for connections from the same IP address. If the connection is interrupted during the session, you can sign back in using the <i>SessionToken</i> instead of repeating the full two-factor authentication process. A session lasts one hour after last-detected activity or until logout.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> To send a session token to re-establish an interrupted session, send: </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionToken”: “YourSessionToken”"}</div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> WebAuthenticateUser, LogOut </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authenticate2FA;