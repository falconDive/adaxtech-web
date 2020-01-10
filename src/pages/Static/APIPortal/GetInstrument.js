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
    

class GetInstrument extends Component {
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
                        <h2> GetInstrument </h2>
                        <h5> No authentication required </h5>
                        <p> Retrieves the details of a specific instrument from the Order Management System of the trading venue. An instrument is a pair of exchanged products (or fractions of them) such as US dollars and ounces of gold. See “Products and Instruments” on page 4 for more information about how products and instruments differ. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 1"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System from where the instrument is traded. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of transaction objects. </p>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Symbol”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Product1”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Product1Symbol”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Product2”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Product2Symbol”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“InstrumentType”: {,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Standard”,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“VenueInstrumentId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“VenueId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SortIndex”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionStatus”: {,"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Running”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Paused”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Stopped”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Starting”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“PreviousSessionStatus”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Running”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Paused”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Stopped”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Starting”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SessionStatusDateTime”: “0001-01-01T05:00:00Z”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“SelfTradePrevention”: false,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“QuantityIncrement”: 0,"}</div>
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
                                            <div><strong>integer.</strong> The ID of the Order Management System on which the instrument is traded.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> The ID of the instrument </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Symbol </td>
                                        <td>   
                                            <div><strong>string.</strong> Trading symbol of the instrument. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Product1 </td>
                                        <td>   
                                            <div><strong>integer.</strong> The first product comprising the instrument. For example, USD in a USD/BitCoin instrument. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Product1Symbol </td>
                                        <td>   
                                            <div><strong>string.</strong> The symbol for Product 1 on the trading venue. For example, USD. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Product2 </td>
                                        <td>   
                                            <div><strong>integer.</strong> The second product comprising the instrument. For example, BitCoin in a USD/BitCoin instrument. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Product2Symbol </td>
                                        <td>   
                                            <div><strong>string.</strong> The symbol for Product 1 on the trading venue. For example, BTC. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> InstrumentType </td>
                                        <td>   
                                            <div><strong>string.</strong> The type of the instrument. All instrument types currently are standard, an exchange of one product for another (or unknown, an error condition), but this may expand to new types in the future. </div>
                                            <div>Unknown </div>
                                            <div>Standard </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> VenueInstrumentId </td>
                                        <td>   
                                            <div><strong>long integer.</strong> If the instrument trades on another trading venue to which the user has access, this value is the instrument ID on that other venue. See VenueId. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> VenueId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the trading venue on which the instrument trades, if not this venue. See VenueInstrumentId. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SortIndex </td>
                                        <td>   
                                            <div><strong>integer.</strong> The numerical position in which to sort the returned list of instruments on a visual display. Since this call returns information about a single instrument, SortIndex should return 0. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionStatus </td>
                                        <td>   
                                            <div><strong>string.</strong> Is the market for this instrument currently open and operational? Returns one of: </div>
                                            <div> Unknown </div>
                                            <div>Running </div>
                                            <div>Paused </div>
                                            <div>Stopped </div>
                                            <div>Starting</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> PreviousSessionStatus </td>
                                        <td>   
                                            <div><strong>string.</strong> What was the previous session status for this instrument? One of: </div>
                                            <div> Unknown </div>
                                            <div>Running </div>
                                            <div>Paused </div>
                                            <div>Stopped </div>
                                            <div>Starting</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SessionStatusDateTime </td>
                                        <td>   
                                            <div><strong>string.</strong> The time and date at which the session status was reported, in ISO 8601 format. See “Time– and Date-Stamp Formats” on page 8. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> SelfTradePrevention </td>
                                        <td>   
                                            <div><strong>Boolean.</strong> An account trading with itself still incurs fees. If this instrument prevents an account from trading the instrument with itself, the value returns true; otherwise defaults to false. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> QuantityIncrement </td>
                                        <td>   
                                            <div><strong>integer.</strong> The number of decimal places for the smallest quantity of the instrument that can trade (analogous to smallest lot size). For example, the smallest increment of a US Dollar that can trade is 0.01 (one cent, or 2 decimal places). Current maximum is 8 decimal places. The default is 0. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetInstruments, GetProduct, GetProducts </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetInstrument;