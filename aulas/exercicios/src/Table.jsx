import React from "react";

export default class Table extends React.Component {


    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>classificação</th><th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>abaixo do peso</td><td>abaixo de 18.5</td>
                    </tr>
                    <tr>
                        <td>peso normal</td><td>entre 18.5 e 24.9</td>
                    </tr>
                    <tr>
                        <td>sobrepeso</td><td>entre 25 e 29.9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau 1</td><td>entre 30 e 34.9</td> 
                    </tr>
                    <tr>
                        <td>Obesidade grau 2</td><td>entre 35 e 39.9</td> 
                    </tr>
                    <tr>
                        <td>Obesidade grau 3 ou morbida</td><td>acima de 40</td> 
                    </tr>
                </tbody>
            </table>
        )
    }
}