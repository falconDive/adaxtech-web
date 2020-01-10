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
    

class GetUserAccountInfos extends Component {
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
                        <h2> GetUserAccountInfos </h2>
                        <p> Returns a list of account information for all accounts belonging to the specified user. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “”"}</div>
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
                                            <div><strong>Integer.</strong> The Order Management System on which the user has one ore more accounts. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the user whose accounts you want to return. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> Returns a JSON list of account objects one for each account associated with the user. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountName”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountHandle”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FirmId”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FirmName”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Asset”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Liability”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ProfitLoss”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeGroupID”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ParentID”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RiskType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Normal”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NoRiskCheck”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NoTrading”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“VerificationLevel”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeProductType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BaseProduct”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“SingleProduct”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeProduct”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RefererId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SupportedVenueIds”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"0"}</div>
                            <div style={{paddingLeft:'10px'}}>{"],"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the account resides. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the account for which information was requested. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountName </td>
                                        <td>   
                                            <div><strong>string.</strong> A non-unique name for the account assigned by the user. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountHandle </td>
                                        <td>   
                                            <div><strong>string.</strong>  AccountHandle is a unique user-assigned name that is checked at create time by the Order Management System. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FirmId </td>
                                        <td>   
                                            <div><strong>string.</strong>TAn arbitrary identifier assigned by a trading venue operator to a trading firm as part of the initial company, user, and account set up process. For example, Smith Financial Partners might have the ID SMFP.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FirmName </td>
                                        <td>   
                                            <div><strong>string.</strong>A longer, non-unique version of the trading firm’s name; for example, Smith Financial Partners. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of the account for which information is being returned. One of:  </div>
                                            <div>Asset</div>
                                            <div>Liability</div>
                                            <div>ProfitLoss</div>
                                            <div>Responses for this string/value pair for Market Participants are almost exclusively Asset.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeGroupID </td>
                                        <td>   
                                            <div><strong>integer.</strong> Defines account attributes relating to how fees are calculated and assessed. Set by trading venue operator.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ParentID </td>
                                        <td>   
                                            <div><strong>integer.</strong> Reserved for future development.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RiskType </td>
                                        <td>   
                                            <div><strong>string.</strong> One of:</div>
                                            <div>Unkown (an error condition)</div>
                                            <div>Normal</div>
                                            <div>NoRiskCheck</div>
                                            <div>NoTrading</div>
                                            <div>Returns Normal for virtually all market participants. Other types indicate account configurations assignable by the trading venue operator.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> VerificationLevel </td>
                                        <td>   
                                            <div><strong>integer.</strong> Verification level ID (how much verification does this account require) defined by and set by the trading venue operator for this account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeProductType </td>
                                        <td>   
                                            <div><strong>string.</strong> One of:</div>
                                            <div>BaseProduct</div>
                                            <div>SingleProduct</div>
                                            <div>Trading fees may be charged by a trading venue operator. This value shows whether fees for this account’s trades are charged in the product being traded (BaseProduct, for example BitCoin) or whether the account has a preferred fee-paying product (SingleProduct, for example USD) to use in all cases and regardless of product being traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeProduct </td>
                                        <td>   
                                            <div><strong>integer.</strong> One of:</div>
                                            <div>BaseProduct</div>
                                            <div>SingleProduct</div>
                                            <div>The ID of the preferred fee product, if SingleProduct is the value of FeeProductType.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RefererId </td>
                                        <td>   
                                            <div><strong>integer.</strong> One of:</div>
                                            <div>BaseProduct</div>
                                            <div>SingleProduct</div>
                                            <div>Captures the ID of the person who referred this account to the trading venue, usually for marketing purposes.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SupportedVenueIds </td>
                                        <td>   
                                            <div><strong>integer array.</strong> Comma-separated array. Reserved for future expansion.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAccountInfo, GetUserAccounts, </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetUserAccountInfos;