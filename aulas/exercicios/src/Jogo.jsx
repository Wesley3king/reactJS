import React from "react";
import './Game.css';

export default class Jogo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            restam : [0,0],
            jogo: false,
            espacos: [['','',''],['','',''],['','','']]
            ,
            ativo: Math.round(Math.random()*1) === 1 ? 'o' : 'x'
        }
    }

    inverterPlayer () {
       
        if (this.state.ativo === 'x') {
            this.setState(()=> ({ativo: 'o'}));
        }else{
            this.setState(()=> ({ativo: 'x'}));
        }
    }

    componentDidUpdate () {
        if (this.state.jogo) {
            if (this.verificarVitoria()) {
                this.setState(()=>({espacos: [['','',''],['','',''],['','','']]}));
                this.setState(()=>({jogo: false}));

                if (this.state.ativo === 'x')
                this.setState(()=>this.state.restam[0] = this.state.restam[0]+1);
                else {
                this.setState(()=>this.state.restam[0] = this.state.restam[1]+1);
                }
                window.alert(`vitoria do ${this.state.ativo === 'X'? "O" : "x"}`);
                
            }else{
                let emp = 0;
                    for (let l = 0;l<3;++l) {
                        for (let c = 0;c<3;++c) {
                        if (this.state.espacos[l][c] !== '') {
                           emp++;
                }}
            }
            if (emp === 9) {
                this.setState(()=>({espacos: [['','',''],['','',''],['','','']]}));
                this.setState(()=>({jogo: false}));
                window.alert("empate!");
            }
        }
    }}

    nucleo (e,n1,n2,v) {
        if (this.state.jogo) {
            if (e[n1][n2] === 'x' || e[n1][n2] === 'o') {
                window.alert("this place is ocuped");
            }else{
                this.setState(()=> e[n1][n2] = v);
            }
            this.inverterPlayer();
            /*if (this.verificarVitoria()) {
                this.setState(()=>({espacos: [['','',''],['','',''],['','','']]}));
                this.setState(()=>({jogo: false}));
                window.alert("vitoria do "+v);
            }*/
       
        }
        
    }

    verificarVitoria () {
        let pontos = 0;
        let it = ['x','o'];
        //verificar horizontais
      for (let t = 0; t <2;++t) {
        for (let l = 0;l<3;++l) {
            pontos = 0
            for (let c = 0;c<3;++c) {
            if (this.state.espacos[l][c] === it[t])
                pontos++;
                if (pontos===3) {
                    return true;
                }
            }
                
            }}
        
            pontos = 0;
        //verificar verticais
    for (let t = 0; t <2;++t) {
        for (let c = 0;c<3;++c) {
            pontos = 0
            for (let l = 0;l<3;++l) {
            if (this.state.espacos[l][c] === it[t])
                pontos++;
                if (pontos===3) {
                    return true;
                }
            }
               
            }}
        pontos = 0;
        //verificar cruzadas
            if ((this.state.espacos[0][0] === 'x' && this.state.espacos[1][1] === 'x' && this.state.espacos[2][2] === 'x') || (this.state.espacos[0][0] === 'o' && this.state.espacos[1][1] === 'o' && this.state.espacos[2][2] === 'o')) {
                return true;
            }else if ((this.state.espacos[0][2] === 'x' && this.state.espacos[1][1] === 'x' && this.state.espacos[2][0] === 'x') || (this.state.espacos[0][2] === 'o' && this.state.espacos[1][1] === 'o' && this.state.espacos[2][0] === 'o')) {
                return true;
            }

            
        return false;
    }

    tabuleiro (a,v) {
        
        return (
            <div className="alinhar">
                <div className="lineH">
                   <div className="colocar" onClick={()=> this.nucleo(a,0,0,v)}>{a[0][0]}</div>
                   <div className="colocar" onClick={()=> this.nucleo(a,0,1,v)}>{a[0][1]}</div>
                   <div className="colocar" onClick={()=> this.nucleo(a,0,2,v)}>{a[0][2]}</div>
                </div>
                <div className="lineH">
                    <div className="colocar" onClick={()=> this.nucleo(a,1,0,v)}>{a[1][0]}</div>
                    <div className="colocar" onClick={()=> this.nucleo(a,1,1,v)}>{a[1][1]}</div>
                    <div className="colocar" onClick={()=> this.nucleo(a,1,2,v)}>{a[1][2]}</div>
                </div>
                <div className="lineH">
                    <div className="colocar" onClick={()=> this.nucleo(a,2,0,v)}>{a[2][0]}</div>
                    <div className="colocar" onClick={()=> this.nucleo(a,2,1,v)}>{a[2][1]}</div>
                    <div className="colocar" onClick={()=> this.nucleo(a,2,2,v)}>{a[2][2]}</div>
                </div>
            </div>
        )
    }
    render () {
        return (
            <>
            <p>clique para colocar o : {this.state.ativo}</p>
            {this.tabuleiro(this.state.espacos,this.state.ativo)}
            <div className='control'>
                <p className="zzz">X = {this.state.restam[0]}</p>
                <div onClick={()=> this.setState(state=> ({jogo: !state.jogo}))}>{this.state.jogo?"parar":"jogar"}</div>
                <p className="zzz"> O = {this.state.restam[1]}</p>
            </div>
            </>
        )
    }
}