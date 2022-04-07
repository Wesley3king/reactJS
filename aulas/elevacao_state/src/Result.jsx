import React from "react";

export default function Result (props) {
let result = parseFloat(props.data.nota1)+parseFloat(props.data.nota2)+parseFloat(props.data.nota3)+parseFloat(props.data.nota4);
    return (
        <>
         <p><strong> somatória das notas : {result? result: "waiting..."}</strong></p>
         <p>{result >= 60? "aprovado":"reprovado"}</p>
        </>
    )
}