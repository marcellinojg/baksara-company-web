import { useEffect, useState } from "react"
import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import { SubmitHandler, useForm } from "react-hook-form"
import NewsModel from "../../models/interface/news"
import { LanguageButton } from "../../components/common/Button"
import FormNews from "../../components/internal/FormNews"

const CreateNews = () => {
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
            if (field.imgFile) {
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
        <div className="min-w-screen text-primary dark:text-white py-8 transition duration-300 w-10/12 mx-auto">
            <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Buat News</h1>
            <div className="grid grid-cols-3 mt-8 gap-12">
                <div className="col-span-2 ">
                    <h2 className="font-bold font-family-secondary lg:text-3xl text-xl pb-5">Form</h2>
                    <FormNews
                        form={form}
                        onSubmit={onSubmit}
                        imgUrl={imgUrl || '/images/maskot-wave.png'}
                        date={date || new Date().toISOString()}
                        title={title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?'}
                        description={description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?'}
                        source={source || 'Baksara Indonesia'}
                        sourceYear={sourceYear || 2023}
                        link={link || 'https://www.google.com'}
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-bold font-family-secondary lg:text-3xl text-xl ">Preview</h2>
                        <LanguageButton />
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
    </InternalLayout>
}

export default CreateNews