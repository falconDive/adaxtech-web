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
    

class UpdateDepositTicket extends Component {
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
                        <h2> UpdateDepositTicket </h2>
                        <p> Updates the information on a single deposit ticket identified by the RequestCode value. Typically, updates occur because of changes to the status of the deposit or to the amount of the deposit after it is created, but other changes are possible.  </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only users with admin-level permissions can issue this call. </p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetManagerId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetId”: 2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetName”: “US Dollar”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 10,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestCode”: “866f21fe-3461-41d1-91aa-5689bc38503f”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestIP”: “90.171.32.77”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUser”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “AdminProcessing”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeAmt”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUser”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TicketNumber”: 67,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DepositInfo”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Full Name”:”TestUser”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”language”:”en”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Bank Name”:””}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CreatedTimestamp”: “2017-12-14T15:13:31Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastUpdateTimeStamp”: “2017-12-14T15:13:31Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Comments”: [],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Attachments”: []"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Asset Manager module, which interacts with the OMS module and the trading venue’s matching engine. The Asset Manager accepts, holds, and disburses assets (products). See “Modules” on page 3 for more background on the Asset Manager.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The account into which the updated deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the asset being deposited. Equivalent to product ID. AssetId = ProductId, and uses the same ID numbers, but you must use AssetId here.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the asset that was deposited. USD (dollars), BTC (bitcoin), gold, NZD (New Zealand dollars) for example.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the asset that was deposited.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) string that identifies this specific deposit. RequestCode is part of the response returned by CreateDepositTicket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The online IP (Internet Protocol) address from which the deposit was made. This can be a traditional IPv4 dotted quad (192.168.168.1) or a 128-bit IPv6 address.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user sending the request and changing the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user making the changes to the deposit.</div>
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
                                            <div><strong>string.</strong>The current status of the deposit. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> Withdrawals have three additional Status values that don’t apply to deposits.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The value of the fee for making the deposit, if any. FeeAmt is always denominated in the asset of the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the most recent user updating this deposit ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the most recent user updating this deposit ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique deposit ticket number that identifies the deposit. The value for TicketNumber is returned by the GetDepositTicket~ calls: GetAllDepositTickets and GetDepositTicket, </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> DepositInfo holds string/value pairs with information about the deposit. The specific information that can be entered depends on the account provider and the asset being deposited.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreatedTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> Time that the deposit ticket was created, in ISO 8601 format; see “Time– and Date-Stamp Formats” on page 8 for more information about this time format.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> Time that the deposit ticket was last updated, in ISO 8601 format. For a new ticket, this value should be the same as the created time stamp. See “Time– and Date-Stamp Formats” on page 8 for more information. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the deposit’s process through the system. Neither users nor admins enter these comments directly.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Attachments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> A set of base-64 strings usually providing an image or a PDF. This image or file may be a transaction receipt or other information that the depositor wishes to attach to the deposit for record-keeping purposes.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response to UpdateDepositTicket is a standard response object. It indicates whether the update request was correctly received, not that it was executed. Verify execution with GetDepositTicket.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“result”: true,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errormsg”: null,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“errorcode”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“detail”: null"}</div>
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
                                        <td> result </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> If the call has been successfully received by the Order Management System, result is true; otherwise, it is false.</div>
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
                                        <td> errorcode </td>
                                        <td>   
                                            <div><strong>integer.</strong>  A successful receipt of the call returns 0. An unsuccessful receipt of the call returns one of the errorcodes shown in the errormsg list.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> detail </td>
                                        <td>   
                                            <div><strong>string.</strong> Message text that the system may send. The content of this parameter is usually null.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetAllDepositTickets, GetDepositInfo, GetDepositTicket. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default UpdateDepositTicket;