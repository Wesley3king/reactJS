import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h2>#42 - rotas de navegação com react router dom</h2>
        <nav>
          <Link to='/Fetch'> teste com fetch</Link>
          <Link to='/Retornar'> teste com axios</Link>
          <Link to='/RetornarFuncional'>teste em componentes funcionais com axios</Link>
          <Link to='/Lista'>atributo key em react</Link>
        </nav>
      </section>
    </div>
  );
}

export default App;
