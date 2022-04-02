import React,{useState} from 'react';
import Header from './Header';
import Externo from './Externo';
import Sojs from './Sojs';
import './App.css';

function App() {
  const [numero,setNumero] = useState(5);
  const [number, setNumber] = useState(10)

  return (
    <div className='align'>
    <Header />
    <div>
     <p>valor de numero : {numero}</p>
     <button onClick={()=>setNumero(numero+5)}>somar 5</button>
    </div >
    <hr />
    <section>
      <p>valor de number em App : {number} </p>
      <Externo number={number} setNumber={setNumber}></Externo>
    </section>
    <Sojs />
    </div>
  );
}

export default App;
