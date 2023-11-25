import { Dispatch, SetStateAction } from "react"
import useTranslation from "../../hooks/useTranslation"

const FeatureCard = (props: FeatureCardProps) => {
    const { setTitle, setDescription, setIsModalActive, title, description, iconLink, subtitle } = props
    const { translate } = useTranslation()

    const handleOpenModal = () => {
        setTitle(title)
        setDescription(description)
        setIsModalActive(true)
    }

    return <>
        <div className="floating-shadow-md rounded p-10 text-center relative pt-20 dark:bg-primary lg:w-[450px] md:w-[320px] w-10/12">
            <img src={iconLink} alt={`Feature ${title}`} className="w-24 h-24 rounded-2xl object-cover bg-white absolute -top-12 left-1/2 -translate-x-[50%] floating-shadow-md"/>
            <div className="flex flex-col gap-2">
                <b className="font-family-secondary text-2xl">{title}</b>
                <span>{subtitle}</span>
                <button onClick={handleOpenModal} className="text-primary dark:text-white font-bold mt-8 self-center ">{translate('Selengkapnya')}</button>
            </div>
        </div>
    </>

}

export default FeatureCard

interface FeatureCardProps {
    setTitle: Dispatch<SetStateAction<string>>
    setDescription: Dispatch<SetStateAction<string>>
    setIsModalActive: Dispatch<SetStateAction<boolean>>
    title: string
    subtitle: string
    description: string
    iconLink: string
}