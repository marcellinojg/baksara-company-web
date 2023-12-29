import { ReactNode, createContext, useEffect, useState } from "react"
import { useAlert } from "../hooks/useAlert"
import ALERT_TYPE from "../models/consts/alert";
import useLoader from "../hooks/useLoader";
import useTranslation from "../hooks/useTranslation";
import { LoginUser } from "../models/interface/auth";
import supabase from "../../supabase";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../models/consts/routes";

interface AuthContextModel {
    user: User | null
    session: Session | null
    signIn: (user: LoginUser) => void
    signOut: () => void
}

export const AuthContext = createContext<AuthContextModel>({
    user: null,
    session: null,
    signIn: (_user: LoginUser) => { },
    signOut: () => { }
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const { addAlert } = useAlert()
    const { showLoader, hideLoader } = useLoader()
    const { translate } = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }, [])

    useEffect(() => {
        if (session)
            supabase.auth.getUser().then(({ data: { user } }) => {
                setUser(user)
            })
    }, [session])

    const signIn = async (loginInput: LoginUser) => {
        try {
            showLoader()
            const { data, error } = await supabase.auth.signInWithPassword(loginInput);
            if (error) {
                addAlert({
                    type: ALERT_TYPE.ERROR,
                    title: translate('Login Failed'),
                    message: error.message,
                })
                return
            }
            const { user, session } = data;
            setUser(user)
            setSession(session)
            navigate(ROUTES.INTERNAL.DASHBOARD)
            addAlert({
                type: ALERT_TYPE.INFO,
                title: 'Autentikasi terbarui',
                message: 'Anda berhasil Sign out !'
            })
        }
        catch {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: translate('Login Failed'),
                message: 'Terjadi kesalahan !',
            })
        } finally {
            hideLoader()
        }
    }

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) {
                addAlert({
                    type: ALERT_TYPE.ERROR,
                    title: translate('Sign Out Failed'),
                    message: error.message,
                })
                return
            }
            setUser(null)
            setSession(null)
            navigate(ROUTES.EXTERNAL.LANDING)
            addAlert({
                type: ALERT_TYPE.INFO,
                title: 'Autentikasi terbarui',
                message: 'Anda berhasil Sign out !'
            })
        }
        catch {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: translate('Sign Out Failed'),
                message: 'Terjadi kesalahan !',
            })
        }
    }

    return <AuthContext.Provider value={{
        user: user,
        session: session,
        signIn: signIn,
        signOut: signOut
    }}>
        {children}
    </AuthContext.Provider>
}
