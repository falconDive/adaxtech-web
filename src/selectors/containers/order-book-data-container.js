import { createSelector } from 'reselect';

import { OrderBookDataSelector } from './../entities/order-book-data-selector';

export const OrderBookData = createSelector([ OrderBookDataSelector ], (OrderBookDataEntity) => {
	if (OrderBookDataEntity.Data.Buy.length || OrderBookDataEntity.Data.Sell.length && OrderBookDataEntity.Completed) {
		let totalSum = 0;
		let buyPositionSum = 0;
		let sellPositionSum = 0;

		const Buy = OrderBookDataEntity.Data.Buy
			.sort((a, b) => {
				if (+a.price > +b.price) return -1;
				if (+a.price < +b.price) return 1;
				return 0;
			})
			.map((orderObj) => {
				buyPositionSum += orderObj.quantity;
				totalSum += orderObj.quantity;
				return { ...orderObj, positionSum: buyPositionSum };
			});

		const Sell = OrderBookDataEntity.Data.Sell
			.sort((a, b) => {
				if (+a.price > +b.price) return 1;
				if (+a.price < +b.price) return -1;
				return 0;
			})
			.map((orderObj) => {
				sellPositionSum += orderObj.quantity;
				totalSum += orderObj.quantity;

				return { ...orderObj, positionSum: sellPositionSum };
			})
			.reverse();

		const newBuy = Buy;

		const newSell = Sell;

		// console.log(`orderObj`, ordersObj)
		// console.log(`totalSum`, totalSum)

		// const finalOrdersObj = ordersObj.map((orderObj) => {
		//     const positionProgressValue = (orderObj.positionSum / totalSum) * 100
		//     return {
		//         ...orderObj,
		//         positionProgressValue
		//     }
		// })

		return {
			Buy: newBuy,
			Sell: newSell,
			TotalOrderQuantity: totalSum,
			// TotalOrderQuantity: OrderBookDataEntity.Data.totalSum,
			Completed: false,
			Loading: true
		};
	}
	// return OrderBookDataEntity
	return {
		Buy: [],
		Sell: [],
		TotalOrderQuantity: 0,
		Completed: false,
		Loading: true
	};
});
