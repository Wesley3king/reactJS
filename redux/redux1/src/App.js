import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const study = useSelector(state => state);
  return (
    <div className='App'>
      <h1> estudando redux </h1>
      <div>
        {study.map(str => <p>{str}</p>)}
      </div>
    </div>
  );
}

export default App;
