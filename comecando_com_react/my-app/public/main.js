import React from "react";
import ReactDOM from "react-dom";

function firt_letter () {
    return (
        <p>king is learning React</p>
    )
}
function app() {
    return (
        <div className="App">{firt_letter()}</div>
    )
}
const rootElement = window.document.querySelector("#root");
ReactDOM.render(<app /> , rootElement);