import React from "react";
import Controle from "./Controle";
import './Game.css';

export default class Jogo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            jogo: false,
            espacos: [['','',''],['','',''],['','','']]
            ,
            ativo: 'x'
        }
    }

    tabuleiro () {
        return (
            <div className="alinhar">
                <div className="lineH">
                   <div className="colocar"></div>
                   <div className="colocar"></div>
                   <div className="colocar"></div>
                </div>
                <div className="lineH">
                    <div className="colocar"></div>
                    <div className="colocar"></div>
                    <div className="colocar"></div>
                </div>
                <div className="lineH">
                    <div className="colocar"></div>
                    <div className="colocar"></div>
                    <div className="colocar"></div>
                </div>
            </div>
        )
    }
    render () {
        return (
            <>
            {this.tabuleiro()}
            <div>
                <Controle play={this.state.jogo}/>
            </div>
            </>
        )
    }
}