import { logout } from "../store/ducks/auth";

export default function Logout () {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("token");

    return logout();
};