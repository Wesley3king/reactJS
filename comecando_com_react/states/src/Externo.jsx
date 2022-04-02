import React from "react";

export default function Externo (props) {
    return (
        <>
        <div>
            <p>valor de number em Externo : {props.number}</p>
            <button onClick={()=> props.setNumber(props.number+10)}>somar mais 10 a number</button>
        </div>
        </>
    )
}