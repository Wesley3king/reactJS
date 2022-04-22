import React from 'react';
import Classe from './Classe';
import State from './State';
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
    </>
  );
}

export default App;
