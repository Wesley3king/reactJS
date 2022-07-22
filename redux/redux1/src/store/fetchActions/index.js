import api from "../../services/api";
import { fetchEstudos, add_estudo } from "../ducks/estudos/index";
import { login } from "../ducks/auth/index";
import { addMessage, removeMessage } from "../ducks/layout";


//import { useDispatch } from "react-redux";

export const getAllEstudos = () => {

    return dispatch => {
        api.get('http://127.0.0.1:4000/')
            .then(res => {
                console.log(res.data);
                dispatch(fetchEstudos(res.data.message));
            }).catch(console.log);
    };
};

export const addLearningFetch = (estudo) => {

    return dispatchEvent => {
        api.post('http://127.0.0.1:4000/add', estudo)
            .then(res => {
                console.log(res);
                dispatchEvent(add_estudo(res.data))
            })
            .catch(console.log);
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
                window.location.assign("/#/home");
                })
            .catch(e => {
                console.log(e);
                dispatchEvent(addMessage(e.response.data.message));

                setTimeout(()=> dispatchEvent(removeMessage(e.response.data.message)), 4000)
            });
    };
};
