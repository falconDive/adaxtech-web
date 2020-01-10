import React, { Component } from 'react';
import Loadable from './../../../HOC/Loadable'
import { HBAccountOverview, HBColumn, HBVerification, HBLimit, HBEstimated } from './../../../components/HBSettings/HBAccountOverview'
import { HBButton } from './../../../components/HBButton'

const Profile = Loadable({
    loader: () => import(`./../Profile`)
})

const AssociatedAccount = Loadable({
    loader: () => import(`./../AssociatedAccount`)
})

class AccountOverview extends Component {
    render() {
        const { UserConfigData, UserInfo, AssociatedAccounts } = this.props
        return (
            <HBAccountOverview>
                <HBColumn>
                    <Profile UserInfo={UserInfo} UserConfigData={UserConfigData} />
                </HBColumn>
                <HBColumn>
                    <AssociatedAccount AssociatedAccounts={AssociatedAccounts} />
                </HBColumn>
            </HBAccountOverview>
        );
    }
}

export default AccountOverview;