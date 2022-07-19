import api from "../../services/api";
import { FetchEstudos, add_estudo } from "../ducks/estudos/index";

export const getAllEstudos = () => {

    return dispatch => {
        api.get('http://127.0.0.1:4000/')
            .then(res => {
                console.log(res.data);
                let data = []
                for(let e of res.data.message){
                    data.push(e.texto);
                }
                dispatch(FetchEstudos(data));
            })
            .catch(console.log);
    }
};

export const add_car_fetch = estudo => {
    return dispatch => {
        api.post('http://127.0.0.1:4000/add', {})
        .then(res => { dispatch(add_estudo())})
        .catch(console.log);
    }
}
