import React,{useState,useEffect} from "react";

export default function Effect () {
    const [valor,setValor] = useState(0);
    const [valor2,setValor2] = useState(0);

    useEffect(()=> {
        console.log(`pagina carregada`);
        document.title = `contagem ${valor}`;
});
useEffect(()=> {
    const start = setInterval(()=> {
        setValor2(valor2+1);
    },1000);
        return () => clearInterval(start);
    })
    return (
        <>
        <div>
            <hr />
            <h2>#19 - useEffect</h2>
            <p>é um hook que executa depois que tudo na página terminou, tambem é usado pra controlar os "setInterval"</p>
            <br />
            <p>contagem : {valor}</p>
            <button onClick={()=>setValor(valor+1)}>aumentar</button>
        </div>
        <div>
            <p>ancorragem de intevals</p>
            <br />
            <p>contagem automatica : {valor2}</p>
        </div>
        </>
    )
}