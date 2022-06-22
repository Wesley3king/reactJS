import { createStore, combineReducers } from "redux";

import reducer from "./estudos/index.js";
let obj = {
    estudos : reducer,
}
console.log(obj);
const rootReducer = combineReducers(obj);

export default createStore(rootReducer);