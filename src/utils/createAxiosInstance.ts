import axios from "axios";

export const CreateAxiosInstance = (token = localStorage.getItem('accessToken')) => {
    const BASE_URL = ''
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
