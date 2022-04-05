import React,{useState, useEffect} from "react";
var vezes = 0;
export default function Condicional () {
    ++vezes;
    console.log(vezes);
    const [cor,setCor] = useState({});
    const [num,setNum] = useState(0);

    useEffect(()=>{
    const initial = setInterval(()=>{
        if (num === 0) {
            setCor({color: "blue"});
        } else if (num === 1) {
            setCor({color: "lime"});
        } else if (num === 2) {
            setCor({color: "red"});
        }
        console.log(num);
        num === 2?setNum(num - 2):setNum(num+1);
    },1000);
       return ()=> clearInterval(initial);
    });
    
    const horario = ()=> {
        let time = new Date().getHours();
        //console.log(time);
        if(time >= 18 || time <= 5) {
            return <p>boa noite!</p>;
        }else if (time >= 6 && time < 13) {
            return <p>bom dia!</p>;
        }else {
            return <p>boa tarde!</p>;
        }
    }
    const [log,setLog] = useState(false);

    

    return (
        <>
        <h1>renderixação condicional em react</h1>
            <section>
                <h2>exercicio do relogio</h2>
                <p>{horario()}</p>
            </section>
            <section>
        <h2>exercicio do login</h2>
        <p>{log?"você está logado": "faça o login"}</p>
        <button onClick={()=> setLog(!log)}>{log?"log off": "log in"}</button>
            </section>
            <section>
                <h2 style={cor}>trocar a cor dos textos</h2>

            </section>
        </>
    )
}