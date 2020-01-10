import { createSelector } from 'reselect'

import { OrderFeeDataSelector } from './../entities/exchange-selector'
import { ProductsDataSelector } from './../entities/products-selector'

export const OrderFeeData = createSelector(
    [
        OrderFeeDataSelector,
        ProductsDataSelector
    ], (
        OrderFeeDataEntity,
        ProductsDataEntity
    ) => {
        if (OrderFeeDataEntity.Completed && ProductsDataEntity.Completed) {

            const { OrderFee, ProductId } = OrderFeeDataEntity.Data
            const FeeProduct = ProductsDataEntity.Data.find(p => p.ProductId === ProductId)

            if (FeeProduct) {
                return {
                    Completed: true,
                    Data: {
                        OrderFee,
                        ProductId,
                        DecimalPlaces: FeeProduct.DecimalPlaces,
                        ProductSymbol: FeeProduct.Product,
                    }
                }
            }

            return {
                Completed: true,
                Data: {
                    OrderFee,
                    ProductId,
                    DecimalPlaces: 2,
                    ProductSymbol: ``
                }
            }
        }

        return {
            Completed: false,
            Data: null
        }
    }
)
