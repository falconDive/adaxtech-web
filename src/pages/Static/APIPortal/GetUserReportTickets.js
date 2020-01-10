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
    

class GetUserReportTickets extends Component {
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
                        <h2> GetUserReportTickets </h2>
                        <p> Returns an array of user report tickets for a specific user ID. A user report ticket identifies a report requested or subscribed to by a user. Reports can run once or periodically. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“UserId”: 1"}</div>
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
                                        <td> UserId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the user whose user report tickets will be returned. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array of tickets, each ticket representing a report. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“RequestingUser”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“reportFlavor”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“TradeActivity”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Transaction”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Treasury”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“createTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“initialRunTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“intervalStartTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“intervalEndTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“RequestStatus”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Submitted”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Validating”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Scheduled”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“InProgress”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Completed”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Aborting”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Aborted”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“UserCancelled”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“SysRetired”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“UserCancelledPending”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“ReportFrequency”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“onDemand”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Hourly”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Daily”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Weekly”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Monthly”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Annually”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“intervalDuration”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“RequestId”: “AAAAAAAAAAAAAAAAAAAAAA==”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“lastInstanceId”: “AAAAAAAAAAAAAAAAAAAAAA==”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{" “accountIds”: ["}</div>
                            <div style={{paddingLeft:'50px'}}>{"0"}</div>
                            <div style={{paddingLeft:'40px'}}>{"],"}</div>
                            <div style={{paddingLeft:'20px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
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
                                        <td> RequestingUser </td>
                                        <td>   
                                            <div><strong>integer.</strong>The User ID of the person requesting the report.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the report was run.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> reportFlavor </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of report. One of: </div>
                                            <div>TradeActivity</div>
                                            <div>Transaction</div>
                                            <div>Treasury</div>
                                            <div>For more information, see “Report Types” on page 9</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> createTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date on which the request for the trade activity report was made, in ISO 8601 format and the UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> initialRunTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date at which the trade activity report was first run, in ISO 8601 format and the UTC time zone. Returns the current time for a Generate~Report call. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalStartTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The start of the period that the report will cover, in ISO 8601 format, and UTC time zone. See ““Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalEndTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The end of the period that the report will cover, in ISO 8601 format, and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> requestStatus </td>
                                        <td>   
                                            <div><strong>string.</strong> The status of the request for the report. See “Request Status” on page 10. Each status returns one of: </div>
                                            <div>Submitted</div>
                                            <div>Validating</div>
                                            <div>Scheduled</div>
                                            <div>InProgress</div>
                                            <div>Completed</div>
                                            <div>Aborting</div>
                                            <div>Aborted</div>
                                            <div>UserCancelled</div>
                                            <div>SysRetired</div>
                                            <div>UserCancelledPending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ReportFrequency </td>
                                        <td>   
                                            <div><strong>string.</strong> When the report runs. </div>
                                            <div>OnDemand</div>
                                            <div>Hourly</div>
                                            <div>Daily</div>
                                            <div>Weekly</div>
                                            <div>Monthly</div>
                                            <div>Annually</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalDuration </td>
                                        <td>   
                                            <div><strong>long integer.</strong>  The period that the report looks backward relative to the run date. The system calculates intervalDuration between intervalStartTime and intervalEndTime and reports it in the form of Microsoft ticks. (See “Time– and Date-Stamp Formats” on page 8.) For example, say that you specify a 90-day start-date-to-end-date window for a report. The intervalDuration value returns a value equivalent to 90 days and represents the backward-looking period of the  report. Say that you have set a weekly report to look back 90 days. When it runs again in a week’s time, it again looks back 90 days — but now those 90 days are offset by a week from the first report. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> RequestId </td>
                                        <td>   
                                            <div><strong>string.</strong> The ID of the original request. Request IDs are long strings unique within the Order Management Systsem. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> lastInstanceId </td>
                                        <td>   
                                            <div><strong>string.</strong> For scheduled reports, the report ID of the most recent previously run report. Will be null for a <strong>Generate~Report</strong> call, because generated reports are on-demand. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> accountId </td>
                                        <td>   
                                            <div><strong>integer array.</strong> A comma-delimited array of account IDs whose trades are reported in the trade activity report. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GenerateTradeActivityReport, GenerateTransactionActivityReport, GenerateTreasuryActivityReport, GetUserReportWriterResultRecords, ScheduleTradeActivityReport, ScheduleTreasuryActivityReport, ScheduleTreasuryActivityReport </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetUserReportTickets;