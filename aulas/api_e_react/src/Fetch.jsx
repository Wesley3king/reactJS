import React from "react";

export default class Fetch extends React.Component {

    constructor () {
        super();
        this.state = {
            carros: []
        }
    }

    componentDidMount () {
        fetch('https://aulasdereact38.kingofshadow.repl.co')
        .then(res => res.json())
        .then(data=> this.setState({carros : data})).catch(e=> console.log(`fetch erro : ${e}`));
    }

    render () {
        return (
            <div>
                {this.state.carros.map(carro => <div key={carro.id}>{carro.id} - {carro.modelo} : {carro.marca}</div>)}
            </div>
        )
    }
}