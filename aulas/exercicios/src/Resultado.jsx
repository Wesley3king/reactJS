import React from "react";
export default class Resultado extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            total:  0
        }
    }
    componentDidUpdate(){
        console.log(typeof this.props.altura)
    }
    render () {
        return (
            <div>
                <button type="submit" onClick={()=> this.setState((state)=> ({total: this.props.pes/(this.props.altura*this.props.altura)}))}> calcular </button>
                <p>seu indice de IMC é de {this.state.total.toFixed(1)} .</p>
            </div>
        )
    }
}