import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loadable from './../../../HOC/Loadable'
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { 
    HBTokenDetailPreview, 
    HBTokenDetailPreviewContainer, 
    HBTokenDetailPreviewRow, 
    HBTokenDetailPreviewColumn } from './../../../components/HBExchange/HBTokenDetailPreview'

import sampleCard from './../../../assets/stc/sample-card.png';
import backIcon from './../../../assets/stc/back-icon.svg';

import { getOrderFee, sendOrder } from './../../../actions/exchange-actions'

import { TradeData } from './../../../selectors/containers/trades-data-container'
import { OrderBookData } from './../../../selectors/containers/order-book-data-container'
import { TickerDataBasic } from './../../../selectors/containers/level1-data-container'
import { InstrumentsData, SelectedInstrumentData } from './../../../selectors/containers/instruments-data-container'
import { InstrumentsTickerData } from './../../../selectors/containers/instruments-ticker-data-container'
import { OpenOrders, AccountTrades, WithdrawTickets, OrderHistoryCancelled } from './../../../selectors/containers/user-transaction-data-container'
import { SubscribeTickerData } from './../../../selectors/containers/subscribe-ticker-data-container'
import { AccountPositions, SelectedAccountPosition } from './../../../selectors/containers/account-info-data-container'
import { OrderFeeData, } from './../../../selectors/containers/exchange-data-container'

const WalletBalance = Loadable({
    loader: () => import(`./../WalletBalance`)
})

const OrderForm = Loadable({
    loader: () => import(`./../OrderForm`)
})

class TokenDetailPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100,
            priceString: 0
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

    formOrderBook(priceValue) {
        this.setState({
            priceString : priceValue
        })
    }

    render() {
        const { TradeData,
            OrderBookData,
            OpenOrders,
            AccountTrades,
            OrderHistoryCancelled,
            WithdrawTickets,
            InstrumentsTickerData,
            selectInstrument,
            logoutUser,
            queryAccountTrades,
            toggleSideBar,
            SideBar,
            UserInfo,
            SubscribeTickerData,
            AccountPositions,
            SelectedAccountPosition,
            OrderFeeData,

            cancelWithdraw,
            cancelOrder,
            queryOpenOrders,
            queryInactiveOrderHistory,
            queryWithdrawTickets,
            getOrderFee,
            sendOrder,
            match
        } = this.props
        
        return (
            <HBTokenDetailPreview>
                <HBTokenDetailPreviewContainer>
                    <HBTokenDetailPreviewRow>
                        <HBTokenDetailPreviewColumn grid={`main`}>
                            <HBTokenDetailPreviewRow>
                                <HBTokenDetailPreviewColumn grid={`content`}>
                                    <Link to={`account/trade`} className={`b-icon`}><img src={backIcon}/></Link>
                                    <h3 style={{marginTop: `0`}}>Generation Tower (H20)</h3>
                                    <img src={sampleCard} alt="sampleCard"/>
                                    <HBTokenDetailPreviewRow>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Structure</HBTokenDetailPreviewColumn>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Equity</HBTokenDetailPreviewColumn>
                                    </HBTokenDetailPreviewRow>
                                    <HBTokenDetailPreviewRow>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Total size</HBTokenDetailPreviewColumn>
                                        <HBTokenDetailPreviewColumn grid={`details`}>$33,200,000</HBTokenDetailPreviewColumn>
                                    </HBTokenDetailPreviewRow>
                                    <HBTokenDetailPreviewRow>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Offering price</HBTokenDetailPreviewColumn>
                                        <HBTokenDetailPreviewColumn grid={`details`}>$10</HBTokenDetailPreviewColumn>
                                    </HBTokenDetailPreviewRow>
                                    <HBTokenDetailPreviewRow>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Change 24H</HBTokenDetailPreviewColumn>
                                        <HBTokenDetailPreviewColumn grid={`details`}>N/A</HBTokenDetailPreviewColumn>
                                    </HBTokenDetailPreviewRow>
                                    <HBTokenDetailPreviewRow>
                                        <HBTokenDetailPreviewColumn grid={`details`}>Tokens Outstanding</HBTokenDetailPreviewColumn>
                                        <HBTokenDetailPreviewColumn grid={`details`}>3,320,000</HBTokenDetailPreviewColumn>
                                    </HBTokenDetailPreviewRow>

                                    <h3>Attached Documents</h3>
                                    <span className={`doc-file`}>Summary document.pdf</span>
                                    <span className={`doc-file`}>Summary document.pdf</span>
                                    <span className={`doc-file`}>Legal papers.pdf</span>
                                    <span className={`doc-file`}>Term sheets.pdf</span>
                                    <span className={`doc-file`}>Title deeds.pdf</span>
                                    <span className={`doc-file`}>Financials for last 3 years.pdf</span>
                                    <span className={`doc-file`}>Risk Factors.pdf</span>
                                </HBTokenDetailPreviewColumn>
                                <HBTokenDetailPreviewColumn grid={`content`}>
                                    <h3>Overview</h3>
                                    <Scrollbars
                                        onScroll={this.handleScroll}
                                        onScrollFrame={this.handleScrollFrame}
                                        onScrollStart={this.handleScrollStart}
                                        onScrollStop={this.handleScrollStop}
                                        onUpdate={this.handleUpdate}
                                        renderView={this.renderView}
                                        renderTrackHorizontal={this.renderTrackHorizontal}
                                        renderThumbHorizontal={this.renderThumbHorizontal}
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                        autoHeight
                                        autoHeightMin={300}
                                        autoHeightMax={this.state.windowHeight - 160}
                                        thumbMinSize={30}
                                        universal={true}>
                                        <div style={{maxWidth: `480px`, paddingRight: `25px`}}>
                                        <p>Generation Tower is designed to be Philippines  best commercial address, a financial centre designed to ensure Philippines place as the financial centre of South-East Asia and a key hub in the world financial system.</p>
                                        <p>Its state-of-the-art office space consists of large column-free, symmetrical floorplates, designed specifically for financial services tenants with multiple levels of essential service and back-up systems.</p>
                                        <p>The organic philosophy in the form is perfected in the function and organisation of space, with intelligent systems and structural innovations.</p>
                                        <p>All offices are capable of accommodating trading offices and are equipped with a dual power supply from different substations and dual telecommunications cables routed through different telephone exchanges to ensure 24-hour business connectivity.</p>
                                        <p>Easily accessible through an extensive transportation network</p>
                                        <p>Awarded top accolades in environmental sustainability</p>

                                        <p>
                                            "Green Mark Platinum Award <br/>
                                            "Leadership in Energy & Environmental Design Core & Shell (LEED-CS)" <br/>
                                            Platinum Certification <br/>
                                            "Water Efficiency Building Gold Award" from Public Utilities Board being <br/>
                                            top 10% on water efficiency performance
                                        </p>
                                        </div>
                                    </Scrollbars>
                                </HBTokenDetailPreviewColumn>
                            </HBTokenDetailPreviewRow>
                        </HBTokenDetailPreviewColumn>
                        <HBTokenDetailPreviewColumn grid={`main`}>
                            <WalletBalance SelectedAccountPosition={SelectedAccountPosition} />
                            <OrderForm
                                routerHistory={this.props.history}
                                sendOrder={sendOrder}
                                getOrderFee={getOrderFee}
                                SelectedAccountPosition={SelectedAccountPosition}
                                OrderFeeData={OrderFeeData}
                                OrderBookData={OrderBookData}
                                SelectedTickerDataBasic={InstrumentsTickerData.Selected}
                                AccountPositions={AccountPositions}
                                priceFromOrderBook={this.state.priceString} />
                        </HBTokenDetailPreviewColumn>
                    </HBTokenDetailPreviewRow>
                </HBTokenDetailPreviewContainer>
            </HBTokenDetailPreview>
        )
    }
}

const mapStateToProps = state => ({
    TradeData: TradeData(state),
    OrderBookData: OrderBookData(state),
    TickerDataBasic: TickerDataBasic(state),
    InstrumentsData: InstrumentsData(state),
    SelectedInstrumentData: SelectedInstrumentData(state),
    InstrumentsTickerData: InstrumentsTickerData(state),
    OpenOrders: OpenOrders(state),
    AccountTrades: AccountTrades(state),
    SideBar: state.Layout.SideBar,
    OrderHistoryCancelled: OrderHistoryCancelled(state),
    WithdrawTickets: WithdrawTickets(state),
    UserInfo: state.UserData.UserInfo,
    SubscribeTickerData: SubscribeTickerData(state),
    AccountPositions: AccountPositions(state),
    SelectedAccountPosition: SelectedAccountPosition(state),
    OrderFeeData: OrderFeeData(state)
})

export default connect(mapStateToProps, {
    getOrderFee,
    sendOrder
})(TokenDetailPreview)