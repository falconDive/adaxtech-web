import React, { Component } from 'react';
import { connect } from 'react-redux'
import Deposit from './index'
import { Products } from './../../../selectors/containers/products-data-container'
import { DepositTicketsBySelected } from './../../../selectors/containers/user-transaction-data-container'
import { getDepositInfo, clearDepositInfo, queryDepositTickets } from './../../../actions/user-transaction-actions'


const mapStateToProps = state => ({
    AccountInfo: state.UserData.AccountInfo,
    Products: Products(state),
    DepositInfo: state.UserTransactions.DepositInfo,
    DepositTickets: DepositTicketsBySelected(state)
})

export default connect(mapStateToProps, {
    getDepositInfo,
    clearDepositInfo,
    queryDepositTickets
})(Deposit);