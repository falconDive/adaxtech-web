import { createSelector } from 'reselect';

import { ProductsDataSelector } from './../entities/products-selector';
import { PRODUCTIDS } from './../../helpers/config';

export const Products = createSelector([ ProductsDataSelector ], (ProductsDataEntity) => {
	if (ProductsDataEntity.Completed) {
		const Data = ProductsDataEntity.Data.filter((i) => PRODUCTIDS.includes(i.ProductId));
		return {
			Completed: true,
			Data
		};
	}

	return {
		Completed: false,
		Data: []
	};
});
