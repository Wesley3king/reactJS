import { createStore, combineReducers } from "redux";

import layoutMessage from "./layout";
import reducer from "./estudos/index.js";
let obj = {
    layout : layoutMessage,
    estudos : reducer,
}
console.log(obj);
const rootReducer = combineReducers(obj);

export default createStore(rootReducer);