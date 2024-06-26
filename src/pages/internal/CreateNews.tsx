import { useEffect, useState } from "react"
import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import { SubmitHandler, useForm } from "react-hook-form"
import NewsModel from "../../models/interface/news"
import { DarkModeButton, LanguageButton } from "../../components/common/Button"
import FormNews from "../../components/internal/FormNews"
import { useMutation } from "react-query"
import { postNews } from "../../api/news"
import useLoader from "../../hooks/useLoader"
import { useAlert } from "../../hooks/useAlert"
import ALERT_TYPE from "../../models/consts/alert"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"

const CreateNews = () => {
    const [imgUrl, setImgUrl] = useState<string>()
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
    const postNewsMutation = useMutation(postNews, {
        onSuccess: () => {
            addAlert({
                type: ALERT_TYPE.SUCCESS,
                title: 'Sukses !',
                message: 'Berhasil membuat berita baru !'
            })
            navigate(ROUTES.INTERNAL.DASHBOARD)
        },
        onError: () => {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: 'Terjadi kesalahan !',
                message: 'Gagal membuat Berita !'
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
            }
            else {
                setImgUrl('/images/maskot-wave.png')
            }
        })


        return () => subscription.unsubscribe()
    }, [])

    const onSubmit: SubmitHandler<NewsModel> = (data: NewsModel) => {
        postNewsMutation.mutate(data)
    }

    return <InternalLayout>
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
                        source={source || 'Baksara'}
                        sourceYear={sourceYear || 2023}
                        link={link || 'https://www.google.com'}
                        isPlaceholder={true}
                    />
                </div>
            </div>
        </div>
    </InternalLayout>
}

export default CreateNews