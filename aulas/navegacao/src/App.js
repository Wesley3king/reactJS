import React,{useState,useEffect, Suspense} from 'react';
import Skeleton,{  SkeletonTheme  } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  const [page,setPage]=useState(0);

  useEffect(()=> {
   /* let time = setInterval(()=>{*/let url = window.location.hash;
      let res = url.split("#");
      if (res[1] === undefined) {
        console.log("inv")
      }else {
       setPage(parseInt(res[1]));
      }/*},100);
      return () => clearInterval(time);*/
    
  },[]);

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
        <button onClick={()=> {redirecionar(1);}}>pagina 1</button>
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
      window.location.reload();
    }else if (v === 2) {
      window.location.assign("http://localhost:3000#2",'_self');
      window.location.reload();
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
    <SkeletonTheme baseColor='rgb(100,100,100)' highlightColor='rgb(130,130,130)' duration={1.7}>
    <Suspense fallback={<p>jhlfeb</p>}>
      
        <Skeleton count={5} style={{width: "300px"}}/>
        <Skeleton count={1} circle="true" style={{width: "100px", height:"100px"}}/>
        
            </Suspense>
      </SkeletonTheme>
    <p>{ "tst" || <Skeleton />}</p>
   </div>
  );
}

export default App;
