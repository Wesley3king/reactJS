import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];
const usuarios = createSlice({
    name: "usuarios",
    initialState: INITIAL_STATE,
    reducers: {
        addUser (state, { payload }) {
            return [...state, payload];
        },
        removeUser (state, { payload }) {
            return state.filter( user => user !== payload);
        }
    }
});

export const { addUser, removeUser } = usuarios.actions;
 
export default usuarios.reducer;