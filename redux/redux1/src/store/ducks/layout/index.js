import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    showMessage: false
 };

// Actions types
export const Types = {
    showMessage: "showMessage",
    hideMessage: "hideMessage"
 };
//actions creators
export const showMessage = createAction(Types.showMessage);
export const hideMessage = createAction(Types.hideMessage);

//criar o reducer
export default createReducer(initialState, {
    [showMessage.type]: (state,action)=> ({...state, showMessage: true}),
    [hideMessage.type]: (state,action)=> ({...state, showMessage: false})
});
/*
export default (state = initialState, action) => {
    switch (action.type) {
        case showMessage.type : 
        console.log("mostrar a menssagem");
            return {...state, showMessage : true};
        case hideMessage.type :
            return {...state, showMessage: false};
        default : 
            return state;
    };
};*/