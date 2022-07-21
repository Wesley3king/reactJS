import React from "react";
import Message from "./componentes/Message";
import { useSelector } from "react-redux";


export default function Aula3 (props) {
    const messages = useSelector((state)=> state.layout);

    console.log(messages.messages);

    return (
        <div>
            <hr />
            <h2>aula 03 - Reducer alert de messagem</h2>

            <>
             {messages.showMessage ? <Message text="adicionado com sucesso" /> : <Message text="nothing to show" />}

            <hr />

             {messages.messages.map((msg, indice) => <Message key={indice} text={msg} />)}
            </>
        </div>
    );
};