import React from "react"
import { showMessage, hideMessage } from "./index"

describe('Layout Actions', ()=> {
    describe('Actions Types', ()=> {
        test('deve mostrar a action type showMessage', ()=>{
            expect(showMessage.type).toEqual('showMessage');
        });

        test('deve mostrar a action type hideMessage', ()=>{
            expect(hideMessage.type).toEqual('hideMessage');
        });
    });

    describe('Actions creators', ()=> {
        test('deve retornar  a action creator showMessage', ()=>{
            expect(showMessage()).toEqual({ type: 'showMessage'});
        });

        test('deve mostrar a action creator hideMessage', ()=>{
            expect(hideMessage()).toEqual({type: 'hideMessage'});
        });
    });
})