import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = [
    "refrigerante",
    "suco",
    "cerveja",
    "soda",
    "chop",
    "cerveja puro malte",

    "hamburger",
    "pizza",
    "churrasco",
    "prato-pronto",
    "marmita",

    "coxinha",
    "pastel",
    "bola de carne",

    "bolo",
    "brigadeiro",
    "beijinho",
    "sorvete"
]

const products = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers:{

    }
})