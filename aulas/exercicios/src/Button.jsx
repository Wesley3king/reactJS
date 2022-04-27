import React from "react";
import './Calc.css';

export default class Button extends React.Component {
    constructor (props) {
        super(props);

        this.action = this.controle.bind(this);
    }

    controle () {
        if (this.props.valor === "=") { 
            if (this.props.two === "porcent"){
                let exec = new Function('',`return ${this.props.one.replace('porcent','*')}`);
                console.log(`porcent : ${exec()/100}`);
                this.props.res(`${exec()/100}`);
            }else if (this.props.two === "raiz"){
                this.props.res(`${Math.sqrt(Number(this.props.one.replace('raiz','')))}`);
            }else{
                let exec = new Function('',`return ${this.props.one}`);
            this.props.res(`${exec()}`);
            console.log(`final : ${exec()}`);

            }
            this.props.setP(!this.props.pas);
          }else if (true && this.props.valor !== "=") {
              this.props.setOne(`${this.props.one}${this.props.valor}`);
              console.log(this.props.one);

              if (this.props.valor === "raiz") {
                  this.props.setTwo("raiz")
              }else if (this.props.valor === "porcent") {
                this.props.setTwo("porcent");
            }
          }

          if (this.props.valor=== "clear") {
            this.props.setTwo("");
            this.props.setOne("");
            this.props.res("");
            this.props.setP(false);
          }
    }

    render () {
        return (
            <>
            <button type="submit" className="bt" onClick={this.action}>{this.props.texto}</button>
            </>
        )
    }
}