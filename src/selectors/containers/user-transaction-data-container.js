import { createSelector } from 'reselect'

import { reduce } from 'lodash'

import {
    OpenOrdersSelector,
    AccountTransactionsSelector,
    DepositTicketsSelector,
    AccountTradesSelector,
    OrderHistorySelector,
    WithdrawTicketsSelector,
    DepositInfoSelector,
    WithdrawTransactionSelector
} from './../entities/user-transaction-data-selector'
import { InstrumentsDataSelector, } from './../entities/instruments-data-selector'
import { ProductsDataSelector } from './../entities/products-selector'

import { generatePages, getTotalPages, dataSorter } from './../../helpers'

export const OpenOrders = createSelector(
    [
        OpenOrdersSelector,
        InstrumentsDataSelector
    ], (
        OpenOrdersEntity,
        InstrumentsEntity
    ) => {

        if (OpenOrdersEntity.Completed && InstrumentsEntity.Completed) {
            let OpenOrderData = OpenOrdersEntity.Data.map((obj) => {
                const orderInstrument = reduce(InstrumentsEntity.Data.filter((i) => {
                    return i.InstrumentId === obj.Instrument
                }))
                return { ...obj, Symbol: orderInstrument.Symbol }
            })

            const Query = OpenOrdersEntity.Query
            const AdvanceQuery = OpenOrdersEntity.AdvanceQuery
            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            let pages = [];
            let exportData = []
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    OpenOrderData = OpenOrderData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (AdvanceQuery.filter) {

                    if (AdvanceQuery.filter.InstrumentId) {
                        OpenOrderData = OpenOrderData.filter((obj) => {
                            return obj.Instrument === AdvanceQuery.filter.InstrumentId
                        })
                    }
                    if (AdvanceQuery.filter.Side) {
                        OpenOrderData = OpenOrderData.filter((obj) => {
                            return obj.Side === AdvanceQuery.filter.Side
                        })
                    }
                    if (AdvanceQuery.filter.Type) {
                        OpenOrderData = OpenOrderData.filter((obj) => {
                            return obj.OrderType === AdvanceQuery.filter.Type
                        })
                    }

                }

                if (Query.sort && Query.sortBy) {
                    OpenOrderData = dataSorter(OpenOrderData, Query.sortBy, Query.sort)
                } else {
                    OpenOrderData = dataSorter(OpenOrderData, `TradeTime`)
                }

                exportData = OpenOrderData

                if (Query.page) {
                    const totalPages = getTotalPages(OpenOrderData.length, MAX_LINES)
                    OpenOrderData = OpenOrderData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    const totalPages = getTotalPages(OpenOrderData.length, MAX_LINES)
                    OpenOrderData = OpenOrderData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                exportData = OpenOrderData
                const totalPages = getTotalPages(OpenOrderData.length, MAX_LINES)
                OpenOrderData = dataSorter(OpenOrderData, `TradeTime`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                AdvanceQuery,
                Query: Query,
                Data: OpenOrderData,
                ExportData: exportData,
                Pages: pages,
                Completed: true,
            }
        }


        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)

export const AccountTrades = createSelector(
    [
        AccountTradesSelector,
        InstrumentsDataSelector,
        ProductsDataSelector,
    ], (
        AccountTradesSelectorEntity,
        InstrumentsEntity,
        ProductsEntity
    ) => {
        if (AccountTradesSelectorEntity.Completed && InstrumentsEntity.Completed && ProductsEntity.Completed) {
            const Query = AccountTradesSelectorEntity.Query
            let AccountTransactionData = AccountTradesSelectorEntity.Data.map((obj) => {
                const orderInstrument = reduce(InstrumentsEntity.Data.filter((i) => {
                    return i.InstrumentId === obj.InstrumentId
                }))

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product1
                }))
                const product2 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product2
                }))

                const feeProduct = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.FeeProductId
                }))

                let feeData = {
                    FeeDecimalPlaces: 0,
                    Product: ``
                }
                if (feeProduct) {
                    feeData.FeeDecimalPlaces = feeProduct.DecimalPlaces
                    feeData.FeeProduct = feeProduct.Product
                }
                return { ...obj, Symbol: orderInstrument.Symbol, Product1DecimalPlaces: product1.DecimalPlaces, Product2DecimalPlaces: product2.DecimalPlaces, ...feeData }
            })


            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            const totalPages = getTotalPages(AccountTransactionData.length, MAX_LINES)
            let pages = [];

            if (Query) {
                if (Query.filter && Query.filterBy) {
                    AccountTransactionData = AccountTransactionData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (Query.sort && Query.sortBy) {
                    AccountTransactionData = dataSorter(AccountTransactionData, Query.sortBy, Query.sort)
                } else {
                    AccountTransactionData = dataSorter(AccountTransactionData, `TradeTime`)
                }

                if (Query.page) {
                    AccountTransactionData = AccountTransactionData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    AccountTransactionData = AccountTransactionData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                AccountTransactionData = dataSorter(AccountTransactionData, `TradeTime`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                Query: Query,
                Data: AccountTransactionData,
                Pages: pages,
                Completed: true,
            }
        }

        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)


export const OrderHistoryCancelled = createSelector(
    [
        OrderHistorySelector,
        InstrumentsDataSelector,
        ProductsDataSelector
    ], (
        OrderHistoryEntity,
        InstrumentsEntity,
        ProductsEntity
    ) => {

        if (OrderHistoryEntity.Completed && InstrumentsEntity.Completed) {
            let OrderHistoryData = OrderHistoryEntity.Data.map((obj) => {
                const orderInstrument = reduce(InstrumentsEntity.Data.filter((i) => {
                    return i.InstrumentId === obj.Instrument
                }))

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product1
                }))
                const product2 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product2
                }))

                return { ...obj, Symbol: orderInstrument.Symbol, Product1DecimalPlaces: product1.DecimalPlaces, Product2DecimalPlaces: product2.DecimalPlaces }
            })
                .filter((obj) => {
                    return obj.OrderState !== `FullyExecuted` && obj.OrderState !== `Working`
                })

            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            const totalPages = getTotalPages(OrderHistoryData.length, MAX_LINES)
            let pages = [];

            const Query = OrderHistoryEntity.QueryInactive
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    OrderHistoryData = OrderHistoryData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (Query.sort && Query.sortBy) {
                    OrderHistoryData = dataSorter(OrderHistoryData, Query.sortBy, Query.sort)
                } else {
                    OrderHistoryData = dataSorter(OrderHistoryData, `ReceiveTime`)
                }

                if (Query.page) {
                    OrderHistoryData = OrderHistoryData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    OrderHistoryData = OrderHistoryData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                OrderHistoryData = dataSorter(OrderHistoryData, `ReceiveTime`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                Query,
                Data: OrderHistoryData,
                Pages: pages,
                Completed: true,
            }
        }

        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)


export const OrderHistory = createSelector(
    [
        OrderHistorySelector,
        InstrumentsDataSelector,
        ProductsDataSelector
    ], (
        OrderHistoryEntity,
        InstrumentsEntity,
        ProductsEntity
    ) => {

        if (OrderHistoryEntity.Completed && InstrumentsEntity.Completed) {

            let OrderHistoryData = OrderHistoryEntity.Data.map((obj) => {
                const orderInstrument = reduce(InstrumentsEntity.Data.filter((i) => {
                    return i.InstrumentId === obj.Instrument
                }))

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product1
                }))
                const product2 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === orderInstrument.Product2
                }))

                return { ...obj, Symbol: orderInstrument.Symbol, Product1DecimalPlaces: product1.DecimalPlaces, Product2DecimalPlaces: product2.DecimalPlaces }
            })
            // .filter((obj) => {
            //     return obj.OrderState !== `FullyExecuted` && obj.OrderState !== `Working`
            // })

            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            let pages = [];

            let exportData = []
            const Query = OrderHistoryEntity.Query
            const AdvanceQuery = OrderHistoryEntity.AdvanceQuery
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    OrderHistoryData = OrderHistoryData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (AdvanceQuery.filter) {

                    if (AdvanceQuery.filter.InstrumentId) {
                        OrderHistoryData = OrderHistoryData.filter((obj) => {
                            return obj.Instrument === AdvanceQuery.filter.InstrumentId
                        })
                    }
                    if (AdvanceQuery.filter.Side) {
                        OrderHistoryData = OrderHistoryData.filter((obj) => {
                            return obj.Side === AdvanceQuery.filter.Side
                        })
                    }
                    if (AdvanceQuery.filter.Type) {
                        OrderHistoryData = OrderHistoryData.filter((obj) => {
                            return obj.OrderType === AdvanceQuery.filter.Type
                        })
                    }
                    if (AdvanceQuery.filter.Status) {
                        OrderHistoryData = OrderHistoryData.filter((obj) => {
                            return obj.OrderState === AdvanceQuery.filter.Status
                        })
                    }
                }

                if (Query.sort && Query.sortBy) {
                    OrderHistoryData = dataSorter(OrderHistoryData, Query.sortBy, Query.sort)
                } else {
                    OrderHistoryData = dataSorter(OrderHistoryData, `ReceiveTime`)
                }

                exportData = OrderHistoryData

                if (Query.page) {
                    const totalPages = getTotalPages(OrderHistoryData.length, MAX_LINES)
                    OrderHistoryData = OrderHistoryData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    const totalPages = getTotalPages(OrderHistoryData.length, MAX_LINES)
                    OrderHistoryData = OrderHistoryData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                exportData = OrderHistoryData
                const totalPages = getTotalPages(OrderHistoryData.length, MAX_LINES)
                OrderHistoryData = dataSorter(OrderHistoryData, `ReceiveTime`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }



            return {
                Query,
                AdvanceQuery,
                ExportData: exportData,
                Data: OrderHistoryData,
                Pages: pages,
                Completed: true,
            }
        }

        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)


export const WithdrawTickets = createSelector(
    [
        WithdrawTicketsSelector,
        ProductsDataSelector,
    ], (
        WithdrawTicketsEntity,
        ProductsEntity,
    ) => {
        // console.log(WithdrawTicketsEntity, 'WithdrawTicketsEntity')
        if (WithdrawTicketsEntity.Completed && ProductsEntity.Completed) {
            let WithdrawTicketsData = WithdrawTicketsEntity.Data.map((obj) => {

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.AssetId
                }))

                return { ...obj, DecimalPlaces: product1.DecimalPlaces }
            })

            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            const totalPages = getTotalPages(WithdrawTicketsData.length, MAX_LINES)
            let pages = [];

            const Query = WithdrawTicketsEntity.Query
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    WithdrawTicketsData = WithdrawTicketsData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (Query.sort && Query.sortBy) {
                    WithdrawTicketsData = dataSorter(WithdrawTicketsData, Query.sortBy, Query.sort)
                } else {
                    WithdrawTicketsData = dataSorter(WithdrawTicketsData, `TicketNumber`)
                }

                if (Query.page) {
                    WithdrawTicketsData = WithdrawTicketsData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    WithdrawTicketsData = WithdrawTicketsData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                WithdrawTicketsData = dataSorter(WithdrawTicketsData, `TicketNumber`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                Query,
                Data: WithdrawTicketsData,
                Pages: pages,
                Completed: true,
            }
        }

        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)

export const WithdrawTicketsBySelectedAsset = createSelector(
    [
        WithdrawTicketsSelector,
        ProductsDataSelector,
        WithdrawTransactionSelector,
    ], (
        WithdrawTicketsEntity,
        ProductsEntity,
        WithdrawTransactionEntity,
    ) => {
        if (WithdrawTicketsEntity.Completed && ProductsEntity.Completed) {
            let WithdrawTicketsData = WithdrawTicketsEntity.Data.map((obj) => {

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.AssetId
                }))

                try {
                    obj.CryptoIcon = require(`./../../assets/crypto/${product1.Product}.svg`)
                } catch (error) {
                    obj.CryptoIcon = require('./../../assets/crypto/BTC.svg')
                }

                return { ...obj, DecimalPlaces: product1.DecimalPlaces, AssetSymbol: product1.Product }
            })

            let WithdrawTicketsDataAllData = WithdrawTicketsEntity.Data.map((obj) => {

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.AssetId
                }))

                try {
                    obj.CryptoIcon = require(`./../../assets/crypto/${product1.Product}.svg`)
                } catch (error) {
                    obj.CryptoIcon = require('./../../assets/crypto/BTC.svg')
                }

                return { ...obj, DecimalPlaces: product1.DecimalPlaces, AssetSymbol: product1.Product }
            })
            
            if (WithdrawTransactionEntity.SelectedAssetId) {
                WithdrawTicketsData = WithdrawTicketsData.filter(i => {
                    return i.AssetId === WithdrawTransactionEntity.SelectedAssetId
                })
            }
            
            if (WithdrawTransactionEntity.SelectedAssetId) {
                WithdrawTicketsDataAllData = WithdrawTicketsDataAllData.filter(i => {
                    return i.AssetId === WithdrawTransactionEntity.SelectedAssetId
                })
            }
            
            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            const totalPages = getTotalPages(WithdrawTicketsData.length, MAX_LINES)
            let pages = [];

            const Query = WithdrawTicketsEntity.Query
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    WithdrawTicketsData = WithdrawTicketsData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (Query.sort && Query.sortBy) {
                    WithdrawTicketsData = dataSorter(WithdrawTicketsData, Query.sortBy, Query.sort)
                } else {
                    WithdrawTicketsData = dataSorter(WithdrawTicketsData, `TicketNumber`)
                }

                if (Query.page) {
                    WithdrawTicketsData = WithdrawTicketsData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    WithdrawTicketsData = WithdrawTicketsData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                WithdrawTicketsData = dataSorter(WithdrawTicketsData, `TicketNumber`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                Query,
                AllData: WithdrawTicketsDataAllData,
                Data: WithdrawTicketsData,
                Pages: pages,
                Completed: true,
            }
        }

        return {
            Query: {},
            Data: [],
            Pages: [],
            Completed: false,
        }
    }
)

export const DepositTicketsBySelected = createSelector(
    [
        DepositTicketsSelector,
        ProductsDataSelector,
        DepositInfoSelector,
    ], (
        DepositTicketsEntity,
        ProductsEntity,
        DepositInfoEntity,
    ) => {
        if (DepositTicketsEntity.Completed && DepositInfoEntity.Completed) {
            let DepositTicketsData = DepositTicketsEntity.Data.map((obj) => {

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.AssetId
                }))


                try {
                    obj.CryptoIcon = require(`./../../assets/crypto/${product1.Product}.svg`)
                } catch (error) {
                    obj.CryptoIcon = require('./../../assets/crypto/BTC.svg')
                }

                return { ...obj, DecimalPlaces: product1.DecimalPlaces, AssetSymbol: product1.Product }
            })
                .filter(i => {
                    return i.AssetId === DepositInfoEntity.Data.AssetId
                })

            /////// all data
            let DepositTicketsDataAllData = DepositTicketsEntity.Data.map((obj) => {

                const product1 = reduce(ProductsEntity.Data.filter((i) => {
                    return i.ProductId === obj.AssetId
                }))


                try {
                    obj.CryptoIcon = require(`./../../assets/crypto/${product1.Product}.svg`)
                } catch (error) {
                    obj.CryptoIcon = require('./../../assets/crypto/BTC.svg')
                }

                return { ...obj, DecimalPlaces: product1.DecimalPlaces, AssetSymbol: product1.Product }
            })
            .filter(i => {
                return i.AssetId === DepositInfoEntity.Data.AssetId
            })

            const MAX_LINES = 10
            const DEFAULT_PAGE = 0
            const totalPages = getTotalPages(DepositTicketsData.length, MAX_LINES)
            let pages = [];

            const Query = DepositTicketsEntity.Query
            if (Query) {
                if (Query.filter && Query.filterBy) {
                    DepositTicketsData = DepositTicketsData.filter((obj) => {
                        return obj[Query.filterBy].includes(Query.filter.toUpperCase())
                    })
                }

                if (Query.sort && Query.sortBy) {
                    DepositTicketsData = dataSorter(DepositTicketsData, Query.sortBy, Query.sort)
                } else {
                    DepositTicketsData = dataSorter(DepositTicketsData, `TicketNumber`)
                }

                if (Query.page) {
                    DepositTicketsData = DepositTicketsData.slice(MAX_LINES * Query.page, MAX_LINES * (Query.page + 1))
                    pages = generatePages(totalPages, Query.page)
                } else {
                    DepositTicketsData = DepositTicketsData.slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                    pages = generatePages(totalPages, DEFAULT_PAGE)
                }

            } else {
                DepositTicketsData = dataSorter(DepositTicketsData, `TicketNumber`).slice(MAX_LINES * DEFAULT_PAGE, MAX_LINES * (DEFAULT_PAGE + 1))
                pages = generatePages(totalPages, DEFAULT_PAGE)
            }

            return {
                Query,
                AllData: DepositTicketsDataAllData,
                Data: DepositTicketsData,
                Pages: pages,
                Completed: true,
            }
        }
        return {
            Query: null,
            Data: [],
            Pages: [],
            Completed: false,
        }
    })
