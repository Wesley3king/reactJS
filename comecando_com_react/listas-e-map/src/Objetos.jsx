import React,{useState} from "react";

export default function Objetos () {
    const [data,setData] = useState({"nome": "", "tipo": "", "valor": ""});

    const atualizar = (e) => {
        if (e.target.name === "nome") {
            setData({"nome": e.target.value, "tipo": data.tipo, "valor": data.valor});
        }else if (e.target.name === "tipo") {
            setData({"nome": data.nome, "tipo": e.target.value, "valor": data.valor});
        }else if (e.target.name === "valor") {
            setData({"nome": data.nome, "tipo": data.tipo, "valor": e.target.value});
        }
    }

    return (
        <div>
            <h2>1 state - varios dados</h2>
            <br />
            <input type="text" name="nome" onChange={(e)=> atualizar(e)} />
            <input type="text" name="tipo" onChange={(e)=> atualizar(e)} />
            <input type="text" name="valor" onChange={(e)=> atualizar(e)} />
            <button>registrar</button>
        </div>
    )
}