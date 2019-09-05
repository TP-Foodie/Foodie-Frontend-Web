import {HttpClient} from "./httpClient";

const PLACES_URL = "/places";

class HttpResources {
    constructor(client) {
        this.client = client;
    }

    places = () => {
        return this.client.get(PLACES_URL);
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;