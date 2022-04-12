import React from "react";
import Retorno from "./Retorno";

export default function Contencao () {
    return (
        <>
        <h2># 18 - conteção</h2>
        <p>nada mais é do que passar elementos dentro dos componentes pelo props e acessalas com props.children</p>
        <Retorno>
            <p>cfb cursos</p>
            <p>curso de react</p>
        </Retorno>
        </>
    )
}