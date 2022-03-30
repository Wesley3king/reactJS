import React from 'react';
import Img from './gg.jpg';
const imagen1 = './logo512.png';
export default function imagens (){
    return (
        <>
            <img src={imagen1} alt="first img" />
            <img src={Img} alt="second img" />
        </>
    )
}