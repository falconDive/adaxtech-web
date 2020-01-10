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
    

class GetWithdrawTicket extends Component {
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
                        <h2> GetWithdrawTicket </h2>
                        <p> Returns a single withdraw ticket from the Order Management System, trading venue operator, and account that matches the GUID (globally unique identifier) in RequestCode. Obtain the GUID from the call CreateWithdrawTicket when the ticket is first created, or from GetAllWithdrawTickets, another admin-level-only call. An administrator can use GetWithdrawTicket to return any single withdrawal ticket in the system. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only admin-level users can use this call.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div>{"“OMSId”: 1,"}</div>
                            <div>{"“OperatorId”: 1,"}</div>
                            <div>{"“RequestCode”: “2ddcbcd6-74c5-4082-8e62-ee93862a2c2d”,"}</div>
                            <div>{"“AccountId”: 4"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System where the withdrawal was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong>The ID of the trading venue operator on the system where the withdraw was made.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) that identifies the specific withdrawal ticket you want to return. Obtain the RequestCode from CreateWithdrawTicket or GetAllWithdrawTickets.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account from which the withdrawal was made.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns information about a single withdraw ticket.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetManagerId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetId”: 2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetName”: “US Dollar”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 10,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateForm”: “{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”FullName”: ”TestUs"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Language”: ”En”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Comment”: ”Test comment”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAddress”: ”My Bank’s address”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAccountNumber”: ”123456789”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”BankAccountName”: ”MyBank”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”SwiftCode”: ”SWIFT1023”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateFormType”: “Standard”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestCode”: “2ddcbcd6-74c5-4082-8e62-ee93862a2c2d”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestIP”: “90.171.32.77”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUserId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”: “Pending2Fa”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeAmt”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUser”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUserName”: “admin”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TicketNumber”: 52,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CreatedTimestamp”: “2017-12-14T15:25:13Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastUpdateTimestamp”: “2017-12-14T15:25:13Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Comments”: [],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Attachments”: [],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AuditLog”: []"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Asset Manager module from which the withdrawal was made. See “Modules” on page 3 for more information about system components.</div>
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
                                            <div><strong>integer.</strong> The ID of the asset in which the withdrawal was denominated, for example in US Dollars or BitCoin. AssetId has the same value content as ProductId.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the asset in which the withdrawal was denominated, for example, “US Dollars” or “BitCoin.”</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System from which the withdrawal was made. See “Modules” on page 3 for more information about system components.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally unique ID) that identifies the specific withdraw ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The IP address (either in IPv4 dotted quad format or in IPv6) from which the original withdraw ticket was submitted.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who originally submitted the withdraw request.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user who originally submitted the withdraw request,.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OperatorId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the operator of the trading venue.</div>
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
                                                <p><strong>Note: </strong>Withdrawal calls have three additional Status values that deposit calls do not: Status values 8 through 10.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> If the withdraw ticket has been updated, this string/value pair shows the ID of the account that updated the ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> If the withdraw ticket has been updated, this string/value pair shows the name of the person who updated the ticket.</div>
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
                                            <div><strong>string.</strong> The date and time that the withdraw ticket was first created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information on these formats.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimeStamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The date and time that the withdraw ticket was last updated. If the withdraw ticket has not been updated, this string/value pair will show the same time as CreatedTimeStamp. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the withdrawal’s process through the system. Neither users nor admins can enter these comments directly.</div>
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
                                            <div><strong>array of strings.</strong> Reserved for future use.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>TemplateForm object. The TemplateForm varies from account provider to the needs of the account provider. This is only an example of one template. </div>
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
                                            <div><strong>string.</strong> The physical address of the bank or other account provider that received the funds withdrawn from the OMS and trading venue account.</div>
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
                                            <div><strong>string.</strong> The name associated with the account at the bank or other account provider that received the funds withdrawn from the OMS and trading venue account.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SwiftCode </td>
                                        <td>   
                                            <div><strong>string.</strong> An international bank code that uniquely identifies a specific bank internationally. It is also known as a Bank Identifier Code, or BIC. The Swift Code consists of 8 or 11 alphanumeric characters.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> ConfirmWithdraw, CreateWithdrawTicket, GetWithdrawTemplate, GetWithdrawTemplateTypes, GetWithdrawTickets, UpdateWithdrawTicket </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetWithdrawTicket;