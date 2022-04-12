import React from "react";

export default function Retorno (props) {
    return (
        <div>
            <p>here's Retorno</p>

            <section>
                {props.children}
            </section>
            <section>
                <p>o children tambem é inumeravel aqui selecionamos o indice 1</p>
                <>
                {props.children[1]}
                </>
            </section>
        </div>
    )
}