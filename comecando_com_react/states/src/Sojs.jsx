import React from "react";

export default function Sojs () {
    var teste = 10;
    var texto;
    window.document.addEventListener('load',()=> texto = window.document.querySelector('.txt'));
    const mudar = (vs)=> {
        teste += vs;
        if(texto !== undefined) {
            texto.innerHTML = `valor de teste : ${teste}`;
            console.log(texto,teste);
        }
    }
    return (
        <section>
            <hr />
            <h2>teste só com js</h2>

            <p className="txt">valor de teste : {teste}</p>
            <button onClick={mudar(10)}>somar 10</button>
            <p>eu tentei mas não consegui! #onlyReact</p>
        </section>
    )
}