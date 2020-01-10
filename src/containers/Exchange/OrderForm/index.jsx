import React, { Component } from 'react';
import { Input, Modal } from 'semantic-ui-react'
import { floor } from 'lodash'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { BrowserRouter,Link,Router, Route} from 'react-router-dom';
import ReactLoading from 'react-loading';
import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';


import Calculator from './calculator'
import { SendOrderRes } from './../../../services/NotificationServices'
import Loadable from './../../../HOC/Loadable'
import { HBForm, HBFormGroup } from './../../../components/HBForm'
import {
    HBOrderForm,
    OrderType,
    OrderTypeBtn,
    OrderOption,
    OrderOptionType,
    Preview,
    PreviewItem,
    ModalBtn,
    PriceAmount,
    PricePer,
    Balance,
    OrderTypeDropdown,
    PlaceOrderBtn,
    AdvancedOrderBtn
} from './../../../components/HBExchange/HBOrderForm'
import { HBButton, HBLink } from './../../../components/HBButton'
import Tab from '../../../components/Tab'
import { AdxDropdown } from '../../../components/AdxDropdown'

import { parseNumberToLocale, getDecimalPrecision, getPriceForFixedQuantity, formatNumberToLocale } from './../../../helpers'

import { connect } from 'react-redux'
import { UserConfigData } from './../../../selectors/containers/user-data-container'
import KYCMessageModal from '../../Modal/KYCMessageModal';

const ModalKYCMessage = Loadable({
    loader: () => import(`./../../../containers/Modal/KYCMessageModal`)
})
const AdvanceOrder = Loadable({
    loader: () => import(`./advanceOrder`)
})

class OrderForm extends Component {
    orderTypeItems = [{
        children: 'Buy'
    }, {
        children: 'Sell'
    }]

    orderTypeOptions = [
        { value:1, text: 'Market' },
        { value:2, text: 'Limit' },
        // { value:3, text: 'Stop Market' },
        // { value:4, text: 'Stop Limit' },
        // { value:5, text: 'Trailing' },
        // { value:6, text: 'Trailing' },
        // { value:8, text: 'Fill' },
        // { value:0, text: 'IOC' },
        // { value:2, text: 'Reserve' },
    ]

    constructor(props) {
        super(props);

        this.state = {
            sliderValue: 0,
            activeTab: 1,
            activeType: 2,
            advanceOrderModal: false,

            side: 0,
            total: 0,
            amount: 0,
            amountString: 0,
            price: 0,
            priceString: 0,
            stopPrice: 0,
            stopPriceString: 0,
            trailiingAmount: 0,
            trailiingAmountString: 0,
            orderType: 1,
            showKYCModal: false,
            externalCalcInput: 0,
            levelIncreaseStatus: '',
        }

        this.setValue = this.setValue.bind(this);
        this.notificationDOMRef = React.createRef();
    }

    addNotification = ({ title = ``, message = ``, type = `success` }) => {
        this.notificationDOMRef.current.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 5000 },
            dismissable: { click: true }
        });
    }

    componentDidMount() {
        SendOrderRes.filter(i => i).subscribe(obj => {
            if (obj.status === `Accepted`) {
                this.setState({
                    total: 0,
                    amount: 0,
                    amountString: 0,
                    price: 0,
                    priceString: 0,
                    stopPrice: 0,
                    stopPriceString: 0,
                    trailiingAmount: 0,
                    trailiingAmountString: 0,
                })
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { SelectedTickerDataBasic: prevSelectedTickerDataBasic } = prevProps

        const { SelectedTickerDataBasic } = this.props
        if(prevProps.priceFromOrderBook !== this.props.priceFromOrderBook){
            this.setState({priceString: this.props.priceFromOrderBook})
        }

        if (SelectedTickerDataBasic.Completed && 
            prevSelectedTickerDataBasic.Completed && 
            SelectedTickerDataBasic.Data.InstrumentId !== prevSelectedTickerDataBasic.Data.InstrumentId
        ) {
            this.resetFormValues()
        }
    }

    setValue(e) {
        this.setState({ value: e })
    }

    handleClickTab = (val) => {
        this.setState({ 
            side: val
        }, this.resetFormValues)
    }

    handleClickTypeSelect = (e, { value }) => {
        this.setState({ 
            orderType: value 
        }, this.resetFormValues)
    }

    resetFormValues = () => {
        this.setState({
            total: 0,
            amount: 0,
            amountString: 0,
            price: 0,
            priceString: 0,
            stopPrice: 0,
            stopPriceString: 0,
            trailiingAmount: 0,
            trailiingAmountString: 0,
            sliderValue: 0
        })
    }

    handleClickAdvancedOrder = (val) => {
        this.setState({
            advanceOrderModal: ! this.state.advanceOrderModal
        }, this.resetFormValues)
    }

    handleShowNotVerifiedModal = () => {
        this.setState({ showKYCModal: !this.state.showKYCModal })
    }

    sendOrder = (e) => {
        e.preventDefault()
        const { SelectedTickerDataBasic, AccountPositions } = this.props
        let levelIncreaseStatus = this.props.UserConfigData.Data.levelIncreaseStatus;
        if(levelIncreaseStatus !== 'pass'){
            this.setState({showKYCModal: true})
        }else{
            if (SelectedTickerDataBasic.Completed && AccountPositions.Completed) {
                const { side, total, amount, orderType, price } = this.state

                if (orderType === 1) {
                    if (!amount) {
                        this.addNotification({ title: `Invalid`, message: `Please enter an amount`, type: `danger` })
                        return
                    }
                }

                if (orderType === 2) {
                    if (!amount || !price) {
                        this.addNotification({ title: `Invalid`, message: `Please enter an amount`, type: `danger` })
                        return
                    }
                }

                const marketPrice = side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid
                const { AccountId } = AccountPositions.Data[0]
                const product1Balance = AccountPositions.Data.find(prod => prod.ProductId === SelectedTickerDataBasic.Data.Product1) || {}
                const product2Balance = AccountPositions.Data.find(prod => prod.ProductId === SelectedTickerDataBasic.Data.Product2) || {}

                const balanceToBeUsed = side === 0 ? product2Balance.Amount - product2Balance.Hold || 0 : product1Balance.Amount - product1Balance.Hold || 0
                const tatalToBeUsed = side === 0 ? total : amount

                if (tatalToBeUsed > balanceToBeUsed) {
                    this.addNotification({ title: `Invalid`, message: `Insufficient funds`, type: `danger` })
                    return
                }

                const limitPrice = orderType % 2 === 0 && +price;
                const stopPrice = +this.state.stopPrice

                const commonPayload = {
                    AccountId: AccountId,
                    ClientOrderId: 0,
                    Side: side === 0 ? 0 : 1,
                    Quantity: +(floor(+amount, 8).toFixed(8)),
                    OrderIdOCO: 0,
                    OrderType: orderType,
                    InstrumentId: SelectedTickerDataBasic.Data.InstrumentId,
                    TimeInForce: 0,
                    OMSId: 1,
                    UseDisplayQuantity: false,
                };


                if (orderType === 2) {
                    commonPayload.LimitPrice = +limitPrice
                } else if (orderType === 3) {
                    commonPayload.StopPrice = +stopPrice
                    commonPayload.PegPriceType = side === 0 ? 3 : 2
                } else if (orderType === 4) {
                    commonPayload.LimitPrice = +limitPrice
                    commonPayload.StopPrice = +stopPrice
                    commonPayload.PegPriceType = side === 0 ? 3 : 2
                }

                let payload = commonPayload
                this.props.sendOrder(payload)
            }
        }
    }

    //Amount from Slider
    handleAutoAmount = (percentage) => {
        const { side } = this.state
        const { SelectedAccountPosition, SelectedTickerDataBasic } = this.props
        let walletAmount = 0
        if (side === 0){
            walletAmount = SelectedAccountPosition.Data.AccountPosition2.Amount - SelectedAccountPosition.Data.AccountPosition2.Hold
            //Convert to accunt position 1
            walletAmount = walletAmount / SelectedTickerDataBasic.Data.BestOffer
        } else{
            walletAmount = SelectedAccountPosition.Data.AccountPosition1.Amount - SelectedAccountPosition.Data.AccountPosition1.Hold
        }
        let amount = walletAmount * (percentage / 100)
        const state = {}
        state.amount = amount
        state.amountString =  state.amount.toFixed(8)
        state.sliderValue = percentage

       this.computeOrderFields(state)
    }

    //Amount from Manual Entry
    handleAmountChangeHandler = (e) => {
        const { value } = e.target
        const state = {}

        state.amount = parseNumberToLocale(value)
        state.amountString = (value)

        this.computeOrderFields(state)
    }

    computeOrderFields = (state) => {
        const { side, orderType, price } = this.state
        const { SelectedTickerDataBasic, OrderBookData } = this.props
        const decimalsAllowed = SelectedTickerDataBasic.Data.Product1DecimalPlaces

        //Comment out for decimal number checking
        //const amountDecimals = getDecimalPrecision(state.amount)
        if (!isNaN(state.amount)) {
            if (orderType === 1) {
                if (SelectedTickerDataBasic.Completed) {
                    const SellBook = [...OrderBookData.Sell]
                    const book = side === 0 ? SellBook.reverse() || [] : OrderBookData.Buy
                    state.total = this.getTotal(orderType, book, state.amount)
                }
            } else {
                state.total = state.amount * +price
            }
            this.setState(state, this.getOrderFee)
        }
    }

    //Note  total should be less than or equal users' wallet
    getTotal = (orderType, book, amount) => {
        const { SelectedTickerDataBasic } = this.props
        const { side } = this.state

        return amount * (side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid)

         //What is this for
        // return orderType === 1 && book.length
        //     ? getPriceForFixedQuantity(amount, 0, book, true).Price
        //     : amount * side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid
    }


    getOrderFee = () => {
        const { AccountPositions, SelectedTickerDataBasic, getOrderFee } = this.props
        const { side, amount, total, orderType } = this.state


        if (AccountPositions.Completed && SelectedTickerDataBasic.Completed) {

            const { AccountId } = AccountPositions.Data[0]

            const Amount = side === 0 ? +amount : +total;

            const insideBid = SelectedTickerDataBasic.Data.BestBid
            const insideAsk = SelectedTickerDataBasic.Data.BestOffer
            let price = +this.state.price
            let MakerTaker = ''

            if (orderType === 1) price = side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid
            if (orderType === 3) price = +this.state.stop_price

            if (side === 0) MakerTaker = price < insideAsk || insideAsk === 0 ? 'Maker' : 'Taker'

            if (side === 1) MakerTaker = price > insideBid || insideBid === 0 ? 'Maker' : 'Taker'

            const takerOrderTypes = [1, 3, 5, 10]; // mkt, stop mkt, trailing stop mkt, ioc
            if (takerOrderTypes.includes(orderType)) MakerTaker = 'Taker'

            const data = {
                OMSId: 1,
                AccountId: AccountId,
                InstrumentId: SelectedTickerDataBasic.Data.InstrumentId,
                ProductId: side === 0 ? SelectedTickerDataBasic.Data.Product1 : SelectedTickerDataBasic.Data.Product2,
                Amount: +amount,
                OrderType: orderType,
                MakerTaker,
                Side: side,
                Price: price
            };

            getOrderFee(data)
        }
    }

    priceTextFieldDidChange = (value) => {

        const { side, orderType, amount } = this.state
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product1DecimalPlaces

        const state = {}

        state.price = parseNumberToLocale(value)
        state.priceString = (value)
        const priceDecimals = getDecimalPrecision(state.price)

        // this.setState(state)
        if (priceDecimals <= decimalsAllowed && !isNaN(state.price)) {

            if (SelectedTickerDataBasic.Completed) {
                if (orderType === 1) {
                    if (side === 0) {
                        state.amount = state.price / SelectedTickerDataBasic.Data.BestOffer
                    } else {
                        state.amount = state.price / SelectedTickerDataBasic.Data.BestBid
                    }
                    state.total = +state.price
                } else {
                    state.total = +amount * state.price
                }
                this.setState(state, this.getOrderFee)
            }
        }
    }

    handlePriceChangeHandler = (e) => {
        const { value } = e.target
        this.priceTextFieldDidChange(value)
    }

    handleStopPriceChangeHandler = (e) => {
        const { value } = e.target
        const { amount } = this.state
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product1DecimalPlaces

        const state = {}

        state.stopPrice = parseNumberToLocale(value)
        state.stopPriceString = (value)
        const priceDecimals = getDecimalPrecision(state.stopPrice)

        if (priceDecimals <= decimalsAllowed && !isNaN(state.stopPrice)) {
            state.total = +amount * state.stopPrice
            this.setState(state, this.getOrderFee)
        }
    }

    setExternalCalcInput = (externalCalcInput) => {
        this.setState({externalCalcInput})
    }
    
    render() {
        const { amount, advanceOrderModal, externalCalcInput, side, total, amountString, priceString, orderType, stopPriceString, sliderValue } = this.state
        const { SelectedTickerDataBasic, OrderFeeData, SelectedAccountPosition, OrderBookData, getOrderFee, sendOrder, ConversionTable, InstrumentsTickerData } = this.props
        
        let levelIncreaseStatus = this.props.UserConfigData.Data.levelIncreaseStatus;
        let marketPriceDisplay = 0


        let calculator = <ReactLoading type={`bubbles`} color="#000" />
        let FeeDisplay = 0
        let marketTotalDisplay = 0
        let netProduct = ``
        let netAmount = 0
        let amountProduct = ``
        let priceProductDisplay = `Price Per`
        let balanceDisplay = <ReactLoading type={`bubbles`} color="#000" />

        if (total && OrderFeeData.Completed) {
            FeeDisplay = `${formatNumberToLocale(OrderFeeData.Data.OrderFee, OrderFeeData.Data.DecimalPlaces)} ${OrderFeeData.Data.ProductSymbol}`
        }
        if (SelectedTickerDataBasic.Completed) {
            marketTotalDisplay = `${formatNumberToLocale(total, SelectedTickerDataBasic.Data.Product2DecimalPlaces)} ${SelectedTickerDataBasic.Data.Product2Symbol}`

            if (side === 0) {
                netProduct = SelectedTickerDataBasic.Data.Product1Symbol
            } else {
                netProduct = SelectedTickerDataBasic.Data.Product2Symbol
            }

            if (OrderFeeData.Completed && netProduct) {
                if (OrderFeeData.Data.ProductSymbol === netProduct) {
                    if (side === 0) {
                        netAmount = formatNumberToLocale(Math.max(0, amount - OrderFeeData.Data.OrderFee), OrderFeeData.Data.DecimalPlaces)
                    } else {
                        netAmount = formatNumberToLocale(Math.max(0, total - OrderFeeData.Data.OrderFee), OrderFeeData.Data.DecimalPlaces)
                    }
                } else {
                    if (side === 0) {
                        netAmount = formatNumberToLocale(amount, OrderFeeData.Data.DecimalPlaces)
                    } else {
                        netAmount = formatNumberToLocale(total, OrderFeeData.Data.DecimalPlaces)
                    }
                }
            }

            amountProduct = `(${SelectedTickerDataBasic.Data.Product1Symbol})`
            priceProductDisplay = `Price Per (${SelectedTickerDataBasic.Data.Product2Symbol})`
            if (orderType === 3) {
                priceProductDisplay = `Stop Price`
            }
        }

        let advanceOrderPriceLabel = `Limit Price`
        let advanceOrderStopPriceLabel = `Stop Price`
        if (orderType === 2) {
            advanceOrderPriceLabel = priceProductDisplay
        } else if (orderType === 3) {
            advanceOrderPriceLabel = ``
            advanceOrderStopPriceLabel = `Stop Price`
        } else if (orderType === 4) {
            advanceOrderPriceLabel = `Limit Price`
            advanceOrderStopPriceLabel = `Stop Price`
        }

        if (SelectedTickerDataBasic.Completed) {
            const calcProps = {
                ConversionTable,
                SelectedTickerDataBasic,
                InstrumentsTickerData
            }

            if (advanceOrderModal === true) {
                calcProps.inputValue = externalCalcInput
            } else {
                calcProps.inputValue = (side) ? netAmount : total
            }

            calculator = <Calculator {...calcProps} />

            marketPriceDisplay =
                `${
                formatNumberToLocale(
                    side === 0
                        ? SelectedTickerDataBasic.Data.BestOffer
                        : SelectedTickerDataBasic.Data.BestBid,
                    SelectedTickerDataBasic.Data.Product2DecimalPlaces)
                }
                ${SelectedTickerDataBasic.Data.Product2Symbol}`

        }
        // let productBuyValue = 0
        // let productSellValue = 0

        // if (SelectedAccountPosition.Completed && SelectedTickerDataBasic.Completed) {
        //     productBuyValue = SelectedAccountPosition.Data.AccountPosition1.Amount - SelectedAccountPosition.Data.AccountPosition1.Hold
        //     productSellValue = SelectedTickerDataBasic.Data.BestBid === 0 ? 0 : (SelectedAccountPosition.Data.AccountPosition2.Amount - SelectedAccountPosition.Data.AccountPosition2.Hold) / SelectedTickerDataBasic.Data.BestBid
        //     productSellValue = productSellValue - (productSellValue * 0.05)
        // }

        if (SelectedAccountPosition.Completed) {
            balanceDisplay = (
                <Balance>
                    <div>
                        <img src={SelectedAccountPosition.Data.AccountPosition1.CryptoIcon} height="40" alt="" />
                        <span>
                            {SelectedAccountPosition.Data.AccountPosition1.ProductSymbol} Balance
                        <br />
                            {formatNumberToLocale(SelectedAccountPosition.Data.AccountPosition1.TradableAmount, SelectedAccountPosition.Data.AccountPosition1.DecimalPlaces)}
                        </span>
                    </div>
                    <div>
                        <img src={SelectedAccountPosition.Data.AccountPosition2.CryptoIcon} height="40" alt="" />
                        <span>
                            {SelectedAccountPosition.Data.AccountPosition2.ProductSymbol} Balance
                        <br />
                            {formatNumberToLocale(SelectedAccountPosition.Data.AccountPosition2.TradableAmount, SelectedAccountPosition.Data.AccountPosition2.DecimalPlaces)}
                        </span>
                    </div>
                </Balance>
            )
        }

        return (
            <HBOrderForm>
                { 
                    this.state.showKYCModal &&
                    <KYCMessageModal
                        show={this.state.showKYCModal}
                        onClose={this.handleShowNotVerifiedModal}
                        routerHistory={this.props.routerHistory}
                        levelIncreaseStatus={this.props.UserConfigData.Data.levelIncreaseStatus} />
                }

                <Tab className="order-form" block items={this.orderTypeItems} onChange={this.handleClickTab} />
                <OrderTypeDropdown
                    fluid
                    options={this.orderTypeOptions}
                    defaultValue={orderType}
                    onChange={this.handleClickTypeSelect} />

                <HBForm>
                    <div style={{ display: `${orderType === 2 ? `flex` : `block`}` }}>
                        <HBFormGroup style={{ flex: `1` }}>
                            <label>{side === 0 ? `Buy` : `Sell`} Amount {amountProduct}</label>
                            <Input type="text" placeholder="0" value={amountString} onChange={this.handleAmountChangeHandler} />
                        </HBFormGroup>
                        {orderType === 2 ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : ``}
                        <HBFormGroup style={{ flex: `1`, display: `${orderType === 2 ? `block` : `none`}` }}>
                            <label>{priceProductDisplay}</label>
                            <Input type="text" placeholder="0" value={priceString} onChange={this.handlePriceChangeHandler} />

                        </HBFormGroup>
                    </div>
                    {/* <HBFormGroup style={{ display: `${orderType === 3 ? `block` : `none`}` }}>
                        <label>{priceProductDisplay}</label>
                        <Input type="text" placeholder="0" value={stopPriceString} onChange={this.handleStopPriceChangeHandler} />
                    </HBFormGroup> */}
                </HBForm>

                <div style={{ padding: '20px 5px 30px' }}>
                    <Slider
                        value={sliderValue}
                        onChange={(e) => { this.handleAutoAmount(e) }}
                        // onAfterChange={(e) => { this.handleAutoAmount(productBuyValue, productSellValue, e) }}
                        min={0}
                        defaultValue={0}
                        marks={{ 0: '', 25: '25%', 50: '50%', 75: '75%', 100: '100%' }}
                        step={null} />
                </div>

                <Preview>
                    <PreviewItem>Market Price</PreviewItem>
                    <PreviewItem>{marketPriceDisplay}</PreviewItem>
                </Preview>
                <Preview>
                    <PreviewItem>Total </PreviewItem>
                    <PreviewItem>{marketTotalDisplay}</PreviewItem>
                </Preview>
                <Preview>
                    <PreviewItem>Fees</PreviewItem>
                    <PreviewItem>{FeeDisplay}</PreviewItem>
                </Preview>
                <Preview>
                    <PreviewItem>Net</PreviewItem>
                    <PreviewItem>{netAmount} {netProduct}</PreviewItem>
                </Preview>

                {/* <Preview>
                    <PreviewItem>Order Total</PreviewItem>
                    <PreviewItem>3,356.891213 TUSD</PreviewItem>
                </Preview>
                <Preview>
                    <PreviewItem>Fees</PreviewItem>
                    <PreviewItem>3,356.891213 TUSD</PreviewItem>
                </Preview>
                <Preview>
                    <PreviewItem>You Receive</PreviewItem>
                    <PreviewItem>0 TUSD</PreviewItem>
                </Preview> */}

                <div className="my-4 text-center" >
                    <PlaceOrderBtn onClick={this.sendOrder}>Place Order</PlaceOrderBtn>
                    <AdvancedOrderBtn onClick={this.handleClickAdvancedOrder}>Advanced Order</AdvancedOrderBtn>
                    {/* <HBButton bsstyle="center" default="default" size="small" onClick={this.sendOrder}>Place Order</HBButton> */}
                    {/* {levelIncreaseStatus === 'pass' ? <HBButton bsstyle="center" default="default" size="small" onClick={this.sendOrder}>Place Order</HBButton> : <HBLink bsstyle="center" default="default" size="small"><Link to="/account/verification">Place Order</Link></HBLink>} */}
                </div>
                {calculator}
                <AdvanceOrder
                    externalCalcInput={externalCalcInput}
                    setCalcInput={this.setExternalCalcInput}
                    open={advanceOrderModal}
                    close={this.handleClickAdvancedOrder}
                    balanceDisplay={balanceDisplay}
                    SelectedTickerDataBasic={SelectedTickerDataBasic}
                    OrderFeeData={OrderFeeData}
                    SelectedAccountPosition={SelectedAccountPosition}
                    OrderBookData={OrderBookData}
                    getOrderFee={getOrderFee}
                    sendOrder={sendOrder}
                />
                <ReactNotification ref={this.notificationDOMRef} />
            </HBOrderForm>
        )
    }
}

// export default OrderForm;

const mapStateToProps = state => ({
    UserConfigData: UserConfigData(state)
})

export default connect(mapStateToProps, null)(OrderForm)