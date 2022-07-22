//import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

// actions
export const add_estudo = createAction('Add_estudo');
export const fetchEstudos = createAction('Fetch_Estudos');


//reducer
export default createReducer(INITIAL_STATE, {
    [add_estudo.type]: (state, action) => [ ...state, action.payload ],
    [fetchEstudos.type]: (state, action) => [ ...action.payload ]
});