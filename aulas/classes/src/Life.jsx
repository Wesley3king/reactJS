import React from "react";

export default class Life extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            contar: 0
        }

    }
    componentDidMount () {
        console.log(`apos o loading : HEY! HEY!`);
    }
    componentDidUpdate () {
        console.log(`atualização realizada : LET'S! LET'S!`);
    }
    componentWillUnmount () {
        console.log('componte removido! -- OH NO!');
    }

    render() {
        return (
        <div>
        <h1>#25 - ciclo de vida dos componentes</h1>
        <br />
        <p>ações como carregar, atualizar, remover... geram ciclos no react.</p>
        <br />
        <p>contagem : {this.state.contar}</p>
        <button type="submit" onClick={()=> this.setState(state => ({contar: state.contar+1}))}>somar</button>
        <button onClick={()=> this.props.set(!this.props.remove)}>remover</button>
        </div>
        )}
}