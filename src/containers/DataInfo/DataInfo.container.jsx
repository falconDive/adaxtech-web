import { connect } from 'react-redux'

import { getDataInfo } from './../../actions/data-info-actions'
import { getInstruments, selectInstrument } from './../../actions/instruments-actions'
import { getProducts } from './../../actions/products-actions'
import {
    authenticateUser,
    autoAuthenticateUser,
    getUserInfo,
    getUserConfig
} from './../../actions/user-actions'
import { FetchDataInfo } from './../../selectors/containers/data-info-container'
import { OrderBookData } from './../../selectors/containers/order-book-data-container'
import { TickerDataBasic } from './../../selectors/containers/level1-data-container'
import { TradeData } from './../../selectors/containers/trades-data-container'
import {
    subscribeTrades,
    unsubscribeTrades,
    subscribeLevel1,
    unsubscribeLevel1,
    subscribeLevel2,
    unsubscribeLevel2
} from './../../actions/AP-subscriptions-actions'

import DataInfo from './DataInfo'

const mapStateToProps = state => ({
    dataInfo: state.DataInfo,
    dataInfoData: FetchDataInfo(state),
    Instruments: state.Instruments,
    OrderBookData: OrderBookData(state),
    TickerDataBasic: TickerDataBasic(state),
    TradeData: TradeData(state)
})

export default connect(mapStateToProps, {
    getDataInfo,
    getInstruments,
    subscribeTrades,
    unsubscribeTrades,
    getProducts,
    subscribeLevel1,
    unsubscribeLevel1,
    subscribeLevel2,
    selectInstrument,
    unsubscribeLevel2,
    authenticateUser,
    autoAuthenticateUser,
    getUserInfo,
    getUserConfig
})(DataInfo)