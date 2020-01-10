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
    

class RegisterNewUser extends Component {
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
                        <h2> RegisterNewUser </h2>
                        <p> Creates and registers a new user account on an Order Management System. A single account can have many users; a single user can be associated with many accounts. See “Permissions” on page 4. </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“userInfo”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UserName”: “testusername”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Email”: “abc@ap.com”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“PasswordHash”: “pword”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserConfig”: []"}</div>
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
                                        <td> userInfo </td>
                                        <td>   
                                            <div>User Info object. See <i>userInfo</i> object, below.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The unique ID number of the operator of the OMS.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserConfig </td>
                                        <td>   
                                            <div>Array of string-value pairs as required by the venue operator. See <i>UserConfig</i> array, below.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><i>userInfo</i> object:</p>
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
                                            <div><strong>string.</strong> Readable name of the user. Example: JSmith.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Email </td>
                                        <td>   
                                            <div><strong>string.</strong> Email address of the user being registered.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PasswordHash </td>
                                        <td>   
                                            <div><strong>string.</strong> The password assigned to the new user, in clear</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AffiliatedId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of an affiliated organization, if the new user comes from an affiliated link. Set to 0 if no affiliated organization. This is an optional field.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> <i>UserConfig</i> array: </p>
                        <p> <i>UserConfig</i> holds an arbitrary array of string/value pairs named <i>Name</i> and <i>Value</i> (in other calls referred to as <i>Key</i> and <i>Value</i>) as required by the venue operator. When creating a new user, the <i>UserConfig</i> array may be empty. There are separate <strong>set–</strong> and <strong>get– userconfig</strong> calls. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Name”: “billingZip”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Value”: “19312”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Name”: “billingCity”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Value”: “Berwyn”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Name”: “billingState”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Value”: “Pennsylvania”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
                            <div>{"]"}</div>
                        </div>
                        <p> or </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Name”: “2FAType”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Value”: “Google”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
                            <div>{"]"}</div>
                        </div>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In <strong>RegisterNewUser</strong>, the configuration strings are called “Name.” In <strong>SetUserConfig</strong> and <strong>GetUserConfig</strong> (and other places where configuration strings are used), the strings are called “Key.” Value is called “Value” in all cases.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserID”: 1"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p> Where: </p>
                        <table className={`table backgroundInfoTbl`}>
                            <thead>
                                <tr>
                                    <td>String</td>
                                    <td>Value</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> UserID </td>
                                    <td>   
                                        <div><strong>integer.</strong> The Order Management System echoes the User ID assigned by the venue operator..</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> WebAuthenticateUser </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNewUser;