import React,{useState} from 'react';
// #30 - imports
import Table from './Table';
import Input from './Input';
import Resultado from './Resultado';
//#33 34 - imports
import Teclado from './Teclado';
import Tela from './Tela';

//#35 - 37 - imports
import Jogo from './Jogo';

import './App.css';
const data = [
  {tipo: 'esportivo',preco: 120000,modelo: 't-cross'},
  {tipo: 'esportivo',preco: 110000,modelo: 'camaro'},
  {tipo: 'suv',preco: 90000,modelo: 'HRV'},
  {tipo: 'utilitario',preco: 80000,modelo: 'ranger'},
  {tipo: 'utilitario',preco: 85000,modelo: 'amarok'},
];
function App() {
  const [inp,setInp] = useState('');
  //#30 - estados
  const [alt,setAlt]=useState(0);
  const [peso,setPeso] = useState(0);

//#33 - states
const [fase,setFase] = useState(1);
const [resultado,setResultado] = useState();
const [passo,setPasso] = useState(false);
const [one,setOne] = useState('');
const [two,setTwo] = useState('');


/*const Motor = (setR,v,setPas,passo)=> {

    if (v === "=") {
      if (Globais.second === "+"){
        setR(Number(Globais.first) + Number(Globais.thrird));
      }else if (Globais.second === "-"){
        setR(Number(Globais.first) - Number(Globais.thrird));
      }else if (Globais.second === "*"){
        setR(Number(Globais.first) * Number(Globais.thrird));
      }else if (Globais.second === "/"){
        setR(Number(Globais.first) / Number(Globais.thrird));
      }else if (Globais.second === "raiz"){
        setR(Math.sqrt(Number(Globais.first)));
      }else if (Globais.second === "porcent"){
          let inv = Number(Globais.first) * Number(Globais.thrird);
        setR(inv / 100);
      }
      setPas(!passo);
    }else if (typeof Number(v) === "number" && fase === 1 || v === ".") {
        Globais.first = `${Globais.first}${v}`;
    }else if (typeof Number(v) && fase === 3) {
      Globais.thrird = `${Globais.thrird}${v}`
    }else{
      Globais.second = `${v}`;
      setFase(3)
    }
}*/






  const verificar = ()=>{
    let li = [];
      data.forEach((item)=> {
        if (item.tipo.includes(inp)) {
          li.push(<tr><td>{item.modelo}</td><td>{item.tipo}</td><td>{item.preco}</td></tr>)
        }
      });
    if (li.length === 0 && inp === ''){
                data.forEach((item)=> {
                  li.push(<tr><td>{item.modelo}</td><td>{item.tipo}</td><td>{item.preco}</td></tr>)})
  }
  return li;
}
  return (
    <div className="App">
      <section>
          <h1>#29 - exercicios 1</h1>
          <label>pesquisa por tipo </label>
          <input type="text" value={inp} onChange={(e)=> setInp(e.target.value)}></input>
          <br />
          <table>
            <thead>
              <tr>
                <th>modelo</th><th>tipo</th><th>preço</th>
              </tr>
            </thead>
            <tbody>
                {verificar()}
            </tbody>
          </table>
          <hr />
      </section>
      <section>
        <h2>#30 - calculadora de IMC</h2>
        <Input frase="peso " valor={peso} conf={setPeso}/>
        <Input frase="altura " valor={alt} conf={setAlt}/>
        <Resultado altura={Number(alt)} pes={Number(peso)}/>
        <Table/>
      </section>
      <section className='calc'>
        <h2>#33,34  - calculadora</h2>
        <br />
          <div>
            <Tela passo={passo} res={resultado} val={`${one}`}/>

            <Teclado  one={one} setOne={setOne} two={two} setTwo={setTwo} res={setResultado} setP={setPasso} pas={passo} fase={fase} setFase={setFase}/>
          </div>
          <hr />
      </section>
      <section>
        <h1>#35 - jogo da velha em react</h1>
        <br />
        <div>
          <Jogo />
        </div>
      </section>
    </div>
  );
}

export default App;
