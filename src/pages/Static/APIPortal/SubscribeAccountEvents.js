import React, { Component } from 'react';

import styles from "./styles.scss"
import { BrowserRouter, HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import {connect } from 'react-redux';
import startIndex from "./getTradesHistory.png"

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
    

class SubscribeAccountEvents extends Component {
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
                        <h2> SubscribeAccountEvents </h2>
                        <p> Subscribes the user to notifications about the status of account-level events: orders, trades, position updates, deposits, and withdrawals for a specific account on the Order Management System (OMS). The subscription reports all events associated with a given account; there is no filter at the call level to subscribe to some events and not others. </p>
                        <p>Account event information is supplied in comma-separated-value (CSV) format. For specific CSV formatting information, see the APEX Extract CSV Data Dictionary, available from ADAX Tech.</p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the account for the logged-in user.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System to which the account belongs.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array, one element for each trade. </p>
                        <div style={{marginTop:'10px', paddingLeft:'50px'}}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Subscribe”: true"}</div>
                            <div>{"}"}</div>
                        </div>
                        <p>Where:</p>
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
                                        <td> Subscribe </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> A successful subscription returns true; otherwise, false.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> The Events </h4>
                        <p>When you call <strong>SubscribeAccountEvents</strong>, you subscribe to the following list of events. The Order Management System may supply them at irregular intervals; software must listen for these events. The system sends each of these events in a message frame. See ““Message Frame” on page 1. </p>

                        <h5 style={{marginTop:'10px'}}> AccountPositionEvent </h5>
                        <p>Trigger: The balance in your account changes.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:4, //The OMSId. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”:4, // account id number. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductSymbol”:”BTC”, //The Product Symbol for this balance message. [String]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”:1, //The Product Id for this balance message. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”:10499.1, //The total balance in the account for the specified product. [Dec]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Hold”: 2.1, //The total amount of the balance that is on hold. Your available //balance for trading and withdraw is (Amount - Hold). [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PendingDeposits”:0, //Total Deposits Pending for the specified product. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PendingWithdraws”:0, //Total Withdrawals Pending for the specified product. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TotalDayDeposits”:0, //The total 24-hour deposits for the specified product. UTC. [Dec]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TotalDayWithdraws”:0 //The total 24-hour withdraws for the specified product. UTC [Dec]"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> CancelAllOrdersRejectEvent </h5>
                        <p>Trigger: All orders for your account are rejected.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1, // OMS ID [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4, // ID of the account being tracked [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0, // ID of the instrument in the order [Long Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “Rejected”, // Accepted/Rejected [String]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RejectReason”: “Instrument not found.” // Reason for rejection [String]"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> CancelOrderRejectEvent </h5>
                        <p>Trigger: Your order is canceled.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1, //OMS Id [Integer] Always 1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4, //Your Account ID. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 1, //The Order ID from your Cancel request. [64 Bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderRevision”: 0, //The Revision of the Order, if any was found. [64 Bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”: “Unknown”, // See “Order Types” on page 7"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1, // The InstrumentId from your Cancel request. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “Rejected”, //Always “Rejected” [String]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RejectReason”: “Order Not Found” //A message describing the reason for the rejection. [String]"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> CancelReplaceOrderRejectEvent </h5>
                        <p>Trigger: Your order is rejected even if a cancel-replace order was placed.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1, // ID of the OMS [integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4, // ID of the account [integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 9342, // The ID of the rejected order [integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 1234, // The client-supplied order ID [long integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LimitPrice”: 99.1, // The limit price of the order."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderIdOCO”: 0, // The ID of the other ordre to cancel if this is executed."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”: “Limit”, // See “Order Types” on page 7."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PegPriceType”: “Bid”, // Where to peg the stop/trailing order."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderIdToReplace”: 9333, // The ID of the order being cancelled and replaced."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1, // ID of the instrument traded in the order."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReferencePrice”: 99.1, // used internally."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”: 1.0, // Quantity of the replacement order"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”: “Buy”, // Side of the order: Buy, Sell, Short (future)"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StopPrice”:0, // The price at which to execute the new order."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TimeInForce”:”GTC”, // Period when new order can be executed."}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”:”Rejected”, // Status of the order – always “rejected”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RejectReason”:”Order Not Found” // Reason the order was rejected."}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> MarketStateUpdate </h5>
                        <p>Trigger: The market state is altered administratively.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ExchangeId”:1, // Exchange Id [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“VenueAdapterId”:1,    // Internal [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“VenueInstrumentId”:1, // Instrument Id on a specific venue [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Action”:”ReOpen”, // Market State Action [String] Values are // “Pause”, “Resume”, “Halt”, “ReOpen”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PreviousStatus”:”Stopped”, // Previous Market Status for Instrument [String] Values are // “Running”, “Paused”, “Stopped”, “Starting”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“NewStatus”:”Running”, // Market Status for Instrument [String] Values are // “Running”, “Paused”, “Stopped”, “Starting”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ExchangeDateTime”:”2016-04-21T21:48:22Z” // ISO 8601 format UTC time zone"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> NewOrderRejectEvent </h5>
                        <p>Trigger: An order associated with your account is rejected.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1, //OMS Id [Integer] Always 1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4, //Your Account Id [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”: 1234, //Your Client Order Id [64 Bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “Rejected”, //Always “Rejected”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RejectReason”: “No More Market” //A message describing the reason for the reject."}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> OrderStateEvent </h5>
                        <p>Trigger: The status changes for an order associated with your account.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”:”Sell”, // The side of your order. [String] Values are “Sell”, // “Buy”, “Short”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 9849, //The Server-Assigned Order Id. [64-bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Price”: 97, //The Price of your order. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”:1, // The Quantity (Remaining if partially or fully executed) of // your order. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Instrument”:1, // The InstrumentId your order is for. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Account”:4, // Your AccountId [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderType”:”Limit”, // The type of order. [String] Values are “Market”, “Limit”, // “StopMarket”, “StopLimit”, “TrailingStopMarket”, and // “TrailingStopLimit”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”:0, // Your client order id. [64-bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderState”:”Working”, // The current state of the order. [String] // Values are “Working”, “Rejected”, “FullyExecuted”, “Canceled”, // “Expired”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReceiveTime”:0, // Timestamp in POSIX format"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrigQuantity”:1,   // The original quantity of your order. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“QuantityExecuted”:0, // The total executed quantity. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AvgPrice”:0,       // Avergage executed price. [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ChangeReason”:”NewInputAccepted” // The reason for the order state change. [String] Values are // “NewInputAccepted”, “NewInputRejected”, “OtherRejected”, // “Expired”, “Trade”, SystemCanceled BelowMinimum”, // “SystemCanceled NoMoreMarket”, “UserModified”"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> OrderTradeEvent </h5>
                        <p>Trigger: An order associated with your account results in a trade.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,       //OMS Id [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TradeId”:213, //Trade Id [64-bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”:9848, //Order Id [64-bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”:4, //Your Account Id [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ClientOrderId”:0, //Your client order id. [64-bit Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”:1, //Instrument Id [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”:”Buy”, //[String] Values are “Buy”, “Sell”, “Short” (future)"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”:0.01,    //Quantity [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Price”:95,         //Price [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Value”:0.95,   //Value [Decimal]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TradeTime”:635978008210426109, // TimeStamp in Microsoft ticks format"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ContraAcctId”:3, // The Counterparty of the trade. The counterparty is always // the clearing account. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderTradeRevision”:1, //Usually 1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Direction”:”NoChange” //”Uptick”, “Downtick”, “NoChange”"}</div>
                            <div>{"}"}</div>
                        </div>

                        <h5 style={{marginTop:'10px'}}> PendingDepositUpdate </h5>
                        <p>Trigger: Deposit pending on your account.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4, // Your account id number. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetId”: 1, // The ProductId of the pending deposit. [Integer]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TotalPendingDepositValue”: 0.01 //The value of the pending deposit. [Decimal]"}</div>
                            <div>{"}"}</div>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Requires2FA”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TwoFAType”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TwoFAToken”: “”,"}</div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeLevel1, SubscribeLevel2, SubscribeTicker, SubscribeTrades, UnsubscribeLevel1, UnsubscribeLevel2, UnsubscribeTicker, UnsubscribeTrades </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SubscribeAccountEvents;