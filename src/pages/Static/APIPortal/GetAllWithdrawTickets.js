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
    

class GetAllWithdrawTickets extends Component {
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
                        <h2> GetAllWithdrawTickets </h2>
                        <p> Returns all withdraw tickets from the specified Order Management System and trading venue operator, without limitation. This is an administrator-level call.  </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only Admin-level users can issue this call.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>OMSId and OperatorId are required; other string/value pairs are optional. AmountOperator must be included if an Amount value is included. </p>
                        <div className={`codeCont`}>
                            <div>{"“OMSId”:1,"}</div>
                            <div>{"“Operatorid”: 1,"}</div>
                            <div>{"“AccountId”: 1,"}</div>
                            <div>{"“Status”: 5,"}</div>
                            <div>{"“TicketId”: 127,"}</div>
                            <div>{"“StartTimestamp”: “2016-04-21T21:48:22Z”,"}</div>
                            <div>{"“EndTimestamp”: “2016-11-21T21:48:22Z”,"}</div>
                            <div>{"“StartIndex”: 0,"}</div>
                            <div>{"“Limit”: 0,"}</div>
                            <div>{"“UserName”: “John Smith”,"}</div>
                            <div>{"“Amount”: 50,"}</div>
                            <div>{"“AmountOperator”: 1,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the withdraw tickets reside. <strong>Required.</strong></div>
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
                                            <div><strong>integer.</strong> The current status of the withdrawal. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div>8 Pending2Fa</div>
                                            <div>9 AutoAccepted</div>
                                            <div>10 Delayed</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> The value of Status is an integer in the request for <strong>GetAllWithdrawTickets</strong>. In the response, it is a string..</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of a single withdraw ticket that is unique across the Order Management System. By including a value for TicketId, you limit the returned information to a single ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The withdraw ticket at which to start returning the array of withdraw tickets, starting from 0, the most recent ticket, and working backwards in time.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Limit </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The total number of withdraw tickets to return in the array. Limit is a 32-bit integer value that can return over 4 billion tickets (4 thousand million). If Limit is not specified, all tickets are returned.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user making the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The start of the period over which to return withdraw tickets, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EndTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The end of the period over which to return withdraw tickets, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the withdrawal. If you specify an Amount value, you must include AmountOperator.</div>
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
                        <p>The response is an array of withdraw ticket objects and comments.</p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetManagerId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetName”: “Tether”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Amount”: 0.4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TemplateForm”: “{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TemplateType”: “TetherRPCWithdraw”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Comment”: “TestWithdraw”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ExternalAddress”: “ms6C3pKAAr8gRCcnVebs8VRkVrjcvqNYv3”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TemplateFormType”: “TetherRPCWithdraw”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestCode”: “490b4fa3-53fc-44f4-bd29-7e16be86fba3”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestIP”: “108.35.121.205”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUserId”: 7,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUserName”: “testUser6”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Status”: “FullyProcessed”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeAmt”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUser”: 7,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUserName”: “testUser6”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TicketNumber”: 51,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CreatedTimestamp”: “2017-11-22T20:15:54Z”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastUpdateTimestamp”: “2017-11-22T20:16:11Z”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Comments”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"{"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“CommentId”: 2,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredBy”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredDateTime”: “2017-11-22T20:16:11Z”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Comment”: “Withdraw Submitted (11/22/2017 8:16:11 PM): 2c843665606bdfdcbdf9a307a89098f 5b68e53448287e33b672d3f1090bd49a7“,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketCode”: “49541cc89-c9c3-4bf6-9141-da1f0ef67fae”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketId”: 51"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'20px'}}>{"],"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Attachments”: [],"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AuditLog”: []"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
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
                                            <div><strong>Integer.</strong> The ID of the Asset Manager module. See “Modules” on page 3 for more information about the Asset Manager. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account that made the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>Integer.</strong> The ID of the asset in which the withdrawal is denominated, for example, US Dollar or BitCoin both have an associated AssetId. AssetId and ProductId are identical in numerical content. You must use AssetId here.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The readable name of the asset in which the withdrawal is denominated, for example, “US Dollar” or “BitCoin.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the withdrawal. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateForm </td>
                                        <td>   
                                            <div><strong>object.</strong> See the TemplateForm object, following. </div>
                                            <div>The content of a template depends on the account provider that you use for deposits and withdrawals. This template is provided as a general reference example. See “Deposit and Withdraw Templates” on page 9 for more information about templates.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateFormType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the template being used. The template controls the string/ value pairs in the TemplateForm object returned for each withdrawal. These vary by account provider. See “Deposit and Withdraw Templates” on page 9 for more information about templates. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) string that identifies this specific withdrawal. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The IP address from which the withdrawal was initiated, in either IPv4 dotted quad format or IPv6 format. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who made the original withdrawal request. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user who made the original withdrawal request. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue on which the withdrawal request was made. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>integer.</strong> The current status of the deposit, stated as an integer. One of: </div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div>8 Pending2Fa</div>
                                            <div>9 AutoAccepted</div>
                                            <div>10 Delayed</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong> Withdraw tickets include Status values 8 through 10, which do not apply to deposit tickets. Status for <strong>GetAllWithdrawTickets</strong> and <strong>GetAllDepositTickets</strong> are numerical; other instances of Status are strings.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of any fee that was charged for the withdrawal. FeeAmt is always denominated in the asset or product of the withdrawal, for example in US Dollars, BitCoin, or other currency, depending on the nature of the funds being withdrawn. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of any user who made an update to the withdraw ticket. Updates are most usually to Status. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdateByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of any user who made an update to the withdraw ticket. Updates are most usually to Status. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique withdraw ticket number that identifies the withdrawal. The value for TicketNumber is returned by the <strong>Get~</strong> calls: <strong>GetAllWithdrawTickets</strong> and <strong>GetWithdrawTicket</strong>. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreatedTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date at which the withdraw ticket was created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information about this format </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> If the ticket has been updated, shows the time and date stamp of the update in ISO 8601 format; if the ticket has not been updated, shows the same time and date stamp as CreateTimestamp. See “Time– and Date-Stamp Formats” on page 8 for more information on ISO 8601. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the withdraw ticket’s process through the system. Neither users nor admins enter these comments directly. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ComAttachmentsments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong>A set of base-64 strings usually providing an image or a PDF. This image or file may be a transaction receipt or other information that the depositor wishes to attach to the deposit for record-keeping purposes. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AuditLog </td>
                                        <td>   
                                            <div><strong>array.</strong> Reserved for future use. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>TemplateForm object. The content of a template depends on the needs of the account provider that the account uses for deposits and withdrawals. This template information is provided as a general reference to show what a template looks like. See “Deposit and Withdraw Templates” on page 9 for more information about templates. This example comes from the TemplateFormType “TetherRpcWithdraw.” </div>
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
                                        <td> TemplateType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the template. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> Any comment pertaining to the withdrawal. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExternalAddress </td>
                                        <td>   
                                            <div><strong>string.</strong> An external address supplied by the account provider to accept the withdrawal. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>Sample Comment string/value pairs </div>
                        <div>The Comment string shown in the code sample may be one of an array of comments that track a withdrawal through the system and across updates. The string/value pairs are created by the system. Neither users nor admins can enter comments directly. </div>
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
                                        <td> CommentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> An arbitrary ID identifying this comment in the array of comments. Best practice: assign such an ID sequentially. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EnteredBy </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user entering the comment. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> EnteredDateTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The date and time that the comment was entered. This example shows ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information on the time-and-date-stamp formats supported. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> The body of the comment. The example comment shows the date-andtime-stamp when the withdrawal was submitted, and a cryptographic code. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System from which the withdrawal was made. Note that this OMSId may or may not be the same as the OMSId string/ value pair in the request and response of the enclosing GetAllWithdrawTickets call. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) that matches the RequestCode value in the response. The RequestCode uniquely identifies the withdrawal. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The system assigns the comment-level TicketId. It is associated with the ticket’s TicketNumber value.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> ConfirmWithdraw, CreateWithdrawTicket, GetWithdrawTemplate, GetWithdrawTemplateTypes, GetWithdrawTicket, GetWithdrawTickets, UpdateWithdrawTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAllWithdrawTickets;