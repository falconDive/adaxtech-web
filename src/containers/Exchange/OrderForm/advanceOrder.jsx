import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import { floor } from 'lodash'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';

import Tab from '../../../components/Tab'
import { HBForm, HBFormGroup } from './../../../components/HBForm'
import {
    HBOrderForm,
    OrderType,
    OrderTypeTab,
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
    AdxAdvanceOrder,
    SubmitAdvanceOrder,
    CloseAdvanceOrder
} from './../../../components/HBExchange/HBOrderForm'
import { AdxDropdown } from '../../../components/AdxDropdown'
import { HBButton } from './../../../components/HBButton'

import { parseNumberToLocale, getDecimalPrecision, getPriceForFixedQuantity, formatNumberToLocale, getQuantityForFixedPrice, truncateToDecimals } from './../../../helpers'

export default class AdvanceOrder extends Component {
    orderTypeItems = [{
        children: 'Buy'
    }, {
        children: 'Sell'
    }]

    pegPrices = [
        { value:1, text: 'Last' },
        { value:2, text: 'Bid' },
        { value:3, text: 'Ask' },
        // { value:5, text: 'Trailing Stop Market' },
        { value:6, text: 'Trailing Stop Limit' },
    ]

    orderTypeOptions = [
        // { value:1, text: 'Market' },
        // { value:2, text: 'Limit' },
        { value:3, text: 'Stop Market' },
        { value:4, text: 'Stop Limit' },
        // { value:5, text: 'Trailing Stop Market' },
        { value:6, text: 'Trailing Stop Limit' },
        { value:8, text: 'Fill or Kill' },
        { value:0, text: 'IOC' },
        { value:2, text: 'Reserve Order' },
    ]

    constructor(props) {
        super(props);

        this.state = {
            value: 25,
            side: 0,
            total: 0,
            amount: 0,
            amountString: 0,
            price: 0,
            priceString: 0,
            stopPrice: 0,
            stopPriceString: 0,
            trailingAmount: 0,
            trailingAmountString: 0,
            limitOffset: 0,
            limitOffsetString: 0,
            displayQuantity: 0,
            displayQuantityString: 0,
            peg: 1,
            orderType: this.orderTypeOptions.slice(0, 1).pop().value,
        }
    }

    handleClickTypeSelect = (e, { value }) => {
        this.setState({ 
            orderType: +value
        }, this.resetFormValues)
    }

    handleClickTab = (side) => {
        this.setState({ side }, this.resetFormValues)
    }


    changeAmountHandler = (e) => {
        const { value } = e.target

        const { side, orderType, price } = this.state
        const { SelectedTickerDataBasic, OrderBookData, SelectedAccountPosition } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.amount = parseNumberToLocale(value)
        state.amountString = (value)
        const amountDecimals = getDecimalPrecision(state.amount)

        this.setState(state)
        if (amountDecimals <= decimalsAllowed && !isNaN(state.amount)) {
            if (SelectedTickerDataBasic.Completed) {
                if (orderType === 1) {
                    const SellBook = [...OrderBookData.Sell]
                    const book = side === 0 ? SellBook.reverse() || [] : OrderBookData.Buy

                    state.total = getPriceForFixedQuantity(state.amount, 0, book, true).Price
                    state.price = state.total
                    state.priceString = state.total
                    this.setState(state, this.getOrderFee)
                } else if (orderType === 2) {
                    state.total = truncateToDecimals(state.amount * +price, decimalsAllowed)
                    this.setState(state, this.getOrderFee)
                } else if (orderType === 3) {
                    state.total = truncateToDecimals(state.amount * +this.state.stopPrice, decimalsAllowed)
                    state.price = state.total
                    this.setState(state, this.getOrderFee)
                } else {
                    state.total = truncateToDecimals(state.amount * +price, decimalsAllowed)
                    this.setState(state, this.getOrderFee)
                }
            }
        }
    }

    changePriceHandler = (e) => {
        const { value } = e.target
        const { side, orderType, amount } = this.state
        const { SelectedTickerDataBasic, OrderBookData } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.price = parseNumberToLocale(value)
        state.priceString = (value)
        const priceDecimals = getDecimalPrecision(state.price)

        if (priceDecimals <= decimalsAllowed && !isNaN(state.price)) {
            if (SelectedTickerDataBasic.Completed) {
                if (+orderType === 1) {
                    const SellBook = [...OrderBookData.Sell]
                    const book = side === 0 ? SellBook.reverse() || [] : OrderBookData.Buy
                    const amount = getQuantityForFixedPrice(state.price, 0, book, true).Quantity
                    state.amount = truncateToDecimals(amount === Infinity ? 0 : amount, decimalsAllowed)
                    state.amountString = formatNumberToLocale(amount === Infinity ? 0 : amount, decimalsAllowed)
                    state.total = state.price
                    this.setState(state, this.getOrderFee)
                } else if (+orderType === 2) {
                    state.total = state.price * +amount
                    this.setState(state, this.getOrderFee)
                } else if (+orderType === 4) {
                    state.total = state.price * +amount
                    this.setState(state, this.getOrderFee)
                } else {
                    state.total = state.price * +amount
                    this.setState(state, this.getOrderFee)
                }
            }
        }
    }

    changeStopPriceHandler = (e) => {
        const { value } = e.target

        const { amount } = this.state
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.stopPrice = parseNumberToLocale(value)
        state.stopPriceString = (value)
        const decimals = getDecimalPrecision(state.stopPrice)

        if (decimals <= decimalsAllowed && !isNaN(state.stopPrice)) {
            state.total = state.stopPrice * +amount
            this.setState(state, this.getOrderFee)
        }
    }

    changeTrailingAmountHandler = (e) => {
        const { value } = e.target
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.trailingAmount = parseNumberToLocale(value)
        state.trailingAmountString = (value)
        const decimals = getDecimalPrecision(state.trailingAmount)

        if (decimals <= decimalsAllowed && !isNaN(state.trailingAmount)) {
            this.setState(state, this.trailingStopTotal)
        }
    }

    changeLimitOffsetHandler = (e) => {
        const { value } = e.target
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.limitOffset = parseNumberToLocale(value)
        state.limitOffsetString = (value)
        state.amountLastChanged = true
        const decimals = getDecimalPrecision(state.limitOffset)

        if (decimals <= decimalsAllowed && !isNaN(state.limitOffset)) {
            this.setState(state, this.trailingStopTotal)
        }
    }

    changePegHandler = (e) => {
        const { value } = e.target
        this.setState({ peg: +value }, this.trailingStopTotal)
    }

    changeDisplayQuantityHandler = (e) => {
        const { value } = e.target
        const { SelectedTickerDataBasic } = this.props

        const decimalsAllowed = SelectedTickerDataBasic.Data.Product2DecimalPlaces

        const state = {}

        state.displayQuantity = parseNumberToLocale(value)
        state.displayQuantityString = (value)
        const decimals = getDecimalPrecision(state.displayQuantity)

        if (decimals <= decimalsAllowed && !isNaN(state.displayQuantity)) {
            this.setState(state, this.getOrderFee)
        }
    }

    trailingStopTotal = () => {
        // This is a very, very rough estimate. It assumes that the conditions of
        // the trailing stop will happen immediately after the order is placed, and
        // uses the current market conditions as the peg price.
        const { peg, trailingAmount, limitOffset, amount, side } = this.state;
        const { SelectedTickerDataBasic } = this.props

        let pegPrice = 0
        if (peg === 1) {
            pegPrice = SelectedTickerDataBasic.Data.LastTradedPx
        } else if (peg === 2) {
            pegPrice = SelectedTickerDataBasic.Data.BestBid
        } else if (peg === 3) {
            pegPrice = SelectedTickerDataBasic.Data.BestOffer
        }

        const buyTotal = (pegPrice + trailingAmount) + limitOffset;
        const sellTotal = (pegPrice - trailingAmount) - limitOffset;
        this.setState({ total: amount * (side === 0 ? buyTotal : sellTotal) }, this.getOrderFee);
    };

    getOrderFee = () => {
        const { SelectedAccountPosition, SelectedTickerDataBasic, getOrderFee } = this.props
        const { side, amount, total, orderType } = this.state


        if (SelectedAccountPosition.Completed && SelectedTickerDataBasic.Completed) {

            const { AccountId } = SelectedAccountPosition.Data.AccountPosition1

            const Amount = side === 0 ? +amount : +total;

            const insideBid = SelectedTickerDataBasic.Data.BestBid
            const insideAsk = SelectedTickerDataBasic.Data.BestOffer
            let price = +this.state.price
            let MakerTaker = ''

            if (orderType === 1) price = side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid
            if (orderType === 3) price = +this.state.stopPrice

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

    order = () => {
        const { amount, price, stopPrice, trailingAmount, side, orderType, LimitOffset, peg, displayQuantity } = this.state
        const { SelectedTickerDataBasic, SelectedAccountPosition } = this.props

        const market = side === 0 ? SelectedTickerDataBasic.Data.BestOffer : SelectedTickerDataBasic.Data.BestBid
        const balanceToBeUsed = side === 0 ? SelectedAccountPosition.Data.AccountPosition2.Amount - SelectedAccountPosition.Data.AccountPosition2.Hold : SelectedAccountPosition.Data.AccountPosition1.Amount - SelectedAccountPosition.Data.AccountPosition1.Hold
        let total = 0
        if (orderType === 1) {
            total = side === 0 ? price : amount
        } else {
            total = side === 0 ? price * amount : amount
        }
        if (total > balanceToBeUsed) {
            alert('Insufficient Funds')
            return
        }

        const limitPrice = orderType % 2 === 0 && price


        const payload = {
            AccountId: SelectedAccountPosition.Data.AccountPosition1.AccountId,
            ClientOrderId: 0,
            Side: side,
            Quantity: +amount,
            OrderIdOCO: 0,
            OrderType: +orderType,
            InstrumentId: SelectedTickerDataBasic.Data.InstrumentId,
            TimeInForce: 0,
            OMSId: 1,
            UseDisplayQuantity: false,
        };

        if (orderType === 2) {
            payload.LimitPrice = +limitPrice
        } else if (orderType === 3) {
            payload.StopPrice = +stopPrice
            payload.PegPriceType = side === 0 ? 3 : 2
        } else if (orderType === 4) {
            payload.LimitPrice = +limitPrice
            payload.StopPrice = +stopPrice
            payload.PegPriceType = side === 0 ? 3 : 2
        } else if (orderType === 5) {
            payload.LimitPrice = limitPrice
            payload.TrailingAmount = +trailingAmount
            payload.PegPriceType = peg || 0
        } else if (orderType === 6) {
            payload.LimitPrice = limitPrice
            payload.LimitOffset = +LimitOffset
            payload.TrailingAmount = +trailingAmount
            payload.PegPriceType = peg || 0
        } else if (orderType === 8) {
            payload.LimitPrice = +limitPrice
            payload.OrderType = 2
            payload.TimeInForce = 4
        } else if (orderType === 10) {
            payload.LimitPrice = +limitPrice
            payload.OrderType = 2
            payload.TimeInForce = 3
        } else if (orderType === 12) {
            payload.LimitPrice = +limitPrice
            payload.OrderType = 2
            payload.DisplayQuantity = +displayQuantity
            payload.UseDisplayQuantity = true
        }

        this.props.sendOrder(payload)

    }

    handleAutoAmount = (buyAmt, sellAmt, percentage) => {
        const percentageMultiplier = [0.25, 0.50, 0.75, 1]
        const { side } = this.state
        let amt = 0
        if (side === 0) {
            const percentageAmount = percentageMultiplier[percentage - 1] * buyAmt
            // amt = amt - (amt * .01)
            amt = floor(percentageAmount, 8).toFixed(8)
            this.setState({ amount: percentageAmount, amountString: percentageAmount })
        } else {
            const percentageAmount = percentageMultiplier[percentage - 1] * sellAmt
            // amt = amt - (amt * .01)
            amt = floor(percentageAmount, 8).toFixed(8)
            this.setState({ amount: percentageAmount, amountString: percentageAmount })
        }
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
            trailingAmount: 0,
            trailingAmountString: 0,
            limitOffset: 0,
            limitOffsetString: 0,
            displayQuantity: 0,
            displayQuantityString: 0,
        })
    }

    render() {
        const { amount, side, total, amountString, priceString, orderType, stopPriceString, limitOffsetString, trailingAmountString, displayQuantityString, peg } = this.state
        const { SelectedTickerDataBasic, OrderFeeData, SelectedAccountPosition, close, balanceDisplay, open, setCalcInput, externalCalcInput } = this.props

        let marketPriceDisplay = 0
        if (SelectedTickerDataBasic.Completed) {
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

        let FeeDisplay = 0
        if (OrderFeeData.Completed) {
            FeeDisplay = `${formatNumberToLocale(OrderFeeData.Data.OrderFee, OrderFeeData.Data.DecimalPlaces)} ${OrderFeeData.Data.ProductSymbol}`
        }



        let marketTotalDisplay = 0
        let netProduct = ``
        let netAmount = 0
        let amountProduct = ``
        let priceProductDisplay = `Price Per`
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
            if (orderType === 1) {
                priceProductDisplay = `Price Per (${SelectedTickerDataBasic.Data.Product2Symbol})`
            } if (orderType === 2) {
                priceProductDisplay = `Buy Value (${SelectedTickerDataBasic.Data.Product2Symbol})`
            } if (orderType === 4) {
                priceProductDisplay = `Limit Price`
            }
        }

        let productBuyValue = 0
        let productSellValue = 0

        if (SelectedAccountPosition.Completed && SelectedTickerDataBasic.Completed) {
            productBuyValue = SelectedAccountPosition.Data.AccountPosition1.Amount - SelectedAccountPosition.Data.AccountPosition1.Hold
            productSellValue = SelectedTickerDataBasic.Data.BestBid === 0 ? 0 : (SelectedAccountPosition.Data.AccountPosition2.Amount - SelectedAccountPosition.Data.AccountPosition2.Hold) / SelectedTickerDataBasic.Data.BestBid
            productSellValue = productSellValue - (productSellValue * 0.05)
        }

        const newCalcInputVal = side ? netAmount: total;
        // Need to compare previous with next value to avoid infinite loop
        if (externalCalcInput !== newCalcInputVal) {
            setCalcInput(newCalcInputVal)
        }

        return (
            <AdxAdvanceOrder isOpen={open} onClosed={this.resetFormValues} centered={true}>
                {/* <Modal.Header>
                    <HBForm>
                            <span style={{ fontSize: '16px' }}>Advanced Orders</span>
                            <select defaultValue={1} className="circled" style={{ width: '130px' }}>
                                <option value="1" selected>BTC/TUSD</option>
                                <option value="">BTC/EWAN</option>
                                <option value="">BTC/KO</option>
                                <option value="">BTC/BA</option>
                            </select>
                        </HBForm>
                </Modal.Header> */}
                <HBOrderForm>
                    <HBForm>
                        {/*{balanceDisplay}*/}
                        <Tab className="advance-order" defaultSelected={side} block items={this.orderTypeItems} onChange={this.handleClickTab} />
                        <OrderTypeDropdown
                            fluid
                            options={this.orderTypeOptions}
                            defaultValue={orderType}
                            onChange={this.handleClickTypeSelect} />

                        <HBFormGroup>
                            <label>{side === 0 ? `Buy` : `Sell`} Amount {amountProduct}</label>
                            <Input type="text" placeholder="0" value={amountString} onChange={this.changeAmountHandler} />
                        </HBFormGroup>

                        {(orderType === 1 || orderType === 2 || orderType === 4 || orderType === 8 || orderType === 10 || orderType === 12) &&
                            <HBFormGroup>
                                <label>{priceProductDisplay}</label>
                                <Input type="text" placeholder="0" value={priceString} onChange={this.changePriceHandler} />
                            </HBFormGroup>}
                        {(orderType === 3 || orderType === 4) &&
                            <HBFormGroup>
                                <label>Stop Price</label>
                                <Input type="text" placeholder="0" value={stopPriceString} onChange={this.changeStopPriceHandler} />
                            </HBFormGroup>}
                        {(orderType === 5 || orderType === 6) &&
                            <HBFormGroup>
                                <label>Trailing Amount</label>
                                <Input type="text" placeholder="0" value={trailingAmountString} onChange={this.changeTrailingAmountHandler} />
                            </HBFormGroup>}
                        {(orderType === 5 || orderType === 6) &&
                            <HBFormGroup>
                                <label>Limit Offset</label>
                                <Input type="text" placeholder="0" value={limitOffsetString} onChange={this.changeLimitOffsetHandler} />
                            </HBFormGroup>}
                        {(orderType === 5 || orderType === 6) &&
                            <OrderTypeDropdown
                                fluid
                                options={this.pegPrices}
                                defaultValue={peg}
                                onChange={this.changePegHandler} />}
                        {(orderType === 12) &&
                            <HBFormGroup>
                                <label>Display Quantity</label>
                                <Input type="text" placeholder="0" value={displayQuantityString} onChange={this.changeDisplayQuantityHandler} />
                            </HBFormGroup>}

                        <Preview>
                            <PreviewItem>Market Price</PreviewItem>
                            <PreviewItem>{marketPriceDisplay}</PreviewItem>
                        </Preview>
                        <Preview>
                            <PreviewItem>Market Total</PreviewItem>
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

                        <SubmitAdvanceOrder onClick={this.order}>Place Order</SubmitAdvanceOrder>
                        <CloseAdvanceOrder onClick={close}>Cancel</CloseAdvanceOrder>
                    </HBForm>
                </HBOrderForm>
            </AdxAdvanceOrder>
        )
    }
}