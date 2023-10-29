import { ReactNode, useState } from "react"
import Navbar from "../../components/common/Navbar"
import Sidebar from "../../components/common/Sidebar"
import FooterDownload from "../../components/common/FooterDownload"
import useTranslation from "../../hooks/useTranslation"
import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const ExternalLayout = ({ children, showBanner = false }: { children: ReactNode, showBanner?: boolean }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const { translate } = useTranslation()
    return <>
        <header className="w-full">
            <Navbar setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </header>
        <main className="min-w-screen min-h-screen relative">
            {showBanner === true &&
                <div className="top-[80px] py-1.5 text-sm text-center flex items-end justify-center bg-primary-light dark:bg-primary-dark transition duration-300 absolute w-full text-white">
                    <p>
                        Lorem ipsum dolor sit amet consectetur.!<a href="https://www.google.com" target="_blank" className="font-bold ml-2">Lorem, ipsum. →</a>
                    </p>
                </div>
            }
            {children}
        </main>
        <footer className="w-full">
            <FooterDownload />
            <div className="bg-navbar-light dark:bg-none dark:bg-primary-light">
                <div className="flex justify-center items-center">
                    <div className="lg:w-8/12 w-full flex flex-col">

                    </div>
                    <div className="lg:w-4/12 w-full flex flex-col">

                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-2.5 py-4 lg:px-[10vw] px-[5vw] border-t-[1px] border-primary-light dark:border-primary-darker">
                    <span className="text-black dark:text-white ">
                        2023 © Baksara Indonesia. {translate('Hak cipta dilindungi')}.
                    </span>
                    <div className="flex items-center gap-3">
                        <a href="https://www.instagram.com" target="_blank" className="cursor-pointer bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker text-white floating-shadow-md p-4 rounded-full">
                            <FaInstagram />
                        </a>
                        <a href="" target="_blank" className="cursor-pointer bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker text-white floating-shadow-md p-4 rounded-full">
                            <FaEnvelope />
                        </a>
                        <a href="" target="_blank" className="cursor-pointer bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker text-white floating-shadow-md p-4 rounded-full">
                            <FaYoutube />
                        </a>
                        <a href="" target="_blank" className="cursor-pointer bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker text-white floating-shadow-md p-4 rounded-full">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default ExternalLayout 
