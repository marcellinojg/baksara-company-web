import { Fade } from "react-awesome-reveal"
import useTranslation from "../../hooks/useTranslation"


const SupportedBy = () => {
    const { translate } = useTranslation()
    return <Fade>
        <div className="bg-navbar-light dark:bg-none dark:bg-primary-light text-primary dark:text-white lg:flex-row flex-col py-[5vh] px-[10%] w-10/12 mx-auto floating-shadow-lg rounded-lg flex items-center justify-between">
            <b className="text-4xl font-family-secondary text-center font-bold lg:pb-0 pb-8">{translate('Didukung oleh')}</b>
            <div className="flex items-center md:flex-row justify-end flex-col gap-12 lg:w-2/3 ">
                <img src="/images/logo-google.webp" className="w-[10vw] min-w-[110px] h-[5vh] object-contain" alt="Logo Google" />
                <img src="/images/logo-bangkit.webp" className="w-[10vw] min-w-[110px] h-[5vh] object-contain" alt="Logo Bangkit" />
                <img src="/images/logo-km.webp" className="w-[10vw] min-w-[110px] h-[5vh] object-contain" alt="Logo Kampus Merdeka" />
            </div>
        </div>
    </Fade>
}

export default SupportedBy