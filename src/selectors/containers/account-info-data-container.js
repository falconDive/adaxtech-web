import { createSelector } from 'reselect';
import { reduce } from 'lodash';

import { AccountPositionsSelector } from './../entities/user-data-selector';
import { SelectedInstrumentDataSelector, InstrumentsDataSelector } from './../entities/instruments-data-selector';
import { ProductsDataSelector, allowedProducts } from './../entities/products-selector';
import { Level1DataSelector } from './../entities/level1-data-selector';
import { PRODUCTIDS } from './../../helpers/config';

export const AccountPositions = createSelector(
	[ AccountPositionsSelector, ProductsDataSelector ],
	(AccountPositionsEntity, ProductsDataEntity) => {
		if (AccountPositionsEntity.Completed && ProductsDataEntity.Completed) {
			const Data = AccountPositionsEntity.Data.map((obj) => {
				let CryptoIcon = null;

				const ProductData = reduce(
					ProductsDataEntity.Data.filter((prod) => {
						return prod.ProductId === obj.ProductId;
					})
				);

				try {
					CryptoIcon = require(`./../../assets/crypto/${obj.ProductSymbol}.svg`);
				} catch (error) {
					// CryptoIcon = null
					CryptoIcon = require('./../../assets/crypto/BTC.svg');
				}

				return { ...obj, CryptoIcon, DecimalPlaces: ProductData.DecimalPlaces };
			});
			return {
				Data,
				Completed: true
			};
		}
		return {
			Data: [],
			Completed: false
		};
	}
);

// const allowedProducts = [1, 2, 3, 6, 7, 8]

export const UtilityTokens = createSelector(
	[ AccountPositionsSelector, ProductsDataSelector, Level1DataSelector, InstrumentsDataSelector ],
	(AccountPositionsEntity, ProductsDataEntity, Level1DataEntity, InstrumentsDataEntity) => {
		// console.log(Level1DataEntity, 'Level1DataEntity')
		// console.log(InstrumentsDataEntity, 'InstrumentsDataEntity')

		if (
			AccountPositionsEntity.Completed &&
			ProductsDataEntity.Completed &&
			Level1DataEntity.Data &&
			InstrumentsDataEntity.Completed
		) {
			const Data = AccountPositionsEntity.Data.filter((i) => allowedProducts.includes(i.ProductId)).map((obj) => {
				let CryptoIcon = null;

				const ProductData = reduce(
					ProductsDataEntity.Data.filter((prod) => {
						return prod.ProductId === obj.ProductId;
					})
				);

				// console.log(ProductData, 'ProductData')

				const AccountPositionInstrumentToTUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return (
							i.Product1Symbol === ProductData.Product &&
							i.Product2Symbol === `TUSD` &&
							!i.Symbol.includes(`BT_`)
						);
					})
				);

				// const AccountPositionInstrumentToBTC = reduce(InstrumentsDataEntity.Data.filter((i) => {
				//     return i.Product1Symbol === ProductData.Product && i.Product2Symbol === `BTC` && !i.Symbol.includes(`BT_`)
				// }))

				// const AccountPositionInstrumentToTUSD = true;
				// console.log(AccountPositionInstrumentToTUSD)

				let AccountPositionInstrumentToBTC = null;
				let AccountPositionInstrumentToETH = null;

				// let AccountPositionBTCEquivalent = 0
				// let AccountPositioETHEquivalent = 0
				// let AccountPositioTUSDEquivalent = 0

				// if (obj.ProductSymbol === `BTC`) {
				//     AccountPositionBTCEquivalent = obj.Amount
				//     console.log(AccountPositionBTCEquivalent, 'AccountPositionBTCEquivalent')
				// } else if (obj.ProductSymbol === `TUSD`) {
				//     AccountPositioTUSDEquivalent = obj.Amount
				//     console.log(AccountPositioTUSDEquivalent, 'AccountPositioTUSDEquivalent')
				// }

				// const ETH2BTC = reduce(InstrumentsDataEntity.Data.filter((i) => {
				//     return i.Product1Symbol === `ETH` && i.Product2Symbol === `BTC` && !i.Symbol.includes(`BT_`)
				// }))

				const BTC2TUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return i.Product1Symbol === `BTC` && i.Product2Symbol === `TUSD` && !i.Symbol.includes(`BT_`);
					})
				);

				const ETCH2TUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return i.Product1Symbol === `ETH` && i.Product2Symbol === `TUSD` && !i.Symbol.includes(`BT_`);
					})
				);

				if (!AccountPositionInstrumentToTUSD) {
					AccountPositionInstrumentToBTC = reduce(
						InstrumentsDataEntity.Data.filter((i) => {
							return (
								i.Product1Symbol === ProductData.Product &&
								i.Product2Symbol === `BTC` &&
								!i.Symbol.includes(`BT_`)
							);
						})
					);

					if (!AccountPositionInstrumentToBTC) {
						AccountPositionInstrumentToETH = reduce(
							InstrumentsDataEntity.Data.filter((i) => {
								return (
									i.Product1Symbol === ProductData.Product &&
									i.Product2Symbol === `ETH` &&
									!i.Symbol.includes(`BT_`)
								);
							})
						);

						if (
							AccountPositionInstrumentToETH &&
							ETCH2TUSD &&
							Level1DataEntity.Data[AccountPositionInstrumentToETH.InstrumentId] &&
							Level1DataEntity.Data[ETCH2TUSD.InstrumentId]
						) {
							const tmpConvertedBalance =
								Level1DataEntity.Data[AccountPositionInstrumentToETH.InstrumentId].LastTradedPx *
								(obj.Amount - obj.Hold) *
								Level1DataEntity.Data[ETCH2TUSD.InstrumentId].LastTradedPx;
							obj.BalanceToTUSD = tmpConvertedBalance;
						}
					} else {
						if (
							Level1DataEntity.Data[AccountPositionInstrumentToBTC.InstrumentId] &&
							Level1DataEntity.Data[BTC2TUSD.InstrumentId]
						) {
							const tmpConvertedBalance =
								Level1DataEntity.Data[AccountPositionInstrumentToBTC.InstrumentId].LastTradedPx *
								(obj.Amount - obj.Hold) *
								Level1DataEntity.Data[BTC2TUSD.InstrumentId].LastTradedPx;
							obj.BalanceToTUSD = tmpConvertedBalance;
						}
					}
				} else {
					const ToTUSDLevel1 = Level1DataEntity.Data[AccountPositionInstrumentToTUSD.InstrumentId];

					if (ToTUSDLevel1 !== undefined) {
						const bal = obj.Amount - obj.Hold;

						if (obj.ProductSymbol === 'BTC') {
							localStorage.setItem('BtcLastTradedPx', ToTUSDLevel1.LastTradedPx);
						}

						// console.log(obj.ProductSymbol)
						// if (["LTC", "HYB", "XRP"].indexOf(obj.ProductSymbol) > -1) {
						//     obj.BalanceToTUSD = parseFloat(localStorage.getItem('BtcLastTradedPx')) * bal / ToTUSDLevel1.LastTradedPx
						// } else {
						obj.BalanceToTUSD = ToTUSDLevel1.LastTradedPx * bal;
						// }
					} else {
						// console.log(obj);
						// const BalanceToTUSD = ToTUSDLevel1.LastTradedPx * (obj.Amount - obj.Hold)
						// obj.BalanceToTUSD = BalanceToTUSD
					}
				}

				// if (AccountPositionInstrumentToTUSD !== undefined) {
				//     const ToTUSDLevel1 = Level1DataEntity.Data[AccountPositionInstrumentToTUSD.InstrumentId]
				//     console.log(Level1DataEntity.Data, AccountPositionInstrumentToTUSD.InstrumentId)
				//     if (ToTUSDLevel1) {
				//         const BalanceToTUSD = ToTUSDLevel1.LastTradedPx * (obj.Amount - obj.Hold)
				//         obj.BalanceToTUSD = BalanceToTUSD
				//     }
				// }

				try {
					CryptoIcon = require(`./../../assets/crypto/${obj.ProductSymbol}.svg`);
				} catch (error) {
					// CryptoIcon = null
					CryptoIcon = require('./../../assets/crypto/BTC.svg');
				}
				return { ...obj, CryptoIcon, DecimalPlaces: ProductData.DecimalPlaces };
			});
			return {
				Data,
				Completed: true
			};
		}
		return {
			Data: [],
			Completed: false
		};
	}
);

export const UtilityTokensV1 = createSelector(
	[ AccountPositionsSelector, ProductsDataSelector, Level1DataSelector, InstrumentsDataSelector ],
	(AccountPositionsEntity, ProductsDataEntity, Level1DataEntity, InstrumentsDataEntity) => {
		// console.log(Level1DataEntity, 'Level1DataEntity')
		// console.log(InstrumentsDataEntity, 'InstrumentsDataEntity');
		if (
			AccountPositionsEntity.Completed &&
			ProductsDataEntity.Completed &&
			Level1DataEntity.Data &&
			InstrumentsDataEntity.Completed
		) {
			const Data = AccountPositionsEntity.Data.filter((i) => PRODUCTIDS.includes(i.ProductId)).map((obj) => {
				let CryptoIcon = null;
				obj.BalanceToTUSD = 0;
				const ProductData = reduce(
					ProductsDataEntity.Data.filter((prod) => {
						return prod.ProductId === obj.ProductId;
					})
				);
				const AccountPositionInstrumentToTUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return (
							i.Product1Symbol === ProductData.Product &&
							i.Product2Symbol === `TUSD` &&
							!i.Symbol.includes(`BT_`)
						);
					})
				);

				let AccountPositionInstrumentToBTC = null;
				let AccountPositionInstrumentToETH = null;

				// let AccountPositionBTCEquivalent = 0
				// let AccountPositioETHEquivalent = 0
				// let AccountPositioTUSDEquivalent = 0

				// if (obj.ProductSymbol === `BTC`) {
				//     AccountPositionBTCEquivalent = obj.Amount
				//     console.log(AccountPositionBTCEquivalent, 'AccountPositionBTCEquivalent')
				// } else if (obj.ProductSymbol === `TUSD`) {
				//     AccountPositioTUSDEquivalent = obj.Amount
				//     console.log(AccountPositioTUSDEquivalent, 'AccountPositioTUSDEquivalent')
				// }

				// const ETH2BTC = reduce(InstrumentsDataEntity.Data.filter((i) => {
				//     return i.Product1Symbol === `ETH` && i.Product2Symbol === `BTC` && !i.Symbol.includes(`BT_`)
				// }))

				const BTC2TUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return i.Product1Symbol === `BTC` && i.Product2Symbol === `TUSD` && !i.Symbol.includes(`BT_`);
					})
				);

				const ETCH2TUSD = reduce(
					InstrumentsDataEntity.Data.filter((i) => {
						return i.Product1Symbol === `ETH` && i.Product2Symbol === `TUSD` && !i.Symbol.includes(`BT_`);
					})
				);

				if (!AccountPositionInstrumentToTUSD) {
					AccountPositionInstrumentToBTC = reduce(
						InstrumentsDataEntity.Data.filter((i) => {
							return (
								i.Product1Symbol === ProductData.Product &&
								i.Product2Symbol === `BTC` &&
								!i.Symbol.includes(`BT_`)
							);
						})
					);

					if (!AccountPositionInstrumentToBTC) {
						AccountPositionInstrumentToETH = reduce(
							InstrumentsDataEntity.Data.filter((i) => {
								return (
									i.Product1Symbol === ProductData.Product &&
									i.Product2Symbol === `ETH` &&
									!i.Symbol.includes(`BT_`)
								);
							})
						);

						if (
							AccountPositionInstrumentToETH &&
							ETCH2TUSD &&
							Level1DataEntity.Data[AccountPositionInstrumentToETH.InstrumentId] &&
							Level1DataEntity.Data[ETCH2TUSD.InstrumentId]
						) {
							const tmpConvertedBalance =
								Level1DataEntity.Data[AccountPositionInstrumentToETH.InstrumentId].LastTradedPx *
								(obj.Amount - obj.Hold) *
								Level1DataEntity.Data[ETCH2TUSD.InstrumentId].LastTradedPx;
							obj.BalanceToTUSD = tmpConvertedBalance;
						}
					} else {
						if (
							Level1DataEntity.Data[AccountPositionInstrumentToBTC.InstrumentId] &&
							Level1DataEntity.Data[BTC2TUSD.InstrumentId]
						) {
							const tmpConvertedBalance =
								Level1DataEntity.Data[AccountPositionInstrumentToBTC.InstrumentId].LastTradedPx *
								(obj.Amount - obj.Hold) *
								Level1DataEntity.Data[BTC2TUSD.InstrumentId].LastTradedPx;
							obj.BalanceToTUSD = tmpConvertedBalance;
						}
					}
				} else {
					const ToTUSDLevel1 = Level1DataEntity.Data[AccountPositionInstrumentToTUSD.InstrumentId];
					if (ToTUSDLevel1) {
						const BalanceToTUSD = ToTUSDLevel1.LastTradedPx * (obj.Amount - obj.Hold);
						obj.BalanceToTUSD = BalanceToTUSD;
					}
				}

				try {
					CryptoIcon = require(`./../../assets/crypto/${obj.ProductSymbol}.svg`);
				} catch (error) {
					// CryptoIcon = null
					CryptoIcon = require('./../../assets/crypto/BTC.svg');
				}

				return { ...obj, CryptoIcon, DecimalPlaces: ProductData.DecimalPlaces };
			});
			return {
				Data,
				Completed: true
			};
		}
		return {
			Data: [],
			Completed: false
		};
	}
);

export const SelectedAccountPosition = createSelector(
	[ AccountPositionsSelector, SelectedInstrumentDataSelector, InstrumentsDataSelector, ProductsDataSelector ],
	(AccountPositionsEntity, SelectedInstrumentDataEntity, InstrumentsDataEntity, ProductsDataEntity) => {
		if (AccountPositionsEntity.Completed && InstrumentsDataEntity.Completed && ProductsDataEntity.Completed) {
			const selectedInstrumentData = reduce(
				InstrumentsDataEntity.Data.filter((obj) => {
					return obj.InstrumentId === SelectedInstrumentDataEntity.InstrumentId;
				})
			);

			const AccountPosition1 = reduce(
				AccountPositionsEntity.Data.filter((obj) => {
					return obj.ProductId === selectedInstrumentData.Product1;
				})
			);
			const AccountPosition2 = reduce(
				AccountPositionsEntity.Data.filter((obj) => {
					return obj.ProductId === selectedInstrumentData.Product2;
				})
			);

			const Product1Data = reduce(
				ProductsDataEntity.Data.filter((obj) => {
					return obj.ProductId === selectedInstrumentData.Product1;
				})
			);

			const Product2Data = reduce(
				ProductsDataEntity.Data.filter((obj) => {
					return obj.ProductId === selectedInstrumentData.Product2;
				})
			);

			AccountPosition1.TradableAmount = AccountPosition1.Amount - AccountPosition1.Hold;
			AccountPosition1.DecimalPlaces = Product1Data.DecimalPlaces;

			try {
				AccountPosition1.CryptoIcon = require(`./../../assets/crypto/${AccountPosition1.ProductSymbol}.svg`);
			} catch (error) {
				AccountPosition1.CryptoIcon = require('./../../assets/crypto/BTC.svg');
			}

			AccountPosition2.TradableAmount = AccountPosition2.Amount - AccountPosition2.Hold;
			AccountPosition2.DecimalPlaces = Product2Data.DecimalPlaces;

			try {
				AccountPosition2.CryptoIcon = require(`./../../assets/crypto/${AccountPosition2.ProductSymbol}.svg`);
			} catch (error) {
				AccountPosition2.CryptoIcon = require('./../../assets/crypto/BTC.svg');
			}

			const Data = {
				AccountPosition1,
				AccountPosition2
			};

			return {
				Data,
				Completed: true
			};
		}
		return {
			Data: null,
			Completed: false
		};
	}
);
