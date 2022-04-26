import React,{useState} from 'react';
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

  const verificar =()=>{
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
          <input type="text" onChange={(e)=> setInp(e.target.value)}></input>
          <br />
          <table style={{borderCollapse: 'collapse'}}>
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
    </div>
  );
}

export default App;
