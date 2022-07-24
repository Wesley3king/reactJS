import { createSlice } from "@reduxjs/toolkit";

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
            console.log(payload in state.selecionados)
            return {...state, selecionados: payload in state.selecionados ? state.selecionados.filter( obj => obj !== payload) : [...state.selecionados, payload]}
        }
    }
});

export const { addCursoSelected } = cursos.actions;

export default cursos.reducer;