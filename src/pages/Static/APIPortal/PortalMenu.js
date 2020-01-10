import React, { Component } from 'react'

import ModalComponent, { ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent } from './../components/modal/ModalComponent'
import ButtonComponent from './../components/button/ButtonComponent';
import InputComponent from './../components/input/InputComponent';
import styles from "./styles.scss"

class PortalMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLang: 'en',
            showTranslation: false,
            availableLang: [
                { key: 'en', languange: 'English' },
                { key: 'ch', languange: 'Chinese' },
            ],
            menu: [
              {
                title: "Background Information",
                desc: "background information"
              },
              {
                title: "Contents Common to Many API Calls",
                desc: "contents common to many api calls"
              },
              {
                title: "Registration and Authentication",
                desc: "registration and authentication registernewuser webauthenticateuser authenticate2fa logout resetpassword",
                submenu: [
                  { title: "RegisterNewUser"},
                  { title: "WebAuthenticateUser"},
                  { title: "Authenticate2FA"},
                  { title: "LogOut"},
                  { title: "ResetPassword"},
                ]
              },
              {
                title: "User Information Calls",
                desc: "user information calls getavailablepermissionlist getuserconfig getuserinfo getuserpermissions removeuserconfig setuserconfig setuserinfo",
                submenu: [
                  { title: "GetAvailablePermissionList"},
                  { title: "GetUserConfig"},
                  { title: "GetUserInfo"},
                  { title: "GetUserPermissions"},
                  { title: "RemoveUserConfig"},
                  { title: "SetUserConfig"},
                  { title: "SetUserInfo"},
                ]
              },
              {
                title: "Order-Handling Calls",
                desc: "order-handling calls cancelallorders cancelorder cancelquote cancelreplaceorder createquote getaccountinfo getaccountpositions getaccounttrades getaccounttransactions getinstrument getinstruments getopenorders getopenquotes getorderfee getorderhistory getorderhistorybyorderid getordershistory getorderstatus getproduct getproducts getuseraccounts getuseraccountinfos modifyorder sendorder updatequote",
                submenu: [
                  { title: "CancelAllOrders"},
                  { title: "CancelOrder"},
                  { title: "CancelQuote"},
                  { title: "CancelReplaceOrder"},
                  { title: "CreateQuote"},
                  { title: "GetAccountInfo"},
                  { title: "GetAccountPositions"},
                  { title: "GetAccountTrades"},
                  { title: "GetAccountTransactions"},
                  { title: "GetInstrument"},
                  { title: "GetInstruments"},
                  { title: "GetOpenOrders"},
                  { title: "GetOpenQuotes"},
                  { title: "GetOrderFee"},
                  { title: "GetOrderHistory"},
                  { title: "GetOrderHistoryByOrderId"},
                  { title: "GetOrdersHistory"},
                  { title: "GetOrderStatus"},
                  { title: "GetProduct"},
                  { title: "GetProducts"},
                  { title: "GetUserAccounts"},
                  { title: "GetUserAccountInfos"},
                  { title: "ModifyOrder"},
                  { title: "SendOrder"},
                  { title: "UpdateQuote"},
                ]
              },
              {
                title: "Reports",
                desc: "reports canceluserreport generatetradeactivityreport generatetransactionactivityreport generatetreasuryactivityreport getuserreporttickets getuserreportwriterresultrecords scheduletradeactivityreport scheduletransactionactivityreport scheduletreasuryactivityreport",
                submenu: [
                  { title: "CancelUserReport"},
                  { title: "GenerateTradeActivityReport"},
                  { title: "GenerateTransactionActivityReport"},
                  { title: "GenerateTreasuryActivityReport"},
                  { title: "GetUserReportTickets"},
                  { title: "GetUserReportWriterResultRecords"},
                  { title: "ScheduleTradeActivityReport"},
                  { title: "ScheduleTransactionActivityReport"},
                  { title: "ScheduleTreasuryActivityReport"},
                ]
              },
              {
                title: "Tickers and Feeds",
                desc: "tickers and feeds getl2snapshot gettickerhistory gettradeshistory subscribeaccountevents subscribelevel1 subscribelevel2 subscribeticker subscribetrades unsubscribelevel1 unsubscribelevel2 unsubscribeticker unsubscribetrades",
                submenu: [
                  { title: "GetL2Snapshot"},
                  { title: "GetTickerHistory"},
                  { title: "GetTradesHistory"},
                  { title: "SubscribeAccountEvents"},
                  { title: "SubscribeLevel1"},
                  { title: "SubscribeLevel2"},
                  { title: "SubscribeTicker"},
                  { title: "SubscribeTrades"},
                  { title: "UnsubscribeLevel1"},
                  { title: "UnsubscribeLevel2"},
                  { title: "UnsubscribeTicker"},
                  { title: "UnsubscribeTrades"},
                ]
              },
              {
                title: "Deposits and Withdrawals",
                desc: "deposits and withdrawals ",
                submenu: [
                  { title: "CreateDepositTicket"},
                  { title: "CreateWithdrawTicket"},
                  { title: "GetAllDepositRequestInfoTemplates"},
                  { title: "GetAllDepositTickets"},
                  { title: "GetAllWithdrawTickets"},
                  { title: "GetDepositInfo"},
                  { title: "GetDepositRequestInfoTemplate"},
                  { title: "GetDepositTicket"},
                  { title: "GetWithdrawTemplate"},
                  { title: "GetWithdrawTemplateTypes"},
                  { title: "GetWithdrawTicket"},
                  { title: "GetWithdrawTickets"},
                  { title: "UpdateDepositTicket"},
                  { title: "UpdateWithdrawTicket"},
                ]
              }
            ],
            search: ''
        };
    }

    componentDidMount() {
        const _self = this 
        setTimeout(function(){
            const lang = localStorage.getItem('lang')
            if (lang) {
                _self.setState({ selectedLang: lang })
            } else {
                _self.setState({ selectedLang: 'en' })
            }
        })
    }

    componentWillUnmount() {
    }

    selectLanguageHandler = (e) => {
        const val = e.target.value
        this.setState({ selectedLang: val })
    }

    chooseLanguageHandler = () => {
        window.localStorage.setItem('lang', this.state.selectedLang)
        location.reload()
    }
    showModalHandler = (e) => {
        e.preventDefault()
        this.setState({ showTranslation: !this.state.showTranslation })
    }

    searchChangeHandler = (e) => {
      const val = e.target.value;
      this.setState({search: val.toLowerCase()});
    }

    render() {
        const {showTranslation, availableLang, selectedLang, search, menu } = this.state

        const availableLangOptions = availableLang.map(lang => {
            return <option value={lang.key} key={lang.key}>{lang.languange}</option>
        })
        
        let menuData = []

        this.state.menu.forEach( m => {
            let mSub = []
            if (m.desc.indexOf(search) >= 0) {
              if (m.submenu) {
                m.submenu.forEach(sm => {
                  if (sm.title.toLowerCase().indexOf(search) >= 0) {
                    const tempMSub = (<li role="presentation"><a className="dropdown-item" href={"#"+sm.title.replace(/\s/g, '')} aria-controls="{sm.title}" role="presentation" data-toggle="tab">{sm.title}</a></li>)
                    mSub.push(tempMSub)
                  }

                })
              }
              const submenu = <div className="dropdown-menu">{mSub}</div>
              if (m.submenu) {
                let elem = <li role="presentation" id="dropdown" className="parents">
                  <a href={"#"+m.title.replace(/\s/g, '')} className="nav-link dropdown-toggle" data-toggle="dropdown" role="tab" aria-expanded="false" aria-haspopup="true">{m.title}</a>
                  {submenu}
                </li>
                menuData.push(elem)
              } else {
                let elem = <li role="presentation" className="parents">
                  <a href={"#"+m.title.replace(/\s/g, '')} aria-controls={m.title.replace(/\s/g, '')} className="parents" role="tab" data-toggle="tab">{m.title}</a>
                </li>
                menuData.push(elem)
              }
            }
        })
        
        return (
          <div>
            <input className="search"  type="text" placeholder="Search" onChange={this.searchChangeHandler}/>
            <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {menuData}
            </ul>
          </div>
        )
    }
}

export default PortalMenu