//import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import layoutMessage from "./ducks/layout";
import reducer from "./ducks/estudos/index.js";

export default configureStore({
    reducer: {
        estudos: reducer,
        layout: layoutMessage
    }
});