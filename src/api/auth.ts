import { LoginUser } from "../models/interface/auth"
import { createAxiosInstance } from "../utils/createAxiosInstance"

export const postLogin = async (user: LoginUser) => {
    const { email, password } = user
    const instance = createAxiosInstance()
    const res = await instance.post('/users/login', {
        email: email,
        password: password
    })
    console.log(res.data)

    return res.data
}