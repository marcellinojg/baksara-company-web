import { Dispatch, ReactNode, useEffect, SetStateAction } from 'react';
import NewsModel from '../models/interface/news';
import useLoader from '../hooks/useLoader';
import { useAlert } from '../hooks/useAlert';


export const NewsLoader = (props: NewsLoader) => {
    const { children, id, setData } = props
    const { showLoader, hideLoader } = useLoader()
    const { addAlert } = useAlert()

    useEffect(() => {
        console.log(setData, id, addAlert)
        showLoader()
        hideLoader()

    }, [])
    return <>{children}</>
}


export const AllNewsLoader = (props: AllNewsLoader) => {
    const { children, setData } = props
    const { showLoader, hideLoader } = useLoader()
    const { addAlert } = useAlert()

    useEffect(() => {
        console.log(setData, addAlert)
        showLoader()
        hideLoader()
    }, [])
    return <>{children}</>
}


interface AllNewsLoader {
    children: ReactNode
    setData: Dispatch<SetStateAction<NewsModel[]>>
}

interface NewsLoader {
    id: string
    children: ReactNode
    setData: Dispatch<SetStateAction<NewsModel | string>>
}