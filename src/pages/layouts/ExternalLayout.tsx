import { ReactNode, useState } from "react"
import Navbar from "../../components/common/Navbar"
import Sidebar from "../../components/common/Sidebar"
import { Slide } from "react-awesome-reveal"
import useTranslation from "../../hooks/useTranslation"

const ExternalLayout = ({ children, showBanner = false }: { children: ReactNode, showBanner?: boolean }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const { translate } = useTranslation()
    return <>
        <header className="w-full">
            <Navbar setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </header>
        <main className="min-w-screen min-h-screen flex items-center justify-center relative">
            {showBanner === true &&
                <div className="top-[80px] py-1.5 text-sm text-center flex items-end justify-center bg-red-400 absolute w-full text-white">
                    <p>
                        Lorem ipsum dolor sit amet consectetur.!<a href="https://www.google.com" target="_blank" className="font-bold ml-2">Lorem, ipsum. →</a>
                    </p>
                </div>
            }

            {children}
        </main>
        <footer>
            <div className="bg-white text-black flex justify-center lg:flex-row flex-col items-center gap-[5vw] pt-20">
                <Slide className="lg:w-4/12 md:w-2/3 w-10/12">
                    <div className=" flex flex-col gap-5">
                        <h1 className="font-bold text-secondary md:text-5xl text-4xl w-11/12">{translate('Unduh sekarang di App Store dan Play Store.')}</h1>
                        <span className="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo.</span>
                        <div className="flex items-center gap-2">
                            <a href="https://www.google.com" target="_blank">
                                <img src="/images/icon-gplay.webp" alt="Download Google Play Store" width={150} />
                            </a>
                            <a href="https://www.google.com" target="_blank">
                                <img src="/images/icon-ios.webp" alt="Download App Store" width={150} />
                            </a>
                        </div>
                    </div>
                </Slide>

                <Slide className="md:w-[500px] lg:mt-0 mt-10 w-10/12" direction="right">
                    <img src="/images/footer-mockup.webp" width={500} className="w-full" />
                </Slide>
            </div>

        </footer>
    </>
}

export default ExternalLayout 