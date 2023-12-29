import { useEffect, useState } from "react"
import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import { SubmitHandler, useForm } from "react-hook-form"
import NewsModel from "../../models/interface/news"
import { DarkModeButton, LanguageButton } from "../../components/common/Button"
import FormNews from "../../components/internal/FormNews"
import { NewsLoader } from "../../utils/newsLoader"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"
import { useMutation } from "react-query"
import { updateNews } from "../../api/news"
import ALERT_TYPE from "../../models/consts/alert"
import { useAlert } from "../../hooks/useAlert"
import useLoader from "../../hooks/useLoader"

const EditNews = () => {
    const [news, setNews] = useState<any>(null)
    const { id } = useParams()
    const [imgUrl, setImgUrl] = useState<string>()
    const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false)
    const [date, setDate] = useState<string>(new Date().toISOString())
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [source, setSource] = useState<string>()
    const [sourceYear, setSourceYear] = useState<number>()
    const [link, setLink] = useState<string>()
    const form = useForm<NewsModel>()
    const { showLoader, hideLoader } = useLoader()
    const navigate = useNavigate()
    const { addAlert } = useAlert()
    const { watch } = form

    const updateNewsMutation = useMutation(updateNews, {
        onSuccess: () => {
            addAlert({
                type: ALERT_TYPE.SUCCESS,
                title: 'Sukses !',
                message: 'Berhasil mengupdate berita !'
            })
            navigate(ROUTES.INTERNAL.DASHBOARD)
        },
        onError: () => {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: 'Terjadi kesalahan !',
                message: 'Gagal mengupdate Berita !'
            })
        },
        onMutate: () => {
            showLoader()
        },
        onSettled: () => {
            hideLoader()
        }
    })

    useEffect(() => {
        const subscription = watch((field) => {
            setTitle(field.title)
            setDescription(field.description)
            setSource(field.source)
            setSourceYear(field.sourceYear)
            setLink(field.link)
            setDate(field.date!)
            if (field.imgFile && field.imgFile[0]) {
                setImgUrl(URL.createObjectURL(field.imgFile[0]))
                setIsPlaceholder(false)
            }
            else {
                setImgUrl('/images/maskot-wave.png')
                setIsPlaceholder(true)
            }
        })


        return () => subscription.unsubscribe()
    }, [])

    useEffect(() => {
        if(!news || typeof news === 'string') return
        setTitle(news.title)
        setDescription(news.description)
        setSource(news.source)
        setSourceYear(news.sourceYear)
        setLink(news.link)
        setDate(news.date!)
        setImgUrl(news.imgUrl)
    }, [news])

    const onSubmit: SubmitHandler<NewsModel> = (data: NewsModel) => {
        updateNewsMutation.mutate({
            id: id!,
            news: data
        })
    }

    return <InternalLayout>
        <NewsLoader setData={setNews} id={id!}>
            {news === '404' && <Navigate to={ROUTES.INTERNAL.DASHBOARD} />}
            {news &&
                <div className="min-w-screen text-primary dark:text-white py-8 transition duration-300 w-10/12 mx-auto">
                    <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Edit News</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-12">
                        <div className="lg:col-span-2 ">
                            <h2 className="font-bold font-family-secondary lg:text-3xl text-xl pb-5">Form</h2>
                            <FormNews
                                form={form}
                                onSubmit={onSubmit}
                                imgUrl={news && news.imgUrl}
                                date={news && news.date}
                                title={news && news.title}
                                description={news && news.description}
                                source={news && news.source}
                                sourceYear={news && news.sourceYear}
                                link={news && news.link}
                            />
                        </div>
                        <div className="lg:order-last order-first">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="font-bold font-family-secondary lg:text-3xl text-xl ">Preview</h2>
                                <div className="flex items-center gap-2">
                                    <LanguageButton />
                                    <DarkModeButton />
                                </div>
                            </div>
                            <NewsCard
                                imgUrl={imgUrl || '/images/maskot-wave.png'}
                                date={date || new Date().toISOString()}
                                title={title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?'}
                                description={description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?'}
                                source={source || 'Baksara'}
                                sourceYear={sourceYear || 2023}
                                link={link || 'https://www.google.com'}
                                isPlaceholder={isPlaceholder}
                            />
                        </div>
                    </div>
                </div>
            }
        </NewsLoader>
    </InternalLayout>
}

export default EditNews