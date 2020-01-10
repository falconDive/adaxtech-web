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
    

class CreateWithdrawTicket extends Component {
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
                        <h2> CreateWithdrawTicket </h2>
                        <p> Initiates the withdrawal of funds from an account on the trading venue, and transfers them to an external account through a third-party “account provider.” </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong><strong>CreateWithdrawTicket</strong> requires administrator approval before the withdrawal occurs unless you have configured auto-approval settings.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>Part of the process of withdrawing an asset (product) is to specify the withdrawal template that sends the asset to the correct destination, usually an account provider. The content of templates varies from account provider to account provider. Get a list of templates available to you by calling <strong>GetWithdrawTemplateTypes</strong>. For more information on templates, see “Deposit and Withdraw Templates” on page 9. The code below shows a sample template. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”:4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”:1.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateType”:”ToExternalBitcoinAddress”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateForm”:"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”TemplateType”:”ToExternalBitcoinAddress”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”Comment”:””,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”ExternalAddress”:”54123214”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"}"}</div>
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
                                            <div><strong>integer.</strong> ID of the Order Management System on which the withdrawal is being made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which to make the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product being withdrawn, for example US Dollars. See “Products and Instruments” on page 4 for more information about the nature of a product. When you call <strong>CreateDepositTicket</strong> to add funds to an account, ProductId is referred to as AssetId. Both ProductId and AssetId refer to the same thing.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the product being withdrawn from the account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the withdrawal template that controls the destination of the asset being withdrawn. To get a list of withdrawal templates that are available to you, call <strong>GetWithdrawTemplateTypes</strong>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateForm </td>
                                        <td>   
                                            <div><strong>Object.</strong> See the TemplateForm object below.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> TemplateForm object. The content of the TemplateForm object varies from account provider to account provider, depending on the asset being withdrawn and the identity of the account provider. This is an example of one TemplateForm </p>
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
                                        <td> TemplateType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the template.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> A comment or memo that you can add to the withdrawal ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExternalAddress </td>
                                        <td>   
                                            <div><strong>string.</strong> The place to route withdrawn funds.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>TThe response to <strong>CreateWithdrawTicket</strong> is a standard response object confirming receipt or non-receipt of the information, and is not the ticket per se. To view and confirm the ticket information, use the call <strong>GetWithdrawTicket</strong>.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“detail”: “”"}</div>
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
                                            <div><strong>Boolean.</strong> If the call has been successfully received by the Order Management System, result is true; otherwise, it is false.</div>
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
                                            <div>Resource Not Found (errorcode 104)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errorcode </td>
                                        <td>   
                                            <div><strong>integer.</strong>  A successful receipt of the call returns 0. An unsuccessful receipt of the call returns one of the errorcodes shown in the errormsg list.</div>
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
                        <p> ConfirmWithdraw, GetWithdraws, GetWithdrawTemplate, GetWithdrawTemplateTypes, GetWithdrawTicket, UpdateWithdrawTicket. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateWithdrawTicket;