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
    

class UpdateWithdrawTicket extends Component {
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
                        <h2> UpdateWithdrawTicket </h2>
                        <p> Updates the content of a single withdraw ticket identified by the RequestCode value. Typically, such updates will be for Status or Amount, but all string/value pairs of the request can be changed using this call. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Only users will admin-level permissions can issue this call. </p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>The RequestCode value is returned by CreateWithdrawTicket or you can obtain it by calling GetAllWithdrawTickets. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetManagerId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AccountId”: 4,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AssetName”: ”BTC”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Amount”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateForm”:”{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”TemplateType”: ”ToExternalBitcoinAddress”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”Comment”: ””,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"”ExternalAddress”: “54123214”"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TemplateFormType”:”ToExternalBitcoinAddress”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestCode”:”6f2de66d-2b65-4850-b3d5-c93c0badf477”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestIP”:”52.232.187.103”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUserId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestUserName”:”John Smith”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OperatorId”:1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Status”:”Accepted”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FeeAmt”:0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUser”:2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UpdatedByUserName”:”Jane Doe”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TicketNumber”:2,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“CreatedTimestamp”:”2017-11-29T00:31:39Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastUpdateTimestamp”:”2017-11-29T00:31:39Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Comments”:[],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Attachments”:[],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“AuditLog”:[]"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Asset Manager module in which the withdrawal ticket resides. See “Modules” on page 3 for more information about the modules of the trading venue.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AccountId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the account that is updating the withdraw ticket in this call.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the asset in which the withdrawal is denominated, for example US Dollars or BitCoin. AssetId is the same as ProductId. See “Products and Instruments” on page 4 for more information about this concept.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> AssetName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the asset in which the withdrawal is denominated, for example “US Dollars” or “BitCoin.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Amount </td>
                                        <td>   
                                            <div><strong>real.</strong> The value of the asset being withdrawn with this ticket, for example 0.5 or 12.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateForm </td>
                                        <td>   
                                            <div><strong>object.</strong> A set of string/values pairs that define how to handle the withdrawal and where to send the asset. TemplateForms vary with the asset being withdrawn and the requirements of the account provider that will receive it. See “TemplateForm object. </div>
                                            <div>The string/value pairs of the TemplateForm object will vary with the asset being withdrawn and the requirements of the account provider. The set of string/ value pairs here is only an example. The TemplateForm tells the system how to withdraw the asset and how and where to send it.” </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TemplateFormType </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the withdrawal template.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System where the withdraw ticket was created.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestCode </td>
                                        <td>   
                                            <div><strong>string.</strong> The GUID (globally unique ID) of the specific ticket being updated. You can discover this ID by recording it when the withdraw ticket was created using CreateWithdrawTicket, or by calling GetAllWithdrawTickets.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestIP </td>
                                        <td>   
                                            <div><strong>string.</strong> The IP address from which the withdraw ticket was originally created, in IPv4 dotted quad format or in IPv6 format.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user who orginally created the withdraw ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the person who created the withdraw ticket.</div>
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
                                                <p><strong>Note: </strong> Withdrawal calls have three additional Status values that deposit calls do not: Status values 8 through 10.</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FeeAmt </td>
                                        <td>   
                                            <div><strong>real.</strong> The amount of any fee charged for the withdrawal by the trading venue operator. FeeAmt is always denominated in the same asset as the withdrawal. For example, a withdrawal of BitCoin that incurs a fee will have that fee charged in BitCoin.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user making this update of the withdraw ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> UpdatedByUserName </td>
                                        <td>   
                                            <div><strong>string.</strong> The name of the user making this update of the withdraw ticket.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TicketNumber </td>
                                        <td>   
                                            <div><strong>integer.</strong> A system-assigned unique withdraw ticket number that identifies the withdrawal. The value for TicketNumber is returned by the Get~ calls: GetAllWithdrawTickets and GetWithdrawTicket, </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> CreatedTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The date and time that the withdraw ticket was originally created, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information on ISO 8601. You can discover this value when the withdraw ticket is originally created, or by calling GetAllWithdrawTickets.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastUpdateTimestamp </td>
                                        <td>   
                                            <div><strong>string.</strong> The date and time that the withdraw ticket last was updated, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8 for more information about this format. You must supply this value with your update call request.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> Comments are sets of system-generated string/value pairs that provide information about the deposit’s process through the system. Neither users nor admins can enter or update these comments directly. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Attachments </td>
                                        <td>   
                                            <div><strong>array of strings.</strong> A set of base-64 strings usually providing an image or a PDF. This image or file may be a transaction receipt or other information that the depositor wishes to attach to the deposit for record-keeping purposes.</div>
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
                        <div>TemplateForm object. </div>
                        <div>The string/value pairs of the TemplateForm object will vary with the asset being withdrawn and the requirements of the account provider. The set of string/value pairs here is only an example. The TemplateForm tells the system how to withdraw the asset and how and where to send it. </div>
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
                                            <div><strong>string.</strong> The name of the withdrawal template.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Comment </td>
                                        <td>   
                                            <div><strong>string.</strong> Any comment attached to the withdrawal.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ExternalAddress </td>
                                        <td>   
                                            <div><strong>string.</strong> The external (non-trading-venue) address to which to send the asset.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response is a standard response object. This shows that the request to update the withdraw ticket has been correctly received, not that the request to update the withdraw ticket has taken place. To verify that the update has taken place, use the call GetWithdrawTicket, specifying the RequestCode of the updated withdraw ticket.</p>
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
                        <p> CreateWithdrawTicket, GetAllWithdrawTickets, GetWithdrawTemplate, GetWithdrawTemplateTypes, GetWithdrawTicket, GetWithdrawTickets </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default UpdateWithdrawTicket;