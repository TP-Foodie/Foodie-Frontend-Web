import {HttpClient} from "./httpClient";

const PLACES_URL = "/places/";
const USERS_URL = "/users/";
const LOGIN_URL = "/auth/";

class HttpResources {
    constructor(client) {
        this.client = client;
    }

    places = () => {
        return this.client.get(PLACES_URL);
    }

    updateUser = (id, user) => {
        return this.client.put(`${USERS_URL}${id}`, user)
    }

    users = (id) => {
        if (id === undefined)
            return this.client.get(USERS_URL);
        return this.client.get(`${USERS_URL}${id}`);
    }

    login = (email, password) => {
        return this.client.post(LOGIN_URL, {email, password});
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;
