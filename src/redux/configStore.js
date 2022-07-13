import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from "redux";

import cards from './modules/cards';


const rootReducer = combineReducers({
    cards
});


let store = createStore(rootReducer);

export default store;