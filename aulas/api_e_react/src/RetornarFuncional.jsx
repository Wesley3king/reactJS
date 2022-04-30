import React,{useState,useEffect} from "react";
import Axios from "axios";

export default function RetornarFuncional () {
    const [carros,setCarros] = useState([]);

    useEffect(()=>{
        Axios.get('https://aulasdereact38.kingofshadow.repl.co')
        .then(res=> setCarros(res.data)).catch(e=> console.log(`erro na requisição com o servidor : ${e}`));
    })

    return (
        <div>
            {carros.map(carro=> <div key={carro.id}>{carro.id} - {carro.modelo} : {carro.marca}</div>)}
        </div>
    )
}