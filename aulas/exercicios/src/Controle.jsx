import React from 'react';

export default class Controle extends React.Component {


    render () {
        return (
            <>
             <div className='control'>
                 {console.log(this.props.play)}
                <div>{this.props.play?"jogar":"parar"}</div>
             </div>
            </>
        )
    }
}