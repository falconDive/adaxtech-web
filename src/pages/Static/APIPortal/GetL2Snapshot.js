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
    

class GetL2Snapshot extends Component {
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
                        <h2> GetL2Snapshot </h2>
                        <h5> No authentication required — trading venue operator may control access </h5>
                        <p> Provides a current Level 2 snapshot of a specific instrument trading on an Order Management System to a user-determined market depth. For more information on Level 1 and Level 2 information, see “Level 1 and Level 2 Market Information” on page 3. </p>
                        <p> The Level 2 snapshot allows the user to specify the level of market depth information on either side of the bid and ask. </p>
                        <div className={`noteCont`}>
                            <p><strong>Note: </strong>Depth in this call is “depth of market,” the number of buyers and sellers at greater or lesser prices in the order book for the instrument.</p>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Depth”: 100"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System where the instrument is traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the instrument that is the subject of the snapshot.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Depth </td>
                                        <td>   
                                            <div><strong>integer.</strong> Depth of the market — the number of buyers and sellers at greater or lesser prices in the order book for the instrument. Defaults to 100.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p>The response is a single object for one specific instrument. The Level2UpdateEvent contains the same data, but is sent by the OMS when trades occur. A user must subscribe to Level2UpdateEvents. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“MDUpdateID”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Accounts”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"““ActionDateTime”: 635872032000000000,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ActionType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“New”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Update”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Delete”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“LastTradePrice”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Orders”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Price”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductPairCode”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Quantity”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Side”: 0,"}</div>
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
                                        <td> MDUpdateID </td>
                                        <td>   
                                            <div><strong>integer.</strong> Market Data Update ID. This sequential ID identifies the order in which the update was created.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Accounts </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of accounts that have orders at this price level.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ActionDateTime </td>
                                        <td>   
                                            <div><strong>string.</strong> ActionDateTime identifies the time and date that the snapshot was taken or the event occurred, in POSIX format X 1000 (milliseconds since 1 January 1970). See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ActionType </td>
                                        <td>   
                                            <div><strong>string.</strong>L2 information provides price data. This value shows whether this data is new, an update, or a deletion. One of:</div>
                                            <div>New</div>
                                            <div>Update</div>
                                            <div>Delete</div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td> LastTradePrice </td>
                                        <td>   
                                            <div><strong>real.</strong> The price at which the instrument was last traded. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Orders </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of orders at this price point. Whether it is a Buy or Sell order is shown by Side, below. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Price </td>
                                        <td>   
                                            <div><strong>real.</strong> Bid or Ask price for the Quantity (see Quantity below). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductPairCode </td>
                                        <td>   
                                            <div><strong>integer.</strong> ProductPairCode is the same number and used for the same purpose as InstrumentID. The two are completely equivalent in value. InstrumentId 47 = ProductPairCode 47.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Quantity </td>
                                        <td>   
                                            <div><strong>real.</strong> Quantity available at a given Bid or Ask price (see Price above). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Side </td>
                                        <td>   
                                            <div><strong>integer.</strong> One of: </div>
                                            <div>0 Buy</div>
                                            <div>1 Sell</div>
                                            <div>2 Short (reserved for future use)</div>
                                            <div>3 Unknown (error condition)</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> SubscribeLevel1, SubscribeLevel2, UnsubscribeLevel1, UnsubscribeLevel2 </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetL2Snapshot;