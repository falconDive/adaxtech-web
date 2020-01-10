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
    

class CreateDepositTicket extends Component {
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
                        <h2> CreateDepositTicket </h2>
                        <p> <strong>CreateDepositTicket</strong> records a deposit ticket for deposits of fiat money (non-crypto national currencies, for example). Crypto-currencies, such as BitCoin or Monero are handled by a different deposit mechanism described in <strong>GetDepositInfo</strong>. </p>
                        <p> The ticketing mechanism of the Order Management System tracks deposits and withdrawals, interacting with the Asset Manager. For more information on these modules, see “Modules” on page 3. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>The set of DepositInfo string/value pairs in the request is not related to information provided by the <strong>GetDepositInfo</strong> call.</p>
                        </div>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetId”: 2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetName”: “USD”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 60,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUser”: 5,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: ”New”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DepositInfo”: ”{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Full Name”: “John Smith”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“language”: “en”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Bank Name”: ““,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Comment”: “initial deposit”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
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
                                            <div><strong>integer.</strong> The account into which the deposit is going to be made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the asset being deposited. Equivalent to product ID. AssetId = ProductId, and uses the same ID numbers.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the asset being deposited. USD (dollars), BTC (bitcoin), gold, NZD (New Zealand dollars) for example.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the asset being deposited.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the deposit is being made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user making the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the trading venue operator.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>string.</strong> The current status of the deposit, stated as a string. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div>The Status of a newly created deposit ticket should always be New.</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong>Withdraw tickets have three additional Status values.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositInfo </td>
                                        <td>   
                                            <div><strong>JSON string.</strong> See DepositInfo object, below. The DepositInfo JSON string holds specific string/value pairs with information about the deposit. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> DepositInfo object: </p>
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
                                        <td> Full Name </td>
                                        <td>   
                                            <div><strong>string.</strong>  The name of the user making the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> language </td>
                                        <td>   
                                            <div><strong>string.</strong> A two-letter abbreviation for the language in which the deposit is written — en for English, sp for Spanish, ru for Russian, and so forth. These abbreviations are not enumerated to allow for flexibility.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Bank Name </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the bank from which the deposit is being made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> A comment by the depositor.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The successful response to <strong>CreateDepositTicket</strong> is a Boolean true value and a request code to allow tracking the ticket. To view and confirm ticket contents, use the call <strong>GetDepositTicket</strong>.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“success”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“requestcode”: “866f21fe-3461-41d1-91aa-5689bc38503f”,"}</div>
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
                                        <td> success </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> Returns true if the system has created the deposit ticket; otherwise returns false.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> requestcode </td>
                                        <td>   
                                            <div><strong>string.</strong> A globally-unique ID (GUID) that identifies this specific deposit ticket.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>An unsuccessful response to <strong>CreateDepositTicket</strong> is a standard response object that includes an error code and error message, as explained in “Standard Response Object and Common Error Codes” on page 2. </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAllDepositTickets, GetDepositInfo, GetDepositTicket, UpdateDepositTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateDepositTicket;