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

    users = () => {
        return this.client.get(USERS_URL);
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;