import React from "react";
import './Game.css';

export default class Campo extends React.Component {

componentDidMount(){
    console.log(this.props.p);
}
 mudar () {
    this.props.p = this.props.vez;
    
 }
    render () {
        return (
            <>
            <div className="colocar" onClick={()=> this.mudar()}>
               <p>{this.props.p}</p>
            </div>
            </>
        )
    }
}