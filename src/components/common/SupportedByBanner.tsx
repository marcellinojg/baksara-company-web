import useTranslation from "../../hooks/useTranslation"


const SupportedBy = () => {
    const { translate } = useTranslation()
    return <div className="bg-navbar-light dark:bg-none dark:bg-primary-light text-primary dark:text-white lg:flex-row flex-col py-[5vh] px-[10%] w-10/12 mx-auto floating-shadow-lg rounded-lg flex items-center justify-between">
        <b className="text-4xl font-family-secondary font-bold lg:pb-0 pb-8">{translate('Didukung oleh')}</b>
        <div className="flex items-center md:flex-row flex-col gap-12">
            <img src="/images/logo-google.webp" className="h-[5vh] min-h-[40px]" alt="Logo Google" />
            <img src="/images/logo-bangkit.webp" className="h-[5vh] min-h-[40px]" alt="Logo Bangkit" />
            <img src="/images/logo-km.webp" className="h-[5vh] min-h-[40px]" alt="Logo Kampus Merdeka" />
        </div>
    </div>
}

export default SupportedBy