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
    

class GenerateTransactionActivityReport extends Component {
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
                        <h2> GenerateTransactionActivityReport </h2>
                        <p> Generates an immediate report on account transaction activity for a list of accounts under a single Order Management System during a specified time. A logged-in and authenticated user can only generate a transaction activity report for accounts associated with the user. There can be multiple users associated with an account however; see “Permissions” on page 4. </p>
                        <p> The Transaction Activity Report is delivered as a comma-separated (CSV) file. For specific CSV formatting information, see the APEX Extract CSV Data Dictionary, available from ADAX Tech. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“accountIdList”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"0"}</div>
                            <div style={{paddingLeft:'10px'}}>{"],"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“omsId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“startTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“endTime”: “0001-01-01T05:00:00Z”"}</div>
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
                                        <td> accountIdList </td>
                                        <td>   
                                            <div><strong>Integer array.</strong> A comma-deliminted array of one ore more account IDs, each valid on the same Order Management System on which the user is authenticated. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> omsId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the array of account IDs exist.  </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> startTime </td>
                                        <td>   
                                            <div><strong>string.</strong> startTime identifies the time and date for the beginning of the transaction activity report, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> endTime </td>
                                        <td>   
                                            <div><strong>string.</strong> endTime identifies the time and date for the end of the transaction activity report, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8.  </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>Similar objects are returned for <strong>Generate~Report</strong> and <strong>Schedule~Report</strong> calls. As a result, for an on-demand <strong>Generate~Report</strong> call, some string-value pairs such as initialRunTime may return the current time and ReportFrequency will always return OnDemand because the report is only generated once and on demand. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestingUser”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“reportFlavor”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“TradeActivity”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Transaction”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Treasury”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“createTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“initialRunTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“intervalStartTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“intervalEndTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestStatus”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Submitted”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Validating”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Scheduled”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“InProgress”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Completed”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Aborting”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Aborted”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“UserCancelled”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“SysRetired”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“UserCancelledPending”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ReportFrequency”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“onDemand”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Hourly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Daily”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Weekly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Monthly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Annually”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“intervalDuration”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“RequestId”: “AAAAAAAAAAAAAAAAAAAAAA==”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“lastInstanceId”: “AAAAAAAAAAAAAAAAAAAAAA==”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“accountIds”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"0"}</div>
                            <div style={{paddingLeft:'10px'}}>{"],"}</div>
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
                                        <td> RequestingUser </td>
                                        <td>   
                                            <div><strong>integer.</strong>The User ID of the person requesting the transaction activity report. This confirms the ID of the authenticated user who made the request by returning it as part of the response..</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the trade activity report will be run.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> reportFlavor </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of report to be generated. One of: </div>
                                            <div>TradeActivity</div>
                                            <div>Transaction</div>
                                            <div>Treasury</div>
                                            <div>The reportFlavor string confirms the nature of the call.</div>
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
                                            <div><strong>string.</strong> The start of the period that the report will cover, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalEndTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The end of the period that the report will cover, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> requestStatus </td>
                                        <td>   
                                            <div><strong>string.</strong>  The status of the request for the trade activity report. A <strong>Generate~Report</strong> request will always return Submitted. See “Request Status” on page 10. Each request returns one of: </div>
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
                                            <div><strong>string.</strong> When the report runs. For a <strong>Generate~Report</strong> call, this is always OnDemand. </div>
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
                                            <div><strong>long integer.</strong> The period that the report covers relative to the run date, expressed in Microsoft ticks format. The <strong>Generate~Report</strong> call requires a start time and an end time. The ADAX Tech software calculates the difference between them as intervalDuration. See ““Time– and Date-Stamp Formats” on page 8. For example, say that you specify a 90-day start-date-to-end-date window for a report. The intervalDuration value returns a value equivalent to 90 days. If you have called <strong>Generate~Report</strong>, that value simply confirms the length of time that the on-demand report covers. </div>
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
                        <p> GenerateTradeActivityReport, GenerateTreasuryActivityReport, GetUserReportTickets, GetUserReportWriterResultRecords, ScheduleTradeActivityReport, ScheduleTransactionActivityReport, ScheduleTreasuryActivityReport </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GenerateTransactionActivityReport;