import React from "react";
import './Bola.css';

export default class State2 extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            ligado: false,
            numero: 0
        }
        this.cont= this.contar.bind(this);
        this.on = this.ligar.bind(this);
    }
    contar () {
        this.setState(state => ({numero: ++state.numero}))
    }
    ligar () {
        this.setState(state => ({ligado: !state.ligado}))
    }
    render () {
        return (
            <>
                <h2>#24 - método bind em react</h2>
                <p>o método bind facilita o acionamento do método na classe.</p>
                <br />
                <div className={this.state.ligado ? "bola2" : "bola"}></div>
                <p>&gt; estado : {this.state.ligado ? "sim" : "não"}</p>
                <button onClick={this.on}>{this.state.ligado ? "desligar" : "ligar"}</button>

                <section>
                    <p>conatgem : {this.state.numero}</p>
                    <button onClick={this.cont}>somar</button>
                </section>
                <hr />
            </>
        )
    }
}