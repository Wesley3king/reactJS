import React from "react";

export default function Result (props) {
let result = (parseFloat(props.data.nota1)? parseFloat(props.data.nota1): 0)+(parseFloat(props.data.nota2)? parseFloat(props.data.nota2): 0)+(parseFloat(props.data.nota3)? parseFloat(props.data.nota3): 0)+(parseFloat(props.data.nota4)? parseFloat(props.data.nota4): 0);
    return (
        <>
         <p><strong> somatória das notas : {result? result: "waiting..."}</strong></p>
         <p>{result >= 60? "aprovado":"reprovado"}</p>
        </>
    )
}