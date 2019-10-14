import axios from "axios";
import {apiServer} from "../../config.json"
import {TOKEN_NAME} from '../common/constants';

const TOKEN_TYPE = "Bearer";
const DEFAULT_HEADER = {'Content-Type': 'application/json'};

export class HttpClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: apiServer,
            headers: DEFAULT_HEADER
        })

        this.axiosInstance.interceptors.request.use(request => {
            const token = localStorage.getItem(TOKEN_NAME);
            if (token) request.headers["Authorization"] = this.buildTokenHeader(token);
            return request;
        });

    }

    buildTokenHeader = token => {
        return `${TOKEN_TYPE} ${token}`;
    }

    get = (url) => {
        return this.axiosInstance.get(url);
    };

    post = (url, data) => {
        return this.axiosInstance.post(url, data);
    };

    put = (url, data) => {
        return this.axiosInstance.put(url, data,{
            headers: {
                'Content-Type': 'application/json',
            }});
    }

    patch = (url, data) => {
        return this.axiosInstance.patch(url, data);
    }

    delete = url => {
        return this.axiosInstance.delete(url);
    }
}