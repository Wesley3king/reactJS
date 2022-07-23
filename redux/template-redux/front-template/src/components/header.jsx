import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/header/index.css";

function Header (props) {

    return (
        <div>
            <section className="flex_header">
                <div>
                    <h1>Lanches brazil</h1>
                </div>
                <div>
                    <Link to="/"><span> itens no carrinho {props.selecionados.length}</span></Link>
                </div>
            </section>
            <hr />
        </div>
    )
};

function mapStateToProps (state) {
    return {
        selecionados : state.selected,
    }
}
export default connect(mapStateToProps) (Header);