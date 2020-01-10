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
    

class GetDepositInfo extends Component {
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
                        <h2> GetDepositInfo </h2>
                        <p> Returns an array of cryptographic deposit addresses that the user will use to send crypto-currency funds to the trading venue.   </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>The keys returned by <strong>GetDepositInfo</strong> are only for crypto-currency deposits.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>The request always returns a set of cryptographic keys that each act as an address for sending coins from a crypto-currency wallet. GenerateNewKey generates a new set of cryptographic keys ADAX Tech suggests a new key set with each deposit. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“GenerateNewKey”: true"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System into which the deposits were made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account into which the deposits were made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the product or asset in which the deposits were made. Product ID and Asset ID are equivalent. See “Products and Instruments” on page 4 for more information about products and instruments. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> GenerateNewKey </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> A true value means that the system will generate a new (never before seen) cryptographic key for use with deposits. The new key will be returned as the first element of the set of keys. A value of false provides the set of keys previously used. ADAX Tech suggests using a new key set with each deposit. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns a set of cryptographic keys for use in making deposits from a cryptocurrency wallet, along with any error message and confirmation of asset manager module, account, account provider, and asset (product). Select one of the keys for use with making the transfer from the crypto-currency wallet.</p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetManagerId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ProviderId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DepositInfo”: “["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mkqpdfHecor7QCd53sEyWE1TL4UupE8L9z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“muTJjY6411MmRTccvyHxJmET3t3b8EeCNT”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mjN4bJJotcCRRiiGpWXyiE4vdRpVMQf5Wa”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mivkpkPBKm5sXFGiySgVbhxQ2Keb9fKGiR”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mvAKe9ZoNLWALYuc2TK9HVK9dt5oLsbAAZ”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“myCP69kfd3eu1MvW8DKXjfFsEJns2mK3K5”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mubnHGgBqBunjGSsx25bbBA4n2eBpJGJKC”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mxV5wizeS2r6j8jiUWUsTrMimda3fSqx8f”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mr5L1qb4cJTsvJPnU4zMD95snXdNsJpd6L”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mqt2NgUrhYQWixcNdU76u5uAa3u34tqvmr”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“mgySiizawpSMeJhz3Q7K1w9zgEwE4JQ4fD”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"],"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“errormsg”: null,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“statuscode”: 0"}</div>
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
                                        <td> AssetManagerId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the asset manager module for this ADAX Tech installation. See “Modules” on page 3 for more information about the Order Management System, matching engine, and Asset Manager modules. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account into which the deposit will be made (and for which the set of cryptographic keys will be valid).</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the asset in which the deposit is denominated, for example, US Dollars or BitCoin. AssetId is numerically equivalent to ProductId.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProviderId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the third-party Account Provider who makes the conversion between national currency and crypto-currency. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> The response returns a set of cryptographic keys for use in making deposits from a crypto-currency wallet. ADAX Tech suggests generating new keys for each new deposit. </div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> Do not confuse this DepositInfo, which returns cryptographic keys, with the DepositInfo string/value pairs created as part of a deposit ticket or returned by <strong>GetDepositTicket</strong> or <strong>GetAllDepositTickets</strong>.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> result </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the request for deposit info was received correctly; returns false if the request was not received correctly.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> errormsg </td>
                                        <td>   
                                            <div><strong>string.</strong> A successful receipt of the call returns null; the errormsg parameter for an unsuccessful call returns one of the following messages:</div>
                                            <div>Not Authorized (errorcode 20)</div>
                                            <div>Invalid Request (errorcode 100)</div>
                                            <div>Operation Failed (errorcode 101)</div>
                                            <div>Server Error (errorcode 102)</div>
                                            <div>Resource Not Found (errorcode 104)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> statuscode </td>
                                        <td>   
                                            <div><strong>integer.</strong> If result is false, statuscode can return: </div>
                                            <div>32 Not_Authorized</div>
                                            <div>33 AssetManager_Not_Found</div>
                                            <div>If no account provider is located, statuscode returns null.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetAllDepositTickets, GetDepositTicket, UpdateDepositTicket. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetDepositInfo;