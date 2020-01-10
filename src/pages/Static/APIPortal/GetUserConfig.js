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
    

class GetUserConfig extends Component {
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
                        <h2> GetUserConfig </h2>
                        <p><strong>GetUserConfig</strong> returns the list of key/value pairs set by the <strong>SetUserConfig</strong> call and associated with a user record. A trading venue can use <i>Config</i> strings to store custom information or compliance information with a user record.</p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In <strong>RegisterNewUser</strong> (and only in <strong>RegisterNewUser</strong>), the <i>key</i> identifier of the <i>config</i> string is called <i>name</i>.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p> The request for <strong>GetAvailablePermissionList</strong> does not require a UserId. It returns a list of all permissions available. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “jsmith”,"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p>Where: </p>
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
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The login name of the user; “jsmith.”</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> A successful call to <strong>GetUserConfig</strong> returns an array of the current list of <i>Config</i> key/value pairs. Because they are set during the <strong>RegisterNewUser</strong> and <strong>SetUserConfig</strong> calls, <i>Config</i> key/value pairs are unique to their trading venues. </p>
                        <p> An unsuccessful call to GetUserConfig returns an error code. See “Standard Response Object and Common Error Codes” on page 2. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Street”: “Hillside Road”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Office Number”: 158,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Mobile Phone”: “1-702-555-1212”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“City”: “Las Vegas”,"}</div>
                            <div>{"]"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> RegisterNewUserr, SetUserConfig </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetUserConfig;