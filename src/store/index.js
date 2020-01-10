import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';
const initialState = {};



function _getFinalCreateStore(middlewares) {
    return compose(applyMiddleware(...middlewares))(createStore);
}

const sagaMiddleware = createSagaMiddleware();
const finalCreateStore = _getFinalCreateStore([sagaMiddleware]);
const finalReducer = combineReducers(reducers);
// const store = finalCreateStore(finalReducer, initialState);
const store = finalCreateStore(finalReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Run the sagas
sagaMiddleware.run(sagas);

export default store;
