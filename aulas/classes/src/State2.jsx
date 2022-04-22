import React from "react";
import './Bola.css';

export default class State2 extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            ligado: false,
            numero: 0
        }
    }

    render () {
        return (
            <>
                <h2>#23 - state em clases</h2>
                <br />
                <div className={this.state.ligado ? "bola2" : "bola"}></div>
                <p>&gt; estado : {this.state.ligado ? "sim" : "não"}</p>
                <button onClick={()=> this.setState(state => ({ligado: !state.ligado}))}>{this.state.ligado ? "desligar" : "ligar"}</button>

                <section>
                    <p>conatgem : {this.state.numero}</p>
                    <button onClick={()=> this.setState(state => ({numero: ++state.numero}))}>somar</button>
                </section>
                <hr />
            </>
        )
    }
}