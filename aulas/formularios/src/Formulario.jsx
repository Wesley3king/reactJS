import React,{useState} from "react";

export default function Formulario () {

    const [valor,setValor] = useState("");
    const [cor,setCor] = useState(`${sessionStorage.color? sessionStorage.color: "white"}`);
    const corpo = document.querySelector("body");
    console.log(typeof cor)
    corpo.style.backgroundColor= cor;

    return (
        <>
         <div style={{marginTop:"20px"}}>
             <label htmlFor="retornar">digite o texto </label>
             <input type="text" name="retornar" onChange={(e)=> setValor(e.target.value)}/>
             

         </div>
         <section>
             <hr />
             <p>valor digitado : {valor}</p>
         </section>
         <section>
             <h2>teste com selects</h2>
             <select value={cor} onChange={(e)=> {setCor(e.target.value);sessionStorage.color = e.target.value; corpo.style.backgroundColor = sessionStorage.color}}>
                 <option value="black">preto</option>
                 <option value="white">branco</option>
                 <option value="red">vermelho</option>
                 <option value="green">verde</option>
             </select>
             <p>valor utilizado : {cor}</p>
         </section>
        </>
    )
}