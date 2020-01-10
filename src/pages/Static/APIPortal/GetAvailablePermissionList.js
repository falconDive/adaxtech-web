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
    

class GetAvailablePermissionList extends Component {
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
                        <h2> GetAvailablePermissionList </h2>
                        <p>Retrieves a comma-separated array of all permissions that can be assigned to a user.</p>
                        <p>An administrator or superuser can set permissions for each user on an API-call by API-call basis, to allow for highly granular control. Common permission sets include <i>Trading</i>, <i>Deposit</i>, and <i>Withdrawal</i> (which allow trading, deposit of funds, and account withdrawals, respectively); or <i>AdminUI</i>, <i>UserOperator</i>, and <i>AccountOperator</i> (which allow control of the Order Management System, set of users, or an account). See “Permissions” on page 4 for more information, but a complete discussion of permissions and their scope is beyond this API guide. </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p> The request for <strong>GetAvailablePermissionList</strong> does not require a UserId. It returns a list of all permissions available. </p>
                        <div className={`codeCont`}>
                            <div>{"{ }"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> A successful response returns an alphabetically sorted list of all permissions that can be assigned by an administrator or superuser. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountReadOnly”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddAccount”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddBalanceReconciliationInfo”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddDepositTicketAttachment”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddEditAccountBadge”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddEditExchange”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddEditExchangeInstrument”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddEditOMS”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddEditOperatorEmail”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddInstrument”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddOperator”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AddOperatorOms”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"..."}</div>
                            <div>{"]"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetUserPermissions </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetAvailablePermissionList;