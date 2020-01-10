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
    

class CancelOrder extends Component {
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
                        <h2> CancelOrder </h2>
                        <p> Cancels an open order that has been placed but has not yet been executed. Only a trading venue operator can cancel orders for another user or account. See the explanation of ““Quotes and Orders” on page 5.</p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p> The OMS ID and the Order ID precisely identify the order you wish to cancel. The Order ID is unique across an OMS. </p>
                        <p> If you specify the OMS ID and the Account ID, you must also specify at least the Client Order ID. The OMS is unable to identify the order using only the OMS ID and the Client Order ID, as the Client Order ID may not be unique. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 0, // conditionally optional"}</div>
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
                                            <div><strong>integer.</strong> The Order Management System on which the order exists. Required.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of account under which the order was placed. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A user-assigned ID for the order (like a purchase-order number assigned by a company). ClientOrderId defaults to 0. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The order to be cancelled. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response to <strong>CancelOrder</strong> verifies that the call was received, not that the order has been canceled successfully. Individual event updates to the user show order cancellation. To verify that an order has been canceled, call <strong>GetOrderStatus</strong> or <strong>GetOpenOrders</strong>. : </p>
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
                                            <div><strong>Boolean.</strong> Returns true if the call to cancel the order has been successfully received, otherwise returns false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of a call to cancel an order returns null; the errormsg parameter for an unsuccessful call to cancel an order returns one of the following messages: </div>
                                            <div> Not Authorized (errorcode 20) </div>
                                            <div> Invalid Request (errorcode 100) </div>
                                            <div> Operation Failed (errorcode 101) </div>
                                            <div> Server Error (errorcode 102) </div>
                                            <div> Resource Not Found (errorcode 104) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errorcode </td>
                                        <td>   
                                            <div><strong>integer.</strong> A successfully received call to cancel an order returns 0. An unsuccessfully recieved call to cancel an order returns one of the errorcodes shown in the errormsg list.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> detail </td>
                                        <td>   
                                            <div><strong>string.</strong> Message text that the system may send. The contents of this parameter are usually null.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelQuote, CancelReplaceOrder, CreateQuote, GetOpenOrders, GetOpenQuotes, GetOrderStatus, ModifyOrder, SendOrder, UpdateQuote </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CancelOrder;