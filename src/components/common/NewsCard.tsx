import { FaPaperPlane, FaTrash } from "react-icons/fa"
import useTranslation from "../../hooks/useTranslation"
import formatDate from "../../utils/formatDate"
import NewsModel from "../../models/interface/news"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"
import { useState } from "react"
import { ConfirmationModal } from "../internal/Modal"
import { useMutation, useQueryClient } from "react-query"
import { deleteNews } from "../../api/news"
import useLoader from "../../hooks/useLoader"
import { useAlert } from "../../hooks/useAlert"
import ALERT_TYPE from "../../models/consts/alert"
import supabase from "../../../supabase"

const NewsCard = (props: NewsCardProps) => {
    const { getLocale } = useTranslation()
    const { imgUrl, date, title, description, source, sourceYear, link, isAdmin = false, id, isPlaceholder = false } = props
    const [showModal, setShowModal] = useState<boolean>(false)
    const { showLoader, hideLoader } = useLoader()
    const { addAlert } = useAlert()
    const queryClient = useQueryClient()
    const publicImgPath = isPlaceholder ? imgUrl : supabase.storage.from('News').getPublicUrl(imgUrl).data.publicUrl
    const navigate = useNavigate()

    const deleteNewsMutation = useMutation(deleteNews, {
        onSuccess: (data) => {
            addAlert({
                type: ALERT_TYPE.SUCCESS,
                title: 'Sukses !',
                message: `Berhasil menghapus berita ${data[0].title} !`
            })
            navigate(ROUTES.INTERNAL.DASHBOARD)
            queryClient.invalidateQueries({ queryKey: ['allNews'] })
        },
        onError: () => {
            addAlert({
                type: ALERT_TYPE.ERROR,
                title: 'Terjadi kesalahan !',
                message: 'Gagal menghapus berita !'
            })
        },
        onMutate: () => {
            showLoader()
        },
        onSettled: () => {
            hideLoader()
        },

    })

    const handleDelete = () => {
        deleteNewsMutation.mutate(id!)
        setShowModal(false)
    }

    return <>
        <div className="floating-shadow-md rounded">
            <div className="relative group">
                <img src={publicImgPath} className="bg-navbar-light mx-auto h-[250px] object-cover w-full rounded-t group-hover:brightness-90 transition-all duration-300" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                    {isAdmin === true &&
                        <>

                            <button
                                onClick={() => setShowModal(true)}
                                className="transition-all duration-300 p-4 bg-red-500 hover:bg-red-600 rounded-full group-hover:block hidden text-white"
                            >
                                <FaTrash />
                            </button>
                        </>
                    }

                    <a
                        href={link}
                        target="_blank"
                        className="transition-all duration-300 p-4 bg-primary hover:bg-primary-darker rounded-full group-hover:block hidden text-white"
                    >
                        <FaPaperPlane />
                    </a>
                </div>


            </div>
            <div className="bg-white dark:bg-primary py-8 px-6 rounded-b flex flex-col gap-4">
                <span className="font-semibold">{formatDate(date, getLocale())}</span>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-justify whitespace-pre-line">{description}</p>
                <span className="font-semibold">{source} ({sourceYear})</span>
            </div>
        </div>
        {showModal === true &&
            <ConfirmationModal onClose={() => setShowModal(false)} onSuccess={handleDelete} title={`Hapus News`} description={`Apakah anda yakin akan menghapus berita ${title}`} />
        }
    </>

}

export default NewsCard

interface NewsCardProps extends NewsModel {
    isAdmin?: boolean
    isPlaceholder?: boolean
}

