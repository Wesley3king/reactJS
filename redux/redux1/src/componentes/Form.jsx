import React from "react";

export default function Form (props) {

    const isAuth = () => {

        return <>
        <div>
       <hr />
       <h1>aula 02 - inserindo dados na store</h1>
       <form>
         <input placeholder='adicionar estudo' value={props.form.name} onChange={props.formChange}></input>
         <button onClick={props.onSubmit}>adicionar</button>
       </form>
     </div>
       </>
    };
    const isNotAuth = () => {

        return <>
        <hr />
        <p>you cannot add learnings, because you're not authenticaded!</p>
       </>
    }
    return (
        <>
         {props.auth ? isAuth() : isNotAuth()}
        </>
    )
}