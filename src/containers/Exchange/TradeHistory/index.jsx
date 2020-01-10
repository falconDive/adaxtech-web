import React, { Component, Fragment } from 'react';
import ReactLoading from 'react-loading';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types'

import { HBTradeHistory, HBTradeHistoryBody } from '../../../components/HBExchange/HBTradeHistory'
import { getTimeFormatEpoch } from './../../../helpers'
import { 
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../components/Base/Scrollable';

class TradeHistory extends Component {
    tusdPairInstruments = [8, 9]

    render() {
        const { TradeData, selectedInstrument: { InstrumentId }, instrumentsData } = this.props;

        let productSymbol
        let trades = <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>

        instrumentsData.Data.some(instrument => {
            const currentIsntrument = instrument.InstrumentId === InstrumentId
            if (currentIsntrument) {
               productSymbol = instrument.Product2Symbol
            }
            return currentIsntrument;
        })

        if (TradeData.Completed && TradeData.Data.length) {
            trades = TradeData.Data.slice(0, 75).map((trade, key) => {
                const decimalPlaces = (this.tusdPairInstruments.includes(InstrumentId)) ? 2 : 8 - (`${parseInt(trade.Quantity)}`).length;

                return <tr key={key}>
                    <td style={{ color: `${TradeData.tradeColors[trade.Direction]}` }}>{trade.Price.toFixed(decimalPlaces)}</td>
                    <td>{trade.Quantity.toFixed(8)}</td>
                    <td title={getTimeFormatEpoch(trade.TradeTime)} >
                        {/* <TimeAgo
                            datetime={trade.TradeTime}
                            locale={navigator.language} /> */}
                        {getTimeFormatEpoch(trade.TradeTime).substring(11, 19)}
                    </td>
                </tr>
            });
        }

        trades = (
            <table>
                <thead>
                    <tr>
                        <th>Price ({productSymbol})</th>
                        <th>Size</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>{trades}</tbody>
            </table>
        )

        // trades = Array.from(Array(100).keys()).map((v, k) => {
        //     return <HBTradeHistoryItem key={k}>
        //         <span >321.02354567</span>
        //         <span>0.00541236</span>
        //         <span>07:35AM</span>
        //     </HBTradeHistoryItem>
        // })

        return (
            <HBTradeHistory>
            {
                TradeData.Loading ? <ReactLoading type={`bubbles`} color="#000" /> :
                <HBTradeHistoryBody>
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
                        {trades}
                    </Scrollable>
                </HBTradeHistoryBody>
            }
            </HBTradeHistory>
        )
    }
}

TradeHistory.propTypes = {
    TradeData: PropTypes.object.isRequired,
}

TradeHistory.defaultProps = {
    TradeData: {},
}

export default TradeHistory;
