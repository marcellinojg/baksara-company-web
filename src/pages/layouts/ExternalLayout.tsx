import { ReactNode, useEffect, useState } from "react"
import Navbar from "../../components/common/Navbar"
import Sidebar from "../../components/common/Sidebar"
import * as FooterFragments from '../../components/common/FooterFragments'
import useTranslation from "../../hooks/useTranslation"
import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import DownloadAppLink from "../../components/common/DownloadAppLink"
import { ScrollTopButton } from "../../components/common/Button"

const ExternalLayout = (props: ExternalLayoutProps) => {
    const { children, showBanner = false, title = 'Baksara', showFooter = true } = props
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const { translate } = useTranslation()

    useEffect(() => {
        document.title = title
    }, [title])

    return <>
        <header className="w-full">
            <Navbar setShowSidebar={setShowSidebar} showBanner={showBanner} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        </header>
        <main className={`min-w-screen min-h-screen relative`}>
            {showBanner === true &&
                <div className="top-[75px] py-1.5 text-sm text-center flex items-end justify-center bg-primary-light  transition duration-300 absolute w-full z-10 text-white">
                    <p className="lg:pt-0">
                        { translate('Tuliskan cerita anda menggunakan aksara jawa!')} <br className="md:hidden block" />
                        <a href="https://www.google.com" target="_blank" className="font-bold ml-2 underline">{translate('Kunjungi Baksara Translate!')} →</a>
                    </p>
                </div>
            }
            {children}
        </main>
        <footer className="w-full">
            {showFooter === true &&
                <>
                    <FooterFragments.FooterDownload />
                    <div className="bg-primary relative overflow-hidden text-white">
                        <div className="flex lg:flex-row flex-col justify-center items-stretch lg:px-[10vw] px-[5vw] py-[5vh] overflow-hidden">
                            <div className="lg:w-8/12 w-full flex flex-col pr-[10%]">
                                <img src="/images/logo-wide-light.png" width={250} className="select-none" alt="Logo Baksara Wide" />
                                <img className="select-none absolute opacity-5 rotate-45 -top-28 lg:-right-28 hidden lg:block" src="/images/secondary-pattern-light.png" width={300} alt="Main Pattern"></img>
                                <img className="select-none absolute opacity-5 rotate-45 -top-28 lg:-left-28 hidden lg:block" src="/images/secondary-pattern-light.png" width={300} alt="Main Pattern"></img>
                                <p className="">
                                    {translate('Baksara: Menghadirkan budaya Jawa melalui pembelajaran bahasa Jawa. Kami berkomitmen untuk melestarikan warisan budaya ini dan membantu Anda belajar bahasa Jawa dengan lebih mudah dan menyenangkan. Ayo bersama-sama menjaga dan merayakan kekayaan bahasa Jawa')}
                                </p>
                                <span className="font-bold text-xl  mt-6 mb-2.5">
                                    {translate('Unduh Sekarang!')}
                                </span>
                                <DownloadAppLink />
                            </div>
                            <div className="lg:w-4/12 w-full flex flex-col ">
                                <b className="text-2xl  mb-4 mt-8">{translate('Get in touch with us')}</b>
                                <div className="flex flex-col gap-2">
                                    <FooterFragments.FooterSocialLink Icon={FaEnvelope} label="baksara.official@gmail.com" to="mailto:baksara.official@gmail.com" />
                                    <FooterFragments.FooterSocialLink Icon={FaInstagram} label="@baksara.official" to="https://www.instagram.com/baksara.official" />
                                    <FooterFragments.FooterSocialLink Icon={FaYoutube} label="Baksara" to="https://www.youtube.com/@Baksara" />
                                    <FooterFragments.FooterSocialLink Icon={FaLinkedin} label="Baksara" to="https://linkedin.com/company/baksara" />
                                    {/* <FooterFragments.FooterSocialLink Icon={FaFileAlt} label="Privacy Policy" to="https://www.instagram.com" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center justify-between gap-2.5 py-4 lg:px-[10vw] px-[5vw]  border-t-[1px] border-primary-light">
                            <span className="text-white md:text-start text-center">
                                2023 © Baksara. <br className="md:hidden block" /> {translate('Hak cipta dilindungi')}.
                            </span>
                            <div className="flex items-center gap-3">
                                <FooterFragments.FooterSocialButton Icon={FaInstagram} to="https://www.instagram.com/baksara.official" />
                                <FooterFragments.FooterSocialButton Icon={FaEnvelope} to="mailto:baksara.official@gmail.com" />
                                <FooterFragments.FooterSocialButton Icon={FaYoutube} to="https://www.youtube.com/@Baksara" />
                                <FooterFragments.FooterSocialButton Icon={FaLinkedin} to="https://linkedin.com/company/baksara" />
                            </div>
                        </div>
                    </div>
                </>
            }
            <ScrollTopButton />
        </footer>
    </>
}

export default ExternalLayout


interface ExternalLayoutProps {
    children: ReactNode
    showBanner?: boolean
    title?: string
    showFooter?: boolean
}
