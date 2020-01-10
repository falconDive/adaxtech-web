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
    

class GetOrderHistory extends Component {
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
                        <h2> GetOrderHistory </h2>
                        <p> Returns a complete list of all orders, both open and executed, for a specific account on the specified Order Management System. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System where the orders were placed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account whose orders will be returned </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of 1 or more order objects. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Side”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrderId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“DisplayQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Instrument”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Account”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrderType”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Market”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Limit”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“StopMarket”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“StopLimit”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“TrailingStopMarket”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“TrailingStopLimit”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“BlockTrade”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrderState”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Working”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Rejected”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Canceled”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“FullyExecuted”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ReceiveTime”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ReceiveTimeTicks”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrigQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“QuantityExecuted”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“AvgPrice”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“CounterPartyId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ChangeReason”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NewInputAccepted”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NewInputRejected”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“OtherRejected”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Trade”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“SystemCanceled_NoMoreMarket”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“SystemCanceled_BelowMinimum”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NoChange”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“UserModified”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrigOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OrigClOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“EnteredBy”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“IsQuote”: false,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“InsideAsk”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“InsideAskSize”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“InsideBid”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“InsideBidSize”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“RejectReason”: “”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“IsLockedIn”: false,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
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
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>string.</strong> One of: </div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>The ID of this order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong>Price of the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> Quantity of the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DisplayQuantity </td>
                                        <td>   
                                            <div><strong>real.</strong>The quantity available to buy or sell that is publicly displayed to the market. To display a DisplayQuantity value, an order must be a Limit order with a reserve. See “Display Quantity” on page 8, and “Order Types” on page 7. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Instrument </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the instrument being ordered. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Account </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the account ordering the instrument. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderType </td>
                                        <td>   
                                            <div><strong>string.</strong>One of: </div>
                                            <div>Unknown</div>
                                            <div>Market</div>
                                            <div>Limit</div>
                                            <div>StopMarket</div>
                                            <div>StopLimit</div>
                                            <div>TrailingStopMarket</div>
                                            <div>TrailingStopLimit</div>
                                            <div>BlockTrade</div>
                                            <div>See “Order Types” on page 7.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>A user-assigned ID for the order (like a purchase-order number assigned by a company). ClientOrderId defaults to 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderState </td>
                                        <td>   
                                            <div><strong>string.</strong>One of:  </div>
                                            <div>Unknown</div>
                                            <div>Working</div>
                                            <div>Rejected</div>
                                            <div>Canceled</div>
                                            <div>Expired</div>
                                            <div>FullyExecuted</div>
                                            <div>An open order will probably not yet be fully executed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time at which the system received the quote, in POSIX format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTimeTicks </td>
                                        <td>   
                                            <div><strong>long integer.</strong>The time stamp of the received quote in Microsoft Ticks format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigQuantity </td>
                                        <td>   
                                            <div><strong>real.</strong> If the order has been changed, this value shows the original quantity. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> QuantityExecuted </td>
                                        <td>   
                                            <div><strong>real.</strong>This value states the quantity that was executed in the order. It may be the same as the quantity of the order; it may be different. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AvgPrice </td>
                                        <td>   
                                            <div><strong>real.</strong>Not currently used. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CounterPartyId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>Shows 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ChangeReason </td>
                                        <td>   
                                            <div><strong>string.</strong> If the order has been changed, this value shows the reason. One of: </div>
                                            <div>Unknown</div>
                                            <div>NewInputAccepted</div>
                                            <div>NewInputRejected</div>
                                            <div>OtherRejected</div>
                                            <div>Expired</div>
                                            <div>Trade</div>
                                            <div>SystemCanceled_NoMoreMarket</div>
                                            <div>SystemCanceled_BelowMinimum</div>
                                            <div>NoChange</div>
                                            <div>UserModified</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigOrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> If the order has been changed, shows the original order ID. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigClOrdId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> If the order has been changed, shows the original client order ID, a value that the client can create (much like a purchase order). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EnteredBy </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who entered the order in this account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsQuote </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> If this order is a quote (rather than an order), returns true, otherwise false. Default is false. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAsk </td>
                                        <td>   
                                            <div><strong>real.</strong> Best Ask price available at time of entry (generally available to market makers). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAskSize </td>
                                        <td>   
                                            <div><strong>real.</strong> Quantity available at the best inside ask price (generally available to market makers). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideBid </td>
                                        <td>   
                                            <div><strong>real.</strong> Best Bid price available at time of entry (generally available to market makers). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideBidSize </td>
                                        <td>   
                                            <div><strong>real.</strong> Quantity available at the best inside Bid price (generally available to market makers). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradePrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the instrument last traded. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RejectReason </td>
                                        <td>   
                                            <div><strong>string.</strong> If the order was rejected, this string value holds the reason. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsLockedIn </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> True if both parties to a block trade agree that one party will report the trade for both. Otherwise false. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the order was created. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, GetOpenOrders, GetOpenQuotes, GetOrderHistoryByOrderId, GetOrdersHistory, GetOrderStatus, ModifyOrder, SendOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetOrderHistory;