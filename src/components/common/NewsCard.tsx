import { FaPaperPlane } from "react-icons/fa"
import useTranslation from "../../hooks/useTranslation"
import formatDate from "../../utils/formatDate"
import NewsModel from "../../models/interface/news"

const NewsCard = (props: NewsModel) => {
    const { getLocale } = useTranslation()
    const { imgUrl, date, title, description, source, sourceYear, link } = props

    return <div className="floating-shadow-md rounded">
        <div className="relative group">
            <img src={imgUrl} className="bg-navbar-light mx-auto h-[250px] object-contain w-full rounded-t group-hover:brightness-90 transition-all duration-300" />
            <a
                href={link}
                target="_blank"
                className="absolute top-4 transition-all duration-300 right-4 p-4 bg-primary hover:bg-primary-darker rounded-full group-hover:block hidden text-white"
            >
                <FaPaperPlane />
            </a>
        </div>
        <div className="bg-white dark:bg-primary-light py-8 px-6 rounded-b flex flex-col gap-4">
            <span className="font-semibold">{formatDate(date, getLocale())}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-justify">{description}</p>
            <span className="font-semibold">{source} ({sourceYear})</span>
        </div>
    </div>
}

export default NewsCard

