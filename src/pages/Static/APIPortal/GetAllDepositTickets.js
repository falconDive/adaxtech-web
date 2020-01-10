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
    

class GetAllDepositTickets extends Component {
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
                        <h2> GetAllDepositTickets </h2>
                        <p> Returns all deposit tickets that match the string/value pairs included in the request, starting at a specific ticket, and returning up to a total number that can be specified in the request. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only admin-level users can issue this call.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>OMSId and OperatorId are required; other string/value pairs are optional. AmountOperator must be included if an Amount value is included. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Operatorid”:1"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: 5,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TicketId”: 127,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartTimestamp”: “2016-04-21T21:48:22Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“EndTimestamp”: “2016-11-21T21:48:22Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“StartIndex”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Limit”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserName”: “John Smith”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 50,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AmountOperator”: 1,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the deposit tickets reside. <strong>Required.</strong></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue. <strong>Required.</strong></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>integer.</strong> The current status of the deposit. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> The value of Status is an integer in the request for <strong>GetAllDepositTickets</strong>. In the response, it is a string..</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of a single deposit ticket that is unique across the Order Management System. By including a value for TicketId, you limit the returned information to a single ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The deposit ticket at which to start returning the array of deposit tickets, starting from 0, the most recent deposit ticket, and working backwards in time.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Limit </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The total number of deposit tickets to return in the array. Limit is a 32-bit integer value that can return over 4 billion tickets (4 thousand million). If Limit is not specified, all tickets are returned.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user making the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The start of the period over which to return deposit tickets, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EndTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The end of the period over which to return deposit tickets, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the deposit. If you specify an Amount value, you must include AmountOperator.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AmountOperator </td>
                                        <td>   
                                            <div><strong>integer.</strong> Tells the response to return tickets in ranges based on the Amount value. This string/value pair is required if you specify an Amount value. There is no AmountOperator setting for greater-than or less-than an Amount value.</div>
                                            <div>0 returns tickets with values equal to the Amount value.</div>
                                            <div>1 returns tickets with values equal to or greater than the Amount value.</div>
                                            <div>2 returns tickets with values less than or equal to the Amount value.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response is an array of deposit ticket information, with each element in the array representing one ticket. The number of elements in the returned array is set by the value of the Limit string in the request.</p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetManagerId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetName”: “BTC”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Amount”: 100.0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestCode”: “6D2E6447-AED7-4E5B-8759-B2F564E95FC7”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestIP”: “90.171.32.77”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUser”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Status”: “New”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeAmt”: 0.0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUser”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TicketNumber”: 127,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“DepositInfo”: “{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”Full Name”: ”John Smith”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”language”: ”en”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"”Bank Name”: ””"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CreatedTimestamp”: “2016-04-21T21:48:22Z”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastUpdateTimeStamp”: “2016-04-21T21:48:22Z” ,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Comments”: [],"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Attachments”: [],"}</div>
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
                                        <td> AssetManagerId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the Asset Manager module, which interacts with the OMS and the trading venue’s matching engine. The Asset Manager accepts, holds, and disburses assets (products). See “Modules” on page 3 for more background on the Asset Manager.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account into which the deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the asset being deposited. Equivalent to product ID. AssetId = ProductId, and uses the same ID numbers.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the asset being deposited. USD (dollars), BTC (bitcoin), gold, NZD (New Zealand dollars) for example. This is not an enumerated field, to allow for flexibility. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the asset being deposited. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System handling the deposits. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) string that identifies this specific deposit. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIp </td>
                                        <td>   
                                            <div><strong>string.</strong> The on-line IP (Internet Protocol) address from which the deposit is made. This can be a traditional IPv4 dotted quad (192.168.168.1) or a 128-bit IPv6 address. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user sending the request and making the deposit. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user sending the request and making the deposit. For example, “John Smith.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the operator of the trading venue. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>string.</strong> The current status of the deposit. One of: </div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> The value of Status is an integer in the request for <strong>GetAllDepositTickets</strong>. In the response, it is a string.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The value of the fee for making the deposit, if any. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the most recent user updating this deposit ticket. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdateByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the most recent user updating this deposit ticket, for example, “Joan Smith.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique deposit ticket number that identifies the deposit. The value for TicketNumber is returned by the <strong>GetDepositTicket</strong>~ calls: <strong>GetAllDepositTickets</strong> and <strong>GetDepositTicket</strong>, </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> A list of strings and string/value pairs that holds information about the source of funds being deposited. This information was entered when the deposit ticket was created, and as required by the account provider. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreatedTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date that the deposit was created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimeStamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date that the deposit ticket last was updated, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the deposit’s process through the system. Neither users nor admins enter these comments directly </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Attachments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> A set of base-64 strings usually providing an image or a PDF. This image or file may be a transaction receipt or other information that the depositor wishes to attach to the deposit for record-keeping purposes. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetDepositInfo, GetDepositTicket, UpdateDepositTicket. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAllDepositTickets;