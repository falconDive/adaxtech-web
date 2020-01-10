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
    

class ContentsCommonToManyApiCalls extends Component {
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
                        <h2> Contents Common to Many API Calls </h2>
                        <p> These items appear in many of the API calls. Rather than explain them in place, we explain them here. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>There is occasional variance in the naming, spelling, and capitalization of string names, even those string/value pairs that refer to the same thing. For example, <i>AssetId</i> and <i>ProductId</i> are not interchangeable, even though they refer to the same data. Naming, spelling, and capitalization must follow the forms shown in the document.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Order Types </h4>
                        <p> Used by: <strong>CancelReplaceOrder</strong>, <strong>GetOpenOrders</strong>, <strong>GetOpenQuotes</strong>, <strong>GetOrderFee</strong>, <strong>GetOrderHistory</strong>, <strong>GetOrderHistoryByOrderId</strong>, <strong>GetOrdersHistory</strong>, <strong>GetOrderStatus</strong>, and <strong>SendOrder</strong>. </p>
                        <div style={{marginTop:'10px'}}>Where:</div>
                        <div className={`tableCont`}>
                            <table className={`table backgroundInfoTbl`}>
                                <thead>
                                    <tr>
                                        <td> Type </td>
                                        <td> Definition </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 0 Unknown </td>
                                        <td> The order type is unknown. Because all orders have a type, this is an error condition. </td>
                                    </tr>
                                    <tr>
                                        <td> 1 Market </td>
                                        <td> An order to buy or sell an instrument at the best available price. Contains no restrictions on price or time frame. </td>
                                    </tr>
                                    <tr>
                                        <td> 2 Limit </td>
                                        <td> An order to buy or sell a set amount of an instrument at a specified price or better. A limit order may not be executed if the price set is not met during the time that the order is open. </td>
                                    </tr>
                                    <tr>
                                        <td> 3 StopMarket </td>
                                        <td> An order to buy or sell only when an instrument reaches a set price. Once the instrument reaches this price, the order becomes a market order.</td>
                                    </tr>
                                    <tr>
                                        <td> 4 StopLimit </td>
                                        <td> An order to buy or sell only when an instrument reaches a set price. Once the instrument reaches this price, the order becomes a limit order to buy or sell at the limit price or better. </td>
                                    </tr>
                                    <tr>
                                        <td> 5 TrailingStopMarket </td>
                                        <td> An order that sets the stop price for an instrument at a price with a fixed offset relative to the market price. If the market moves and the stop price is reached, the order becomes a market order. </td>
                                    </tr>
                                    <tr>
                                        <td> 6 TrailingStopLimit </td>
                                        <td> An order that recalculates the stop price for an instrument at a fixed offset relative to the market price. It also recalculates the limit price based on a different fixed offset. If the market reaches the stop price, the order becomes a limit order.</td>
                                    </tr>
                                    <tr>
                                        <td> 7 BlockTrade </td>
                                        <td> A privately executed trade. </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Display Quantity </h4>
                        <p> Used by: <strong>CancelReplaceOrder</strong>, <strong>GetOpenOrders</strong>, <strong>GetOpenQuotes</strong>, <strong>GetOrderHistory</strong>, <strong>GetOrderHistoryByOrderId</strong>, <strong>GetOrdersHistory</strong>, <strong>GetOrderStatus</strong>, and <strong>SendOrder</strong> </p>
                        <p> Display Quantity is the quantity of a product available to buy or sell that is publicly displayed to the market. A larger quantity may be made available for buying or selling, but it may be disadvantageous to show that amount all at once. </p>
                        <p> The number of units in a <i>DisplayQuantity</i> field appears as that number until the total number of units available or sought drops below the <i>DisplayQuantity</i> value set by the user. For example, if there are 100 units offered, but the <i>DisplayQuantity</i> value is set to 10, 10 continues to display as trading continues, until the number of units available for sale drops below 10. </p>
                        <p> The default value is 1. </p>
                        <p> To make use of a <i>DisplayQuantity</i> value, an order must be a limit order with a reserve. See “Order Types” on page 7. </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Time– and Date-Stamp Formats </h4>
                        <p> ADAX Tech software uses three different time- and date-stamp formats. Unless otherwise specified, POSIX format is used. </p>
                        <ul>
                            <li> <strong>POSIXct</strong> class stores date/time values as the number of seconds since 1 January 1970 (long integer). ADAX Tech software often multiplies this number by 1000 for the number of milliseconds since 1 January 1970. For more information on this format, consult: https://www.stat.berkeley.edu/~s133/dates.html </li>
                            <li> <strong>ISO 8601</strong> format stores the date and time with its time zone (in ADAX Tech, that time zone is always Zulu or UTC time). For example: 
                                <div className={`codeCont`}>
                                    <div> yyyymmddThhmmssZ </div>
                                    <div> 20080915T155300Z </div>
                                </div>
                                <p> Where T indicates the beginning of the time information, and Z (Zulu/UTC) indicates the time zone — in this case, Zulu time. For more information on this format, consult: http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/a003169814.htm </p>
                            </li>
                            <li>
                                <strong>Microsoft ticks</strong> format represents the number of ticks that have elapsed since 00:00:00 UTC, 1 January 0001, in the Gregorian calendar. A single tick represents one hundred nanoseconds (one ten-millionth of a second). There are 10,000 ticks in a millisecond; ten million ticks in a second. It does not include the number of ticks attributable to leapseconds.
                                <p> Microsoft provides the following sample code in C# (https://msdn.microsoft.com/en-us/library/system.datetime.ticks(v=vs.110).aspx): </p>
                                <div className={`codeCont`}>
                                    <div>{"DateTime centuryBegin = new DateTime(2001, 1, 1);"}</div>
                                    <div>{"DateTime currentDate = DateTime.Now;"}</div>
                                    <div>{"long elapsedTicks = currentDate.Ticks - centuryBegin.Ticks;"}</div>
                                    <div>{"TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);"}</div>
                                    <div>{"Console.WriteLine(“Elapsed from the beginning of the century to {0:f}:”, currentDate);"}</div>
                                    <div>{"Console.WriteLine(“ {0:N0} nanoseconds”, elapsedTicks * 100);"}</div>
                                    <div>{"Console.WriteLine(“ {0:N0} ticks”, elapsedTicks);"}</div>
                                    <div>{"Console.WriteLine(“ {0:N2} seconds”, elapsedSpan.TotalSeconds);"}</div>
                                    <div>{"Console.WriteLine(“ {0:N2} minutes”, elapsedSpan.TotalMinutes);"}</div>
                                    <div>{"Console.WriteLine(“ {0:N0} days, {1} hours, {2} minutes, {3} seconds”, elapsedSpan.Days, elapsedSpan.Hours, elapsedSpan.Minutes, elapsedSpan.Seconds);"}</div>
                                    <div>{"// If run on December 14, 2007, at 15:23, this example displays the"}</div>
                                    <div>{"// following output to the console:"}</div>
                                    <div>{"// Elapsed from the beginning of the century to Friday, December 14, 2007 3:23 PM:"}</div>
                                    <div>{"// 219,338,580,000,000,000 nanoseconds"}</div>
                                    <div>{"// 2,193,385,800,000,000 ticks"}</div>
                                    <div>{"// 219,338,580.00 seconds"}</div>
                                    <div>{"// 3,655,643.00 minutes"}</div>
                                    <div>{"// 2,538 days, 15 hours, 23 minutes, 0 seconds"}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> The Trading Day </h4>
                        <p> Most ADAX Tech installations operate 24-hour computer-based trading venues. The trading day runs from UTC Midnight to UTC Midnight (essentially, London UK time, but without a summer offset). For values that comprise a per-day quantity (<i>TotalDayDeposits</i>, for example), the day runs from UTC Midnight to UTC Midnight, regardless of the venue’s nominal location. </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Deposit and Withdraw Templates </h4>
                        <p> Templates provide a set of information about banking tasks during deposits and withdrawals, in the form of specific string/value pairs. Each template has a name. There are different templates for different types of deposit and withdrawal, determined by the product or asset (BitCoin, Monero, US Dollar, etc.), the specific bank or other account provider, and the information that the account provider requires for transactions. </p>
                        <p> Most templates are used for withdrawals. </p>
                        <p> Following, are two example templates. </p>
                        <div className={`codeCont`}>
                            <div>{"“TemplateFormType”: “Standard”,"}</div>
                            <div>
                                {"{"}
                                <div style={{paddingLeft:'20px'}}>{"“Full Name”: “John Smith”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“Language”: “en”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“Comment” : ““,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“BankAddress”: “123 Fourth St.”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“BankAccountNumber”: “12345678”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“BankAccountName”: “John Smith & Sons”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“SwiftCode”: “ABCDUSA1”"}</div>
                                {"}"}
                            </div>
                            <div>{"“TemplateFormType”: “TetherRpcWithdraw”,"}</div>
                            <div>
                                {"{"}
                                <div style={{paddingLeft:'20px'}}>{"“TemplateType”: “TetherRpcWithdraw”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“Comment”: “TestWithdraw”,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“Comment” : ““,"}</div>
                                <div style={{paddingLeft:'20px'}}>{"“ExternalAddress”: “ms6C3pKAAr8gRCcnVebs8VRkVrjcvqNYv3”"}</div>
                                {"}"}
                            </div>
                        </div>
                        <p> The content of the template depends on the account provider that you use for deposits and withdrawals. The account provider does not supply the template per se (they do, however, determine the fields that are in the template). The template is specific to each account provider. In one case, an unusual requirement of the account provider necessitated in the pre-population of certain request fields. </p>
                        <p> To determine which withdrawal template types are available to you, call <strong>GetWithdrawTemplateTypes.</strong> </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Report Types </h4>
                        <p> There are three report types: </p>
                        <ul>
                            <li> <strong>Trade Activity:</strong> Generates a report on both open and executed trades made by a set of Account IDs on a given Order Management System during a specified period. </li>
                            <li> <strong>Transaction:</strong> Generates a report on all transactions executed by a set of Account IDs on a given Order Management System during a specified period. </li>
                            <li> <strong>Treasury:</strong> Generates a report on all company treasury activities related to the trading venue — withdrawals, transfers, and funds movements unrelated to trading. The report comprises activities by a set of Account IDs on the given Order Management System for a specified period. </li>
                        </ul>
                        <p> The Order Management System echoes back the Report Type as a confirmation of the call. </p>
                    </div>
                </div>
                <div className={`row`} style={{marginTop:'10px'}}>
                    <div className={`col-md-12`}>
                        <h4> Request Status </h4>
                        <p> When you generate a report on demand or schedule a report to run with some periodicity, the return object for the call provides the status of the report request in the RequestStatus string/value pair. </p>
                        <p> In the case of a Generate or Schedule call, RequestStatus returns Submitted; in the case of a GetUserReportTickets call, RequestStatus returns the status of the report within the system. </p>
                        <p style={{fontSize:'12px'}}> Table 1. Request Status definitions </p>
                        <div className={`tableCont`}>
                            <table className={`table backgroundInfoTbl`}>
                                <thead>
                                    <tr>
                                        <td>Type</td>
                                        <td>Definition</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 0 Submitted </td>
                                        <td> Your report order has been submitted to the system. </td>
                                    </tr>
                                    <tr>
                                        <td> 1 Validating </td>
                                        <td> The system is making sure that you have the correct permissions to request the report. See “Permissions” on page 4. </td>
                                    </tr>
                                    <tr>
                                        <td> 2 Scheduled </td>
                                        <td> The report is scheduled to be run. </td>
                                    </tr>
                                    <tr>
                                        <td> 3 InProgress </td>
                                        <td> The report is currently being prepared. </td>
                                    </tr>
                                    <tr>
                                        <td> 4 Completed </td>
                                        <td> The report has been completed and delivered. </td>
                                    </tr>
                                    <tr>
                                        <td> 5 Aborting </td>
                                        <td> The system is stopping preparation of the report. </td>
                                    </tr>
                                    <tr>
                                        <td> 6 Aborted </td>
                                        <td> The report preparation has stopped. </td>
                                    </tr>
                                    <tr>
                                        <td> 7 UserCanceled </td>
                                        <td> You have canceled this report. </td>
                                    </tr>
                                    <tr>
                                        <td> 8 SysRetired </td>
                                        <td> The system has canceled the report on your behalf. </td>
                                    </tr>
                                    <tr>
                                        <td> 9 UserCanceledPending </td>
                                        <td> You have requested a report cancellation, but the report has not been canceled yet. </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> API calls that return requestStatus are: <strong>GenerateTradeActivityReport</strong>, <strong>GenerateTransactionActivityReport</strong>, <strong>GenerateTreasuryActivityReport</strong>, <strong>GetUserReportTickets</strong>, <strong>ScheduleTradeActivityReport</strong>, <strong>ScheduleTreasuryActivityReport</strong>, and <strong>ScheduleTreasuryActivityReport</strong>. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentsCommonToManyApiCalls;