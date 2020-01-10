import { createSelector } from 'reselect';

const ProductsSelector = ({ Products }) => Products;
export const allowedProducts = [ 1, 2, 6, 7 ];
export const ProductsDataSelector = createSelector(ProductsSelector, (ProductsSelector) => {
	return {
		...ProductsSelector.Fetch
	};
});
