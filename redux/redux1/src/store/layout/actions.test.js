import React from "react"
import { Types, Creators } from "./index"

describe('Layout Actions', ()=> {
    describe('Actions Types', ()=> {
        test('deve mostrar a action type showMessage', ()=>{
            expect(Types.showMessage).toEqual('showMessage');
        });

        test('deve mostrar a action type hideMessage', ()=>{
            expect(Types.hideMessage).toEqual('hideMessage');
        });
    });

    describe('Action creators', ()=> {
        test('deve retornar o { type : showMessage }', ()=> {
            expect(Creators.showMessage()).toEqual({type : Types.showMessage})
        });

        test('deve retornar o { type : hideMessage }', ()=> {
            expect(Creators.hideMessage()).toEqual({type : Types.hideMessage})
        });
    });
})