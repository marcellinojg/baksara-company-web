import { useEffect, useState } from "react"
import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import { SubmitHandler, useForm } from "react-hook-form"
import NewsModel from "../../models/interface/news"
import { DarkModeButton, LanguageButton } from "../../components/common/Button"
import FormNews from "../../components/internal/FormNews"
import { NewsLoader } from "../../utils/newsLoader"
import { Navigate, useParams } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"

const EditNews = () => {
    const [news, setNews] = useState<NewsModel | string>('')
    const { id } = useParams()
    const [imgUrl, setImgUrl] = useState<string>()
    const [date, setDate] = useState<string>(new Date().toISOString())
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [source, setSource] = useState<string>()
    const [sourceYear, setSourceYear] = useState<number>()
    const [link, setLink] = useState<string>()
    const form = useForm<NewsModel>()
    const { watch } = form

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
            }
            else {
                setImgUrl('/images/maskot-wave.png')
            }
        })


        return () => subscription.unsubscribe()
    }, [])

    const onSubmit: SubmitHandler<NewsModel> = (data: NewsModel) => {
        console.log(data)
    }

    return <InternalLayout>
        {news === '404' && <Navigate to={ROUTES.INTERNAL.DASHBOARD} />}
        {news &&
            <NewsLoader setData={setNews} id={id!}>
                <div className="min-w-screen text-primary dark:text-white py-8 transition duration-300 w-10/12 mx-auto">
                    <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Buat News</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-12">
                        <div className="lg:col-span-2 ">
                            <h2 className="font-bold font-family-secondary lg:text-3xl text-xl pb-5">Form</h2>
                            <FormNews
                                form={form}
                                onSubmit={onSubmit}
                                imgUrl={''}
                                date={''}
                                title={''}
                                description={''}
                                source={''}
                                link={''}
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
                                source={source || 'Baksara Indonesia'}
                                sourceYear={sourceYear || 2023}
                                link={link || 'https://www.google.com'}
                            />
                        </div>
                    </div>
                </div>
            </NewsLoader>
        }
    </InternalLayout>
}

export default EditNews