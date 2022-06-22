//import { createStore } from "redux";

const INITIAL_STATE = [
    "estudando redux",
    "estudando react",
    "estudando node",
    "estudando SQL",
    "estudando mongoDB"
]
function reducer (state = INITIAL_STATE, action) {
    if (action.type === 'Add_estudo') {
        return [...state, action.estudo];
    }
    return state;
}

export default reducer;

export const add_estudo = (estudo) => {
    return {
        type : 'Add_estudo',
        estudo
    }
}