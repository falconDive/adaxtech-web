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
    

class CancelReplaceOrder extends Component {
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
                        <h2> CancelReplaceOrder </h2>
                        <p> <strong>CancelReplaceOrder</strong> is single API call that both cancels an existing order and replaces it with a new order. Canceling one order and replacing it with another also cancels the order’s priority in the order book. You can use <strong>ModifyOrder</strong> to preserve priority in the book; but <strong>ModifyOrder</strong> only allows a reduction in order quantity.</p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong><strong>CancelReplaceOrder</strong> sacrifices the order’s priority in the order book</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderIdToReplace”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrdId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Market”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Limit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“StopMarket”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“StopLimit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TrailingStopMarket”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TrailingStopLimit”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BlockTrade”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TrailingAmount”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LimitOffset”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DisplayQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LimitPrice”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StopPrice”: 0, // conditionally optional"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PegPriceType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Last”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Bid”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Ask”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Midpoint”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TimeInForce”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“GTC”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“IOC”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“FOK”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderIdOCO”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”: 0,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the order is being canceled and replaced by another order.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderIdToReplace </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the order to replace with this order.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A user-assigned ID for the new, replacement order (like a purchase-order number assigned by a company). This ID is useful for recognizing future states related to this order. ClientOrderId defaults to 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of the replacement order: See Order Types in “Contents common to many API calls.</div>
                                            <div> 0 Unknown </div>
                                            <div> 1 Market </div>
                                            <div> 2 Limit </div>
                                            <div> 3 StopMarket </div>
                                            <div> 4 StopLimit </div>
                                            <div> 5 TrailingStopMarket </div>
                                            <div> 6 TrailingStopLimit </div>
                                            <div> 7 BlockTrade </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>string.</strong> The side of the replacement order:</div>
                                            <div> 0 Buy </div>
                                            <div> 1 Sell </div>
                                            <div> 2 Short (reserved for future use) </div>
                                            <div> 3 Unknown (error condition) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account under which the original order was placed and the new order will be placed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the instrument being traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TrailingAmount </td>
                                        <td>   
                                            <div><strong>real.</strong> The offset by which to trail the market in one of the trailing order types. Set this to the current price of the market to ensure that the trailing offset is the amount intended in a fast-moving market.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LimitPrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which to execute the new order, if the order is a Limit order.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StopPrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which to execute the new order, if the order is a Stop order (either buy or sell).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PegPriceType </td>
                                        <td>   
                                            <div><strong>string.</strong> When entering a stop/trailing order, set PegPriceType to the type of price that pegs the stop.</div>
                                            <div> 0 Last </div>
                                            <div> 1 Bid </div>
                                            <div> 2 Ask </div>
                                            <div> 3 Midpoint </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TimeInForce </td>
                                        <td>   
                                            <div><strong>string.</strong> The period during which the new order is executable.</div>
                                            <div> 0 Unknown (error condition) </div>
                                            <div> 1 GTC good ’til canceled </div>
                                            <div> 3 IOC immediate or canceled </div>
                                            <div> 4 FOK fill or kill — fill the order immediately, or cancel it immediately </div>
                                            <div> There may be other settings for TimeInForce depending on the trading venue. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderIdOCO </td>
                                        <td>   
                                            <div><strong>integer.</strong> One Cancels the Other — If the order being canceled in this call is order A, and the order replacing order A in this call is order B, then OrderIdOCO refers to an order C that is currently open. If order C executes, then order B is canceled. You can also set up order C to watch order B in this way, but that will require an update to order C.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the order (buy or sell). </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns the new replacement order ID and echoes back any replacement client ID you have supplied, along with the original order ID and the original client order ID. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReplacementOrderId”: 1234,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReplacementClOrdId”: 1561,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigOrderId”: 5678,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigClOrdId”: 91011,"}</div>
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
                                        <td> ReplacementOrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The order ID assigned to the replacement order by the server.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReplacementClOrdId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Echoes the contents of the ClientOrderId value from the request. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigOrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Echoes OrderIdToReplace, which is the original order you are replacing. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrigClOrdId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Provides the client order ID of the original order (not specified in the requesting call). </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CancelAllOrders, CancelOrder, CancelQuote, CreateQuote, GetOpenOrders, GetOpenQuotes, GetOrderStatus, ModifyOrder, SendOrder, UpdateQuote</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CancelReplaceOrder;