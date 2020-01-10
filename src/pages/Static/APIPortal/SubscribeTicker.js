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
    

class SubscribeTicker extends Component {
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
                        <h2> SubscribeTicker </h2>
                        <h5> No authentication required — trading venue operator may control access </h5>
                        <p> Subscribes a user to a Ticker Market Data Feed for a specific instrument and interval. <strong>SubscribeTicker</strong> sends a response object as described below, and then periodically returns a TickerDataUpdateEvent that matches the content of the response object. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Interval”: 60,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“IncludeLastCount”: 100"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument whose information you want to track.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Interval </td>
                                        <td>   
                                            <div><strong>integer.</strong> Specifies in seconds how frequently to obtain ticker updates. Default is 60 — one minute.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> IncludeLastCount </td>
                                        <td>   
                                            <div><strong>integer.</strong> The limit of records returned in the ticker history. The default is 100.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response returns an array of objects, each object an unlabeled, comma-delimited set of numbers. The Open price and Close price are those at the beginning of the tick — the Interval time subscribed to in the request.  </p>
                        <p>A typical response might look like this:  </p>
                        <div className={`codeCont`}>
                            <div>{"[[1510719222970.21,6943.51,6890.27,6898.41,6891.16,0,6890.98,6891.98,1,1510718681956.34]],"}</div>
                        </div>
                        <p>Here are the values in order with an explanation: </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“EndDateTime”: 0, // POSIX format"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“HighPX”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“LowPX”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“OpenPX”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“ClosePX”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Volume”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Bid”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Ask”: 0,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“BeginDateTime”: 0 // POSIX format"}</div>
                            <div style={{paddingLeft:'10px'}}>{"}"}</div>
                            <div>{"]"}</div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeAccountEvents, SubscribeLevel1, SubscribeLevel2, SubscribeTrades, UnsubscribeLevel1, UnsubscribeLevel2, UnsubscribeTicker, UnsubscribeTrades </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SubscribeTicker;