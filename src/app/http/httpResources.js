import {HttpClient} from "./httpClient";
import {Parser} from "../common/parser";

const PLACES_URL = "/places/";
const USERS_URL = "/users/";
const LOGIN_URL = "/auth/";
const RULES_URL = "/rules/"

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

    rules = () => {
        return this.client.get(RULES_URL);
    }

    addRule = values => {
        return this.client.post(RULES_URL, Parser.buildRuleRequest(values));
    }

    updateRule = (values, ruleId) => {
        return this.client.patch(RULES_URL + ruleId, Parser.buildRuleRequest(values));
    }

    rulesData = dataName => {
        return this.client.get(RULES_URL + dataName + '/');
    }

    rule = ruleId => {
        return this.client.get(RULES_URL + ruleId);
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;
