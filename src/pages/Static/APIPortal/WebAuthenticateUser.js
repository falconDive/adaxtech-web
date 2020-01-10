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
    

class WebAuthenticateUser extends Component {
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
                        <h2> WebAuthenticateUser </h2>
                        <p><strong> No authentication required </strong></p>
                        <p> <strong>WebAuthenticateUser</strong> authenticates a user (logs in a user) for the current websocket session. You must call <strong>WebAuthenticateUser</strong> in order to use the calls in this document not otherwise shown as “No authentication required.” </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “UserName”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Password”: “Password”"}</div>
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
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user, for example, jsmith.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Password </td>
                                        <td>   
                                            <div><strong>string.</strong> The user password. The user logs into a specific Order Management System via Secure Socket Layer (SSL and HTTPS).</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> Unsuccessful response: </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Authenticated”: false"}</div>
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
                                            <div><strong>Boolean.</strong> The default response is false for an unsuccessful authentication.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> A successful response returns the following (with <i>UserId</i> and <i>SessionToken</i> simulated): </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Authenticated”: true"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionToken”:”7d0ccf3a-ae63-44f5-a409-2301d80228bc”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p> Where: </p>
                        <div style={{marginTop:'10px'}}>
                            <p> User Object: </p>
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
                                                <div><strong>Boolean.</strong> The response is <i>true</i> for a successful authentication.</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> SessionToken </td>
                                            <td>   
                                                <div><strong>string.</strong> <i>SessionToken</i> uniquely identifies the session on the OMS. By returning the SessionToken in the response, the user can log in again if the session is interrupted without going through two-factor authentication.</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> UserId </td>
                                            <td>   
                                                <div><strong>integer.</strong> Returns the user ID of the authenticated user.</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> Authenticate2FA, LogOut </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebAuthenticateUser;