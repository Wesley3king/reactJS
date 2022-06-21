import { createStore } from "redux";

const INITIAL_STATE = [
    "estudando redux",
    "estudando react",
    "estudando node",
    "estudando SQL",
    "estudando mongoDB"

]
function reducer (state = INITIAL_STATE, action) {
    return state;
}

export default createStore(reducer);