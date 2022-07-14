import { combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';

import cards from './modules/cards';

const middlewares = [thunk];
const rootReducer = combineReducers({cards});
const enhancer = applyMiddleware(...middlewares);


let store = createStore(rootReducer, enhancer);

export default store;