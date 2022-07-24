import React from "react";
import "../css/index.css";
import { useDispatch } from "react-redux";
import { addCursoSelected } from "../reducers/ducks/cursos";

export default function Curso (props) {

    const dispatch = useDispatch();
    const adicionar = (obj) => {
        dispatch(addCursoSelected(obj))
    };

    return (
        <div className="curso_item" onClick={()=> adicionar(props.obj)}>
            <p><strong>{props.data.curso}</strong></p>
            <div>
                <p>{props.data.descricao}</p>
            </div>
            <p><em> R$ {props.data.preco.toFixed(2)}</em></p>
        </div>
    )
}