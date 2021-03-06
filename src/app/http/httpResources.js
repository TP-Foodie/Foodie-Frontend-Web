import {HttpClient} from "./httpClient";
import {Parser} from "../common/parser";

const PLACES_URL = "/places/";
const USERS_URL = "/users/";
const LOGIN_URL = "/auth/";
const RULES_URL = "/rules/"
const BENEFITS_URL = "benefits";
const RULES_HISTORY = "/history";
const REGISTRATIONS_URL = "/statistics/registrations";
const COMPLETED_ORDERS_URL = "/statistics/completed_orders";
const CANCELLED_ORDERS_URL = "/statistics/cancelled_orders";

const buildStatisticsUrl = (url, date) => {
    return `${url}?month=${date.getMonth() + 1}&year=${date.getFullYear()}`;
}

class HttpResources {
    constructor(client) {
        this.client = client;
    }

    places = () => {
        return this.client.get(PLACES_URL);
    }

    updateUser = (id, user) => {
        return this.client.patch(`${USERS_URL}${id}`, user)
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

    deleteRule = ruleId => {
        return this.client.delete(RULES_URL + ruleId);
    }

    benefitRules = () => {
        return this.client.get(RULES_URL + BENEFITS_URL)
    }
    
    ruleHistory = ruleId => {
        return this.client.get(RULES_URL + ruleId + RULES_HISTORY);
    }

    usersStatistics = (date) => {
        return this.client.get(buildStatisticsUrl(REGISTRATIONS_URL, date));
    }

    ordersCompletedStatistics = (date) => {
        return this.client.get(buildStatisticsUrl(COMPLETED_ORDERS_URL, date));
    }

    ordersCancelledStatistics = (date) => {
        return this.client.get(buildStatisticsUrl(CANCELLED_ORDERS_URL, date));
    }
}

const httpResources = new HttpResources(new HttpClient());

export default httpResources;
