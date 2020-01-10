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

class FilledOrders extends Component {
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

    handleQuery = () => {

    }
    hanldePageClick = (page) => {
        const query = this.props.AccountTrades.Query
        query.page = page
        this.props.queryAccountTrades(query)
    }
    render() {
        const { AccountTrades, instrumentList} = this.props
        let accountTrades = null

        if (AccountTrades.Completed) {
            accountTrades = AccountTrades.Data.map((obj, key) => {
                return <tr key={key}>
                    {/* <td>{obj.AccountId}</td> */}
                    <td>{obj.TradeId}</td>
                    <td>{instrumentList[obj.Symbol] || ''}</td>
                    <td>{obj.Side}</td>
                    <td>{formatNumberToLocale(obj.Quantity)}</td>
                    <td>{formatNumberToLocale(obj.Price)}</td>
                    <td>{formatNumberToLocale(obj.Value, obj.Side === `Buy` ? obj.Product1DecimalPlaces : obj.Product2DecimalPlaces)}</td>
                    <td>{formatNumberToLocale(obj.Fee)} ({obj.FeeProduct})</td>
                    <td>{obj.ExecutionId}</td>
                    <td>{getTimeFormatEpoch(obj.TradeTimeMS)}</td>
                </tr>
            })
        }

        const firstPage = AccountTrades.Pages.filter(i => i.tag === `first`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle left' /> </span>)
        })
        const lastPage = AccountTrades.Pages.filter(i => i.tag === `last`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle right' /> </span>)
        })
        const pages = AccountTrades.Pages.filter(i => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
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
                                    <th>#</th>
                                    <th>Instrument</th>
                                    <th>Side</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Fee</th>
                                    <th>Execution ID</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accountTrades}
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

export default FilledOrders;