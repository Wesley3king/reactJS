import { configureStore }  from "@reduxjs/toolkit";

import products from './ducks/products/index';
import selected from "./ducks/selected";
import usuarios from "./ducks/usuarios";
import drinks from "./ducks/drinks";
import { removeUser } from "./ducks/usuarios";


/*
 middlewares
};*/

const loggerMiddleware = store => next => action => {
    console.log('middleware', action);

    next(action);
};
const confirmMiddleware = store => next => action => {
    console.log(action.payload);
    if (action.type === removeUser.type) {
        if (window.confirm(`Voce deseja realmente excluir ${action.payload}`)) {
            next(action);
        }
    }else {
        next(action);
    }
}

export default configureStore({
    reducer: {
        products: products,
        selected: selected,
        usuarios: usuarios,
        drinks: drinks,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware).concat(confirmMiddleware),
});