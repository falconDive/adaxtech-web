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
    

class ScheduleTreasuryActivityReport extends Component {
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
                        <h2> ScheduleTreasuryActivityReport </h2>
                        <p> Schedules a series of treasury activity reports for a list of accounts on a single Order Management System, starting at a specific date/time, and covering a specific time interval. The reports will run periodically until canceled. </p>
                        <p> The Treasury Activity Report itself is delivered as a comma-separated-value (CSV) file. For specific CSV formatting information, see the APEX Extract CSV Data Dictionary, available from ADAX Tech. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“accountIdList”: ["}</div>
                            <div style={{paddingLeft:'20px'}}>{"0"}</div>
                            <div style={{paddingLeft:'10px'}}>{" ],"}</div>
                            <div style={{paddingLeft:'10px'}}>{" “omsId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{" “beginTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{" “intervalDuration”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{" “frequency”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Hourly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Daily”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Weekly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Monthly”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Annual”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
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
                                        <td> AccountIdList </td>
                                        <td>   
                                            <div><strong>integer array.</strong> Comma-separated integers; each element is an account ID whose transaction activity will be reported on. All accounts must be from the same OMS.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The Order Management System on which the accounts named in the list reside.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> beginTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time from which the transaction activities will be reported, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalDuration </td>
                                        <td>   
                                            <div><strong>integer.</strong> The length of time prior to the run time that the report covers, in Microsoft ticks format. For example, 90 days. Whenever the report runs, it looks back 90 days.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> frequency </td>
                                        <td>   
                                            <div><strong>string.</strong> How often the report will run. One of:</div>
                                            <div>0 OnDemand</div>
                                            <div>1 Hourly</div>
                                            <div>2 Daily</div>
                                            <div>3 Weekly</div>
                                            <div>4 Monthly</div>
                                            <div>5 Annually</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>Similar objects are returned for <strong>Generate~Report</strong> and <strong>Schedule~Report</strong> calls. </p>
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
                                        <td> RequestingUser </td>
                                        <td>   
                                            <div><strong>integer.</strong> The User ID of the person requesting the trade activity report. This confirms the ID of the authenticated user who made the request by returning it as part of the response.</div>
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
                                            <div><strong>string.</strong>The time and date on which the request for the trade activity report was made, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> initialRunTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date at which the trade activity report was first run, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalStartTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time that the report writer completed the report, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> intervalEndTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time that the report writer completed the report, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> requestStatus </td>
                                        <td>   
                                            <div><strong>string.</strong> The status of the request for the trade activity report. See “Request Status” on page 10. Each request returns one of: </div>
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
                                            <div><strong>string.</strong> When the report runs.  </div>
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
                                            <div><strong>long integer.</strong> The period that the report covers relative to the run date. The call specifies a start time and an intervalDuration in the form of Microsoft ticks. (See “Time– and Date-Stamp Formats” on page 8.) For example, say that you schedule a weekly report with a 90-day intervalDuration value. intervalDuration represents the backward-looking period of the report. When the report runs again in a week’s time, it again looks back 90 days — but now those 90 days are offset by a week from the first report. </div>
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
                                            <div><strong>string.</strong> For scheduled reports, the report ID of the most recent previously run report. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> accountIds </td>
                                        <td>   
                                            <div><strong>integer array.</strong>  A comma-delimited array of account IDs whose trades are reported in the trade activity report. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GenerateTradeActivityReport, GenerateTransactionActivityReport, GenerateTreasuryActivityReport, GetUserReportTickets, GetUserReportWriterResultRecords, ScheduleTradeActivityReport, ScheduleTransactionActivityReport. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ScheduleTreasuryActivityReport;