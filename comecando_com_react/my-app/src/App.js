import Elemental from './Div';
import Button from './Button';
import './App.css';

/*function soma () {
  console.log("XXX");
}*/
  function writing () {
    return (<p>modded by @king</p>)
  }
  
const App = ()=> {
  return (
    <div className="App">
      {writing()}
      <Elemental></Elemental>
      <Button type="submit" onClick={()=>{console.log('gg izi')}}></Button>
    </div>
  );
}

export default App;
