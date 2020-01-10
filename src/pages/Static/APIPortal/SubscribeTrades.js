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
    

class SubscribeTrades extends Component {
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
                        <h2> SubscribeTrades </h2>
                        <p> Subscribes an authenticated user to the Trades Market Data Feed for a specific instrument. Each trade has two sides: Buy and Sell. </p>
                        <p> <strong>SubscribeTrades</strong> returns the response documented here for your immediate information, then periodically sends the OrderTradeEvent documented in <strong>SubscribeAccountEvents</strong>. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“IncludeLastCount”: 100"}</div>
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
                                            <div><strong>integer.</strong>The ID of the Order Management System on which the instrument is traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument whose trades will be reported.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IncludeLastCount </td>
                                        <td>   
                                            <div><strong>integer.</strong> Specifies the number of previous trades to retrieve in the immediate snapshot. Default is 100.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array of trades. Both sides of each trade are described.  </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TradeID”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ProductPairCode”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order1”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order2”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TradeTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Direction”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”:   ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NoChange”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“UpTick”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“DownTick”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TakerSide”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Side1AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Side2AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order1Side”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”:   ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order2Side”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”:   ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Buy”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Sell”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Short”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Unknown”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BlockTrade”: false,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order1ClientId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Order2ClientId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
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
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System where the instrument to be tracked is traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeID </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of this trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductPairCode </td>
                                        <td>   
                                            <div><strong>integer.</strong> ProductPairCode is the same number and used for the same purpose as InstrumentID. The two are completely equivalent in value. InstrumentId 47 = ProductPairCode 47.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity of the instrument traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the instrument traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order1 </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of one of the orders that resulted in the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order2 </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the other order that resulted in the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TradeTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time at which the trade took place. UTC time. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Direction </td>
                                        <td>   
                                            <div><strong>string.</strong> Effect of the trade on the instrument’s market price. One of:</div>
                                            <div>0 NoChange</div>
                                            <div>1 UpTick</div>
                                            <div>2 DownTick</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TakerSide </td>
                                        <td>   
                                            <div><strong>integer.</strong> Which side of the trade took liquidity? One of:</div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>The maker side of the trade provides liquidity by placing the order on the book (this can be a buy or a sell order). The other side takes the liquidity. It, too, can be buy-side or sell-side.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side1AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The account ID of the 1-side of the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side2AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The account ID of the 2-side of the trade.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order1Side </td>
                                        <td>   
                                            <div><strong>string.</strong> The side taken by order 1 of the trade. One of:</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side2AccountId </td>
                                        <td>   
                                            <div><strong>string.</strong> The account ID of the 2-side of the trade.</div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order2Side </td>
                                        <td>   
                                            <div><strong>string.</strong> The side taken by order 2 of the trade. One of:</div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BlockTrade </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Was this a privately negotiated trade that was reported to the OMS? A private trade returns true; otherwise false. Default is false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order1ClientId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The client-supplied order ID of the 1-side client.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Order2ClientId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The client-supplied order ID of the 2-side client.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeAccountEvents, SubscribeLevel1, SubscribeLevel2, SubscribeTicker, UnsubscribeLevel1, UnsubscribeLevel2, UnsubscribeTicker, UnsubscribeTrades </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SubscribeTrades;