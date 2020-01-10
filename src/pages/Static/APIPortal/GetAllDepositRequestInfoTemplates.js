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
    

class GetAllDepositRequestInfoTemplates extends Component {
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
                        <h2> GetAllDepositRequestInfoTemplates </h2>
                        <p> Certain account providers require specific information (deposit request info) for deposits. For example, a deposit via credit card might require the credit card number, first, and last name. Other payment providers will require other sets of information. </p>
                        <p> A call to <strong>GetAllDepositRequestInfoTemplates</strong> returns an array of template objects applicable to the product (asset). </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”:1"}</div>
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
                                            <div><strong>integer.</strong> The ID of the product (asset) that determines the template information.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response is an array of available template objects and response information that confirms whether the call was successful. Within each template is the depositTemplate object and within that, a JSON string (called Template) that holds specific data in string/value pairs. Two Templates objects are returned in this example response.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Templates”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“providerId”: 10,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“providerName”: “Nigerian Naira”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“depositTemplate”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“ProviderType”: “QuickTeller”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Template”: “{"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“FirstName”: null,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“LastName”: null,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Amount”:0"}</div>
                            <div style={{paddingLeft:'50px'}}>{"},"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“ProcessInfo”: “ “,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“UseGetDepositWorkflow”: true,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“DepositWorkflow”: “CryptoWallet”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"}"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“providerId”: 7,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“providerName”: “Nigerian Naira”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“depositTemplate”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“ProviderType”: “WebPay”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Template”: “{"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“FirstName”: null,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“LastName”: null,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Amount” :null"}</div>
                            <div style={{paddingLeft:'50px'}}>{"},"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“ProcessInfo”: “ “,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“UseGetDepositWorkflow”: true,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“DepositWorkflow”: “MerchantRedirect”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"}"}</div>
                            <div style={{paddingLeft:'20px'}}>{"}"}</div>
                            <div style={{paddingLeft:'10px'}}>{"],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“result”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: null,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“statuscode”:0"}</div>
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
                                        <td> Templates </td>
                                        <td>   
                                            <div><strong>Array of Objects.</strong> See Templates object, following.</div>
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
                                            <div><strong>integer.</strong> A value for statuscode is returned by this call, but is not used. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>Templates object. The code sample shows an example array of Templates objects. They vary according to the asset being deposited and the account provider.  </div>
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
                                        <td> providerId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account provider, an external third party that handles funds and crypto-currencies being deposited and withdrawn.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> providerName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the account provider.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> depositTemplate </td>
                                        <td>   
                                            <div><strong>object.</strong> An account provider-specific set of string/value pairs that hold deposit information. The depositTemplate includes a JSON string object called Template that may hold additional information such as name and amount of the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProcessInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> The ProcessInfo string also varies with the provider and the asset being deposited. In a generic deposit template, this string/value pair will be empty; in other cases it will be an address for processing the deposit.</div>
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
                        <div>Template JSON object. Within the depositTemplate object is the Template JSON stringify object. In this example case, it holds the name of the depositor and the amount being deposited. Other templates may hold other information. </div>
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
                                        <td> FirstName </td>
                                        <td>   
                                            <div><strong>string.</strong> First name of the depositor.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastName </td>
                                        <td>   
                                            <div><strong>string.</strong> Last name of the depositor.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> Amount being deposited.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetAllDepositTickets, GetDepositInfo, GetDepositRequestInfoTemplate, GetDepositTicket, UpdateDepositTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAllDepositRequestInfoTemplates;