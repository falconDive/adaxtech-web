import { connect } from 'react-redux'
import Exchange from './Exchange'


import { getInstruments, selectInstrument } from './../../actions/instruments-actions'
import { getProducts } from './../../actions/products-actions'
import { logoutUser } from './../../actions/user-actions'
import { queryAccountTrades, queryOpenOrders, queryWithdrawTickets, queryInactiveOrderHistory, cancelOrder, cancelWithdraw } from './../../actions/user-transaction-actions'
import { getOrderFee, sendOrder } from './../../actions/exchange-actions'


import { Level1DataSelector } from '../../selectors/entities/level1-data-selector'
import { TradeData } from './../../selectors/containers/trades-data-container'
import { OrderBookData } from './../../selectors/containers/order-book-data-container'
import { TickerDataBasic } from './../../selectors/containers/level1-data-container'
import { InstrumentsData, SelectedInstrumentData } from './../../selectors/containers/instruments-data-container'
import { InstrumentsTickerData } from './../../selectors/containers/instruments-ticker-data-container'
import { OpenOrders, AccountTrades, WithdrawTickets, OrderHistoryCancelled } from './../../selectors/containers/user-transaction-data-container'
import { SubscribeTickerData } from './../../selectors/containers/subscribe-ticker-data-container'
import { SubscribeTickerSelector } from './../../selectors/entities/subscribe-ticker-data'
import { AccountPositions, SelectedAccountPosition } from './../../selectors/containers/account-info-data-container'
import { OrderFeeData, } from './../../selectors/containers/exchange-data-container'
import { ConversionTable } from './../../selectors/containers/conversion-data-container'

import {
    subscribeTrades,
    subscribeLevel1,
    subscribeLevel2,
} from './../../actions/AP-subscriptions-actions'
import { openSideBar, toggleSideBar, closeSideBar } from './../../actions/layout-actions'

const mapStateToProps = state => ({
    TradeData: TradeData(state),
    OrderBookData: OrderBookData(state),
    TickerDataBasic: TickerDataBasic(state),
    InstrumentsData: InstrumentsData(state),
    SelectedInstrumentData: SelectedInstrumentData(state),
    InstrumentsTickerData: InstrumentsTickerData(state),
    OpenOrders: OpenOrders(state),
    AccountTrades: AccountTrades(state),
    SideBar: state.Layout.SideBar,
    OrderHistoryCancelled: OrderHistoryCancelled(state),
    WithdrawTickets: WithdrawTickets(state),
    UserInfo: state.UserData.UserInfo,
    SubscribeTickerData: SubscribeTickerData(state),
    RawSubscribeTickerData: SubscribeTickerSelector(state),
    AccountPositions: AccountPositions(state),
    SelectedAccountPosition: SelectedAccountPosition(state),
    OrderFeeData: OrderFeeData(state),
    ConversionTable: ConversionTable(state),
    Level1Data: Level1DataSelector(state)
})

export default connect(mapStateToProps, {
    subscribeTrades,
    subscribeLevel1,
    subscribeLevel2,
    getInstruments,
    getProducts,
    selectInstrument,
    logoutUser,
    queryAccountTrades,
    openSideBar,
    toggleSideBar,
    closeSideBar,
    cancelOrder,
    queryOpenOrders,
    queryInactiveOrderHistory,
    queryWithdrawTickets,
    cancelWithdraw,
    getOrderFee,
    sendOrder,
})(Exchange)