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
    

class SetUserInfo extends Component {
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
                        <h2> SetUserInfo </h2>
                        <p> Enters basic information about a user into the Order Management System. A user may only enter or change information about himself; an administrator (or superuser) may enter or change information about other users. See “Permissions” on page 4.</p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “John Smith”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Password”: “password”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Email”: “email@company.com”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EmailVerified”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Use2FA”: false,"}</div>
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
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user; set by the system when the user registers.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> User’s name; “John Smith.”</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Password </td>
                                        <td>   
                                            <div><strong>string.</strong> User’s password.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Email </td>
                                        <td>   
                                            <div><strong>string.</strong> User’s email address.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EmailVerified </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Send true if you have verified the user’s email; send false if you have not verified the email address. Default is false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the default account with which the user is associated. A user may be associated with more than one account, and more than one user may be associated with a single account. An admin or superuser can specify additional accounts.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Use2FA </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Set to true if this user must use two-factor authentication; set to false if this user does not need to user two-factor authentication. Default is false.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> A successful response echoes the settings in the request, and provides additional information about the user information from the database. An unsuccessful response generates an error code. See “Standard Response Object and Common Error Codes” on page 2.  </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “John Smith”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Email”: “email@company.com”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PasswordHash”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PendingEmailCode”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EmailVerified”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DateTimeCreated”: ”2017-10-26T17:25:58Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AffiliateId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RefererId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Use2FA”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Salt”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PendingCodeTime”: “0001-01-01T00:00:00Z”,"}</div>
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
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> ID number of the user whose information is being set.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong>  Log-in name of the user; “jsmith”.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Email </td>
                                        <td>   
                                            <div><strong>string.</strong> Email address of the user; “person@company.com”. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PasswordHash </td>
                                        <td>   
                                            <div><strong>string.</strong> Not currently used. Returns an empty string.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PendingEmailCode </td>
                                        <td>   
                                            <div><strong>string.</strong> Usually contains an empty string. Contains a GUID — a globally unique ID string — during the time that a new user has been sent a registration email and before the user clicks the confirmation link.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EmailVerified </td>
                                        <td>   
                                            <div><strong>Boolean.</strong>  Has your organization verified this email as correct and operational? True if yes; false if no. Defaults to false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the default account with which the user is associated.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AffiliatedId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of an affiliated organization, if the user comes from an affiliated link. This is set to 0 if the user it not associated with an affiliated organization</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RefererId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Captures the ID of the person who referred this account member to the trading venue, usually for marketing purposes. Returns 0 if no referrer.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System with which the user is associated.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Use2FA </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> True if the user must use two-factor authentication; false if the user does not need to use two-factor authentication. Defaults to false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Salt </td>
                                        <td>   
                                            <div><strong>string.</strong> Reserved for future use. Currently returns an empty string.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PendingCodeTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A date and time in ISO 8601 format. Reserved. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAvailablePermissionList, GetUserPermissions, GetUserInfo, GetUserConfig, SetUserConfig </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetUserInfo;