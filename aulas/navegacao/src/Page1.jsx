import React from "react";

export default class Page1 extends React.Component {


    render () {
        return (
            <>
                <header>
                    <h1>pagina numero 1</h1>
                </header>
                <main>
                    <button onClick={()=> window.location.assign('http://localhost:3000')}>&gt; retornar</button>
                </main>
            </>
        )
    }
}