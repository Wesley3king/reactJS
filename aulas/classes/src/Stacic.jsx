import React from "react";
import Globais from "./Globais";

export default class Static extends React.Component {

    render () {
        return (
            <div>
                <hr />
                <h2>variaveis globais static</h2>
                <p>{Globais.curso} do canal {Globais.canal}</p>
            </div>
        )
    }
}