import {TOKEN_NAME} from "./constants";

export function isLoggedIn() {
    return localStorage.getItem(TOKEN_NAME) !== null;
}
