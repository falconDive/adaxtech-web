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
    

class GetDepositTicket extends Component {
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
                        <h2> GetDepositTicket </h2>
                        <p> Returns a single deposit ticket by matching its request code to one already in the database.  </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only admin-level users can issue this call.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>You can find the RequestCode value for a ticket by calling <strong>GetAllDepositTickets</strong> or by retaining the RequestCode value returned when the ticket was created.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestCode”: “866f21fe-3461-41d1-91aa-5689bc38503f”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) string that identifies this specific deposit. RequestCode is part of the response returned to <strong>CreateDepositTicket</strong>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account into which the deposit was made.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns information about the single deposit ticket that matches the RequestCode in the request.</p>
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
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “New”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeAmt”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUser”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TicketNumber”: 67,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DepositInfo”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Full Name”:”Test”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”language”:”en”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Bank Name”:””"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Asset Manager module. See “Modules” on page 3 for more information about the Asset Manager. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account into which this deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the asset in which the deposit is denominated. AssetId and ProductId are identical in numerical content.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System where the account resides that received the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The IP address (in IPv4 dotted quad notation or IPv6 notation) from which the original deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who made the deposit. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user who made the deposit.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue on which the deposit was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>string.</strong> The current status of the deposit, stated as an string. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong><strong>CreateWithdrawTicket</strong> Status is an integer in GetAllDepositTickets and in GetAllWithdrawTickets. In GetDepositTicket and all other calls that use Status, it is a string.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of any fee charged for the deposit. FeeAmt always is denominated in the asset being deposited.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> If this deposit ticket has been updated, this string/value pair shows the ID of the user who updated it. See <strong>UpdateDepositTicket</strong>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> If this deposit ticket has been updated, this string/value pair shows the name of the user who updated it.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique deposit ticket number that identifies the deposit. The value for TicketNumber is returned by the GetDepositTicket~ calls: GetAllDepositTickets and GetDepositTicket,.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DepositInfo </td>
                                        <td>   
                                            <div><strong>string.</strong> See DepositInfo object, below. DepositInfo holds string/value pairs with information about the deposit. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreateTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date that the deposit ticket was created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimeStamp </td>
                                        <td>   
                                            <div><strong>string.</strong>  The time and date that the deposit ticket was last updated, in ISO 8601 format. “Time– and Date-Stamp Formats” on page 8. If the deposit ticket was not updated, this string/value pair holds the same value as CreateTimestamp.</div>
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
                        <div>DepositInfo object</div>
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
                                            <div><strong>string.</strong> The name of the user who made the deposit.</div>
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
                                            <div><strong>string.</strong> The name of the bank from which the deposit was made.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> CreateDepositTicket, GetAllDepositTickets, GetDepositInfo, UpdateDepositTicket. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetDepositTicket;