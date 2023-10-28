import { ReactNode, createContext, useState } from "react"
import { useAlert } from "../hooks/useAlert"
import ALERT_TYPE from "../models/consts/alert";
import useLoader from "../hooks/useLoader";
import useTranslation from "../hooks/useTranslation";
import { LoginUser } from "../models/interface/auth";

interface AuthContextModel {
    id?: string | null
    name?: string | null
    email?: string | null
    accessToken?: string | null
    signIn: (user: LoginUser) => void
    signOut: () => void
}

export const AuthContext = createContext<AuthContextModel>({
    id: null,
    name: null,
    email: null,
    accessToken: null,
    signIn: (_user: LoginUser) => { },
    signOut: () => { }
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const localUser = JSON.parse(localStorage.getItem('user') || '{}') as any
    const [id, setId] = useState<string | null>((localUser && localUser.id) || null)
    const [email, setEmail] = useState<string | null>((localUser && localUser.email) || null)
    const [name, setName] = useState<string | null>((localUser && localUser.name) || null)
    const [accessToken, setAccessToken] = useState<string | null>((localUser && localUser.accessToken) || null)
    const { addAlert } = useAlert()
    const { showLoader, hideLoader } = useLoader()
    const { translate } = useTranslation()

    const signIn = async (user: LoginUser) => {
        try {
            // showLoader()
            // const loginResponse = await postLogin(user)
            // setAccessToken(await loginResponse.data.accessToken)
            // if (loginResponse.error != null) throw loginResponse.error


            // const userResponse = await getUser(loginResponse.data.accessToken)
            // if (userResponse.error != null) throw userResponse.error
            // localStorage.setItem('user', JSON.stringify({
            //     name: userResponse.data.name,
            //     email: userResponse.data.email,
            //     id: userResponse.data.id,
            //     accessToken: loginResponse.data.accessToken
            // }))
            // setEmail(userResponse.data.email)
            // setName(userResponse.data.name)
            // setId(userResponse.data.id)

        }
        catch (error) {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: translate('Login Failed'),
                message: translate('Email or Password is incorrect.'),
            })
        } finally {
            hideLoader()
        }
    }

    const signOut = () => {
        setId(null)
        setEmail(null)
        setName(null)
        setAccessToken(null)
        localStorage.removeItem('user')
    }

    return <AuthContext.Provider value={{
        id: id,
        email: email,
        name: name,
        accessToken: accessToken,
        signIn: signIn,
        signOut: signOut
    }}>
        {children}
    </AuthContext.Provider>
}
