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
    

class GetOrderFee extends Component {
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
                        <h2> GetOrderFee </h2>
                        <p> Returns an estimate of the fee for a specific order and order type. Fees are set and calculated by the operator of the trading venue. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Price”: 0,"}</div>
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
                            <div style={{paddingLeft:'10px'}}>{"“MakerTaker”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Market”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Taker”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the trade would take place. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account requesting the fee estimate. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The proposed instrument against which a trading fee would be charged. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product (currency) in which the fee will be denominated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The quantity of the proposed trade for which the Order Management System would charge a fee. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the proposed trade would take place. Supply your price for a limit order; the exact price is difficult to know before execution. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OrderType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of the proposed order. One of: </div>
                                            <div>0 Unknown </div>
                                            <div>1 Market</div>
                                            <div>2 Limit </div>
                                            <div>3 StopMarket </div>
                                            <div>4 StopLimit </div>
                                            <div>5 TrailingStopMarket </div>
                                            <div>6 TrailingStopLimit </div>
                                            <div>7 BlockTrade </div>
                                            <div>See ““Order Types” on page 7. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> MakerTaker </td>
                                        <td>   
                                            <div><strong>string.</strong> Depending on the venue, there may be different fees for a maker (the order remains on the books for a period) or taker (the order executes directly). If the user places a large order that is only partially filled, he is a partial maker. </div>
                                            <div>0 Unknown </div>
                                            <div>1 Maker </div>
                                            <div>2 Taker </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> Returns a response object comprising a bid and an ask object. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OrderFee”: 0.01,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 1"}</div>
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
                                        <td> OrderFee </td>
                                        <td>   
                                            <div><strong>real.</strong> The estimated fee for the trade as described. The minimum value is 0.01. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the product (currency) in which the fee is denominated. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetProduct, GetProducts </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetOrderFee;