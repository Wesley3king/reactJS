import React,{useState} from "react";
import Ready from "./Ready";
import './obj.css'

export default function Objetos () {
    const [data,setData] = useState({"nome": "", "tipo": "", "valor": ""});
    const [ir,setIr] = useState(false);
    console.log(data);
    return (
        <div className="col">
            <h2>1 state - varios dados</h2>
            <br />
            <label htmlFor="nome">nome : </label>
            <input type="text" name="nome" onChange={(e)=> setData({"nome": e.target.value, "tipo": data.tipo, "valor": data.valor})} value={data.name} />
            <label htmlFor="tipo">  tipo : </label>
            <input type="text" name="tipo" onChange={(e)=> setData({"nome": data.nome, "tipo": e.target.value, "valor": data.valor})} value={data.tipo} />
            <label htmlFor="valor">  valor : </label>
            <input type="text" name="valor" onChange={(e)=> setData({"nome": data.nome, "tipo": data.tipo, "valor": e.target.value})} value={data.valor} />
            <button onClick={()=> {sessionStorage.id = data.nome;sessionStorage.type = data.tipo; sessionStorage.money = data.valor; setIr(!ir)}}>registrar</button>
            <button onClick={() => {setIr(!ir);sessionStorage.id = ""; sessionStorage.type = ""; sessionStorage.money = ""}}> clear </button>
            <div>
                {ir?<Ready Pass={data.nome}/> : ""}
            </div>
        </div>
    )
}