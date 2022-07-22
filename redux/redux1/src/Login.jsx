import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLogin } from "./store/fetchActions";
import './App.css';

export default function Login (props) {

const [form, setForm] = useState({ username: "", password: "" });
const dispatch = useDispatch();

const changeForm = (e) => {
    let { name, value }  = e.target;
    setForm({...form, [name]: value});
    console.log(form);
}
const onSubmit = (e) => {
    e.preventDefault();

    console.log("hora do envio");
    dispatch(authLogin(form))
    setForm({ username: "", password: "" });
};
    return (
        <div className="App">
            <header>
                <h1> login </h1>
            </header>
            <main>

                <form onSubmit={(e)=> onSubmit(e)}>
                    <label htmlFor="user">usuario : </label>
                    <input type="text" name="username" id="user" value={form.username} onChange={(e)=> changeForm(e)} autoComplete="on"/>
                    <label htmlFor="pass">senha : </label>
                    <input type="password" name="password" id="pass" value={form.password} onChange={(e)=> changeForm(e)} autoComplete="on"/>

                    <button type="submit"> login</button>
                </form>
            </main>
        </div>
    )
}