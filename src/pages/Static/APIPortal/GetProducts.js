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
    

class GetProducts extends Component {
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
                        <h2> GetProducts </h2>
                        <h5>No authentication required </h5>
                        <p> Returns an array of products available on the trading venue. A product is an asset that is tradable or paid out. For more information about the difference between products and instruments, see “Products and Instruments” on page 4. </p>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Request </h4>
                        <div className={`codeCont`}>
                            <div>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 1,"}</div>
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
                                            <div><strong>Integer.</strong> The ID of the Order Management System for which the array of available products and currencies will be returned. </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> Response </h4>
                        <p> The response returns an array of objects, one object for each product available on the Order Management System. </p>
                        <div className={`codeCont`}>
                            <div>{"["}</div>
                            <div style={{paddingLeft:'10px'}}>{"{"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“OMSId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductId”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“Product”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductFullName”: “”,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“ProductType”: {"}</div>
                            <div style={{paddingLeft:'20px'}}>{"“Options”: ["}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Unknown”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“NationalCurrency”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“CryptoCurrency”,"}</div>
                            <div style={{paddingLeft:'40px'}}>{"“Contract”"}</div>
                            <div style={{paddingLeft:'20px'}}>{"]"}</div>
                            <div style={{paddingLeft:'10px'}}>{"},"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“DecimalPlaces”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“TickSize”: 0,"}</div>
                            <div style={{paddingLeft:'10px'}}>{"“NoFees”: false,"}</div>
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
                                        <td> OMSId </td>
                                        <td>   
                                            <div><strong>integer.</strong> The ID of the Order Management System that offers the product. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductId </td>
                                        <td>   
                                            <div><strong>long integer.</strong>The ID of the product. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Product </td>
                                        <td>   
                                            <div><strong>string.</strong> “Nickname” or shortened name of the product. For example, NZD (New Zealand Dollar). </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductFullName </td>
                                        <td>   
                                            <div><strong>string.</strong> Full and official name of the product. For example, New Zealand Dollar </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> ProductType </td>
                                        <td>   
                                            <div><strong>string.</strong>The nature of the product. One of: </div>
                                            <div>0 Unknown (an error condition)</div>
                                            <div>1 NationalCurrency</div>
                                            <div>2 CryptoCurrency</div>
                                            <div>3 Contract</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> DecimalPlaces </td>
                                        <td>   
                                            <div><strong>integer.</strong>The number of decimal places in which the product is divided. For example, US Dollars are divided into 100 units, or 2 decimal places. Other products may be different. Burundi Francs use 0 decimal places and the Rial Omani uses 3. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> TickSize </td>
                                        <td>   
                                            <div><strong>integer.</strong>Minimum tradable quantity of the product. See also <strong>GetInstrument</strong>, where this value is called QuantityIncrement. For example, with a US Dollar, the minimal tradable quantity is $0.01. </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> NoFees </td>
                                        <td>   
                                            <div><strong>Boolean.</strong>Shows whether trading the product incurs fees. The default is false; that is, if NoFees is false, fees will be incurred. If NoFees is true, no fees are incurred.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4> See Also </h4>
                        <p> GetAccountPositions, GetInstrument, GetInstruments, GetProduct </p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetProducts;