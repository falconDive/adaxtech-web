import React, { Component } from 'react';
import { HBAssociatedAccount, HBAssociatedAccountRow, HBAssociatedAccountColumn } from './../../../components/HBSettings/HBAssociatedAccount'

class AssociatedAccount extends Component {
    render() {
        const { AssociatedAccounts } = this.props
        let lists = []
        if (AssociatedAccounts.Completed) {
            lists = AssociatedAccounts.Data.map((item, key) =>
                <HBAssociatedAccountRow key={key}>
                    <HBAssociatedAccountColumn>{item.AccountName}</HBAssociatedAccountColumn>
                    <HBAssociatedAccountColumn>#{item.AccountId}</HBAssociatedAccountColumn>
                    {/* <HBAssociatedAccountColumn>{item.AccountType}</HBAssociatedAccountColumn> */}
                </HBAssociatedAccountRow>
            );
        }
        return (
            <HBAssociatedAccount>
                <div style={{ maxWidth: '500px' }}>
                    <h3>Associated Accounts</h3>
                    <HBAssociatedAccountRow>
                        <HBAssociatedAccountColumn className={`header`}>Username</HBAssociatedAccountColumn>
                        <HBAssociatedAccountColumn className={`header`}>Account No</HBAssociatedAccountColumn>
                        {/* <HBAssociatedAccountColumn className={`header`}>Assets</HBAssociatedAccountColumn> */}
                    </HBAssociatedAccountRow>
                    {lists}
                </div>
            </HBAssociatedAccount>
        );
    }
}

export default AssociatedAccount;