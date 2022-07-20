import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isAuth: false,
}

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE, {
    [login.type] : (state, action) => ({...state, isAuth: true}),
    [logout.type] : (state, action) => ({...state, isAuth: false})
});