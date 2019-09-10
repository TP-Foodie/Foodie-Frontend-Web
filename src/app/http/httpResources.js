import {HttpClient} from "./httpClient";

const PLACES_URL = "/places/";
const USERS_URL = "/users/";

class HttpResources {
    constructor(client) {
        this.client = client;
    }

    places = () => {
        return this.client.get(PLACES_URL);
    }

    update_user = (user) => {
        return this.client.put(`${USERS_URL}`, user)
    }
    
    users = (id) => {
        if (id === undefined)
            return this.client.get(USERS_URL);
        return this.client.get(`${USERS_URL}${id}`);
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;