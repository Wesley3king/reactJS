import React from "react";
import Header from '../../components/header';
import { connect } from "react-redux";
import { addSelected } from "../../reducers/ducks/selected";
import '../../css/index.css';

function Home (props) {

    return (
        <div>
            <section>
                <Header />
            </section>

            <main className="Center">
                <section>
                    <h2>menu</h2>
                    <div className="list_products_div">
                        <ul>
                            { props.produtos.map( product => <li onClick={()=> props.adicionarSelecionado(product)}><p>{product}</p></li>) }
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        produtos: state.products
    };
};
function mapDispatchToProps (dispatch) {
    return {
        adicionarSelecionado : item => dispatch(addSelected(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);