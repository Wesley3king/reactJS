import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../reducers/ducks/usuarios";
import { addSelectedDrink, fetchDrinks } from "../../reducers/ducks/drinks";
//import { fetchDrinksApi } from "../../reducers/fetchActions";

export default function Middleware () {

    const dispatch = useDispatch();
    const usuarios = useSelector(state => state.usuarios);
    const drinks = useSelector( state => state.drinks.drinks);
    const selectedDrink = useSelector( state => state.drinks.selectedDrink);
    const [nomeUser, setNomeUser] = useState("");

    useEffect(()=>  {
        axios.get("http://127.0.0.1:4000")
            .then(res => {
                console.log("requisição feita : ", res);
                dispatch(fetchDrinks(res.data.bebidas));
            })
            .catch(console.log);
    },[ dispatch ]);

    const addUser_form = (e) => {
        e.preventDefault();
        dispatch(addUser(nomeUser));

        setNomeUser("");
    };
    const removerUser = (e) => {
        console.log("user : ",e.target.innerText);
        dispatch(removeUser(e.target.innerText));
    };

    const selecionarBebida = (drink) => {
        console.log(drink);

        dispatch(addSelectedDrink(drink));
    }
    return (
        <div>
            <header>
                <h1>middlewares customizados </h1>
                <hr />
            </header>
            <main>

                <form onSubmit={(e) => addUser_form(e)}>
                    <label htmlFor="nome">nome : </label>
                    <input type="text" name="nome" id="nome" value={nomeUser} onChange={(e)=> setNomeUser(e.target.value)}/>

                    <button type="submit">inserir usuario</button>
                </form>
                <section>
                    <hr />
                    <div>
                        <ul>
                            { usuarios.map( user => <li key={user} onClick={(e)=> removerUser(e)}>{user}</li>) }
                        </ul>
                    </div>
                </section>
                <section>
                    <hr />
                    <h2>evitando chamadas desnecessarias a api</h2>
                    <div>
                        <ul>
                            { drinks.map( drink => <li key={drink} onClick={() => selecionarBebida(drink)}>{drink}</li>)}
                        </ul>
                    </div>
                    <div>
                        <p>bebida selecionada : {selectedDrink}</p>
                    </div>
                </section>
            </main>
        </div>
    )
}