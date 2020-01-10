import AP_SUBSCRIPTION_ACTION_TYPES from './../actions/AP-subscriptions-action-types'

import { translateOrder } from './../helpers'

const initialState = {
    SubscribeTrades: {
        Data: [],
        Response: {
            Code: 0,
            Message: ``
        },
        Loading: false,
        Completed: false,
    },
    SubscribeLevel1: {
        Data: {},
        Response: {
            Code: 0,
            Message: ``
        },
        History: {},
        Loading: false,
        Completed: false,
    },
    SubscribeLevel2: {
        Data: {
            Buy: [],
            Sell: [],
        },
        Response: {
            Code: 0,
            Message: ``
        },
        Loading: false,
        Completed: false,
    },
    SubscribeTicker: {
        Data: [],
        Response: {
            Code: 0,
            Message: ``
        },
        Loading: false,
        Completed: false,
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_TRADES_INPROGRESS: {
            return {
                ...state,
                SubscribeTrades: {
                    ...state.SubscribeTrades,
                    Data: [],
                    Loading: true,
                    Completed: false
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_TRADES_COMPLETED: {
            return {
                ...state,
                SubscribeTrades: {
                    ...state.SubscribeTrades,
                    Data: payload.Data,
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.TRADE_DATA_UPDATE_EVENT_COMPLETED: {
            return {
                ...state,
                SubscribeTrades: {
                    ...state.SubscribeTrades,
                    Data: [...state.SubscribeTrades.Data, payload.Data],
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.UNSUBSCRIBE_TRADES_COMPLETED: {
            return {
                ...state,
                SubscribeTrades: {
                    ...state.SubscribeTrades,
                    Data: [],
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_LEVEL1_INPROGRESS: {
            return {
                ...state,
                SubscribeLevel1: {
                    ...state.SubscribeLevel1,
                    Data: {},
                    Loading: true,
                    Completed: false
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_LEVEL1_COMPLETED: {
            const { InstrumentId } = payload.Data
            const level1Data = state.SubscribeLevel1.Data
            level1Data[InstrumentId] = payload.Data

            const History = state.SubscribeLevel1.History
            if (! History.hasOwnProperty(InstrumentId)) {
                History[InstrumentId] = [];
            }

            History[InstrumentId].push(payload.Data)

            if (History[InstrumentId].length > 500) {
                const exceed = History[InstrumentId].length - 500;
                History[InstrumentId] = History[InstrumentId].splice(exceed)
            }

            return {
                ...state,
                SubscribeLevel1: {
                    ...state.SubscribeLevel1,
                    History,
                    Data: level1Data,
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.UNSUBSCRIBE_LEVEL1_COMPLETED: {
            return {
                ...state,
                SubscribeLevel1: {
                    ...state.SubscribeLevel1,
                    Data: {},
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_LEVEL2_INPROGRESS: {
            return {
                ...state,
                SubscribeLevel2: {
                    ...state.SubscribeLevel2,
                    Data: {
                        Buy: [],
                        Sell: [],
                    },
                    Loading: true,
                    Completed: false
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_LEVEL2_COMPLETED: {

            const data = payload.Data.length ? payload.Data.map(translateOrder) : []

            const Buy = data.filter(obj => obj.side === 0)
            const Sell = data.filter(obj => obj.side === 1)

            return {
                ...state,
                SubscribeLevel2: {
                    ...state.SubscribeLevel2,
                    Data: {
                        Buy,
                        Sell,
                    },
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_LEVEL2_UPDATE_EVENT_COMPLETED: {
            const data = payload.Data.length ? payload.Data.map(translateOrder) : []
            // console.log()
            let Buy = state.SubscribeLevel2.Data.Buy
            let Sell = state.SubscribeLevel2.Data.Sell

            let newBuy = data.filter(obj => obj.side === 0)
            let newSell = data.filter(obj => obj.side === 1)

            // console.log(`Buy : `, Buy)
            // console.log(`state.SubscribeLevel2.Data : `, state.SubscribeLevel2.Data)
            if (newBuy.length) {
                newBuy.forEach((obj) => {
                    // newBuyTmp = oldBuy.filter(lev => lev.price !== obj.price);
                    Buy = Buy.filter(lev => lev.price !== obj.price);

                    Buy = obj.quantity ? Buy.concat(obj) : Buy
                    // if (obj.changeType === `NEW`) {
                    //     newBuy.push(obj)
                    // }

                    // if (obj.changeType === `UPDATE`) {
                    //     newBuy.push(obj)
                    // }

                    // newBuy = [...newBuy, newBuyTmp]
                    // console.log(`changeType : `, obj.changeType)
                    // console.log(`newBuyTmp : `, newBuyTmp)
                    // newBuy.forEach((currentOrderObj, index) => {
                    //     if (currentOrderObj.price === obj.price) {
                    //         newBuy.splice(index, 1)
                    //     }
                    // })
                    // if (obj.changeType === `New`) {
                    //     newBuy.push(obj)
                    // }

                });
            }
            if (newSell.length) {
                newSell.forEach((obj) => {
                    Sell = Sell.filter(lev => lev.price !== obj.price);
                    Sell = obj.quantity ? Sell.concat(obj) : Sell
                });
            }

            let Data = {
                Buy: Buy,
                Sell: Sell,
                totalSum: 0
            }

            // let totalSum = 0
            // let buyPositionSum = 0
            // let sellPositionSum = 0

            // if (Buy.length) {
            //     Data.Buy = Buy.sort((a, b) => {
            //         if (+a.price > +b.price) return -1;
            //         if (+a.price < +b.price) return 1;
            //         return 0;
            //     });
            // }

            // if (Sell.length) {
            //     Data.Sell = Sell.map(orderObj => {
            //         sellPositionSum += orderObj.quantity
            //         totalSum += orderObj.quantity

            //         return { ...orderObj, positionSum: sellPositionSum }
            //     }).sort((a, b) => {
            //         if (+a.price > +b.price) return -1;
            //         if (+a.price < +b.price) return 1;
            //         return 0;
            //     });
            // }

            // Data.totalSum = totalSum

            return {
                ...state,
                SubscribeLevel2: {
                    ...state.SubscribeLevel2,
                    Data: Data,
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.UNSUBSCRIBE_LEVEL2_COMPLETED: {
            return {
                ...state,
                SubscribeLevel2: {
                    ...state.SubscribeLevel2,
                    Data: {
                        Buy: [],
                        Sell: [],
                    },
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_TICKER_INPROGRESS: {
            return {
                ...state,
                SubscribeTicker: {
                    ...state.SubscribeTicker,
                    Data: {},
                    Loading: true,
                    Completed: false
                }
            }
        }
        case AP_SUBSCRIPTION_ACTION_TYPES.SUBSCRIBE_TICKER_COMPLETED: {
            return {
                ...state,
                SubscribeTicker: {
                    ...state.SubscribeTicker,
                    Data: payload.Data,
                    Response: {
                        Code: payload.Code,
                        Message: payload.Message
                    },
                    Loading: false,
                    Completed: true
                }
            }
        }

        case AP_SUBSCRIPTION_ACTION_TYPES.TICKER_DATA_UPDATE_EVENT: {
            const Data = state.SubscribeTicker.Data
            Data.push(payload)
            return {
                ...state,
                SubscribeTicker: {
                    ...state.SubscribeTicker,
                    Data,
                    Loading: false,
                    Completed: true
                }
            }
        }
        default:
            return state
    }
}
