import React,{useState, useEffect} from 'react';
import './App.css';
import Aula3 from './Aula3';
import Aula4 from './Aula4';
import Form from './componentes/Form';
import { useSelector, useDispatch } from 'react-redux';
import {add_estudo} from './store/ducks/estudos';
import {showMessage, hideMessage, addMessage, removeMessage} from './store/ducks/layout';
import { getAllEstudos } from './store/fetchActions';
import { addItem } from './store/ducks/selected';

import api from "./services/api";

function App() {

  const dispatch = useDispatch();
  const [form, setForm] = useState('');
  const study = useSelector(state => state.estudos);
  const noShop = useSelector(state => state.shop);
  //autenticação
  const auth = useSelector(state => state.auth.isAuth);
  //console.log(`autenticação : `, auth);

  function formChange (e) {
    setForm(e.target.value);
    console.log(form);
  };

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
  };

  function addShop (item) {
    console.log(item.target.innerText);
    dispatch(addMessage(` ${item.target.innerText} foi adicionado com sucesso! `));
    dispatch(addItem(item.target.innerText));

    setTimeout(() => dispatch(removeMessage(` ${item.target.innerText} foi adicionado com sucesso! `)), 2500);
  }

  return (
    <div className='App'>
      <h1> estudando redux </h1>
      <React.Fragment>
        <div>
          {study.map( obj => <div key={obj["texto"]} onClick={(e)=> addShop(e)}>
            <p>{obj["texto"]}</p>
          </div>)}
        </div>
      </React.Fragment>
      <>
       <Form form={form} formChange={formChange} onSubmit={onSubmit} auth={auth}/>
      </>
      <section>
        <Aula3 />
      </section>
      <section>
        <Aula4 shopItems={noShop}/>
      </section>
    </div>
  );
}

export default App;
