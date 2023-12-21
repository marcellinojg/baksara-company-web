import { Dispatch, ReactNode, useEffect, SetStateAction } from 'react';
import NewsModel from '../models/interface/news';
import useLoader from '../hooks/useLoader';
import { useAlert } from '../hooks/useAlert';
import { getNews } from '../api/news';
import ALERT_TYPE from '../models/consts/alert';


export const NewsLoader = (props: NewsLoader) => {
    const { children, id, setData } = props
    const { showLoader, hideLoader } = useLoader()
    const { addAlert } = useAlert()

    useEffect(() => {
        showLoader()
        getNews(id).then((news) => setData(news)).catch(() => addAlert({
            type: ALERT_TYPE.ERROR,
            title: 'Terjadi kesalahan !',
            message: 'Gagal saat mengambil data.'
        })).then(() => hideLoader())

    }, [])
    return <>{children}</>
}

interface NewsLoader {
    id: string
    children: ReactNode
    setData: Dispatch<SetStateAction<NewsModel | string>>
}