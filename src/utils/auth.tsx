import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import useAuth from '../hooks/useAuth';


export const RequireAuth = () => {
    const { id, name, email, accessToken } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id || !name || !email || !accessToken)
            navigate('/login')
    }, [id, name, email, accessToken])

    return <Outlet/>
}

export const RedirectAuth = () => {
    const { id, name, email, accessToken } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (id != null && name != null && email != null && accessToken != null)
            navigate('/notes')
    }, [id, name, email, accessToken])


    return <Outlet/>
}