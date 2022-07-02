import React from "react";

import { useSelector } from "react-redux";

export default function Aula3 () {

    const isShow = useSelector((state)=> state.layout.showMessage);
    return (
        <div>
            <hr />
            <h2>aula 03 - Reducer alert de messagem</h2>

            <>
             {isShow ? <p>adicionado</p> : <p>nothing to show</p>}
            </>
        </div>
    );
};