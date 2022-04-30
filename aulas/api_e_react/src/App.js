import React from 'react';
import Retornar from './Retornar';
import RetornarFuncional from './RetornarFuncional';
import Fetch from './Fetch';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h1>#38 e 39 - consumo de api com nodejs e axios em react</h1>
        <Retornar />
      </section>
      <section>
        <h2>#40 - consumo de api em componentes funcionais</h2>

        <RetornarFuncional />
      </section>
      <section>
          <h2>#41 - consumo de api com fetch</h2>
          <Fetch />
      </section>
    </div>
  );
}

export default App;
