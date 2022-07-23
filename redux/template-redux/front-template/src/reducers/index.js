import { configureStore }  from "@reduxjs/toolkit";

import products from './ducks/products/index';
import selected from "./ducks/selected";

export default configureStore({
    reducer: {
        products: products,
        selected: selected
    }
});