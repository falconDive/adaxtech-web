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
    

class GetAccountPositions extends Component {
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
                        <h2> GetAccountPositions </h2>
                        <p> Retrieves a list of positions (balances) for a specific user account running under a specific Order Management System. The trading day runs from UTC Midnight to UTC Midnight. See “The Trading Day” on page 9 for more information. </p>
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
                                            <div><strong>integer.</strong> The ID of the authenticated user’s account on the Order Management System for which positions will be returned.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System to which the user belongs. A user will belong only to one OMS.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of one or more positions for the account. This example response has returned two positions: </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{" {  // first position"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProductSymbol”: ”BTC”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProductId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Amount”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Hold”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“PendingDeposits”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“PendingWithdraws”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalDayDeposits”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalDayWithdraws”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalMonthWithdraws”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{" {  // second position"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProductSymbol”: ”USD”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProductId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Amount”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Hold”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“PendingDeposits”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“PendingWithdraws”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalDayDeposits”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalDayWithdraws”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TotalMonthWithdraws”: 0,"}</div>
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
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System (OMS) to which the user belongs. A user will only ever belong to one Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> Returns the ID of the user’s account to which the positions belong. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductSymbol </td>
                                        <td>   
                                            <div><strong>string.</strong> The symbol of the product on this account’s side of the trade. For example: </div>
                                            <div> BTC — BitCoin </div>
                                            <div> USD — US Dollar </div>
                                            <div> NZD — New Zealand Dollar </div>
                                            <div> Many other values are possible depending on the nature of the trading venue. See “Products and Instruments” on page 4 for the difference between these terms. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product being traded. The system assigns product IDs as they are entered into the system. See “Products and Instruments” on page 4 for the difference between products and instruments. Use <strong>GetProduct</strong> to return information about the product by its ID. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> Unit amount of the product; for example, 10 or 138.5. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Hold </td>
                                        <td>   
                                            <div><strong>real.</strong> Amount of currency held and not available for trade. A pending trade of 100 units at $1 each will reduce the amount in the account available for trading by $100. Amounts on hold cannot be withdrawn while a trade is pending. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PendingDeposits </td>
                                        <td>   
                                            <div><strong>real.</strong> Deposits accepted but not yet cleared for trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PendingWithdraws </td>
                                        <td>   
                                            <div><strong>real.</strong> Withdrawals acknowledged but not yet cleared from the account. Amounts in PendingWithdraws are not available for trade. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TotalDayDeposits </td>
                                        <td>   
                                            <div><strong>real.</strong> Total deposits on today’s date. The trading day runs between UTC Midnight and UTC Midnight. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TotalDayWithdraws </td>
                                        <td>   
                                            <div><strong>real.</strong> Total withdrawals on today’s date. The trading day runs between UTC Midnight and UTC Midnight. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TotalMonthWithdraws </td>
                                        <td>   
                                            <div><strong>real.</strong> Total withdrawals during this month to date. The trading day runs between UTC Midnight and UTC Midnight — likewise a month begins at UTC Midnight on the first day of the month. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetOpenOrders, GetOpenQuotes, GetOrderStatus, GetTradesHistory</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAccountPositions;