import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react'

import { formatNumberToLocale, getTimeFormatEpoch } from './../../../../helpers'
import {
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../../components/Base/Scrollable';
import { TransactionList, Pages } from '../../../../components/HBExchange/HBTransaction';
import closeMini from './../../../../assets/close-mini.svg';

import Moment from 'moment';

class InactiveOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100
        }
    }

    handleResize = () => {
        this.setState({ windowHeight: window.innerHeight - 80 });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    hanldePageClick = (page) => {
        const query = this.props.OrderHistoryCancelled.Query
        query.page = page
        this.props.queryInactiveOrderHistory(query)
    }

    render() {
        const { OrderHistoryCancelled, instrumentList} = this.props

        let Lists = []
        if (OrderHistoryCancelled.Completed) {
            Lists = OrderHistoryCancelled.Data.map((obj, key) => {
                return <tr key={key}>
                    {/* <td>{obj.Account}</td> */}
                    <td>{instrumentList[obj.Symbol] || ''}</td>
                    <td>{obj.Side}</td>
                    <td>{obj.OrderType}</td>
                    <td>{formatNumberToLocale(obj.OrigQuantity, obj.Product1DecimalPlaces)}</td>
                    <td>{obj.OrderType === `Market` ? `-` : formatNumberToLocale(obj.Price, obj.Product2DecimalPlaces)}</td>
                    <td>{getTimeFormatEpoch(obj.ReceiveTime)}</td>
                    <td>{obj.OrderState}</td>
                </tr>

            })
        }

        const firstPage = OrderHistoryCancelled.Pages.filter(i => i.tag === `first`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle left' /> </span>)
        })
        const lastPage = OrderHistoryCancelled.Pages.filter(i => i.tag === `last`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle right' /> </span>)
        })
        const pages = OrderHistoryCancelled.Pages.filter(i => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
            return (<span className={`pagination-item ${obj.selected ? `active` : ``}`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}>{obj.page + 1}</span>)
        })

        return (
            <Fragment>
                <TransactionList>
                    <Scrollable
                        autoHide={true}
                        hideTracksWhenNotNeeded={true}
                        autoHeightMax={'100%'}
                        universal={true}
                        renderView={props => <View {...props} />}
                        renderTrackHorizontal={props => <HorizontalTrack {...props} />}
                        renderThumbHorizontal={props => <HorizontalThumb {...props} />}
                        renderTrackVertical={props => <VerticalTrack {...props} />}
                        renderThumbVertical={props => <VerticalThumb {...props} />} >
                        <table>
                            <thead>
                                <tr>
                                    {/* <th>Account</th> */}
                                    <th>Instrument</th>
                                    <th>Side</th>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Date & Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Lists}
                            </tbody>
                        </table>
                    </Scrollable>
                </TransactionList>
                <Pages>
                    {firstPage}
                    {pages}
                    {lastPage}
                </Pages>
            </Fragment>
        )
    }
}

export default InactiveOrders;