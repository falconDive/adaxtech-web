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
    

class GetOpenOrders extends Component {
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
                        <h2> GetOpenOrders </h2>
                        <p> Returns an array of 0 or more orders that have not yet been filled (open orders) for a single account for a given user on a specific Order Management System. The call returns an empty array if a user has no open orders. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the authenticated user’s account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System to which the user belongs. A user will belong only to one OMS. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> This example response for GetOpenOrders returns an array containing both a buy-side and a sell-side order. The call returns an empty array if there are no open orders for the account. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: “Buy”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 100,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DisplayQuantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Instrument”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Account”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderType”: “Limit”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderState”: “Working”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTime”: 1501354241987,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTimeTicks”: 636369510419870950,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigQuantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“QuantityExecuted”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AvgPrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterPartyId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ChangeReason”: “NewInputAccepted”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigOrderId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigClOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“EnteredBy”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsQuote”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAsk”: 9223372036.854775807,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAskSize”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBid”: 100,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBidSize”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RejectReason”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsLockedIn”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: “Sell”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 150,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DisplayQuantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Instrument”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Account”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderType”: “Limit”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderState”: “Working”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTime”: 1501354246718,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ReceiveTimeTicks”: 636369510467182396,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigQuantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“QuantityExecuted”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AvgPrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterPartyId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ChangeReason”: “NewInputAccepted”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigOrderId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrigClOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“EnteredBy”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsQuote”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAsk”: 150,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideAskSize”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBid”: 100,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InsideBidSize”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RejectReason”: “”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsLockedIn”: false,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
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
                                            <div><strong>string.</strong> The open order can be Buy or Sell. </div>
                                            <div>0 Buy </div>
                                            <div>1 Sell </div>
                                            <div>2 Short (reserved for future use) </div>
                                            <div>3 Unknown (error condition) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the open order. The OrderID is unique in each Order Management Systsem. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the buy or sell has been ordered. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity to be bought or sold. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DisplayQuantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity available to buy or sell that is publicly displayed to the market. To display a DisplayQuantity value, an order must be a Limit order with a reserve. See “Display Quantity” on page 8, and “Order Types” on page 7. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Instrument </td>
                                        <td>   
                                            <div><strong>integer.</strong> ID of the instrument being traded. See <strong>GetInstruments</strong>. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Account </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account that placed the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderType </td>
                                        <td>   
                                            <div><strong>string.</strong> There are currently seven types of order. See “Order Types” on page 7. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A user-assigned ID for the order (like a purchase-order number assigned by a company). ClientOrderId defaults to 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderState </td>
                                        <td>   
                                            <div><strong>string.</strong> The current condition of the order. There are five order states: </div>
                                            <div>Working </div>
                                            <div>Rejected </div>
                                            <div>Canceled </div>
                                            <div>Expired </div>
                                            <div>FullyExecuted </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time at which the system received the order, in POSIX format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReceiveTimeTicks </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time stamp of the received order in Microsoft Tick format, and UTC time zone. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigQuantity </td>
                                        <td>   
                                            <div><strong>integer.</strong> Original quantity of the order. The quantity of the actual execution may be lower than this number, but OrigQuantity shows the quantity in the order as placed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> QuantityExecuted </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The number of units executed in this trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AvgPrice </td>
                                        <td>   
                                            <div><strong>real.</strong> Not currently used. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CounterPartyId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Shows 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ChangeReason </td>
                                        <td>   
                                            <div><strong>string.</strong> The reason that an order has been changed. Values: </div>
                                            <div>1 NewInputAccepted</div>
                                            <div>2 NewInputRejected</div>
                                            <div>3 OtherRejected</div>
                                            <div>4 Expired</div>
                                            <div>5 Trade</div>
                                            <div>6 SystemCanceled_NoMoreMarket</div>
                                            <div>7 SystemCanceled_BelowMinimum</div>
                                            <div>8 NoChange</div>
                                            <div>100 UserModified </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigOrderId </td>
                                        <td>   
                                            <div><strong>long.</strong> ID of the original order. This number is also appended to CancelReplaceOrder. See CancelReplaceOrder. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EnteredBy </td>
                                        <td>   
                                            <div><strong>integer.</strong> User ID of the person who entered the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsQuote </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> True if the open order is a quote; false if not. See “Quotes and Orders” on page 5. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAsk/InsideBid </td>
                                        <td>   
                                            <div><strong>real.</strong> Best price available at time of entry (for ask or bid, respectively). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAskSize/InsideBidSize </td>
                                        <td>   
                                            <div><strong>real.</strong> Quantity available at the best inside ask (or bid) price. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradePrice </td>
                                        <td>   
                                            <div><strong>real.</strong> Last trade price for this product before this order was entered. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RejectReason </td>
                                        <td>   
                                            <div><strong>string.</strong> If this order was rejected, RejectReason holds the reason for the rejection. </div>
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
                                            <div><strong>integer.</strong> ID of the Order Management System on which the order was placed. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, GetOrdersHistory, GetOrderHistoryByOrderId, GetOrdersHistory, GetOrderStatus, ModifyOrder, SendOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetOpenOrders;