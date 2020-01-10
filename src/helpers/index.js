import { floor } from 'lodash'
import numeral from 'numeral';
import parseDecimalNumber from 'parse-decimal-number';

const TUSD = 'TUSD'
const BTC = 'BTC'
const ETH = 'ETH'

export const translateOrder = (order) => {
    let changeType;
    if (order[3] === 0) {
        changeType = 'NEW';
    } else if (order[3] === 1) {
        changeType = 'UPDATE';
    } else if (order[3] === 2) {
        changeType = 'DELETE';
    }
    const sequenceNumber = order[0];
    const traders = order[1];
    const timestamp = order[2];
    const lastTradedPrice = order[4];
    const orders = order[5];
    const price = order[6];
    const instrumentId = order[7];
    const quantity = order[8];
    const side = order[9];

    const orderObject = {
        sequenceNumber,
        traders,
        timestamp,
        changeType,
        lastTradedPrice,
        orders,
        price,
        instrumentId,
        quantity,
        side,
    };
    return orderObject;
}

export const formatTrades = (arrayTrades) => {
    const trades = arrayTrades.length ? arrayTrades.map((info) => {
        return {
            TradeId: info[0],
            ProductPairCode: info[1],
            Quantity: +info[2],
            Price: +info[3],
            Order1: info[4],
            Order2: info[5],
            TradeTime: info[6],
            Direction: info[7],
            Side: info[8],
            IsBlockTrade: info[9] ? true : false,
        };
    }) : [];

    return trades;
}

export const formatResponse = (response, type = 1, shouldHave = true) => {
    if (type === 1) { // array
        if (response && response !== {}) {
            return { responseData: response, Code: 1 }
        }
        return { responseData: [], Code: -1 }
    } else if (type === 2) { // object
        if (response && response !== {}) {
            return { responseData: response, Code: 1 }
        }
        return { responseData: {}, Code: -1 }
    }
}

export function zerosFormatter(value, valueLength) {
    let valueString = value.toString();

    if (valueString.length !== valueLength) {
        const length = valueLength - valueString.length;
        for (let i = 0; i < length; i++) {
            valueString = `0${valueString}`;
        }
    }
    return valueString;
}

export function getTimeFormatEpoch(epoch) {
    if (epoch !== ' ') {
        const date = new Date((epoch));
        let hours = date.getHours();
        const suffix = (hours >= 12) ? 'PM' : 'AM';

        hours = (hours > 12) ? hours - 12 : hours;
        hours = hours === '00' ? 12 : hours;
        return `${zerosFormatter((date.getMonth() + 1), 2)}/${zerosFormatter(date.getDate(), 2)}/${date.getFullYear()} ${zerosFormatter(hours, 2)}:${zerosFormatter(date.getMinutes(), 2)} ${suffix}`; // eslint-disable-line max-len
    }

    return epoch;
}



export function generatePages(totalPages, page) {
    const start = (page - 2) > 0 ? page - 2 : 0;
    const end = (page + 3) <= totalPages ? page + 3 : totalPages;
    const pages = []

    for (let x = start; x < end; x++) {
        const pageNum = {
            page: x,
            selected: x === page ? true : false,
            tag: `page`
        }
        pages.push(pageNum)
    }

    if (pages.length) {
        pages.unshift({
            page: 0,
            selected: false,
            tag: `first`
        })
        pages.push({
            page: totalPages - 1,
            selected: false,
            tag: `last`
        })
    }

    return pages
}

export function getTotalPages(dataLength, maxLines) {
    return Math.ceil(dataLength / maxLines)
}

export function dataSorter(data, sortBy = ``, sort = `asc`) {
    return data.sort((a, b) => {
        if (sort && sortBy) {
            if (sort === `asc`) {
                if (a[sortBy] < b[sortBy]) return 1;
                if (a[sortBy] > b[sortBy]) return -1;
                return 0;
            } else {
                if (a[sortBy] < b[sortBy]) return -1;
                if (a[sortBy] > b[sortBy]) return 1;
                return 0;
            }
        } else {
            if (a[sortBy] < b[sortBy]) return 1;
            if (a[sortBy] > b[sortBy]) return -1;
            return 0;
        }
    })
}


export const formatNumberToLocale = (val, digits = 8) => {
    if (isNaN(val) || val < 0) {
        return `0.00`
    }
    return floor(val, digits).toLocaleString(`en`, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    })
}

export function parseNumberToLocale(value, negativeIsNaN = true) {
    const { delimiters } = numeral.localeData(`en`);
    if (value === '' || value === delimiters.decimal) return 0;
    const parsed = parseDecimalNumber(value, numeral.localeData(`en`).delimiters);
    return negativeIsNaN && parsed < 0 ? NaN : parsed;
}

export function getDecimalPrecision(a) {
    if (!isFinite(a) || isNaN(a)) return 0;
    let e = 1;
    let p = 0;
    while (Math.round(a * e) / e !== a) {
        e *= 10;
        p++;
    }
    return p;
}



export function getPriceForFixedQuantity(quantity, padding = 0, orders = [], fill = false, places = 2) {
    const paddedQty = quantity + (padding * quantity);
    let price = 0;
    let remainingQty = paddedQty;
    let lastOrderPrice = 0;

    orders.some(order => {
        if (remainingQty > order.quantity) {
            price += order.quantity * order.price;
        } else {
            price += remainingQty * order.price;
        }
        remainingQty -= order.quantity;
        lastOrderPrice = order.price;
        return remainingQty <= 0;
    });

    if (fill && remainingQty > 0) {
        price += remainingQty * lastOrderPrice;
        remainingQty = 0;
    }
    if (remainingQty > 0) return '-';
    return { Price: price, LimitPrice: parseFloat(Number(lastOrderPrice).toFixed(places)) };
}

export function truncateToDecimals(value, decimalPlaces) {
    if (isNaN(value)) return false;
    const multi = 10 ** decimalPlaces;
    return Math.floor(value * multi) / multi;
}


export function getQuantityForFixedPrice(price, padding = 0, orders = [], fill = false, places = 2) {
    const paddedPrice = price + (padding * price);
    let sum = 0;
    let quantity = 0;
    let lastPrice;
    let remainingPrice = paddedPrice;
    let lastOrder = { Price: 0 };

    if (orders.length) {
        orders.some(order => {
            const orderTotal = order.quantity * order.price;
            sum += orderTotal;
            if (sum < paddedPrice) {
                quantity += order.quantity;
            } else {
                const remainder = paddedPrice - (sum - orderTotal);
                quantity += remainder / order.price;
                lastPrice = order.price;
            }
            remainingPrice -= orderTotal;
            lastOrder = order;
            return sum >= paddedPrice;
        });
    } else {
        return { Price: price, Quantity: quantity, LimitPrice: 0 };
    }
    if (fill && remainingPrice > 0) {
        quantity += remainingPrice / lastOrder.price;
        sum = paddedPrice;
    }
    if (sum < paddedPrice) return { Price: price, Quantity: '-' };
    const LimitPrice = parseFloat(Number(lastPrice || lastOrder.price).toFixed(places));
    return { Price: price, Quantity: quantity, LimitPrice };
}


export const convertToTUSD = ({ conversionTable, unit, value}) => {
    const conversion = conversionTable[unit]
    let multiplier = 0

    if (conversion) {
        if ( conversion.hasOwnProperty(TUSD) ) {
            multiplier = conversion[TUSD]
        } else if ( conversion.hasOwnProperty(BTC) ) {
            multiplier = conversion[BTC] * conversionTable[BTC][TUSD]
        } else if ( conversion.hasOwnProperty(ETH) ) {
            multiplier = conversion[ETH] * conversionTable[ETH][TUSD]
        }
    }

    return value * multiplier 
}