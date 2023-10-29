import useTranslation from "../../hooks/useTranslation"

const FooterDownload = () => {
    const { translate } = useTranslation()

    return <div className=" text-black dark:text-white flex justify-center lg:flex-row flex-col items-center gap-[5vw] pt-20 ">
        <div className="lg:w-4/12 md:w-2/3 w-10/12 flex flex-col gap-5">
            <h1 className="font-bold text-secondary md:text-5xl text-4xl w-11/12">{translate('Unduh sekarang di App Store dan Play Store.')}</h1>
            <span className="md:text-lg text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo.</span>
            <div className="flex items-center gap-2">
                <a href="https://www.google.com" target="_blank">
                    <img src="/images/icon-gplay.webp" alt="Download Google Play Store" width={150} />
                </a>
                <a href="https://www.google.com" target="_blank">
                    <img src="/images/icon-ios.webp" alt="Download App Store" width={150} />
                </a>
            </div>
        </div>

        <div className="md:w-[500px] lg:mt-0 mt-10 w-10/12">
            <img src="/images/footer-mockup.webp" width={500} className="w-full" />
        </div>
    </div>
}

export default FooterDownload