import React from "react";

export default class Input extends React.Component {

    render () {
        return (
            <>
            <label htmlFor="calc">{this.props.frase}</label>
             <input type="number" name="calc" value={this.props.valor} onChange={(e)=> this.props.conf(e.target.value)}/>
            </>
        )
    }
}