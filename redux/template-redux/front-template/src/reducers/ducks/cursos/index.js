import { createSlice } from "@reduxjs/toolkit";

export class carItem {
    constructor (obj) {
        obj && Object.assign(this, obj , { quantity: 1});
    };
};

const INITIAL_STATE = { itens: [
    { curso: "html", preco: 500, descricao: "este é um curso de HTML 5, atualizado" },
    { curso: "dart", preco: 1000, descricao: "curso de linguagem dart, com foco em seu framework flutter" },
    { curso: "javascript", preco: 1300, descricao: "curso de javascript ecmascript 6 , com foco em front-end" },
    { curso: "node.js", preco: 900, descricao: "curso de javascript ecmascript 6 ,para criação de servidores" }
],
selecionados : []
};

const cursos = createSlice({
    name: "cursos",
    initialState: INITIAL_STATE,
    reducers: {
        addCursoSelected (state, { payload }) {
            return {...state, selecionados: [ ...state.selecionados, payload ] }
        },
        removeCursoSelected (state, { payload }) {
            return { ...state, selecionados: state.selecionados.filter( (obj,) => obj["curso"] !== payload["curso"])}
        }
    }
});

function verifyExistItem(state, payload) {
    const newItem = new carItem(payload);

    const existItem = state.some(obj => obj["curso"] === newItem["curso"]);
    console.log(existItem)
    if (existItem) {
        console.log(state.map( obj => {
            return obj["curso"] === newItem["curso"] ? { ...obj, quantity: obj.quantity + 1 } : obj}))
        return state.map( obj => {
            return obj["curso"] === newItem["curso"] ? { ...obj, quantity: obj.quantity + 1 } : obj;
        });
    }
    return [...state, newItem]
}

export const { addCursoSelected, removeCursoSelected } = cursos.actions;

export default cursos.reducer;