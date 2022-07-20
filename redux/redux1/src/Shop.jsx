import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { removeItem } from "./store/ducks/selected";

import './App.css';

export default function Shop () {

    const dispatch = useDispatch();
    const itens = useSelector(state => state.shop);

    function removerItem (item) {
        console.log(item.target.innerText, item);
        dispatch(removeItem(item.target.innerText));
    }
    return (
        <div className="App">
            <header>
                <h1>Shop route</h1>
            </header>
            <main>
                <h2>itens no shop : </h2>
                <React.Fragment>
                    <section>
                        { itens.length === 0 ? <p> ainda não temos nada selecionado!</p> : itens.map( item => <div key={item} className="flex" onClick={(e)=> removerItem(e)}><div><p>{item}  </p></div><BsFillTrashFill /></div>)}
                    </section>
                </React.Fragment>
            </main>

            <footer>
                <div>
                    <Link to='/'><p>&gt; voltar ao main page</p></Link>
                </div>
            </footer>
        </div>
    )
}