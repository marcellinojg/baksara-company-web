import axios from "axios";

export const createAxiosInstance = (isPublic = false, token = localStorage.getItem('USER_TOKEN')) => {
    const BASE_URL = isPublic ? 'https://staging.baksara.id/v1/public' : 'https://staging.baksara.id/v1'
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
        headers: {
            'Authorization': token ? `Bearer ${token}` : null,
            'Content-Type': 'application/json',
        },
        
    })
    return instance
}

