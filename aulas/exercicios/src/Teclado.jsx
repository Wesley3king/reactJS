import React from 'react';
import Button from './Button';
import './Calc.css';

export default class Teclado extends React.Component {

    render () {
        return (
            <>
            <div className='line'>
            <Button valor="" texto="AC"/>
            <Button valor="raiz" texto="&radic;"/>
            <Button valor="porcent" texto="%"/>
            <Button valor="/" texto="&#247;"/>
            </div>
            <div className='line'>
            <Button valor="7" texto="7"/>
            <Button valor="8" texto="8"/>
            <Button valor="9" texto="9"/>
            <Button valor="*" texto="x"/>
            </div>
            <div className='line'>
            <Button valor="4" texto="4"/>
            <Button valor="5" texto="5"/>
            <Button valor="6" texto="6"/>
            <Button valor="-" texto="+"/>
            </div>
            <div className='line'>
            <Button valor="1" texto="1"/>
            <Button valor="2" texto="2"/>
            <Button valor="3" texto="3"/>
            <Button valor="+" texto="+"/>
            </div>
            <div className='line'>
            <Button valor="0" texto="0"/>
            <Button valor="negative" texto="+/-"/>
            <Button valor="." texto="."/>
            <Button valor="result" texto="="/>
            </div>

            </>
        )
    }
}