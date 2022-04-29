import React from 'react';

export default class Controle extends React.Component {
constructor (props) {
    super(props);
    this.val = this.props.play;
}

    render () {
        return (
            <div onClick={()=> ""}>{this.props.play?"parar":"jogar"}</div>
        )
    }
}