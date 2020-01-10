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
    

class UpdateQuote extends Component {
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
                        <h2> UpdateQuote </h2>
                        <p> Updates an existing quote. Quoting is not enabled for the retail end user of the ADAX Tech software. Only registered market participants or market makers may quote. See <strong>CancelReplaceOrder</strong>. </p>

                        <div className={`noteCont`}>
                            <p><strong>Note: </strong><strong>UpdateQuote</strong> resets the quote’s priority in the order book.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BidQuoteId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Bid”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BidQty”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AskQuoteId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Ask”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AskQty”: 0"}</div>
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
                                            <div><strong>Integer.</strong> The ID of the Order Management System where the quote is located. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account whose quote will be updated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument whose quote is being updated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BidQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the original bid quote being updated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Bid </td>
                                        <td>   
                                            <div><strong>real.</strong> The new currency amount of the bid quote. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BidQty </td>
                                        <td>   
                                            <div><strong>real.</strong> The new quantity of the bid quote. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the original ask quote being updated.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Ask </td>
                                        <td>   
                                            <div><strong>real.</strong> The new currency amount of the ask quote. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskQty </td>
                                        <td>   
                                            <div><strong>real.</strong> The new quantity of the ask quote.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BidQuoteId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BidResult”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“detail”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AskQuoteId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AskResult”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“detail”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
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
                                        <td> BidQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Bid quote being updated.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BidResult </td>
                                        <td>   
                                            <div><strong>string.</strong> Returns a response object for Bid.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskQuoteId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Ask quote being updated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AskResult </td>
                                        <td>   
                                            <div><strong>string.</strong> Returns a response object for Ask. </div>
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
                                            <div><strong>Boolean.</strong>  A successful receipt of the update returns true; and unsuccessful receipt of the update (an error condition) returns false. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong>A successful receipt of the update returns null; the errormsg string for an unsuccessful receipt returns one of the following messages:</div>
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
                                            <div><strong>integer.</strong> A successful receipt of the update returns 0. An unsuccessful receipt returns one of the errorcodes shown in the errormsg list. </div>
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
                        <p> CancelAllOrders, CancelOrder, CancelQuote, CancelReplaceOrder, CreateQuote, GetOpenOrders, GetOpenQuotes, ModifyOrder, SendOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default UpdateQuote;