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
    

class GetAccountTransactions extends Component {
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
                        <h2> GetAccountTransactions </h2>
                        <p> Returns a list of transactions for a specific account on an Order Management System. The owner of the trading venue determines how long to retain order history before archiving. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>In this call, “Depth” refers not to the depth of the order book, but to the count of trades to report.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Depth”: 200,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System from which the account’s transactions will be returned. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account for which transactions will be returned. If not specified, the call returns transactions for the default account for the logged-in user.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Depth </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of transactions that will be returned, starting with the most recent transaction.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of transaction objects. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TransactionId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“CR”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“DR”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Counterparty”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TransactionType”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Fee”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Trade”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Other”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Reverse”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Hold”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ReferenceId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ReferenceType”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Trade”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Deposit”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Withdraw”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Transfer”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“OrderHold”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“WithdrawHold”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“DepositHold”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“MarginHold”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ProductId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Balance”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TimeStamp”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
                            <div>{"]"}</div>
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
                                        <td> TransactionId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the transaction.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the Order Management System under which the requested transactions took place. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The single account under which the transactions took place. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CR </td>
                                        <td>   
                                            <div><strong>real.</strong> Credit entry for the account on the order book. Funds entering an account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DR </td>
                                        <td>   
                                            <div><strong>real.</strong> Debit entry for the account on the order book. Funds leaving an account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Counterparty </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Shows 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TransactionType </td>
                                        <td>   
                                            <div><strong>string.</strong> One of: </div>
                                            <div> Fee — transaction is payment of a fee </div>
                                            <div> Trade — transaction is a trade (most usual entry) </div>
                                            <div> Other — non-trading transactions such as deposits and withdrawals  </div>
                                            <div> Reverse — a hold has been reversed by this transaction </div>
                                            <div> Hold — funds are held while a transaction closes </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReferenceId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the action or event that triggered this transaction. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReferenceType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of action or event that triggered this transaction. One of: </div>
                                            <div> Trade </div>
                                            <div> Deposit </div>
                                            <div> Withdraw </div>
                                            <div> Transfer </div>
                                            <div> OrderHold </div>
                                            <div> WithdrawHold </div>
                                            <div> DepositHold </div>
                                            <div> MarginHold </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product on this account’s side of the transaction. For example, in a dollars-for-BitCoin transaction, one side will have the product Dollar and the other side will have the product BitCoin. See “Products and Instruments” on page 4 for more information about how these two items differ. Use <strong>GetProduct</strong> to return information about a product based on its ID. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Balance </td>
                                        <td>   
                                            <div><strong>real.</strong> The balance in the account after the transaction. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TimeStamp </td>
                                        <td>   
                                            <div><strong>long integer.</strong> Time at which the transaction took place, in POSIX format and UTC time zone. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAccountTransactions, ScheduleTransactionActivityReport</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAccountTransactions;