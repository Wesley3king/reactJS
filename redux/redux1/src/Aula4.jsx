import React from "react";
import { Link } from "react-router-dom";

export default function Aula4 (props) {

    return (
        <div>
            <div>
                <hr />
                <h1>aula 04 - testes unitarios</h1>
                <hr />
            </div>
            <div>
                <h2>shop : <Link to="/shop">ir para o shop</Link></h2>
            </div>
            <div>
                <p>itens no shop : {props.shopItems.length}</p>
            </div>
        </div>
    )
}