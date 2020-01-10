import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react'

import { formatNumberToLocale, getTimeFormatEpoch } from './../../../../helpers'
import {
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../../components/Base/Scrollable';
import { TransactionList, Pages } from '../../../../components/HBExchange/HBTransaction';
import closeMini from './../../../../assets/close-mini.svg';

class WithdrawStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100
        }
    }

    handleResize = () => {
        this.setState({ windowHeight: window.innerHeight - 80 });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    hanldePageClick = (page) => {
        const query = this.props.WithdrawTickets.Query
        query.page = page
        this.props.queryWithdrawTickets(query)
    }

    handleCancelWithdraw = ({ RequestCode, AccountId }) => {

        this.props.cancelWithdraw({ UserId: this.props.UserInfo.Data.UserId, AccountId: AccountId, RequestCode: RequestCode })
    }

    render() {
        const { WithdrawTickets } = this.props
        let Lists = []

        if (WithdrawTickets.Completed) {
            const terminalState = [
                'Failed',
                'FullyProcessed',
                'UserCancelled',
                'Rejected'
            ];
            Lists = WithdrawTickets.Data.map((obj, key) => {
                const date = getTimeFormatEpoch(new Date(obj.CreatedTimestamp).getTime())
                const showCancelButton = !terminalState.includes(obj.Status);
                return (<tr key={key}>
                    {/* <td>{obj.AccountId}</td> */}
                    <td>{obj.AssetName}</td>
                    <td>{formatNumberToLocale(obj.Amount, obj.DecimalPlaces)}</td>
                    <td>{obj.Status}</td>
                    <td>{date}</td>
                    <td>

                        {showCancelButton ?
                            (<span onClick={() => { this.handleCancelWithdraw(obj) }} className={`c-pointer`}><a style={{textDecoration: 'underline' , color: '#939598'}}>Cancel</a></span>) :
                            ``}
                    </td>
                </tr>)
            });
        }

        const firstPage = WithdrawTickets.Pages.filter(i => i.tag === `first`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle left' /> </span>)
        })
        const lastPage = WithdrawTickets.Pages.filter(i => i.tag === `last`).map((obj, key) => {
            return (<span className={`pagination-item`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}> <Icon name='angle right' /> </span>)
        })
        const pages = WithdrawTickets.Pages.filter(i => i.tag !== `first` && i.tag !== `last`).map((obj, key) => {
            return (<span className={`pagination-item ${obj.selected ? `active` : ``}`} key={key} onClick={() => { this.hanldePageClick(obj.page) }}>{obj.page + 1}</span>)
        })

        return (
            <Fragment>
                <TransactionList>
                    <Scrollable
                        autoHide={true}
                        hideTracksWhenNotNeeded={true}
                        autoHeightMax={'100%'}
                        universal={true}
                        renderView={props => <View {...props} />}
                        renderTrackHorizontal={props => <HorizontalTrack {...props} />}
                        renderThumbHorizontal={props => <HorizontalThumb {...props} />}
                        renderTrackVertical={props => <VerticalTrack {...props} />}
                        renderThumbVertical={props => <VerticalThumb {...props} />} >
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Account</th> */}
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date & Time Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Lists}
                        </tbody>
                    </table>
                    </Scrollable>
                </TransactionList>
                <Pages>
                    {firstPage}
                    {pages}
                    {lastPage}
                </Pages>
            </Fragment>
        )
    }
}

export default WithdrawStatus;