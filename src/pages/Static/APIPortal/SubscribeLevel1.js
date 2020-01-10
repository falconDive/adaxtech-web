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
    

class SubscribeLevel1 extends Component {
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
                        <h2> SubscribeLevel1 </h2>
                        <h5> No authentication required — trading venue operator may control access </h5>
                        <p> Retrieves the latest Level 1 Ticker information and then subscribes the user to ongoing Level 1 market data event updates for one specific instrument. For more information about Level 1 and Level 2, see “Level 1 and Level 2 Market Information” on page 3. The <strong>SubscribeLevel1</strong> call responds with the Level 1 response shown below. The OMS then periodically sends Leve1UpdateEvent information when best bid/best offer issues in the same format as this response, until you send the <strong>UnsubscribeLevel1</strong> call. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>You can identify the instrument with its ID or with its market symbol (string). </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0"}</div>
                            <div>{"}"}</div>
                            <p> Or </p>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Symbol”: “BTCUSD”"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the instrument trades.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the instrument you’re tracking. Conditionally optional.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Symbol </td>
                                        <td>   
                                            <div><strong>string.</strong> The symbol of the instrument you’re tracking. Conditionally optional</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The SubscribeLevel1 response and Level1UpdateEvent both provide the same information.  </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Subscribe”: true"}</div>

                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BestBid”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“BestOffer”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastTradedPx”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastTradedQty”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastTradeTime”: 635872032000000000,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionOpen”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionHigh”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionLow”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionClose”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Volume”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CurrentDayVolume”: 0.00,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CurrentDayNumTrades”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CurrentDayPxChange”: 0.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Rolling24HrVolume”: 0.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Rolling24NumTrades”: 0.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Rolling24HrPxChange”: 0.0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TimeStamp”: 635872032000000000,"}</div>
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
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the instrument trades.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the instrument being tracked. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BestBid </td>
                                        <td>   
                                            <div><strong>real.</strong> The current best bid for the instrument.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BestOffer </td>
                                        <td>   
                                            <div><strong>real.</strong> The current best offer for the instrument.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradedPx </td>
                                        <td>   
                                            <div><strong>real.</strong> The last-traded price for the instrument.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradedQty </td>
                                        <td>   
                                            <div><strong>real.</strong> The last-traded quantity for the instrument.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradeTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time of the last trade in POSIX format X 1000 (milliseconds since 1 January 1970). See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionOpen </td>
                                        <td>   
                                            <div><strong>real.</strong> Opening price. In markets with openings and closings, this is the opening price for the current session; in 24-hour markets, it is the price as of UTC Midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionHigh </td>
                                        <td>   
                                            <div><strong>real.</strong> Highest price during the trading day, either during a true session (with opening and closing prices) or UTC midnight to UTC midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionLow </td>
                                        <td>   
                                            <div><strong>real.</strong> Lowest price during the trading day, either during a true session (with opening and closing prices) or UTC midnight to UTC midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionClose </td>
                                        <td>   
                                            <div><strong>real.</strong> The closing price. In markets with openings and closings, this is the closing price for the current session; in 24-hour markets, it is the price as of UTC Midnight. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Volume </td>
                                        <td>   
                                            <div><strong>real.</strong> The unit volume of the instrument traded, either during a true session (with openings and closings) or in 24-hour markets, the period from UTC Midnight to UTC Midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CurrentDayVolume </td>
                                        <td>   
                                            <div><strong>real.</strong> The unit volume of the instrument traded either during a true session (with openings and closings) or in 24-hour markets, the period from UTC Midnight to UTC Midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CurrentDayNumTrades </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of trades during the current day, either during a true session (with openings and closings) or in 24-hour markets, the period from UTC Midnight to UTC Midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CurrentDayPxChange </td>
                                        <td>   
                                            <div><strong>real.</strong> Current day price change, either during a true trading session or UTC Midnight to UTC midnight.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Rolling24HrVolume </td>
                                        <td>   
                                            <div><strong>real.</strong> Unit volume of the instrument during the past 24 hours, regardless of time zone. Recalculates continuously.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Rolling24HrNumTrades </td>
                                        <td>   
                                            <div><strong>integer.</strong> Number of trades during the past 24 hours, regardless of time zone. Recalculates continuously.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Rolling24HrPxChange </td>
                                        <td>   
                                            <div><strong>real.</strong> Price change during the past 24 hours, regardless of time zone. Recalculates continuously.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TimeStamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time this information was provided, in POSIX format X 1000 (milliseconds since 1 January 1970). See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeAccountEvents, SubscribeLevel2, SubscribeTicker, SubscribeTrades, UnsubscribeLevel1, UnsubscribeLevel2, UnsubscribeTicker, UnsubscribeTrades </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SubscribeLevel1;