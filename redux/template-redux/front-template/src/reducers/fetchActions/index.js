import axios from "axios";
import { fetchDrinks } from "../ducks/drinks";

export const fetchDrinksApi = () => {

    return async dispatch => {
       return axios.get("http://127.0.0.1:4000")
            .then(res => {
                console.log("requisição feita : ", res);
                dispatch(fetchDrinks(res.data.bebidas));
            })
            .catch(console.log);
    };
};