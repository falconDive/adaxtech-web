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
    

class GetTradesHistory extends Component {
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
                        <h2> GetTickerHistory </h2>
                        <p> Retrieves a list of trades for the specified account, order ID, user, instrument, or starting and ending time stamp. The returned list begins at start index i, where i is an integer identifying a specific trade in reverse order; that is, the most recent trade has an index of 0. “Depth” is the count of trades to report backwards from StartIndex. </p>
                        <img src={startIndex} className={`img-fluid`} alt="Responsive image"/>
                        <p style={{fontSize:'12px'}}><strong>Caution:</strong> You must coordinate StartIndex, Depth, StartTimeStamp, and EndTimeStamp to retrieve the historical information you need. As the diagram shows, it is possible to specify values (for example, EndTimeStamp and Depth) that can exclude information you may want (the red areas). </p>
                        <p>The owner of the trading venue determines how long to retain order history before archiving.</p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In this call, “Depth” refers not to the depth of the order book, but to the count of trades to report.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>All values in the call other than OMSId are optional. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TradeId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartTimestamp”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EndTimestamp”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Depth”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartIndex”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ExecutionId”: 0"}</div>
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
                                            <div><strong>integer.</strong>  The ID of the Order Management System on which the trades took place. If no other values are specified, returns the trades associated with the default account for the logged-in user on this Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The account ID that made the trades. The logged-in user must be associated with this account, although other users also can be associated with the account. If no account ID is supplied, the system assumes the default account for the logged-in user.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument whose history is reported. If no instrument ID is included, the system returns trades for all instruments associated with the account and OMS.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of a specific trade. If specified, the call can return multiple states for a single trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the order resulting in the trade. If specified, the call returns all trades associated with the order.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the logged-in user. If not specified, the call returns trades associated with the users belonging to the default account for the logged-in user of this OMS. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartTimeStamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The historical date and time at which to begin the trade report, in POSIX format and UTC time zone. If not specified, reverts to the start date of this account on the trading venue. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EndTimeStamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Date at which to end the trade report, in POSIX format and UTC time zone. If not specified, uses the current time. See ““Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Depth </td>
                                        <td>   
                                            <div><strong>integer.</strong> In this case, the count of trades to return, counting from the StartIndex. If not specified, returns all trades between BeginTimeStamp and EndTimeStamp, beginning at StartIndex.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> The starting index into the history of trades, from 0 (the most recent trade) and moving backwards in time. If not specified, defaults to 0.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExecutionId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the individual buy or sell execution. If not specified, returns all.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array, one element for each trade. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTimeMS”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Fee”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeProductId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderOriginator”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ExecutionId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“SubAccountId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClientOrderId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Side”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RemainingQuantity”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Value”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TradeTime”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CounterParty”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OrderTradeRevision”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Direction”: {"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"“NoChange”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“UpTick”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“DownTick”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"]"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“IsBlockTrade”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div>{"]"}</div>
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
                                        <td> TradeTimeMS </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time at which the trade took place, reported in Microsoft ticks format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Fee </td>
                                        <td>   
                                            <div><strong>real.</strong> The fee that applied to this trade, if any.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product in which the fee is denominated.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderOriginator </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who entered the order on your side of the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the trade took place.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExecutionId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of your sell or buy side portion of the execution, individually.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the overall trade</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the order that resulted in the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account under which the trade was executed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SubAccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Not currently used.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ClientOrderId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> A user-assigned ID for the order (like a purchase-order number assigned by a company). ClientOrderId defaults to 0.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument being traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>string.</strong> One of:</div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity of the instrument being traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RemainingQuantity </td>
                                        <td>   
                                            <div><strong>real.</strong> Any quantity remaining in the order after this trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> The unit price of the order.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Value </td>
                                        <td>   
                                            <div><strong>real.</strong> The overall value of the trade — price X quantity.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Time at which the trade took place, in POSIX format and UTC time zone.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CounterParty </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Shows 0.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderTradeRevision </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of any trade revision that took place for the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Direction </td>
                                        <td>   
                                            <div><strong>string.</strong> Effect of this trade on the market. One of:</div>
                                            <div>Nochange</div>
                                            <div>UpTick</div>
                                            <div>DownTick</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IsBlockTrade </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the trade was a reported trade; false otherwise.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GenerateTradeActivityReport, GetAccountTrades, ScheduleTradeActivityReport, SubscribeTrades, UnsubscribeTrades </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetTradesHistory;