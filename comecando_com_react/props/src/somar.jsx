import React from 'react';
export default function Somar (props) {
    return (
        <>
        <p>valor da soma entre {props.valor[0]} e {props.valor[1]} : {props.go(props.valor[0], props.valor[1])}</p>
        </>
    );
}