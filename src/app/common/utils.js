import {TOKEN_NAME} from "./constants";
import moment from "moment";

export function isLoggedIn() {
    return localStorage.getItem(TOKEN_NAME) !== null;
}

export function parseDate(date) {
    return moment(date).format("ddd, DD MMM YYYY HH:mm:ss ZZ")
}