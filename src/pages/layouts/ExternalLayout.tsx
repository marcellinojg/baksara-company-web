import { ReactNode, useEffect, useState } from "react"
import Navbar from "../../components/common/Navbar"
import Sidebar from "../../components/common/Sidebar"
import * as FooterFragments from '../../components/common/FooterFragments'
import useTranslation from "../../hooks/useTranslation"
import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import DownloadAppLink from "../../components/common/DownloadAppLink"

const ExternalLayout = ({ children, showBanner = false, title = 'Baksara Indonesia' }: { children: ReactNode, showBanner?: boolean, title?: string }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const { translate } = useTranslation()

    useEffect(() => {
        document.title = title
    }, [title])

    return <>
        <header className="w-full">
            <Navbar setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </header>
        <main className={`min-w-screen min-h-screen relative`}>
            {showBanner === true &&
                <div className="top-[80px] py-1.5 text-sm text-center flex items-end justify-center bg-primary-light dark:bg-primary-dark transition duration-300 absolute w-full text-white">
                    <p>
                        Lorem ipsum dolor sit amet consectetur ! <br className="md:hidden block" />
                        <a href="https://www.google.com" target="_blank" className="font-bold ml-2 underline">Lorem, ipsum. →</a>
                    </p>
                </div>
            }
            {children}
        </main>
        <footer className="w-full">
            <FooterFragments.FooterDownload />
            <div className="bg-navbar-light dark:bg-none dark:bg-primary-light relative overflow-hidden">
                <img className="select-none absolute opacity-5 rotate-12 lg:-bottom-24 -top-12 lg:left-24 hidden dark:block" src="/images/main-pattern-light.png" width={600} alt="Main Pattern"></img>
                <img className="select-none absolute opacity-5 rotate-12 lg:-bottom-24 -top-12 lg:left-24 block dark:hidden" src="/images/main-pattern-dark.png" width={600} alt="Main Pattern"></img>
                <div className="flex lg:flex-row flex-col justify-center items-stretch lg:px-[10vw] px-[5vw] py-[5vh]">
                    <div className="lg:w-8/12 w-full flex flex-col pr-[10%]">
                        <img src="/images/logo-wide-dark.png" width={250} className="select-none block dark:hidden" alt="Logo Baksara Wide" />
                        <img src="/images/logo-wide-light.png" width={250} className="select-none hidden dark:block" alt="Logo Baksara Wide" />
                        <p className="text-black dark:text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Animi totam molestiae repellat possimus ratione ipsam reprehenderit consequuntur repellendus fuga,
                            placeat distinctio hic provident qui, soluta iste,
                            quisquam eaque quaerat velit aliquid suscipit saepe.
                            Perspiciatis consectetur, repudiandae rerum rem ab cum!
                        </p>
                        <span className="font-bold text-xl text-primary dark:text-white mt-6 mb-2.5">
                            {translate('Unduh Sekarang !')}
                        </span>
                        <DownloadAppLink />
                    </div>
                    <div className="lg:w-4/12 w-full flex flex-col ">
                        <b className="text-2xl text-primary dark:text-white mb-4 mt-8">{translate('Hubungi Kami')}</b>
                        <div className="flex flex-col gap-2">
                            <FooterFragments.FooterSocialLink Icon={FaEnvelope} label="admin@baksara.id" to="https://www.instagram.com" />
                            <FooterFragments.FooterSocialLink Icon={FaInstagram} label="@baksara.id" to="https://www.instagram.com" />
                            <FooterFragments.FooterSocialLink Icon={FaYoutube} label="Baksara Indonesia" to="https://www.instagram.com" />
                            <FooterFragments.FooterSocialLink Icon={FaLinkedin} label="Baksara Indonesia" to="https://www.instagram.com" />
                            {/* <FooterFragments.FooterSocialLink Icon={FaFileAlt} label="Privacy Policy" to="https://www.instagram.com" /> */}
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-2.5 py-4 lg:px-[10vw] px-[5vw]  border-t-[1px] border-primary-light dark:border-primary-darker">
                    <span className="text-black dark:text-white md:text-start text-center">
                        2023 © Baksara Indonesia. <br className="md:hidden block" /> {translate('Hak cipta dilindungi')}.
                    </span>
                    <div className="flex items-center gap-3">
                        <FooterFragments.FooterSocialButton Icon={FaInstagram} to="https://www.instagram.com" />
                        <FooterFragments.FooterSocialButton Icon={FaEnvelope} to="mailto:marcellinojg06@gmail.com" />
                        <FooterFragments.FooterSocialButton Icon={FaYoutube} to="https://www.youtube.com" />
                        <FooterFragments.FooterSocialButton Icon={FaLinkedin} to="https://www.linkedin.com" />
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default ExternalLayout 
