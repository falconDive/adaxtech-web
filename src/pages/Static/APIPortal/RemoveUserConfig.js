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
    

class RemoveUserConfig extends Component {
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
                        <h2> RemoveUserConfig </h2>
                        <p>RemoveUserConfig deletes a single key/value <i>Config</i> pair from a user record. A trading venue uses <i>Config</i> strings to store custom information or compliance information with a user’s record.</p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In <strong>RegisterNewUser</strong> (and only in <strong>RegisterNewUser</strong>), the <i>key</i> identifier of the config strings is called <i>name</i>.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p> A <i>Key</i> is always a string. The call deletes a single <i>Key</i> and its paired <i>Value</i>, even though the value is not specified in the request. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “jsmith”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Key”: “Street Name”,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the user from whose record you’re deleting the custom key/value pair.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user from whose record you’re deleting the custom key/value pair.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Key </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the key/value pair to delete..</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> A response from the server (even a successful one) indicates only that the Order Management System has received the request; not that the key/value pairs have been removed. The <strong>GetUserConfig</strong> call returns the current list of <i>Config</i> key/value pairs; use it to verify that the correct pairs have been successfully deleted. </p>
                        <p> A successful response from the OMS returns a <i>true</i> result, null <i>errormsg</i>, and a 0 <i>errorcode</i>; an unsuccessful response returns a <i>false</i> result, a string <i>errormsg</i>, and a numeric <i>errorcode</i>. For more information see “Message Frame” on page 1 and “Standard Response Object and Common Error Codes” on page 2. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“detail”: “”,"}</div>
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
                                        <td> result </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> If the call has been successfully received by the Order Management System, result is <i>true</i>; otherwise, it is <i>false</i>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the call returns <i>null</i>; the <i>errormsg</i> parameter for an unsuccessful call returns one of the following messages:</div>
                                            <div>Not Authorized (errorcode 20)</div>
                                            <div>Invalid Request (errorcode 100)</div>
                                            <div>Operation Failed (errorcode 101)</div>
                                            <div>Server Error (errorcode 102)</div>
                                            <div>Resource Not Found (errorcode 104)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errorcode </td>
                                        <td>   
                                            <div><strong>integer.</strong> A successful receipt of the call returns 0. An unsuccessful receipt of the call returns one of the <i>errorcodes</i> shown in the <i>errormsg</i> list</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> detail </td>
                                        <td>   
                                            <div><strong>string.</strong> Message text that the system may send. The content of this parameter is usually null.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetUserConfig, RegisterNewUser, SetUserConfig </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RemoveUserConfig;