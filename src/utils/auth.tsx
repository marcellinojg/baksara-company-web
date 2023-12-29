import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { ROUTES } from "../models/consts/routes";
import supabase from "../../supabase";
import useLoader from "../hooks/useLoader";


export const RequireAuth = () => {
    const navigate = useNavigate()
    const { showLoader, hideLoader } = useLoader()

    useEffect(() => {
        showLoader()
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session)
                navigate(ROUTES.INTERNAL.DASHBOARD)
        }).finally(() => {
            hideLoader()
        })

    }, [])

    return <Outlet />
}

export const RedirectAuth = () => {
    const navigate = useNavigate()
    const { showLoader, hideLoader } = useLoader()

    useEffect(() => {
        showLoader()
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session)
                navigate(ROUTES.INTERNAL.DASHBOARD)
        }).finally(() => {
            hideLoader()
        })

    }, [])


    return <Outlet />
}