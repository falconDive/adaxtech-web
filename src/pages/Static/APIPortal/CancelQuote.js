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
    

class CancelQuote extends Component {
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
                        <h2> CancelQuote </h2>
                        <p> Cancels a quote that has not been executed yet.</p>
                        <p> Quoting is not enabled for the retail end user of the ADAX Tech software. Only registered market participants or market makers may quote. Only a trading venue operator can cancel quotes for another user. See the explanation of “Quotes and Orders” on page 5.</p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p> You must identify the quote to be canceled by both BidQuoteId and AskQuoteId, which were supplied by the system when the quote was created. You can optionally identify the canceled quote using AccountId and InstrumentId. If the call does not include AccountId, the call assumes the default AccountId for the logged-in user; if the call does not include InstrumentId, the call operates on any instruments quoted by the account.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BidQuoteId”: 0, // required"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AskQuoteId”: 0, // required"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System where the quote was requested. Required.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account that requested the quote. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument being quoted. Conditionally optional. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BidQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the bid quote. Required.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the ask quote. Required.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>Returns two response objects, one for Bid and one for Ask.</p>
                        <p> The response to <strong>CancelQuote</strong> verifies that the call was received, not that the quote has been canceled successfully. Individual event updates to the user show quotes as they cancel. To verify that a quote has been canceled, use <strong>GetOpenQuotes</strong>. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“bidresult”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“detail”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"askresult”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“detail”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”"}</div>
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
                                        <td> BidResult </td>
                                        <td>   
                                            <div><strong>object.</strong> Returns a standard response object for Bid (see below).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskResult </td>
                                        <td>   
                                            <div><strong>object.</strong> Returns a standard response object for Ask. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> Response objects for both BidResult and AskResult: </p>
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
                                            <div><strong>Boolean.</strong> A successful receipt of the cancellation returns true; and unsuccessful receipt of the cancellation (an error condition) returns false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the cancellation returns null; the errormsg parameter for an unsuccessful receipt returns one of the following messages: </div>
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
                                            <div><strong>integer.</strong> A successful receipt of the cancellation returns 0. An unsuccessful receipt returns one of the errorcodes shown in the errormsg list. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> detail </td>
                                        <td>   
                                            <div><strong>string.</strong> Message text that the system may send. Usually null. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, CreateQuote, GetOpenOrders, GetOpenQuotes, GetOrderStatus, ModifyOrder, SendOrder, UpdateQuote</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CancelQuote;