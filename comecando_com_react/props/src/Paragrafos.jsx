import React from 'react';
import Somar from './somar';
export default function Paragrafos (props) {
    const go = (a, b) =>{return a + b;}, valores = [5, 3];
    return (
        <>
        <p>nome : {props.name}</p>
        <p>idade : {props.old}</p>
        <p>profissão : {props.work}</p>
        <div>
            <Somar go={go} valor={valores}></Somar>
        </div>
        </>
    )
}