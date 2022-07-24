import React from "react";
import { useSelector } from "react-redux";
import Curso from "../../components/Curso";
import { Link } from "react-router-dom";
import "../../css/index.css";

export default function Cursos () {

    const cursos = useSelector(state => state.cursos.itens);
    const selecionados = useSelector( state => state.cursos.selecionados);
    return (
        <div className="Center">
            <header className="header">
                <h1>loja de cursos</h1>
                <Link to="/carrinho" style={{textDecoration: "none", color: "black"}}><div className="car">{selecionados.length}</div></Link>
            </header>
            
            <main>
            <hr />
                { cursos.map( obj => <Curso key={obj["curso"]} data={obj}/> ) }
            </main>
        </div>
    )
}