import { ReactNode, useState } from "react"
import Navbar from "../../components/common/Navbar"
import Sidebar from "../../components/common/Sidebar"
import FooterDownload from "../../components/common/FooterDownload"

const ExternalLayout = ({ children, showBanner = false }: { children: ReactNode, showBanner?: boolean }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    return <>
        <header className="w-full h-[100dvh] fixed z-10">
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
            <div className="flex justify-center items-center py-12 bg-yellow-100 px-[10vw]">
                <div className="lg:w-8/12 w-full flex flex-col">
            
                </div>                
                <div className="lg:w-4/12 w-full flex flex-col">

                </div>
            </div>
        </footer>
    </>
}

export default ExternalLayout 
