import React,{useState} from 'react';
import State from './State';
import Result from './Result';
import './App.css';

function App() {
//pegar 4 notas devolver a nota final e resultado
  const [data,setData] = useState({"nota1": "","nota2": "","nota3": "","nota4": ""});
  const handleSetNotas = function (valor,onde) {
    if (onde === 1) {
      setData({"nota1": valor,"nota2": data.nota2,"nota3": data.nota3,"nota4": data.nota4});
    }else if (onde ===2) {
      setData({"nota1": data.nota1,"nota2": valor,"nota3": data.nota3,"nota4": data.nota4});
    }else if (onde === 3) {
      setData({"nota1": data.nota1,"nota2": data.nota2,"nota3": valor,"nota4": data.nota4});
    }else if (onde === 4) {
      setData({"nota1": data.nota1,"nota2": data.nota2,"nota3": data.nota3,"nota4": valor});
    }
    console.log(data);
  }

  return (
    <div>
      <State num={1} nota={data.nota1} setNota={handleSetNotas}/>
      <State num={2} nota={data.nota2} setNota={handleSetNotas}/>
      <State num={3} nota={data.nota3} setNota={handleSetNotas}/>
      <State num={4} nota={data.nota4} setNota={handleSetNotas}/>
      <section>
          <Result data={data}/>
      </section>
    </div>
  );
}

export default App;
