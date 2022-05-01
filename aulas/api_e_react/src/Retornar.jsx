import React from "react";
import axios from 'axios';
export default class Retornar extends React.Component{
constructor (props) {
    super(props);
    this.state ={
        carros: []
    }
}
componentDidMount() {
    axios.get('https://aulasdereact38.kingofshadow.repl.co')
    .then(res => {
        this.setState({carros: res.data});
    }).catch(e => console.log(`erro : ${e}`));
}

    render () {
        return (
            <div>
                <h1>#38 e 39 - consumo de api com nodejs e axios em react</h1>
                {this.state.carros.map(carro=> <div key={carro.id}>{`${carro.id} - ${carro.modelo} : ${carro.marca}`}</div>)}
            </div>
        )
    }
}