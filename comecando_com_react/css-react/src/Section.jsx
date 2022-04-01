import React from 'react';
import './App.css';

export default function section (){
    const css_interno = {
        color: 'lime',
        fontWeight: 'bold'
    }
    return (
        <section>
            <h1>estilizando as coisas com css</h1>
            <div>
                <p style={{color:'gray',fontSize:'18px'}}>exemplo de css inline</p>
            </div>
            <div>
                <p style={css_interno}>exemplo de css interno</p>
            </div>
            <div className='externo'>
                <p>exemplo de css com clsses (css externo)</p>
                <blockquote>aqui uso css esterno!</blockquote>
            </div>
        </section>
    )
}