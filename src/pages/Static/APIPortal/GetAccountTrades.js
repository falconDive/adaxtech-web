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
    

class GetAccountTrades extends Component {
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
                        <h2> GetAccountTrades </h2>
                        <p> Requests the details on up to 200 past trade executions for a single specific user account and its Order Management System, starting at index i, where i is an integer identifying a specific execution in reverse order; that is, the most recent execution has an index of 0, and increments by one as trade executions recede into the past. </p>
                        <p> The operator of the trading venue determines how long to retain an accessible trading history before archiving. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartIndex”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Count”: 2,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the authenticated user’s account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System to which the user belongs. A user will belong only to one OMS.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> The starting index into the history of trades, from 0 (the most recent trade).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Count </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of trades to return. The system can return up to 200 trades.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response is an array of objects, each of which represents the account’s side of a trade (either buy or sell). The example shows an array of two buy executions. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTimeMS”:  -62135446664520,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Fee”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeProductId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderOriginator”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ExecutionId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“SubAccountId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: “Buy”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RemainingQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 100,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Value”: 100,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTime”: 1501354796406,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterParty”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderTradeRevision”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Direction”: “NoChange”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsBlockTrade”: false"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTimeMS”:  -62135446664520,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Fee”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeProductId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderOriginator”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ExecutionId”: 3,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 3,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“SubAccountId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: “Buy”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RemainingQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Value”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTime”: 1501354796418,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterParty”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderTradeRevision”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Direction”: “NoChange”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsBlockTrade”: false"}</div>
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
                                        <td> TradeTimeMS </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The date and time stamp of the trade in Microsoft tick format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Fee </td>
                                        <td>   
                                            <div><strong>real.</strong> The fee for this trade in units and fractions of units (a $10 USD fee would be 10.00, a .5-BitCoin fee would be 0.5). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product that denominates the fee. Product types will vary on each trading venue. See <strong>GetProduct</strong>. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderOriginator </td>
                                        <td>   
                                            <div><strong>integer.</strong> The user ID of the user who entered the order that caused the trade for this account. (Multiple users can have access to an account.) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System to which the user belongs. A user will belong only to one OMS. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExecutionId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of this account’s side of the trade. Every trade has two sides. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the overall trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the order causing the trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The Account ID that made the trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SubAccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Not currently used. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument being traded. See <strong>“Products and Instruments” on page 4</strong> for the difference. See <strong>GetInstrument</strong> to find information about this instrument by its ID. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>string.</strong> Buy or Sell </div>
                                            <div> 0 Buy </div>
                                            <div> 1 Sell </div>
                                            <div> 2 Short (reserved for future use) </div>
                                            <div> 3 Unknown (error condition) </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The unit quantity of the trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RemainingQuantity </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of units remaining to be traded by the order after this execution. This number is not revealed to the other party in the trade. This value is also known as “leave size” or “leave quantity.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> The unit price at which the instrument traded. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Value </td>
                                        <td>   
                                            <div><strong>real.</strong> The total value of the deal. The system calculates this as: unit price X quantity executed. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeTime </td>
                                        <td>   
                                            <div><strong>integer.</strong> The time at which the trade took place, in POSIX format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CounterParty </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Shows 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderTradeRevision </td>
                                        <td>   
                                            <div><strong>integer.</strong> This value increments if the trade has changed. Default is 1. For example, if the trade busts (fails to conclude), the trade will need to be modified and a revision number then will apply. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Direction </td>
                                        <td>   
                                            <div><strong>string.</strong> Shows if this trade has moved the book price up, down, or no change. Values: </div>
                                            <div> NoChange </div>
                                            <div> UpTick </div>
                                            <div> DownTick </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsBlockTrade </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the trade was a reported trade; false otherwise. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GenerateTradeActivityReport, GetTradesHistory, ScheduleTradeActivityReport, SubscribeTrades, UnsubscribeTrades</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAccountTrades;