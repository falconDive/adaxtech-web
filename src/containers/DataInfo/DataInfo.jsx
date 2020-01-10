import React, { Component } from 'react'
import { propTypes, defaultProps } from './DataInfo.props'

// import ExchangeService from './../../services/ExchangeService'


export default class DataInfo extends Component {

    static propTypes = propTypes
    static defaultProps = defaultProps


    async componentDidMount() {
        // const GetProducts = await ExchangeService.sendSocketMessage(`GetProducts`, {})
        // console.log(`GetProducts : `, GetProducts)
        // setTimeout(async () => {
        //     const GetInstruments = await ExchangeService.sendSocketMessage(`GetInstruments`, {})
        //     console.log(`GetInstruments : `, GetInstruments)
        // }, 5000)

        this.props.getDataInfo()
        // console.log(this.props, 'props')

        // setTimeout(async () => {

        // }, 5000)

        // this.props.getInstruments()
        // this.props.subscribeTrades({ InstrumentId: 3 })
        // this.props.unsubscribeTrades({ InstrumentId: 3 })
        // this.props.getProducts()
        // this.props.subscribeLevel1({ InstrumentId: 1 })
        // this.props.subscribeLevel2({ InstrumentId: 3, Depth: 250 })
        // this.props.unsubscribeLevel1({ InstrumentId: 1 })
        // this.props.selectInstrument({ InstrumentId: 1 })
        // this.props.unsubscribeLevel2({ InstrumentId: 3 })
        // this.props.authenticateUser({ UserName: `vyrig@banit.club`, Password: `vyrig@banit.clubQ1` })
        this.props.autoAuthenticateUser({ SessionToken: window.localStorage.getItem(`SessionToken`) })

        // this.props.getUserInfo({ UserId: 3079 })
        // this.props.getUserConfig({ UserId: 3079 })
    }

    render() {
        // console.log(`dataInfoData`, this.props.dataInfoData)
        console.log(this.props, 'Props')
        const OrderBookDataBuy = this.props.OrderBookData.Buy.map((obj, key) => {
            return <p key={key}>{obj.price} {obj.quantity} {obj.changeType}</p>
        })

        const OrderBookDataSell = this.props.OrderBookData.Sell.map((obj, key) => {
            return <p key={key}>{obj.price} {obj.quantity} {obj.changeType}</p>
        })

        return (
            <div>
                {OrderBookDataSell}
                xxxxxxxx
                {OrderBookDataBuy}
            </div>
        )
    }
}
