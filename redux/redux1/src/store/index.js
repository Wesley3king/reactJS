//import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import layoutMessage from "./ducks/layout";
import reducer from "./ducks/estudos/index.js";
import ShopReducer from "./ducks/selected";
import authReducer from './ducks/auth/index';

export default configureStore({
    reducer: {
        estudos: reducer,
        layout: layoutMessage,
        shop: ShopReducer,
        auth: authReducer,
    }
});