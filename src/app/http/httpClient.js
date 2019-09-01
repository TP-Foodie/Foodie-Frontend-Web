import axios from "axios";
import {apiServer} from "../../../config.json"

const DEFAULT_HEADER = {'Content-Type': 'application/json'};

export class HttpClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: apiServer,
            headers: DEFAULT_HEADER
        })
    }

    get = (url) => {
        return this.axiosInstance.get(url);
    };

    post = (url, data) => {
        return this.axiosInstance.post(url, data);
    };

    patch = (url, data) => {
        return this.axiosInstance.patch(url, data);
    }
}