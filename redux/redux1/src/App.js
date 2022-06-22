import {useState} from 'react';
import './App.css';
import Aula3 from './Aula3';
import { useSelector, useDispatch } from 'react-redux';
import {add_estudo} from './store/estudos';

function App() {

  const dispatch = useDispatch();
  const [form, setForm] = useState('');
  const study = useSelector(state => state.estudos);
  function formChange (e) {
    setForm(e.target.value);
    console.log(form);
  }

  function onSubmit (e) {
    e.preventDefault();

    console.log(form);
    dispatch(add_estudo(form));

    setForm('');
  }

  return (
    <div className='App'>
      <h1> estudando redux </h1>
      <div>
        {study.map(str => <p>{str}</p>)}
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
