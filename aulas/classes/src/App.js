import React,{useState} from 'react';
import Classe from './Classe';
import State from './State';
import State2 from './State2';
import Bind from './Bind';
import Life from './Life';
import Static from './Stacic';

import Globais from './Globais';
import './App.css';

function App() {
  const [valid,setValid] = useState(true);
  return (
    <>
    <div className='App'>
    <h1>{Globais.canal}</h1>
     <Classe valor="HELLO WORD!"/>
    </div>
    <section className='App'>
      <State numero="22"/>
    </section>
    <section className='App'>
      <State2 />
    </section>
    <section className='App'>
      <Bind />
    </section>
    <section className='App'>
      {valid ? <Life remove={valid} set={setValid}/> : ''}
    </section>
    <section className='App'>
      <Static />
    </section>
    </>
  );
}

export default App;
