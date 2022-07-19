import React,{useState, useEffect} from 'react';
import './App.css';
import Aula3 from './Aula3';
import { useSelector, useDispatch } from 'react-redux';
import {add_estudo} from './store/ducks/estudos';
import {showMessage, hideMessage} from './store/ducks/layout';
import { getAllEstudos, add_learning_fetch } from './store/fetchActions';

import api from "./services/api";

function App() {

  const dispatch = useDispatch();
  const [form, setForm] = useState('');
  const study = useSelector(state => state.estudos);

  function formChange (e) {
    setForm(e.target.value);
    console.log(form);
  }

  useEffect(()=> { dispatch(getAllEstudos()) },[ dispatch ]);

  function onSubmit (e) {
    e.preventDefault();

    console.log("it is the form ",form);

    api.post('http://127.0.0.1:4000/add', {texto: form})
            .then(res => { console.log(res.data);dispatch(add_estudo(res.data))})
            .catch(console.log);

    //add_learning_fetch({texto: form});

    setForm('');

    dispatch(showMessage());

    setTimeout(()=>{ dispatch(hideMessage()); console.log("dispachar a mensagem")}, 2500);
  }

  return (
    <div className='App'>
      <h1> estudando redux </h1>
      <div>
        {study.map( obj => <p>{obj["texto"]}</p>)}
      </div>
      <div>
        <hr />
        <h1>aula 02 - inserindo dados na store</h1>
        <form>
          <input placeholder='adicionar estudo' value={form.name} onChange={formChange}></input>
          <button onClick={onSubmit}>adicionar</button>
        </form>
      </div>
      <section>
        <Aula3 />
      </section>
    </div>
  );
}

export default App;
