import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../css/car/Car.css";

export default function Car () {

    const selecionados = useSelector( state => state.cursos.selecionados);
    const [SelecionadosContados, setSelecionadosContados] = useState([]);

    const selecionadosWithQuantity = (data) => {
        let calculated = [];
        for (let i =0; i< data.length; ++i) {
            if (calculated.some(item => item.curso === data[i]["curso"])) {
                calculated.forEach((obj) => {
                    if (obj.curso === data[i]["curso"]) {
                        ++obj.quantidity 
                    }
                })
            } else {
                calculated.push({
                    curso: data[i]["curso"],
                    preco: data[i]["preco"],
                    quantidity: 1
                });
            }
        };

        console.log(calculated);
        setSelecionadosContados(calculated);
    };
    useEffect(()=> selecionadosWithQuantity(selecionados), [ selecionados ]);

    
    return (
        <div>
            <header className="header">
                <h1>carrinho de compras</h1>
                <Link to="/cursos" style={{textDecoration: "none", color: "black"}}><div className="car">{selecionados.length}</div></Link>
            </header>

            <main className="cart">
                <hr />
                <section>
                    <h2>lista de compras</h2>
                   <table className="table_itens">
                    <thead>
                        <tr>
                            <th>curso</th>
                            <th>quantidade</th>
                            <th>preço unitario</th>
                        </tr>
                    </thead>
                    <tbody>
                        { SelecionadosContados.map( obj => <tr key={obj.curso}>
                            <td>{obj.curso}</td>
                            <td>{obj.quantidity}</td>
                            <td>{obj.preco}</td>
                            </tr>
                            )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2">total</th>
                            <td>{SelecionadosContados.reduce((acc, item) => acc + (item.preco * item.quantidity), 0)}</td>
                        </tr>
                    </tfoot>
                    </table>
                </section>
            </main>
        </div>
    )
}