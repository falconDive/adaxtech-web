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
    

class GetTickerHistory extends Component {
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
                        <h2> GetTickerHistory </h2>
                        <h5> No authentication required </h5>
                        <p> Requests a ticker history (high, low, open, close, volume, bid, ask, ID) of a specific instrument from a given date forward to the present. You will need to format the returned data per your requirements.</p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“FromDate”: // POSIX-format date and time"}</div>
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
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of a specific instrument. The Order Management System and the default Account ID of the logged-in user are assumed.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> FromDate </td>
                                        <td>   
                                            <div><strong>long integer.</strong>  Oldest date from which the ticker history will start, in POSIX format and UTC time zone. The report moves toward the present from this point. See ““Time– and Date-Stamp Formats” on page 8.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array of arrays dating from the FromDate value of the request. The data are returned oldest-date first. The data returned in the arrays are not labeled. For example, a single returned array element might look like this: </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"1501604532000,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2792.73,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2667.95,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2687.01,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2700.81,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"242.61340767,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2871,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"0"}</div>
                            <div>{"]"}</div>
                        </div>
                        <p>…and with comments applied to identify the data being returned (comments are not part of the response):</p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"1501604532000, // UTC Date/Time in milliseconds since 1/1/1970"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2792.73, // High"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2667.95, // Low"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2687.01, // Open"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2700.81, // Close"}</div>
                            <div style={{paddingLeft:'10px'}}>{"242.61340767,// Volume"}</div>
                            <div style={{paddingLeft:'10px'}}>{"0, // Inside bid price"}</div>
                            <div style={{paddingLeft:'10px'}}>{"2871, // Inside ask price"}</div>
                            <div style={{paddingLeft:'10px'}}>{"0 // Instrument ID"}</div>
                            <div>{"]"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeTicker, UnsubscribeTicker </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetTickerHistory;