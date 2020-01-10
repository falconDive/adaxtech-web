import { createSelector } from 'reselect';
import { keys, filter, reduce } from 'lodash';

import { InstrumentsDataSelector, SelectedInstrumentDataSelector } from './../entities/instruments-data-selector';
import { Level1DataSelector } from './../entities/level1-data-selector';
import { ProductsDataSelector } from './../entities/products-selector';

export const InstrumentsTickerData = createSelector(
	[ InstrumentsDataSelector, SelectedInstrumentDataSelector, Level1DataSelector, ProductsDataSelector ],
	(InstrumentsDataEntity, SelectedInstrumentDataEntity, Level1DataEntity, ProductsDataEntity) => {
		if (InstrumentsDataEntity.Completed && Level1DataEntity.Completed && ProductsDataEntity.Completed) {
			const DataTmp = keys(Level1DataEntity.Data);
			// console.log(Level1DataSelector, "InstrumentsDataEntity")

			const BTCTickerData = [];
			const ETHTickerData = [];
			const TUSDTickerData = [];
			const USDTTickerData = [];
			let Selected = null;

			DataTmp.forEach((elm) => {
				const ins = reduce(
					filter(InstrumentsDataEntity.Data, (obj) => {
						return obj.InstrumentId === +elm;
					})
				);
				if (ins) {
					const Product1Data = reduce(
						ProductsDataEntity.Data.filter((prod) => {
							return prod.ProductId === ins.Product1;
						})
					);
					const Product2Data = reduce(
						ProductsDataEntity.Data.filter((prod) => {
							return prod.ProductId === ins.Product2;
						})
					);

					if (ins.Product2Symbol === `BTC`) {
						BTCTickerData.push({
							...ins,
							Product1DecimalPlaces: Product1Data.DecimalPlaces,
							Product2DecimalPlaces: Product2Data.DecimalPlaces,
							...Level1DataEntity.Data[elm]
						});
					} else if (ins.Product2Symbol === `ETH`) {
						ETHTickerData.push({
							...ins,
							Product1DecimalPlaces: Product1Data.DecimalPlaces,
							Product2DecimalPlaces: Product2Data.DecimalPlaces,
							...Level1DataEntity.Data[elm]
						});
					} else if (ins.Product2Symbol === `TUSD` && !ins.Symbol.startsWith(`BT_`)) {
						TUSDTickerData.push({
							...ins,
							Product1DecimalPlaces: 2,
							Product2DecimalPlaces: 2,
							...Level1DataEntity.Data[elm]
						});
					} else if (ins.Product2Symbol === `USDT` && !ins.Symbol.startsWith(`BT_`)) {
						USDTTickerData.push({
							...ins,
							Product1DecimalPlaces: 2,
							Product2DecimalPlaces: 2,
							...Level1DataEntity.Data[elm]
						});
					}
					if (SelectedInstrumentDataEntity.InstrumentId === +elm) {
						Selected = {
							...ins,
							Product1DecimalPlaces: Product1Data.DecimalPlaces,
							Product2DecimalPlaces: Product2Data.DecimalPlaces,
							...Level1DataEntity.Data[elm]
						};
					}
					// CAN BE USED FOR FUTURE
					// Data.push({
					//     ...ins,
					//     ...Level1DataEntity.Data[elm]
					// })
				}
			});

			return {
				Data: {
					1: BTCTickerData,
					2: ETHTickerData,
					3: TUSDTickerData,
					4: USDTTickerData,
					Completed: true
				},
				Selected: {
					Data: Selected,
					Completed: Selected ? true : false
				}
			};
		}

		return {
			Data: {
				1: [],
				2: [],
				3: [],
				4: [],
				Completed: false
			},
			Selected: {
				Data: null,
				Completed: false
			}
		};
	}
);
