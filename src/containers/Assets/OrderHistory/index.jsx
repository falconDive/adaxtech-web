import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Table, Icon } from 'semantic-ui-react'
import { ExportToCsv } from 'export-to-csv';

import {
    OrderList,
    FilterColumn
} from './../../../components/HBAssets/AdxOrderList';
import { 
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../components/Base/Scrollable';
import { AdxButton } from './../../../components/HBButton';
import HBDropdown from '../../Components/HBDropdown';
import { formatNumberToLocale, getTimeFormatEpoch } from './../../../helpers'

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100
        }
    }

    ins = (v) => {
        let i = {
            "ETHBTC": "ETH/BTC",
            "BTCETH": "BTC/ETH",
            "BTCUSD": "BTC/USD",
            "ETHUSD": "ETH/USD",
            "LTCBTC": "LTC/BTC",
            "HYBBTC": "HYB/BTC",
            "BCHBTC": "BCH/BTC",
            "XRPBTC": "XRP/BTC",
            "BCHETH": "BCH/ETH",
            "LTCETH": "LTC/ETH",
            "XRPETH": "XRP/ETH",
            "HYBETH": "HYB/ETH",
            "BTCHYB": "BTC/HYB",
            "BCHHYB": "BCH/HYB",
            "LTCHYB": "LTC/HYB",
            "XRPHYB": "XRP/HYB",
            "ETHHYB": "ETH/HYB",
            "HYBUSD": "HYB/USD",
            "LTCUSD": "LTC/USD",
            "NEOUSD": "NEO/USD",
            "XRPUSD": "XRP/USD",
            "BTCTUSD": "BTC/TUSD",
            "ETHTUSD": "ETH/TUSD",
            "LTCTUSD": "LTC/TUSD",
            "BCHTUSD": "BCH/TUSD",
            "HYBTUSD": "HYB/TUSD",
            "XRPTUSD": "XRP/TUSD",
            "BT_BTCTUSD": "BT_BTC/TUSD",
            "BT_ETHTUSD": "BT_ETH/TUSD",
            "BT_BCHTUSD": "BT_BCH/TUSD",
            "BT_LTCTUSD": "BT_LTC/TUSD",
            "BT_XRPTUSD": "BT_XRP/TUSD",
            "BT_HYBTUSD": "BT_HYB/TUSD",
            "H20BTC": "H20/BTC",
            "Test_BTCTUSD": "Test_BTCTUSD"
        }
        return i[v]
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
        if (this.props.clearQueryOrderHistory) {
            this.props.clearQueryOrderHistory()
        }
    }

    hanldePageClick = (page) => {
        const query = this.props.OrderHistory.Query
        query.page = page
        this.props.queryOrderHistory(query)
    }


    handleChangeQueryInstrument = (val) => {
        const { advanceQueryOrderHistory, OrderHistory } = this.props
        OrderHistory.AdvanceQuery.filter.InstrumentId = val
        advanceQueryOrderHistory(OrderHistory.AdvanceQuery)
    }

    handleChangeQuerySide = (val) => {
        const { advanceQueryOrderHistory, OrderHistory } = this.props
        OrderHistory.AdvanceQuery.filter.Side = val
        advanceQueryOrderHistory(OrderHistory.AdvanceQuery)
    }

    handleChangeQueryType = (val) => {
        const { advanceQueryOrderHistory, OrderHistory } = this.props
        OrderHistory.AdvanceQuery.filter.Type = val
        advanceQueryOrderHistory(OrderHistory.AdvanceQuery)
    }

    handleChangeQueryStatus = (val) => {
        const { advanceQueryOrderHistory, OrderHistory } = this.props
        OrderHistory.AdvanceQuery.filter.Status = val
        advanceQueryOrderHistory(OrderHistory.AdvanceQuery)
    }


    handleClickExportData = () => {
        const { OrderHistory } = this.props
        if (OrderHistory.Completed) {
            let data =OrderHistory.ExportData.map(orderHistory=>{
                const total = orderHistory.Price * orderHistory.OrigQuantity;
                return {
                        Account: orderHistory.OrderId,
                        Instrument: this.ins(orderHistory.Symbol),
                        Side: orderHistory.Side,
                        Type: orderHistory.OrderType,
                        Quantity: formatNumberToLocale(orderHistory.OrigQuantity, orderHistory.Product1DecimalPlaces),
                        Price: orderHistory.OrderType === `Market` ? `-` : formatNumberToLocale(orderHistory.Price, orderHistory.Product2DecimalPlaces),
                        Executed: formatNumberToLocale(orderHistory.QuantityExecuted, orderHistory.Product1DecimalPlaces),
                        Remaining: formatNumberToLocale(orderHistory.Quantity, orderHistory.Product1DecimalPlaces),
                        Total: formatNumberToLocale(total, orderHistory.Product1DecimalPlaces),
                        'Date & Time': getTimeFormatEpoch(orderHistory.ReceiveTime),
                        Status: orderHistory.OrderState,
                   }
            })

            const options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true,
                showTitle: false,
                title: 'Order History',
                filename: 'Order History',
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
                // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
            };
            const csvExporter = new ExportToCsv(options);
            csvExporter.generateCsv(data);
        }
    }

    render() {
        const { OrderHistory, InstrumentsData, visible } = this.props
        const DDSide = [
            { key: 1, text: 'All', value: '' },
            { key: 2, text: 'Buy', value: 'Buy' },
            { key: 3, text: 'Sell', value: 'Sell' },
        ]

        const DDType = [
            { key: 1, text: 'All', value: '' },
            { key: 2, text: 'Market', value: 'Market' },
            { key: 3, text: 'Market Limit', value: 'Limit' },
        ]

        const DDStatus = [
            { key: 1, text: 'All', value: '' },
            { key: 2, text: 'Working', value: 'Working' },
            { key: 3, text: 'Rejected', value: 'Rejected' },
            { key: 4, text: 'Canceled', value: 'Canceled' },
            { key: 5, text: 'Expired', value: 'Expired' },
            { key: 6, text: 'FullyExecuted', value: 'FullyExecuted' },
        ]

        const DDInstrument = InstrumentsData.Completed ?
            InstrumentsData.Data.map(obj => {
                let name = obj.Product1Symbol + "/" + obj.Product2Symbol
                return { key: obj.InstrumentId, text: name, value: obj.InstrumentId }
            })
            :
            [

            ]
        DDInstrument.unshift({ key: 0, text: 'All', value: '' })

        let Lists = []
        let BTList = [28, 27, 29, 30, 31, 32, 33]
        
        if (OrderHistory.Completed) {
            Lists = OrderHistory.Data.map((obj, key) => {
                const total = obj.Price * obj.OrigQuantity;
                if (!BTList.includes(obj.Instrument)) {
                    return <tr key={key}>
                        <td>{obj.OrderId}</td>
                        <td>{this.ins(obj.Symbol)}</td>
                        <td>{obj.Side}</td>
                        <td>{obj.OrderType}</td>
                        <td>{formatNumberToLocale(obj.OrigQuantity, obj.Product1DecimalPlaces)}</td>
                        <td>{obj.OrderType === `Market` ? `-` : formatNumberToLocale(obj.Price, obj.Product2DecimalPlaces)}</td>
                        <td>{formatNumberToLocale(obj.QuantityExecuted, obj.Product1DecimalPlaces)}</td>
                        <td>{formatNumberToLocale(obj.Quantity, obj.Product1DecimalPlaces)}</td>
                        <td>{formatNumberToLocale(total, obj.Product1DecimalPlaces)}</td>
                        <td>{getTimeFormatEpoch(obj.ReceiveTime)}</td>
                        <td>{obj.OrderState}</td>
                    </tr>
                }

            })
        }

        const firstPage = OrderHistory.Pages.filter(i => i.tag === `first`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle left' /> </span>)
        })
        const lastPage = OrderHistory.Pages.filter(i => i.tag === `last`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle right' /> </span>)
        })
        const pages = OrderHistory.Pages.filter(i => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
            return (<span className={`pagination-item ${obj.selected ? `active` : ``}`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}>{obj.page + 1}</span>)
        })

        return (
            <OrderList visible={visible}>
                <div className="filter-form">
                    <div className="filter-column">
                        <label>Instrument:</label>
                        <HBDropdown options={DDInstrument} onChange={this.handleChangeQueryInstrument} />
                    </div>
                    <div className="filter-column">
                        <label>Side:</label>
                        <HBDropdown options={DDSide} onChange={this.handleChangeQuerySide} />
                    </div>
                    <div className="filter-column">
                        <label>Type:</label>
                        <HBDropdown options={DDType} onChange={this.handleChangeQueryType} />
                    </div>
                    <div className="filter-column">
                        <label>Status:</label>
                        <HBDropdown options={DDStatus} onChange={this.handleChangeQueryStatus} />
                    </div>
                    <div className="filter-column">
                        <AdxButton onClick={this.handleClickExportData} bsstyle="center" default="border" size="small" style={{ width: '110px' }}>Export</AdxButton>
                    </div>
                </div>
                <div className="list-container">
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
                                    <th>Account</th>
                                    <th>Instrument</th>
                                    <th>Side</th>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Executed</th>
                                    <th>Remaining</th>
                                    <th>Total</th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Lists}
                            </tbody>
                        </table>
                    </Scrollable>
                </div>
                {OrderHistory.Data.length && OrderHistory.Pages.length > 3 ?
                    <div style={{ textAlign: 'left' }}>
                        {firstPage}
                        {pages}
                        {lastPage}
                    </div>
                : (
                    ``
                )}
            </OrderList>
        )
    }
}

export default OrderHistory;