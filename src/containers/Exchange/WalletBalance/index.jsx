import React, { Component } from 'react';
import { HBWalletBalance, HBWalletBalanceHead, HBWalletBalanceItem } from './../../../components/HBExchange/HBWalletBalance'
import { formatNumberToLocale } from './../../../helpers'
class WalletBalance extends Component {
    render() {
        const { SelectedAccountPosition } = this.props

        let AccountPosition1 = <HBWalletBalanceItem>
            <span style={{ padding: `30px 0`, textAlign: `center` }}>Loading...</span>
        </HBWalletBalanceItem>
        let AccountPosition2 = <HBWalletBalanceItem>
            {/* <span></span>
            <span>Loading...</span>
            <span></span> */}
        </HBWalletBalanceItem>
        if (SelectedAccountPosition.Completed) {
            AccountPosition1 = <HBWalletBalanceItem>
                <span><img src={SelectedAccountPosition.Data.AccountPosition1.CryptoIcon} alt="" height="40" /></span>
                <span>{SelectedAccountPosition.Data.AccountPosition1.ProductSymbol}</span>
                <span>{formatNumberToLocale(SelectedAccountPosition.Data.AccountPosition1.TradableAmount, SelectedAccountPosition.Data.AccountPosition1.DecimalPlaces)}</span>
            </HBWalletBalanceItem>
            AccountPosition2 = <HBWalletBalanceItem>
                <span><img src={SelectedAccountPosition.Data.AccountPosition2.CryptoIcon} alt="" height="40" /></span>
                <span>{SelectedAccountPosition.Data.AccountPosition2.ProductSymbol}</span>
                <span>{formatNumberToLocale(SelectedAccountPosition.Data.AccountPosition2.TradableAmount, SelectedAccountPosition.Data.AccountPosition2.DecimalPlaces)}</span>
            </HBWalletBalanceItem>
        }

        return (
            <HBWalletBalance>
                <HBWalletBalanceHead>
                    <span>Assets</span>
                    <span>Balance</span>
                </HBWalletBalanceHead>
                {AccountPosition1}
                {AccountPosition2}
            </HBWalletBalance>
        )
    }
}

export default WalletBalance;