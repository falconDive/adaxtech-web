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
    

class GetUserPermissions extends Component {
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
                        <h2> GetUserPermissions </h2>
                        <p>Retrieves an array of permissions for the logged-in user. Permissions can be set only by an administrator or superuser.</p>
                        <p>An administrator or superuser can set permissions for each user on an API-call by API-call basis, to allow for highly granular control. Common permission sets include <i>Trading</i>, <i>Deposit</i>, and <i>Withdrawal</i> (which allow trading, deposit of funds, and account withdrawals, respectively); or <i>AdminUI, UserOperator,</i> and <i>AccountOperator</i> (which allow control of the Order Management System, set of users, or an account). See “Permissions” on page 4 for more information, but a complete discussion of permissions and their scope is beyond this API guide.</p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the user whose permission information will be returned. A user can only retrieve his own permissions; an administrator can retrieve information about the permissions of others.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> A successful response returns an array of permission strings. An unsuccessful response returns an error code. See “Standard Response Object and Common Error Codes” on page 2 for more information about error codes. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Withdraw”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Deposit”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Trading”"}</div>
                            <div>{"]"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAvailablePermissionList </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetUserPermissions;