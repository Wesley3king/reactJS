import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    drinks: [],
    selectedDrink: "",
};

const drinks  = createSlice({
    name: "drinks",
    initialState: INITIAL_STATE,
    reducers: {
        addSelectedDrink (state, { payload }) {
            return {...state, selectedDrink: payload};
        },
        fetchDrinks (state, { payload }) {
            return {...state, drinks: [ ...payload ]};
        },
    }
});

export const { addSelectedDrink, fetchDrinks } = drinks.actions;

export default drinks.reducer;