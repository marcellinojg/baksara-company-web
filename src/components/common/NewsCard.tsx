import { FaEdit, FaPaperPlane, FaTrash } from "react-icons/fa"
import useTranslation from "../../hooks/useTranslation"
import formatDate from "../../utils/formatDate"
import NewsModel from "../../models/interface/news"
import { Link } from "react-router-dom"
import { DYNAMIC_ROUTES } from "../../models/consts/routes"
import { useState } from "react"
import { ConfirmationModal } from "../internal/Modal"

const NewsCard = (props: NewsCardProps) => {
    const { getLocale } = useTranslation()
    const { imgUrl, date, title, description, source, sourceYear, link, isAdmin = false } = props
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleDelete = () => {

    }

    return <>
        <div className="floating-shadow-md rounded">
            <div className="relative group">
                <img src={imgUrl} className="bg-navbar-light mx-auto h-[250px] object-cover w-full rounded-t group-hover:brightness-90 transition-all duration-300" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                    {isAdmin === true &&
                        <>

                            <Link to={DYNAMIC_ROUTES.INTERNAL.EDIT_NEWS('1')}
                                className="transition-all duration-300 p-4 bg-yellow-400 hover:bg-yellow-500 rounded-full group-hover:block hidden text-white"
                            >
                                <FaEdit />
                            </Link>
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
            <div className="bg-white dark:bg-primary-light py-8 px-6 rounded-b flex flex-col gap-4">
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
}

