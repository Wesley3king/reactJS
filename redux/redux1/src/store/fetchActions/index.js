import api from "../../services/api";
import { FetchEstudos, add_estudo } from "../ducks/estudos/index";
import { login } from "../ducks/auth/index";

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
    return dispatchEvent => {
        console.log("kkkkkkk",estudo);
        api.post('http://127.0.0.1:4000/add', estudo)
            .then(res => { 
                dispatchEvent(add_estudo(res.data))
            }).catch(console.log);
    };
};

export const authLogin = (user) => {

    return dispatchEvent => {
        api.post('http://127.0.0.1:4000/login', user)
            .then(res => {
                console.log(res);
                localStorage.token = res.data.token;
                localStorage.user = res.data.user.username;
                localStorage.password = res.data.user.password;
                dispatchEvent(login());
                window.location.pathname = "/home"
                })
            .catch(console.log);
    };
};
