import React from 'react';
import Retornar from './Retornar';
import RetornarFuncional from './RetornarFuncional';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h1>#38 e 39 - consumo de api com nodejs e axios em react</h1>
        <Retornar />
      </section>
      <section>
        <h1>#40 - consumo de api em componentes funcionais</h1>

        <RetornarFuncional />
      </section>
    </div>
  );
}

export default App;
