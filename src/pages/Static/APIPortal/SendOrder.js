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
    

class SendOrder extends Component {
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
                        <h2> SendOrder </h2>
                        <p> Creates an order. Anyone submitting an order should also subscribe to the various market data and event feeds, or call <strong>GetOpenOrders</strong> or <strong>GetOrderStatus</strong> to monitor the status of the order. If the order is not in a state to be executed, <strong>GetOpenOrders</strong> will not return it. </p>

                        <div className={`noteCont`}>
                            <p><strong>Note: </strong><strong>ModifyOrder</strong> does not surrender or reset order book priority.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 5,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 99,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DisplayQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UseDisplayQuantity”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LimitPrice”: 95,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderIdOCO”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”: 2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PegPriceType”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TrailingAmount”: 1.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LimitOffset”: 2.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StopPrice”: 96,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TimeInForce”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1"}</div>
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
                                            <div><strong>Integer.</strong> The ID of the account placing the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>  A user-assigned ID for the order (like a purchase-order number assigned by a company). This ID is useful for recognizing future states related to this order. ClientOrderId defaults to 0. </div>
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
                                            <div><strong>real.</strong> The quantity available to buy or sell that is publicly displayed to the market. To display a DisplayQuantity value, an order must be a Limit order with a reserve. See “Display Quantity” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UseDisplayQuantity </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> If you enter a Limit order with a reserve, you must set UseDisplayQuantity to true. See “Display Quantity” on page 8 for more information about how the system users the DisplayQuantity value. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LimitPrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which to execute the order, if the order is a Limit order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderIdOCO </td>
                                        <td>   
                                            <div><strong>integer.</strong> One Cancels the Other — If this order is order A, OrderIdOCO refers to the order ID of an order B (which is not the order being created by this call). If order B executes, then order A created by this call is canceled. You can also set up order B to watch order A in the same way, but that may require an update to order B to make it watch this one, which could have implications for priority in the order book. See <strong>CancelReplaceOrder</strong> and <strong>ModifyOrder</strong>. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderType </td>
                                        <td>   
                                            <div><strong>integer.</strong> The type of this order, as expressed in integer format. See “Order Types” on page 7 for an explanation of each type. One of: </div>
                                            <div>1 Market</div>
                                            <div>2 Limit</div>
                                            <div>3 StopMarket</div>
                                            <div>4 StopLimit</div>
                                            <div>5 TrailingStopMarket</div>
                                            <div>6 TrailingStopLimit</div>
                                            <div>7 BlockTrade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PegPriceType </td>
                                        <td>   
                                            <div><strong>integer.</strong> When entering a stop/trailing order, set PegPriceType to an integer that corresponds to the type of price that pegs the stop: </div>
                                            <div>1 Last</div>
                                            <div>2 Bid</div>
                                            <div>3 Ask</div>
                                            <div>4 Midpoint</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument being traded in the order. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TrailingAmount </td>
                                        <td>   
                                            <div><strong>real.</strong> The offset by which to trail the market in one of the trailing order types. Set this to the current price of the market to ensure that the trailing offset is the amount intended in a fast-moving market. See “Order Types” on page 7. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LimitOffset </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount by which a trailing limit order is offset from the activation price. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>integer.</strong> The side of the trade represented by this order. One of: </div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StopPrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which to execute the order, if the order is a Stop order (either buy or sell). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TimeInForce </td>
                                        <td>   
                                            <div><strong>integer.</strong> The period during which the order is executable. </div>
                                            <div>0 Unknown (error condition)</div>
                                            <div>1 GTC good ’til canceled</div>
                                            <div>3 IOC immediate or cancelled</div>
                                            <div>4 FOK fill or kill — fill the order immediately, or cancel it immediately</div>
                                            <div>There may be other settings for TimeInForce depending on the trading venue.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the order is being placed. </div>
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
                            <div style={{paddingLeft:'10px'}}>{"“status”: ”Accepted”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 123 // Server order id"}</div>
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
                                        <td> status </td>
                                        <td>   
                                            <div><strong>string.</strong> If the order is accepted by the system, it returns 0. </div>
                                            <div>0 Accepted</div>
                                            <div>1 Rejected</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> Any error message the server returns.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID assigned to the order by the server. This allows you to track the order. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelReplaceOrder, GetOpenOrders, GetOrderHistory, GetOrderHistoryByOrderId, GetOrdersHistory, GetOrderStatus, ModifyOrder </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SendOrder;