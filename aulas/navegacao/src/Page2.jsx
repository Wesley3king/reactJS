import React from "react";

export default class Page2 extends React.Component {


    render () {
        return (
            <>
            <header>
                <h1>pagina numero 2</h1>
            </header>
            <button onClick={()=> window.location.assign('http://localhost:3000')}>&gt;retornar</button>
            </>
        )
    }
}