import React, { Component, Fragment } from 'react';
import { Input } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

import { AdxForm } from './../../../components/HBForm'
import { Converter, OfTabMenu, ProductList, CurrencySelector, CalcTab } from './../../../components/HBExchange/HBOrderForm'
import { formatNumberToLocale, parseNumberToLocale } from './../../../helpers'
import Tab from '../../../components/Tab'

const cryptoAssets = require.context('../../../assets/crypto/')
const TUSD = 'TUSD'
const BTC = 'BTC'
const ETH = 'ETH'
const USDT = 'USDT'

class CalculatorForm extends Component {
    state = {
        activeTab: 0,
        amountInUsd: 0,
        selectedProduct: null
    }
    productList = []

    constructor (props) {
        super(props)

        let uniqueSymbol = []
        Object.values(this.props.InstrumentsTickerData.Data).forEach((group, i) => {
            if (Array.isArray(group)) {
                group.forEach(({ Product1Symbol }) => {
                    if (! uniqueSymbol.includes(Product1Symbol)) {
                        this.productList.push({
                            key: Product1Symbol,
                            text: (
                                <Fragment>
                                    <img src={cryptoAssets(`./${Product1Symbol}.svg`)} />
                                    <span>{Product1Symbol}</span>
                                </Fragment>
                            ),
                            value: Product1Symbol
                        })

                        uniqueSymbol.push(Product1Symbol)
                    }
                })
            }
        })

        // this.state.cryptoUnit = this.productList[0].value
    }

    setActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }

    setCryptoUnit = (e, { value }) => {
        this.setState({ cryptoUnit: value })
    }

    getMultiplier = (unit) => {
        const { activeTab } = this.state
        const { ConversionTable } = this.props
        const conversion = ConversionTable[unit]
        let multiplier = 0
        if (conversion) {
            if ( conversion.hasOwnProperty(TUSD) ) {
                multiplier = conversion[TUSD]
            } else if ( conversion.hasOwnProperty(BTC) ) {
                multiplier = conversion[BTC] * ConversionTable[BTC][TUSD]
            } else if ( conversion.hasOwnProperty(ETH) ) {
                multiplier = conversion[ETH] * ConversionTable[ETH][TUSD]
            } else if ( conversion.hasOwnProperty(USDT) ) {
                multiplier = conversion[USDT] * ConversionTable[USDT][TUSD]
            }
        }

        return (activeTab) ? 1 / multiplier : multiplier 
    }

    tab1Content = () => {
        const { SelectedTickerDataBasic, ConversionTable, inputValue} = this.props
        const instrument = SelectedTickerDataBasic.Data
        const unit = instrument.Product2Symbol
        let input
        let output

        if (unit === TUSD) {
            output = input = formatNumberToLocale(inputValue, 2)
        } else {
            const conversion = ConversionTable[unit]
            if (conversion) {
                input = (inputValue) ? formatNumberToLocale(inputValue, instrument.Product2DecimalPlaces) : 0
            }
            const multiplier = this.getMultiplier(unit)
            output = formatNumberToLocale(inputValue * multiplier, 2)
        }

        return (
            <div className="calc-form">
                <div className="input-group">
                    <label>Amount ({unit})</label>
                    <Input fluid readOnly type="text" value={input} />
                </div>
                <div className="input-group">
                    <label>Amount (USD)</label>
                    <Input fluid readOnly type="text" value={output} />
                </div>
            </div>
        )
    }

    tab2Content = () => {
        const { amountInUsd, cryptoUnit } = this.state
        const { ConversionTable} = this.props
        const conversion = ConversionTable[cryptoUnit]
        const multiplier = this.getMultiplier(cryptoUnit)
        const output = formatNumberToLocale(amountInUsd * multiplier)

        return (
            <Fragment>
                <CurrencySelector
                    fluid
                    placeholder="Select Currency"
                    options={this.productList}
                    defaultValue={cryptoUnit}
                    onChange={this.setCryptoUnit} />
                <div className="calc-form">
                    <div className="input-group">
                        <label>Amount (USD)</label>
                        <Input fluid readOnly={! cryptoUnit} type="text" value={amountInUsd} onChange={this.setAmountInUsd} />
                    </div>
                    <div className="input-group">
                        <label>Amount ({cryptoUnit})</label>
                        <Input fluid readOnly type="text" value={output} />
                    </div>
                </div>
            </Fragment>
        )
    }

    setAmountInUsd = (e) => {
        const amountInUsd = e.target.value.replace(/[^\d.]/g, '')
        this.setState({ amountInUsd })
    }

    render () {
        const { setActiveTab, tab1Content, tab2Content } = this
        const { activeTab } = this.state

        const menuItems = [{
            children: 'Crypto to USD'
        }, {
            children: 'USD to Crypto'
        }]

        const content = (activeTab == 0) ? tab1Content() : tab2Content()
        return (
            <AdxForm>
                <Converter>
                    <CalcTab className="order-form" block items={menuItems} onChange={this.setActiveTab} />
                    {content}
                </Converter>
            </AdxForm>
        )
    }
}

export default CalculatorForm