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
    

class GetWithdrawTickets extends Component {
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
                        <h2> GetWithdrawTickets </h2>
                        <p> Returns an array of withdraw tickets from the specified Order Management System and Account. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Any level user can issue GetWithdrawTickets. GetAllWithdrawTickets and GetWithdrawTicket are admin-only calls. </p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div>{"“OMSId”: 1,"}</div>
                            <div>{"“AccountId”: 4,"}</div>
                            <div>{"“StartIndex”: 0,"}</div>
                            <div>{"“Limit”: 200"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System from which withdrawals were made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which withdrawals were made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> StartIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The withdraw ticket at which to start returning the array of withdraw tickets, starting from 0, the most recent withdraw ticket, and working backwards in time.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Limit </td>
                                        <td>   
                                            <div><strong>integer.</strong> Optional. The total number of withdraw tickets to return in the array. Limit is a 32-bit integer value that can return over 4 billion tickets (4 thousand million). If Limit is not specified, all tickets are returned. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response is an array of withdraw ticket objects, template information, and comments.</p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetManagerId”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetId”: 2,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“AssetName”: “US Dollar”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Amount”: 12,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TemplateForm”: “{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“FullName”: “John Smith”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Language”: “en”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Comment”: “Withdrawal 10/18/18”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BankAddress”: “mybank.com”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BankAccountNumber”: “12345A27”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“BankAccountName”: “John Smith & Sons”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“SwiftCode”: “ABCDUS27”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"}"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TemplateFormType”: “Standard”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestCode”: “490b4fa3-53fc-44f4-bd29-7e16be86fba3”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestIP”: “99.127.45.221”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUserId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“RequestUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Status”: “AdminCancelled”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“FeeAmt”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUser”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“UpdatedByUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“TicketNumber”: 49,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“CreatedTimestamp”: “2017-11-17T17:05:52Z”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LastUpdateTimestamp”: “2017-11-17T17:11:31Z”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Comments”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"{"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“CommentId”: 28,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredBy”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredDateTime”: “2017-11-17T17:08:13Z”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Comment”: “Withdraw Submitted (11/17/2017 5:08:13 PM): “,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketCode”: “4fa1674c-bf29-4a37-a5ef-0197dc9fc5d4”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketId”: 48"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"{"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“CommentId”: 27,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredBy”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“EnteredDateTime”: “2017-11-17T17:05:53Z”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Comment”: “Withdraw Failed: Exceeds_Daily_Withdraw_Limit”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketCode”: “490b4fa3-53fc-44f4-bd29-7e16be86fba3”,"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“TicketId”: 49"}</div>
                            <div style={{paddingLeft:'40px'}}>{"}"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Asset Manager module. See “Modules” on page 3 for more information about the Asset Manager.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which the withdrawal was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the asset in which the withdrawal is denominated, for example, US Dollar or BitCoin both have an associated AssetId. AssetId and ProductId are identical in numerical content. You must use AssetId here.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The readable name of the asset in which the withdrawal is denominated, for example, “US Dollar” or “BitCoin.”</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateForm </td>
                                        <td>   
                                            <div><strong>object.</strong> See the TemplateForm object, following.</div>
                                            <div>The content of a template depends on the account provider that you use for deposits and withdrawals. This template is provided only as a general reference example. See “Deposit and Withdraw Templates” on page 9 for more information about templates. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateFormType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the template being used. The template controls the string/ value pairs in the TemplateForm object returned for each withdrawal. These vary by account provider. See “Deposit and Withdraw Templates” on page 9 for more information about templates.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) that identifies the specific withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The IP address from which the withdrawal was initiated, in either IPv4 dotted quad format or IPv6 format.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who made the original withdrawal request.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user who made the original withdrawal request.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue on which the withdrawal request was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Status </td>
                                        <td>   
                                            <div><strong>string.</strong> The current status of the withdrawal, stated as a string. One of:</div>
                                            <div>0 New</div>
                                            <div>1 AdminProcessing</div>
                                            <div>2 Accepted</div>
                                            <div>3 Rejected</div>
                                            <div>4 SystemProcessing</div>
                                            <div>5 FullyProcessed</div>
                                            <div>6 Failed</div>
                                            <div>7 Pending</div>
                                            <div>8 Pending2FA</div>
                                            <div>9 AutoAccepted</div>
                                            <div>10 Delayed</div>
                                            <div className={`noteCont`}>
                                                <p><strong>Note: </strong>Withdraw tickets include Status values 8 through 10, which do not apply to deposit tickets.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of any fee that was charged for the withdrawal. FeeAmt is always denominated in the asset or product of the withdrawal, for example in US Dollars, BitCoin, or other currency, depending on the nature of the funds being withdrawn.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the most recent user who made an update to the withdraw ticket. Updates are most usually made for Status changes. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the most recent user who made an update to the withdraw ticket. Updates are most usually made for Status changes.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique withdraw ticket number that identifies the withdrawal. The value for TicketNumber is returned by the Get~ calls: GetAllWithdrawTickets and GetWithdrawTicket,</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreatedTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date at which the withdraw ticket was created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information about this format.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimeStamp </td>
                                        <td>   
                                            <div><strong>string.</strong> If the ticket has been updated, shows the time and date stamp of the update in ISO 8601 format; if the ticket has not been updated, shows the same time and date stamp as CreateTimestamp. See “Time– and Date-Stamp Formats” on page 8 for more information on ISO 8601. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the withdrawal’s process through the system. Neither users nor admins enter these comments directly. See “Sample Comment string/ value pairs” on page 232 for an explanation of the Comments section used in this code example.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Attachments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> A set of base-64 strings usually providing an image or a PDF. This image or file may be a transaction receipt or other information that the depositor wishes to attach to the deposit for record-keeping purposes. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AuditLog </td>
                                        <td>   
                                            <div><strong>array.</strong> Reserved for future use.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>TemplateForm object. The content of a template depends on the needs of the account provider that the account uses for deposits and withdrawals. This template information is provided as a general reference to show what a template looks like. See “Deposit and Withdraw Templates” on page 9 for more information about templates. This example comes from the TemplateFormType “Standard.” </div>
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
                                        <td> FullName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the bank account holder, as it appears on the bank account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Language </td>
                                        <td>   
                                            <div><strong>string.</strong> A two-character abbreviation of the language of the withdrawal information, for example, En for English, Sp for Spanish, or Ru for Russian. The values for this string are not enumerated, to allow for variation and expansion. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> Any comment that was applied to the withdraw ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAddress </td>
                                        <td>   
                                            <div><strong>string.</strong> The physical (street) address of the bank or other account provider that received the funds withdrawn from the OMS and trading venue account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAccountNumber </td>
                                        <td>   
                                            <div><strong>string.</strong> The account at the bank or other account provider that received the funds withdrawn from the OMS and trading venue account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> BankAccountName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name associated with the account at the bank or other account provider that received the funds withdrawn from the OMS and trading venue account. For example, “John Smith & Sons.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SwiftCode </td>
                                        <td>   
                                            <div><strong>string.</strong>  An international bank code that uniquely identifies a specific bank internationally. It is also known as a Bank Identifier Code, or BIC. The Swift Code consists of 8 or 11 alphanumeric characters.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Sample Comment string/value pairs </p>
                        <p>The Comment string shown in the code sample may be one of an array of comments that track a withdrawal through the system and across updates. The string/value pairs are created by the system. Neither users nor admins can enter comments directly. These are example pairs only.</p>
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
                                            <div><strong>integer.</strong> An arbitrary ID identifying this comment in the array of comments. </div>
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
                                            <div><strong>string.</strong> The body of the comment. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System from which the withdrawal was made. Note that this OMSId may or may not be the same as the OMSId string/ value pair in the request and response of the enclosing GetWithdrawTickets call. </div>
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
                                            <div><strong>integer.</strong> The system assigns the comment-level TicketId. It is associated with the ticket’s TicketNumber value. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> ConfirmWithdraw, CreateWithdrawTicket, GetAllWithdrawTickets, GetWithdrawTemplate, GetWithdrawTemplateTypes, GetWithdrawTicket, UpdateWithdrawTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetWithdrawTickets;