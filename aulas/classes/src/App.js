import React from 'react';
import Classe from './Classe';
import State from './State';
import State2 from './State2';
import Bind from './Bind';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
    <h1>CFB Cursos</h1>
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
    </>
  );
}

export default App;
