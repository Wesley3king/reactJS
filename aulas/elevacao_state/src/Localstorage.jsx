import React,{useState} from "react";

export default function Localstorage () {
    const [valor,setValor] = useState('');

    const criar = (chave,valor)=> {
        localStorage.setItem(chave,valor);
    }

    const see = (chave) => {
        window.alert(`valor cadastrado : ${localStorage.getItem(chave)}`);
    }

    const remover = (chave) =>{
        localStorage.removeItem(chave);
    }
    return (
        <>
        <hr />
         <h2>localStorage em React</h2>
         <hr />
         <div style={{margin: '15px'}}>
             <label htmlFor="texto"></label>
             <input type="text" name="texto" value={valor} onChange={(e)=>setValor(e.target.value)}/>

             <button type="submit" onClick={()=> criar("teste",valor)}>armazenar</button>
             <button type="submit" onClick={()=> see("teste")}>ver</button>
             <button type="submit" onClick={()=> remover("teste")}>remover tudo</button>
         </div>

        </>
    )
}