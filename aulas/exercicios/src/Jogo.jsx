import React from "react";
import Campo from "./Campo";
import Lateral from "./Lateral";

export default class Jogo extends React.Component {
 constructor (props) {
     super(props);
     this.state={
         jogo : false,
         chanches: [5,5],
         foi: false,
        campos: [],
        valorVez: 'x'
     }
     this.areas = [
        ['','',''],
        ['','',''],
        ['','','']
       ]
 }

    Motor () {
        let vez = Math.round(Math.random()*1);
        console.log(`vez : ${vez}`);
        if (vez === 0) {
            this.setState(()=> ({valorVez : 'x'}));
        }else {
            this.setState(()=> ({valorVez : 'o'}));
        }
        
    }

    trocarPlayer () {
        this.state.valorVez==="x"? this.setState(()=> ({valorVez: 'o'})) :  this.setState(()=> ({valorVez: 'x'}))
    }

    retPos (e) {
        const p = e.target.getAttribute('data-pos');
        const pos=[parseInt(p.substring(0,1),parseInt(p.substring(1,2)))];
        return pos;
    }

    verificarEspacoVazio (e) {
        if (this.area[this.retPos(e)[0]][this.retPos(e)[1]] === '') {
            return true;
        }else{
            return false;
        }
    }
    vitoria () {
        let pontos =0;
        let vitoria = false;

        //linhas
        for (let l=0;l<3;++l) {
             pontos = 0;
             for (let c =0 ; c < 3 ; ++c) {
                 if (this.areas[l][c]=== this.state.valorVez){
                     pontos++;
                 }
             }
             if (pontos === 3) {
                 vitoria = true;
                 break;
                 
             }
        }

        //colunas
        for (let c=0; c <3; ++c) {
            pontos=0;
            for (let l =0;l<3 ; ++l) {
                if (this.areas[l][c]=== this.state.valorVez){
                    pontos++;
                }
            }
            if (pontos === 3) {
                vitoria = true;
                break;
                
            }
        }
        //diagonais
        pontos = 0;
        for (let d = 0; d < 3;++d) {
            if (this.areas[d][d]){
                if (this.areas[l][c]=== this.state.valorVez){
                    pontos++;
                }
            }
        }
       if (pontos === 3) {
            vitoria = true;
            
        }
            
            pontos=0;
            let l = 0
            for (let c =2;c >=0; c--){
                if (this.areas[l][c]=== this.state.valorVez){
                    pontos++;
                }
                l++;
            }
            if (pontos === 3) {
                vitoria = true;
                
            }
        
            return vitoria;
    }

    render () {
        return (
        <div className="alinhar">
         <Lateral restam={this.state.chanches[0]} tipo="x"vez={this.state.valorVez}/>
         <div className="manter">
             <div className="lineH">
                 <Campo p={this.areas[0][0]} vez={this.state.valorVez}/>
                 <Campo p={this.areas[0][1]} vez={this.state.valorVez}/>
                 <Campo p={this.areas[0][2]} vez={this.state.valorVez}/>
             </div>
             <div className="lineH">
                 <Campo p={this.areas[1][0]} vez={this.state.valorVez}/>
                 <Campo p={this.areas[1][1]} vez={this.state.valorVez}/>
                 <Campo p={this.areas[1][2]} vez={this.state.valorVez}/>
             </div>
             <div className="lineH">
             <Campo p={this.areas[2][0]} vez={this.state.valorVez}/>
             <Campo p={this.areas[2][1]} vez={this.state.valorVez}/>
             <Campo p={this.areas[2][2]} vez={this.state.valorVez}/>
             </div>
         </div>
         <Lateral restam={this.state.chanches[1]} tipo="o" vez={this.state.valorVez}/>
         
        </div>
        )
    }
}