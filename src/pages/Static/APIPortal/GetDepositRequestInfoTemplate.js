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
    

class GetDepositRequestInfoTemplate extends Component {
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
                        <h2> GetDepositRequestInfoTemplate </h2>
                        <p> This call returns the single most appropriate deposit template available to you for a given set of product (asset), account, and account provider (the third-party organization that handles your deposits and withdrawals). In this case, the template provides the specific information that an account provider requires to make a deposit. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>The request always returns a set of cryptographic keys that each act as an address for sending coins from a crypto-currency wallet. GenerateNewKey generates a new set of cryptographic keys ADAX Tech suggests a new key set with each deposit. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 8,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountProviderId”: 10"}</div>
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
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product or asset that determines the template information.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account that returns the deposit request info.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountProviderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The ID of the account provider that handles the deposit. You must include this if there are multiple account providers.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns the deposit template appropriate to the set of product (asset) being deposited, the account into which the deposit is being made, and the account provider. The template shown here is just an example. There is a wide variety of templates and information they require.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Template”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProviderType”: “BitcoinRpc”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Template”: “{}”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProcessInfo”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UseGetDepositWorkflow”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DepositWorkflow”: “CryptoWallet”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
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
                                            <div><strong>Object.</strong> See Template object, following. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> result </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the call has been successfully received by the Order Management System; otherwise false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the call returns null; the errormsg parameter for an unsuccessful call returns one of the following strings:</div>
                                            <div>NotAuthorized (errorcode 20)</div>
                                            <div>Invalid Request (errorcode 100)</div>
                                            <div>Operation Failed (errorcode 101)</div>
                                            <div>Server Error (errorcode 102)</div>
                                            <div>Resource Not Found (errorcode 104)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> statuscode </td>
                                        <td>   
                                            <div><strong>integer.</strong> A value for statuscode is returned by this call, but is not used.  </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>Template object. The Template object returns a set of string/value pairs that contain information for the deposit; among those string/value pairs is a JSON string object (also called Template) that may contain additional string/values pairs required by the account provider. This example does not include any — the brackets are empty — but they may include items such as first name and last name of the depositor. </div>
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
                                        <td> ProviderType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of asset handled by the account provider; in this example, BitCoin.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Template </td>
                                        <td>   
                                            <div><strong>JSON object.</strong> An account provider-specific set of string/value pairs that will vary from account provider to account provider.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProcessInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> The ProcessInfo string also varies with the provider and the asset being deposited. In a generic deposit template, the ProcessInfo string/value pair will be empty; in other cases it will be an address for processing the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UseGetDepositWorkflow </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> A true value causes the deposit to use DepositWorkflow; a false value causes the deposit not to use DepostWorkflow.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositWorkflow </td>
                                        <td>   
                                            <div><strong>string.</strong> A set of enumerated values that describe the deposit workflow for this template. One of:</div>
                                            <div>CryptoWallet</div>
                                            <div>ManualDeposit</div>
                                            <div>MerchantForm</div>
                                            <div>MerchantRedirect</div>
                                            <div>Custom</div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetAllDepositTickets, GetAllDepositRequestInfoTemplates, GetDepositInfo, GetDepositTicket, UpdateDepositTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetDepositRequestInfoTemplate;