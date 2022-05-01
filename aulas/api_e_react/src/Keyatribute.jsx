import React from "react";

function Lista (props) {
    let v = props.numeros;
    let res = v.map(item => <li key={item.toString()}>{item}</li>);

    return res;
}

const num = [1,2,3,4,5,7,9,10]

export default function Keyatribute() {

    return (
        <>
        <Lista numeros={num}/>
        </>
    )
}