import axios from "axios"

import { API_KEY, URL } from '../services/const'

const apiClient = axios.create({
    baseURL: URL,
    apiKEY: API_KEY,
    withCredentials: false, // CORS
    headers: { // some HTTP headers
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getWeather() {
        return apiClient.get();
    }
};