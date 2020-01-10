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
    

class CancelAllOrders extends Component {
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
                        <h2> CancelAllOrders </h2>
                        <p> Cancels all open matching orders for the specified instrument, account, user (subject to permission level) or a combination of them on a specific Order Management System. User and account permissions govern cancellation actions. See “Permissions” on page 4. For more information on quotes and orders, see the explanation of “Quotes and Orders” on page 5.</p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Multiple users may have access to the same account.</p>
                        </div>
                        <div id="cancelAllOrdersTblCont">
                            <table className={`table`}>
                                <thead>
                                    <tr>
                                        <td colSpan="3">
                                            Specifying this information…
                                        </td>
                                        <td rowSpan="2" className={`cancelOrdersFor`}>
                                            Cancels all orders for…
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>User 37</td>
                                        <td>Acc’t 14</td>
                                        <td>Instr 25</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> X </td>
                                        <td> X </td>
                                        <td> X </td>
                                        <td> Account #14 belonging to user #37 for instrument #25. </td>
                                    </tr>
                                    <tr>
                                        <td> X </td>
                                        <td> X </td>
                                        <td>  </td>
                                        <td> Account #14 belonging to user #37 for all instruments. </td>
                                    </tr>
                                    <tr>
                                        <td> X </td>
                                        <td>  </td>
                                        <td> X </td>
                                        <td> All accounts belonging to user #37 for instrument #25. </td>
                                    </tr>
                                    <tr>
                                        <td> X </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td> All accounts belonging to user #37 for all instruments. </td>
                                    </tr>
                                    <tr>
                                        <td>  </td>
                                        <td> X </td>
                                        <td> X </td>
                                        <td> All users of account #14 for instrument #25. </td>
                                    </tr>
                                    <tr>
                                        <td>  </td>
                                        <td> X </td>
                                        <td>  </td>
                                        <td> All users of account #14 for all instruments. </td>
                                    </tr>
                                    <tr>
                                        <td>  </td>
                                        <td>  </td>
                                        <td> X </td>
                                        <td> All accounts of all users for instrument #25. (requires special permission) </td>
                                    </tr>
                                    <tr>
                                        <td>  </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td> All accounts of all users for all instruments (requires special permission) </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0, // conditionally optional"}</div>
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
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The account for which all orders are being canceled. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user whose orders are being canceled. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The Order Management System under which the account operates. Required.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument for which all orders are being cancelled. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response to <strong>CancelAllOrders</strong> verifies that the call was received, not that the orders have been canceled successfully. Individual event updates to the user show orders as they cancel. To verify that an order has been canceled, use <strong>GetOrderStatus</strong> or <strong>GetOpenOrders</strong>. : </p>
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
                                            <div><strong>Boolean.</strong> If the call has been successfully received by the Order Management System, result is true; otherwise, it is false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the call returns null; the errormsg parameter for an unsuccessful call returns one of the following messages:</div>
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
                        <p> CancelOrder, CancelQuote, CancelReplaceOrder, CreateQuote, GetOpenOrders, GetOpenQuotes, GetOrderStatus, ModifyOrder, SendOrder, UpdateQuote </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CancelAllOrders;