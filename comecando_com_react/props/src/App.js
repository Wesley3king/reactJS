import Paragrafos from './Paragrafos'
import './App.css';

function App() {
  const dados = ['king of shadows', 16, 'programmer']
  return (
   <div>
     <Paragrafos className="App" name={dados[0]} old={dados[1]} work={dados[2]}></Paragrafos>
   </div>
  );
}

export default App;
