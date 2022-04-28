import React from "react";
import './Game.css';

export default class Lateral extends React.Component {


    faltam () {
        let f = [];
        for (let i = 0; i <this.props.restam;++i){
            f.push(<p>{this.props.tipo}</p>);}
        return f;
    }
    verificar () {
        /*console.log(`res : ${this.props.vez === this.props.tipo} / par1 : ${this.props.vez} / par2 : ${this.props.tipo}`)*/
        if (this.props.vez === this.props.tipo){
            return (<div className="lateralv">
            {this.faltam()}
         </div>)
        }else {
            return (<div className="lateral">
            {this.faltam()}
         </div>)
        }
    }
    render () {
        return (
            <>
            {this.verificar()}
            </>
        )
    }
}