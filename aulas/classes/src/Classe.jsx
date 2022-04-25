import React from "react";
import Globais from "./Globais";

export default class Classe extends React.Component {
    //parece não ser necessario o uso do construtor para props
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <>
            <h2>{Globais.curso} - Classes</h2>
            <p>este paragrafo está em uma classe</p>
            <br />
            <p>teste de props : {this.props.valor}</p>
            <hr />
            </>
        )
    }
}