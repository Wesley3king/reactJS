import React,{useState} from "react";

export default function Event () {
    const [estado,setEstado] = useState(false);
    const ligado = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "auto",
        backgroundColor: "green"
    }
    const desligado = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "auto",
        backgroundColor: "red"
    }
    return (
        <div>
            <h1>eventos em react</h1>
            <br />
            <div style={estado?ligado:desligado}></div>
            <br />
            <button onClick={()=> setEstado(!estado)}>{estado?"desligar":"ligar"}</button>
            <section>
                <h2>cancelando um comportamento padrão</h2>
                <a href="https://youtube.com"  onClick={(e)=> e.preventDefault()}>link que leva a esta mesma pagina (cancelado com preventDefault()).</a>
            </section>
        </div>
    )
}