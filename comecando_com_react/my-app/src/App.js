import Elemental from './Div';
import Button from './Button';
import './App.css';
import Imagens from './Img';
//const imagen2 = './logo512.png';
  function writing () {
    return (<p>modded by @king</p>)
  }
  
const App = ()=> {
  return (
    <div className="App">
      {writing()}
      <Elemental></Elemental>
      <Button type="submit" onClick={()=>{console.log('gg izi')}}></Button>

      <p>aula 03 e 04 CFB - Cursos</p>
      <Imagens>
        
      </Imagens>
    </div>
  );
}

export default App;
