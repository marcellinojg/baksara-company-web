import { BiSolidQuoteAltLeft } from "react-icons/bi"
import useTranslation from "../../hooks/useTranslation"
import NewsModel from "../../models/interface/news"
import supabase from "../../../supabase"


export const TestimoniSlider = (props: TestimoniSliderProps) => {
    const { name, role, testimoni } = props
    return <div className="bg-white text-center flex flex-col dark:bg-primary shadow-lg rounded-lg relative min-h-24 lg:w-[400px] w-11/12 px-6 pt-24 py-12 mx-auto">
        <img src="/images/maskot-stand-cropped.png" alt="" className="absolute floating-shadow-md left-1/2 -translate-x-1/2 -top-12 rounded-full h-28 w-28 object-contain bg-navbar-light" />
        <b className="text-xl">{name}</b>
        <span className="break-words text-sm">{role}</span>
        <span className="font-family-secondary font-bold text-6xl mx-auto mt-2 -mb-4"><BiSolidQuoteAltLeft /></span>
        <p className="font-semibold pt-4">{testimoni}</p>
    </div>

}

export const ActivitySlider = (props: NewsModel) => {
    const { translate } = useTranslation()
    const { imgUrl, title, description, source, sourceYear } = props
    const publicImgPath = supabase.storage.from('News').getPublicUrl(imgUrl).data.publicUrl
    return <>
        <img src={publicImgPath} width={400} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt={`Photo of ${title}`} />
        <div className="lg:pr-[10%] lg:w-2/3 flex flex-col gap-3">
            <h2 className="text-white font-bold font-family-secondary lg:text-4xl text-2xl">{title}</h2>
            <p className="text-white lg:text-xl text-justify">{description}</p>
            <span className="font-semibold text-white">{translate('Sumber')}: {source} ({sourceYear})</span>
        </div>
    </>
}
// interface ActivitySliderProps {
//     imgUrl: string
//     imgAlt: string
//     title: string
//     description: string
//     source: string
//     sourceYear: number
// }

interface TestimoniSliderProps {
    name: string
    role: string
    testimoni: string
}