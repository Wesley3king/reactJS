import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    showMessage: false,
    messages: []
 };

// Actions types
export const Types = {
    showMessage: "showMessage",
    hideMessage: "hideMessage"
 };
//actions creators
export const showMessage = createAction(Types.showMessage);
export const hideMessage = createAction(Types.hideMessage);

export const addMessage = createAction('ADD_MESSAGE');
export const removeMessage = createAction('REMOVE_MESSAGE');


//criar o reducer
export default createReducer(initialState, {
    [showMessage.type]: (state,action)=> ({...state, showMessage: true}),
    [hideMessage.type]: (state,action)=> ({...state, showMessage: false}),
    [addMessage.type]: (state, { payload })=> ({...state, messages: [ ...state.messages, payload ]}),
    [removeMessage.type]: (state, { payload })=> ({...state, messages: state.messages.filter( msg => msg !== payload)})
});