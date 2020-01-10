// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Loadable from './../../HOC/Loadable'

// import { HBContainer } from './../../components/Base'
// import { HBCard } from './../../components/HBCard'
// import { HBLink } from './../../components/HBButton'
// import { HBAsset, HBTransaction, HBTransactionColumn, HBAssetsRow, HBAssetsColumn } from './../../components/HBAssets'

// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// // const Deposit = Loadable({
// //     loader: () => import(`./../../containers/Assets/Deposit`)
// // })

// // const Withdraw = Loadable({
// //     loader: () => import(`./../../containers/Assets/Withdraw`)
// // })

// const SecurityToken = Loadable({
//     loader: () => import(`./../../containers/Assets/SecurityToken`)
// })

// const UtilityToken = Loadable({
//     loader: () => import(`./../../containers/Assets/UtilityToken`)
// })

// const OpenOrders = Loadable({
//     loader: () => import(`./../../containers/Assets/OpenOrders`)
// })

// const OrderHistory = Loadable({
//     loader: () => import(`./../../containers/Assets/OrderHistory`)
// })

// class Assets extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 1
//         }
//     }

//     handleClickTab = (val) => {
//         this.setState({ activeTab: val })
//     }

//     componentDidMount() {
//         this.props.closeSideBar({ Open: false })
//     }


//     render() {
//         const { activeTab } = this.state
//         const {
//             match,
//             UtilityTokens,
//             queryOpenOrders,
//             cancelOrder,
//             queryOrderHistory,
//             advanceQueryOpenOrders,
//             clearQueryOpenOrders,
//             InstrumentsData,
//             clearQueryOrderHistory,
//             advanceQueryOrderHistory
//         } = this.props;

//         return (
//             <HBAsset>
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnVisibilityChange
//                     draggable
//                     pauseOnHover
//                 />
//                 <HBContainer>
//                     <HBAssetsRow>
//                         <HBAssetsColumn grid={`main`}>
//                             <HBCard>
//                                 <SecurityToken />
//                             </HBCard>
//                             <HBCard>
//                                 <HBTransaction>
//                                     <HBTransactionColumn onClick={() => { this.handleClickTab(1) }} active={activeTab === 1 ? `active` : ``}>Open Orders</HBTransactionColumn>
//                                     <HBTransactionColumn onClick={() => { this.handleClickTab(2) }} active={activeTab === 2 ? `active` : ``}>Order History</HBTransactionColumn>
//                                 </HBTransaction>
//                                 <div className={`btn-transcation`}>
//                                     <HBLink bsstyle="center" default="default" size="small" style={{ width: '110px' }}><Link to={`${match.url}/deposit`}>Deposit</Link></HBLink>
//                                     &nbsp;&nbsp;&nbsp;
//                                     <HBLink bsstyle="center" default="default" size="small" style={{ width: '110px' }}><Link to={`${match.url}/withdraw`}>Withdraw</Link></HBLink>
//                                 </div>
//                                 <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
//                                     <OpenOrders
//                                         openOrderData={this.props.OpenOrders}
//                                         queryOpenOrders={queryOpenOrders}
//                                         cancelOrder={cancelOrder}
//                                         advanceQueryOpenOrders={advanceQueryOpenOrders}
//                                         clearQueryOpenOrders={clearQueryOpenOrders}
//                                         InstrumentsData={InstrumentsData}
//                                     />
//                                 </div>
//                                 <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
//                                     <OrderHistory
//                                         OrderHistory={this.props.OrderHistory}
//                                         queryOrderHistory={queryOrderHistory}
//                                         InstrumentsData={InstrumentsData}
//                                         advanceQueryOrderHistory={advanceQueryOrderHistory}
//                                         clearQueryOrderHistory={clearQueryOrderHistory}
//                                     />
//                                 </div>
//                             </HBCard>
//                         </HBAssetsColumn>
//                         <HBAssetsColumn grid={`main`}>
//                             <HBCard>
//                                 <UtilityToken UtilityTokens={UtilityTokens} />
//                             </HBCard>
//                         </HBAssetsColumn>
//                     </HBAssetsRow>
//                 </HBContainer>
//                 {/* <Switch>
//                     <Route path={`${match.url}/deposit`}
//                         component={() => {
//                         return <Deposit getDepositInfo={getDepositInfo} AccountInfo={AccountInfo} Products={Products} />
//                         }}
//                     />
//                     <Route path={`${match.url}/withdraw`} component={Withdraw} />
//                 </Switch> */}
//             </HBAsset>
//         );
//     }
// }

// export default Assets;