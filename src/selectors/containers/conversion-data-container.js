import { createSelector } from 'reselect';
import { get } from 'lodash';

import { InstrumentsDataSelector } from './../entities/instruments-data-selector';
import { ProductsDataSelector } from './../entities/products-selector';
import { Level1DataSelector } from './../entities/level1-data-selector';
import { PRODUCTIDS } from './../../helpers/config';

export const ConversionTable = createSelector(
	[ ProductsDataSelector, Level1DataSelector, InstrumentsDataSelector ],
	(ProductsDataEntity, Level1DataEntity, InstrumentsDataEntity) => {
		const product2List = ['BTC', 'ETH', 'TUSD']; 
		let conversionTable = {};

		if ( 
			InstrumentsDataEntity.Completed && 
			Level1DataEntity.Completed 
		) {
			InstrumentsDataEntity.Data.forEach( instrument => {
				const { InstrumentId, Symbol, Product1, Product1Symbol, Product2, Product2Symbol } = instrument;

				if ( 
					PRODUCTIDS.includes(instrument.Product1) && 
					product2List.includes(Product2Symbol) && 
					Level1DataEntity.Data[InstrumentId] &&
					! Symbol.startsWith(`BT_`)
				) {
					conversionTable[Product1Symbol] = get(conversionTable, Product1Symbol, {})
					conversionTable[Product1Symbol][Product2Symbol] = Level1DataEntity.Data[InstrumentId].LastTradedPx
				}
			})
		}

		return conversionTable;
	}
);