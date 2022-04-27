import React from "react";
import "./Calc.css";

export default class Tela extends React.Component{

    see () {
        console.log(`passo : ${this.props.passo}`)
        if (this.props.passo) {
                return this.props.res;
        }else{
            return this.props.val;
        }
    }
    render () {
        return (
            <div>
                <div className="tela"><p>{this.see()}</p></div>
            </div>
        )
    }
}