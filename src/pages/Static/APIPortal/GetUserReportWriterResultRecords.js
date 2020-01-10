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
    

class GetUserReportWriterResultRecords extends Component {
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
                        <h2> GetUserReportWriterResultRecords </h2>
                        <p> The call returns an array of user report writer results. The results are the details of when reports have been run, and the status of each report run. Did the report complete? Did the report not start? The call requires no details. The call uses the default information from the logged-in and authenticated user. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <p>Requires no details.</p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"// no request details are needed"}</div>
                            <div>{"}"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"{"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“RequestingUser”: 0,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“urtTicketId”: “AAAAAAAAAAAAAAAAAAAAAA==”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“descriptorId”: “AAAAAAAAAAAAAAAAAAAAAA==”"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“resultStatus”: {"}</div>
                            <div style={{paddingLeft:'50px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NotStarted”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“NotComplete”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“ErrorComplete”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“SuccessComplete”,"}</div>
                            <div style={{paddingLeft:'60px'}}>{"“Cancelled”"}</div>
                            <div style={{paddingLeft:'50px'}}>{"]"}</div>
                            <div style={{paddingLeft:'40px'}}>{"},"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“reportExecutionStartTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“reportExecutionCompleteTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“reportDescriptiveHeader”: “”,"}</div>
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
                                            <div><strong>integer.</strong> ID of the logged-in user requesting the report.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> urtTicketId </td>
                                        <td>   
                                            <div><strong>string.</strong> An alphanumeric string containing the unique report ID of the report.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> descriptorId </td>
                                        <td>   
                                            <div><strong>string.</strong> A GUID (globally-unique identifier) that describes the report separately from the report ticket. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> resultStatus </td>
                                        <td>   
                                            <div><strong>string.</strong> The status of each run of the reports. One of: </div>
                                            <div>0 NotStarted</div>
                                            <div>1 NotComplete</div>
                                            <div>2 ErrorComplete</div>
                                            <div>3 SuccessComplete</div>
                                            <div>4 Cancelled</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> reportExecutionStartTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time that the report writer began execution, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> reportExecutionCompleteTime </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The time that the report writer completed the report, in ISO 8601 format and UTC time zone. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> reportDescriptiveHeader </td>
                                        <td>   
                                            <div><strong>string.</strong> A string describing the report. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GenerateTradeActivityReport, GenerateTransactionActivityReport, GenerateTreasuryActivityReport, GetUserReportTickets, ScheduleTradeActivityReport, ScheduleTreasuryActivityReport, ScheduleTreasuryActivityReport. </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetUserReportWriterResultRecords;