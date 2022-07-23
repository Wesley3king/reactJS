import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const selected = createSlice({
    name: "selected",
    initialState: INITIAL_STATE,
    reducers: {
        addSelected (state, { payload }) {
            return [...state, payload];
        }
    }
});

export const { addSelected } = selected.actions;

export default selected.reducer;