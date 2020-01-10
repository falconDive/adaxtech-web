import DataInfo from './data-info-reducer'
import Instruments from './instruments-reducer'
import Products from './products-reducer'
import wsConnectionStatus from './ws-status-reducer'
import APSubscriptions from './ap-subscriptions-reducer'
import UserData from './user-calls-reducer'
import UserTransactions from './user-transactions-reducer'
import Exchange from './exchange-reducer'
import Layout from './layout-reducer'

export default {
    DataInfo,
    Instruments,
    wsConnectionStatus,
    APSubscriptions,
    UserData,
    UserTransactions,
    Exchange,
    Products,
    Layout
}
