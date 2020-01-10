import Rx from 'rx-lite'

export const OrderStateEvent = new Rx.BehaviorSubject(null)
export const OrderTradeEvent = new Rx.BehaviorSubject(null)
export const SendOrderRes = new Rx.BehaviorSubject(null)
export const SettingsAuthenticate2FA = new Rx.BehaviorSubject(null)
export const WithdrawNotification = new Rx.BehaviorSubject(null)

