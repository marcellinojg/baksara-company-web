import axios from "axios";

export const createAxiosInstance = (token = localStorage.getItem('USER_TOKEN')) => {
    const BASE_URL = 'https://frieren-api-sj5kzdzvta-as.a.run.app/v1/'
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
        headers: {
            'Authorization': token ? `Bearer ${token}` : null,
            'Content-Type': 'application/json',
        }
    })
    return instance
}
