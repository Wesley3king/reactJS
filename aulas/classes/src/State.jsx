import React from "react";
import './Bola.css';

export default class State extends React.Component {
    constructor (props) {
        super(props);
        this.aula = props.numero;
        this.state={
            ligado: false
        }
    }
    conf () {
        this.setState({ligado : !this.state.ligado});
    }
    render() {
        return (
            <>
                <h2>#{this.aula} - state em clases</h2>
                <br />
                <div className={this.state.ligado ? "bola2" : "bola"}></div>
                <p>&gt; estado : {this.state.ligado ? "sim" : "não"}</p>
                <button onClick={()=> this.conf()}>{this.state.ligado ? "desligar" : "ligar"}</button>
                <p> - ou - </p>
                <button onClick={()=> this.setState({ligado : !this.state.ligado})}>{this.state.ligado ? "desligar" : "ligar"}</button>
                <hr />
            </>
        )
    }
}