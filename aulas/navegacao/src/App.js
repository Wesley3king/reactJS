import React,{useState,useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  const [page,setPage]=useState(0);
  const [txt,setTxt] = useState("txt");

  useEffect(()=> {
    let time = setInterval(()=>{let url = window.location.hash;
      let res = url.split("#");
      if (res[1] === undefined) {
        console.log("inv")
      }else {
       setPage(parseInt(res[1]));
      }},100);
      return () => clearInterval(time);
    
  });

  const load = () => {
    console.log(page);
    if (page === 1) {
      return <Page1 className="App"/>
    }else if (page === 2) {
      return <Page2 className="App"/>
    }else {
      return <>
      <header>
        <h1>seleção de paginas - #28</h1>
      </header>
      <main>
        <button onClick={()=> {redirecionar(1); setTxt("texto1");}}>pagina 1</button>
        <button onClick={()=> redirecionar(2)}>pagina 2</button>
        <br/>
        <p>no _self não funciona</p>
        <a href='http://localhost:3000#1' target='_blank' rel="noreferrer">redirecionar 1</a>
        <a href='http://localhost:3000#2' target='_blank' rel="noreferrer">redirecionar 2</a>
      </main>
     </>
    }
  }

  const redirecionar = (v) =>{
    if (v === 1) {
      window.location.assign("http://localhost:3000#1",'_self');
    }else if (v === 2) {
      window.location.assign("http://localhost:3000#2",'_self');
    }else {
      return <>
              <header>
                <h1>seleção de paginas - #28</h1>
              </header>
              <main>
                <button onClick={()=> redirecionar(1)}>pagina 1</button>
                <button onClick={()=> redirecionar(2)}>pagina 2</button>
              </main>
             </>
    }
  }
  return (
   <div className='App'>
    
    {load()}
    <p>{txt}</p>
   </div>
  );
}

export default App;
