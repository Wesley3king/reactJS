import React from "react";
import Campo from "./Campo";

export default class Jogo extends React.Component {
 constructor (props) {
     super(props);
     this.state={
         jogo : false,
         chanches: [5,5],
         areas : [
         [<p></p>,<p></p>,<p></p>],
         [<p></p>,<p></p>,<p></p>],
         [<p></p>,<p></p>,<p></p>]
        ],
        campos: []

     }

 }

load () {
    let elements = [];
    this.state.areas.forEach(item => item.forEach(e => elements.push(<Campo p={e}/>)));
}

    render () {
        return (
        <>
         
        </>
        )
    }
}