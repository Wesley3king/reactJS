import { createStore, combineReducers } from "redux";

import reducer from "./estudos/index.js";
import layoutMessage from "./layout"
let obj = {
    estudos : reducer,
    layout : layoutMessage
}
console.log(obj);
const rootReducer = combineReducers(obj);

export default createStore(rootReducer);