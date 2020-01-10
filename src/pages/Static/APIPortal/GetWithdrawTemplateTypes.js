import React, { Component } from 'react';

import styles from "./styles.scss"
import { BrowserRouter, HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import {connect } from 'react-redux';
import startIndex from "./getTradesHistory.png"

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
    

class GetWithdrawTemplateTypes extends Component {
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
                        <h2> GetWithdrawTemplateTypes </h2>
                        <p> Returns an array of names of withdrawal template that are appropriate to the asset (product) you want to withdraw from the account. Obtain the withdrawal template itself by calling GetWithdrawTemplate with the correct name. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 2"}</div>
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
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which you want to make the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product (asset) that you want to withdraw. ProductId and AssetId are identical in value, but this call uses ProductId..</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array of template names, and a success code.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateTypes”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Standard”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: null,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“statuscode”: 0"}</div>
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
                                        <td> TemplateTypes </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> The templates that are appropriate to the withdrawal of your asset, account, and Order Management System. If the call was unsuccessful, TemplateTypes may return an empty array.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> result </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> If the call has been successfully received by the Order Management System, the result is true; otherwise, it is false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the call returns null; the errormsg parameter for an unsuccessful call returns one of the following messages:</div>
                                            <div>Not Authorized (errorcode 20)</div>
                                            <div>Invalid Request (errorcode 100)</div>
                                            <div>Operation Failed (errorcode 101)</div>
                                            <div>Server Error (errorcode 102)</div>
                                            <div>Resource Not Found (errorcode 104) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> statuscode </td>
                                        <td>   
                                            <div><strong>integer.</strong> If result is false, statuscode can return:</div>
                                            <div>32 Not_Authorized</div>
                                            <div>33 AssetManager_Not_Found</div>
                                            <div>If no account provider is located, statuscode returns null.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetWithdrawTemplate </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetWithdrawTemplateTypes;