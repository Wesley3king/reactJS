import React from 'react';
import Button from './Button';
import './Calc.css';

export default class Teclado extends React.Component {

    render () {
        return (
            <>
            <div className='line'>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="clear" texto="AC"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="raiz" texto="&radic;"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.propspas} res={this.props.res} valor="porcent" texto="%"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.propspas} res={this.props.res} valor="/" texto="&#247;"/>
            </div>
            <div className='line'>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="7" texto="7"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="8" texto="8"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="9" texto="9"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pares={this.props.res} valor="*" texto="x"/>
            </div>
            <div className='line'>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} mt={this.props.mt} res={this.props.res} valor="4" texto="4"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} mt={this.props.mt} res={this.props.res} valor="5" texto="5"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} mt={this.props.mt} res={this.props.res} valor="6" texto="6"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} valor="-" texto="-"/>
            </div>
            <div className='line'>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="1" texto="1"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="2" texto="2"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="3" texto="3"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="+" texto="+"/>
            </div>
            <div className='line'>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="0" texto="0"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="-" texto="+/-"/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="." texto="."/>
            <Button fase={this.props.fase} setFase={this.props.setFase} one={this.props.one} setOne={this.props.setOne} two={this.props.two} setTwo={this.props.setTwo} setP={this.props.setP} pas={this.props.pas} res={this.props.res} valor="=" texto="="/>
            </div>

            </>
        )
    }
}