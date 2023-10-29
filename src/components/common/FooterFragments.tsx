import { Fade } from "react-awesome-reveal"
import useTranslation from "../../hooks/useTranslation"
import { IconType } from "react-icons"
import DownloadAppLink from "./DownloadAppLink"

export const FooterDownload = () => {
    const { translate } = useTranslation()

    return <div id="downloadApp" className=" text-black dark:text-white flex justify-center lg:flex-row flex-col items-center gap-[5vw] pt-20 ">

        <div className="lg:w-4/12 md:w-2/3 w-10/12 flex flex-col gap-5">
            <Fade cascade damping={0.5}>
                <h1 className="font-bold font-family-secondary md:text-5xl text-4xl w-11/12">{translate('Unduh sekarang di App Store dan Play Store.')}</h1>
                <span className="md:text-lg text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo.</span>
                <div className="flex items-center gap-2">
                    <DownloadAppLink />
                </div>
            </Fade>
        </div>

        <div className="md:w-[500px] lg:mt-0 mt-10 w-10/12">
            <Fade>
                <img src="/images/footer-mockup.webp" width={500} className="w-full" />
            </Fade>
        </div>
    </div>
}

export const FooterSocialButton = (props: FooterSocialButtonProps) => {
    const { Icon, to } = props
    return <a href={to} target="_blank" className="cursor-pointer bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker text-white floating-shadow-md p-4 rounded-full" >
        <Icon />
    </a>
}

export const FooterSocialLink = (props: FooterSocialLinkProps) => {
    const { Icon, to, label } = props

    return <div className="flex items-center gap-2 text-primary dark:text-white">
        <Icon />
        <a href={to} target="_blank">{label}</a>
    </div>
}


interface FooterSocialButtonProps {
    Icon: IconType
    to: string
}

interface FooterSocialLinkProps extends FooterSocialButtonProps {
    label: string
}
