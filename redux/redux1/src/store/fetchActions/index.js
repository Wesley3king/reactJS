import api from "../../services/api";
import { FetchEstudos, add_estudo } from "../ducks/estudos/index";

//import { useDispatch } from "react-redux";

export const getAllEstudos = () => {

    return dispatch => {
        api.get('http://127.0.0.1:4000/')
            .then(res => {
                console.log(res.data);
                dispatch(FetchEstudos(res.data.message));
            })
            .catch(console.log);
    };
};

export const add_learning_fetch = estudo => {
    console.log("add : ",estudo);
    return dispatch => {
        console.log("kkkkkkk",estudo);
        api.post('http://127.0.0.1:4000/add', estudo)
            .then(res => { 
                dispatch(add_estudo(res.data))
            }).catch(console.log);
    };
}
