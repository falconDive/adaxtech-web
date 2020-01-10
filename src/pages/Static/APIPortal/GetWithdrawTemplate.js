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
    

class GetWithdrawTemplate extends Component {
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
                        <h2> GetWithdrawTemplate </h2>
                        <p> Returns the text of the withdraw template that you name. You can obtain the name of an asset– and account-provider-appropriate template by using GetWithdrawTemplateTypes. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“templateType”: “Standard”"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the withdrawal will be made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which the withdrawal will be made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product (asset) that will be withdrawn. AssetId and ProductId are numerically equivalent. You must use ProductId here.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> templateType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the withdraw template whose text you want to return.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns the string/value pairs of the template, along with any error messages about the call.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Template”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”FullName”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Language”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Comment”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAddress”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAccountNumber”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAccountName”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”SwiftCode”: null}”,"}</div>
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
                                        <td> Template </td>
                                        <td>   
                                            <div><strong>object.</strong> The text of the template that the call returns will vary with the account, asset (product), and account provider handling the withdrawal. See the example Template object, following.</div>
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
                        <div>Template Object. A template object is a string containing a set of string/value pairs. The template returned by GetWithdrawTemplate will vary with the account, asset (product), and account provider. This example is taken from the “Standard” template. </div>
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
                                        <td> FullName </td>
                                        <td>   
                                            <div><strong>string.</strong> Name of the person making the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Lanugage </td>
                                        <td>   
                                            <div><strong>string.</strong> A two-character abbreviation of the language of the withdrawal information, for example, En for English, Sp for Spanish, or Ru for Russian. The values for this string are not enumerated, to allow for variation and expansion.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> A comment entered by the withdrawer.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAddress </td>
                                        <td>   
                                            <div><strong>string.</strong> The physical address of the bank or account provider — 123 Fourth St., for example.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAccountNumber </td>
                                        <td>   
                                            <div><strong>string.</strong> The account at the bank or other account provider that received the funds withdrawn from the OMS and trading venue account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAccountName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name associated with the account at the bank or other account provider that will receive the funds withdrawn from the OMS and trading venue account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SwiftCode </td>
                                        <td>   
                                            <div><strong>string.</strong> An international bank code that uniquely identifies a specific bank internationally. It is also known as a Bank Identifier Code, or BIC. The Swift Code consists of 8 or 11 alphanumeric characters.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetWithdrawTemplateTypes </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetWithdrawTemplate;