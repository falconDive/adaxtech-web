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
    

class GetOrdersHistory extends Component {
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
                        <h2> GetOrdersHistory </h2>
                        <p> Retrieves a history of multiple orders (hence, GetOrdersHistory with plural Orders) for the specified account, order ID, user, instrument, or time stamp, starting at index i, where i is an integer identifying a specific order in reverse order; that is, the most recent order has an index of 0. “Depth” is the count of trades to report backwards from StartIndex. All values in the call other than OMSId are optional. </p>
                        <p> The owner of the trading venue determines how long to retain order history before archiving. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In this call, “Depth” refers not to the depth of the order book, but to the count of trades to report.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>All values other than OMSId are optional. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OriginalOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OriginalClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartTimestamp”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EndTimestamp”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Depth”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartIndex”: 0"}</div>
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
                                            <div><strong>Integer.</strong>  The ID of the Order Management System on which the orders took place. Required. If no other values are specified, returns the orders associated with the default account for the logged-in user on this Order Management System. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The account ID that made the trades. The logged-in user must be associated with this account, although other users also can be associated with the account. If no account ID is supplied, the system assumes the default account for the logged-in user. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A user-assigned ID for the order (like a purchase-order number assigned by a company). ClientOrderId defaults to 0.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OriginalOrderId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The original ID of the order. If specified, the call returns changed orders associated with this order ID. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the user whose account orders will be returned. If not specified, the call returns the orders of the logged-in user. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument named in the order. If not specified, the call returns orders for all instruments for this account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartTimestamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong>  Date and time at which to begin the orders history, in POSIX format, and UTC time zone. If not specified, reverts to the start date of this account on the trading venue. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EndTimestamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong>  Date and time at which to end the orders report, in POSIX format, and UTC time zone. If not specified, uses the current time. See “Time– and DateStamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Depth </td>
                                        <td>   
                                            <div><strong>integer.</strong>  In this case, the count of orders to return, counting from the StartIndex. If not specified, returns all orders between BeginTimeStamp and EndTimeStamp, beginning at StartIndex and working backwards. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> The starting index into the order history, from 0 (the most recent trade) and moving backwards in time. If not specified, defaults to 0. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of order objects. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DisplayQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Instrument”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Account”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderType”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Market”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Limit”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“StopMarket”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“StopLimit”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TrailingStopMarket”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TrailingStopLimit”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“BlockTrade”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderState”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Working”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Rejected”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Canceled”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“FullyExecuted”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTime”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTimeTicks”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“QuantityExecuted”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AvgPrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterPartyId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ChangeReason”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“NewInputAccepted”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“NewInputRejected”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OtherRejected”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Trade”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“SystemCanceled_NoMoreMarket”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“SystemCanceled_BelowMinimum”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“NoChange”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“UserModified”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigClOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“EnteredBy”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsQuote”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAsk”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAskSize”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBid”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBidSize”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RejectReason”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsLockedIn”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div>{"]"}</div>
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
                                            <div><strong>real.</strong>The unit price of the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity of the order. </div>
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
                                            <div>An open order will not be fully executed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time and date that the order was received, in POSIX format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTimeTicks </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Identifies the time and date that the order was received in Microsoft ticks format, and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigQuantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The original quantity in the order (may be different from the amount executed). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> QuantityExecuted </td>
                                        <td>   
                                            <div><strong>real.</strong> This value states the quantity that was executed in the order (may be different from Quantity or OrigQuantity. </div>
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
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, GetOpenOrders, GetOpenQuotes, GetOrderHistory, GetOrderHistoryByOrderId, GetOrderStatus, ModifyOrder, SendOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetOrdersHistory;