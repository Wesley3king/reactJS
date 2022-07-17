//import layout from "./index";
import reducer from "../estudos";

describe('layout reducer', ()=> {
    test('deve retornar o state inicial',()=>{
        expect(reducer(undefined, { })).toEqual(["estudando redux", "estudando react", "estudando node", "estudando SQL", "estudando mongoDB"])
    });
});