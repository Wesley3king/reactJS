import React from "react";

export default function Lista (props) {

    const data = [{tipo:"comida",nome:"gomets",preco:"8,00"},{tipo:"bebida",nome:"fanta-laranja",preco:"6,50"},{tipo:"comida",nome:"batata frita lays",preco:"11,00"},{tipo:"comida",nome:"doritos - queijo nacho",preco:"13,00"},{tipo:"bebida",nome:"toddinho",preco:"2,00"},{tipo:"bebeida",nome:"vinho canção - 1l",preco:"15,00"},{tipo:"comida",nome:"arroz copacol",preco:"16,00"}];

    const elementos = data.map((item,i) => <li key={i}>{i} - {item.nome} = {item.preco} / tipo : {item.tipo}</li>)
    return (
        <>
         <ul className={props.className}>{elementos}</ul>
        </>
    )
}