import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import { HBWallet, Balance, BalanceTotal } from './../../../components/HBAssets/HBWallet'
import { HBButton } from './../../../components/HBButton'

class Wallets extends Component {
    render() {

        let item = [
            {
                crypto: 'BTC',
                url: require(`./../../../assets/crypto/BTC.svg`)
            },
            {
                crypto: 'ETH',
                url: require(`./../../../assets/crypto/ETH.svg`)
            },
            {
                crypto: 'NEO',
                url: require(`./../../../assets/crypto/NEO.svg`)
            },
            {
                crypto: 'LTC',
                url: require(`./../../../assets/crypto/LTC.svg`)
            },
            {
                crypto: 'XRP',
                url: require(`./../../../assets/crypto/XRP.svg`)
            },
            {
                crypto: 'TUSD',
                url: require(`./../../../assets/crypto/TUSD.svg`)
            }
        ];

        const Lists = item.map((item, key) =>
            <Table.Row key={key}>
                <Table.Cell style={{ display: 'flex' }}>
                    <img src={item.url} alt="" height="40" /><span style={{ alignSelf: 'center', marginLeft: '10px' }}>{item.crypto}</span>
                </Table.Cell>
                <Table.Cell>Bitcoin</Table.Cell>
                <Table.Cell>65.3245666</Table.Cell>
                <Table.Cell>65.3245815</Table.Cell>
                <Table.Cell>65.3245815</Table.Cell>
                <Table.Cell>65.3245513</Table.Cell>
                <Table.Cell>65.3245513</Table.Cell>
                <Table.Cell>
                    <div style={{ display: 'flex' }}>
                        <HBButton bsstyle="center" default="border" size="small" border="theme">Deposit</HBButton>
                        &nbsp;&nbsp;&nbsp;
                        <HBButton bsstyle="center" default="border" size="small" border="theme">Withdraw</HBButton>
                    </div>
                </Table.Cell>
            </Table.Row>
        );

        return (
            <HBWallet>
                <Balance>Estimated Account Balance</Balance>
                <BalanceTotal>22066.65789865 BTC / 75,653.45 USD</BalanceTotal>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="bg-black">Coin</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Name</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Total Balance</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Balance un USD</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Hold</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Pending Deposits</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Pending Withdraws</Table.HeaderCell>
                            <Table.HeaderCell className="bg-black">Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {Lists}
                    </Table.Body>
                </Table>
            </HBWallet>
        )
    }
}

export default Wallets;