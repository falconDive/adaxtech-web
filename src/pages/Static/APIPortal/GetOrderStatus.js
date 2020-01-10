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
    

class GetOrderStatus extends Component {
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
                        <h2> GetOrderStatus </h2>
                        <p> Retrieves the status information for a single order. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 0"}</div>
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
                                            <div><strong>Integer.</strong> The ID of the Order Management System on which the order was placed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the account under which the order was placed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the order whose status will be returned.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns a single order object. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DisplayQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Instrument”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Account”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Market”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Limit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“StopMarket”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“StopLimit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TrailingStopMarket”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TrailingStopLimit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BlockTrade”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderState”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Working”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Rejected”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Canceled”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“FullyExecuted”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReceiveTime”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReceiveTimeTicks”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“QuantityExecuted”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AvgPrice”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CounterPartyId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ChangeReason”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NewInputAccepted”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NewInputRejected”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OtherRejected”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Expired”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Trade”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“SystemCanceled_NoMoreMarket”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“SystemCanceled_BelowMinimum”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NoChange”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“UserModified”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigClOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EnteredBy”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“IsQuote”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InsideAsk”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InsideAskSize”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InsideBid”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InsideBidSize”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RejectReason”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“IsLockedIn”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
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
                                            <div><strong>string.</strong> The side of this order. One of: </div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>The ID of this order. The response echoes the order ID from the request. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong>The price at which the order was placed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity of the instrument being ordered. </div>
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
                                            <div><strong>integer.</strong>The ID of the instrument traded in the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Account </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the account that placed the order. </div>
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
                                            <div>0 Unknown</div>
                                            <div>2 Working</div>
                                            <div>3 Rejected</div>
                                            <div>4 Canceled</div>
                                            <div>5 Expired</div>
                                            <div>6 FullyExecuted</div>
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
                                            <div><strong>real.</strong> The original quantity of the order. The actual amount traded may be different. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> QuantityExecuted </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity executed in this order. May be different from the amount ordered (Quantity). </div>
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
                                            <div><strong>string.</strong> The reason that the order may have been changed from the original. One of: </div>
                                            <div>0 Unknown</div>
                                            <div>1 NewInputAccepted</div>
                                            <div>2 NewInputRejected</div>
                                            <div>3 OtherRejected</div>
                                            <div>4 Expired</div>
                                            <div>5 Trade</div>
                                            <div>6 SystemCanceled_NoMoreMarket</div>
                                            <div>7 SystemCanceled_BelowMinimum</div>
                                            <div>8 NoChange</div>
                                            <div>9 UserModified</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigOrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the original order, if it has been changed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigClOrdId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> If the order has been changed, shows the original client order ID, a value that the client can create (much like a purchase order). The default value is 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EnteredBy </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who originally entered the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsQuote </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the order is a quote, else returns false. Default is false. See “Quotes and Orders” on page 5. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAsk </td>
                                        <td>   
                                            <div><strong>real.</strong> Ask price among market makers. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideAskSize </td>
                                        <td>   
                                            <div><strong>real.</strong> Ask quantity among market makers. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideBid </td>
                                        <td>   
                                            <div><strong>real.</strong> Bid price among market makers. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InsideBidSize </td>
                                        <td>   
                                            <div><strong>real.</strong> Bid quantity among market makers. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradePrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the instrument traded immediately before this trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RejectReason </td>
                                        <td>   
                                            <div><strong>string.</strong> If the trade was rejected, this string holds the reason. </div>
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
                                            <div><strong>integer.</strong> ID of the Order Management System on which the trades being reported on occurred. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, GetOpenOrders, GetOpenQuotes, GetOrderHistory, GetOrderHistoryByOrderId, GetOrdersHistory, ModifyOrder, SendOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetOrderStatus;