const SERVER_URL = 'https://api.basetrade.io';
// const API_GATEWAY = 'http://127.0.0.1:3010';
const API_GATEWAY = 'https://stagingapi.adaxtech.com';
const BLOCKPASS_URL = 'https://asia-api.blockpass.org';
const ENV = 'production'
// production pairs
const PAIRS = [ 'ETHBTC', 'XRPBTC', 'LTCBTC', 'HYBETH', 'ZRXETH', 'REPETH', 'BTCTUSD', 'ETHTUSD', 'PASSTUSD', 'JOYUSDT', 'BTCUSDT', 'ETHUSDT'];
const PAIRSID = [ 3, 5, 8, 9, 28, 33, 34, 35];
//PASSETH - 29, PASSBTC - 30, PASSTUSD - 28, XRPBTC 7, LTCBTC 19, ZRXETH 12, REPETH 14, 

const PRODUCTIDS = [ 1, 2, 6, 7, 20, 22, 23];
//Product ID - 20, 8 XRP, 9 ZRX, 10 REP, 13 LTC

export { PAIRS, PAIRSID, PRODUCTIDS, SERVER_URL, API_GATEWAY, BLOCKPASS_URL };
