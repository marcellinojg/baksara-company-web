import { FaDownload } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"
import { DarkModeButton, LanguageButton, NavbarButton } from "./Button"
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Dispatch, SetStateAction } from "react"
import useTranslation from "../../hooks/useTranslation"
import scrollToTarget from "../../utils/scrollOffset"

const Navbar = (props: NavbarProps) => {
    const { setShowSidebar, showBanner } = props
    const { translate } = useTranslation()

    const handleScrollDownload = () => {
        scrollToTarget(document.querySelector('#downloadApp')!)
        setShowSidebar(false)
    }

    return <nav className={`fixed w-full top-0 h-[75px] bg-primary  transition duration-300 z-20 ${showBanner === false && 'floating-shadow-lg'}`}>
        <div className="flex justify-between items-center lg:px-[12.5vw] md:px-[8vw] px-[7.5vw] h-full gap-[2vw]">
            {/* Brand */}
            <Link to={ROUTES.EXTERNAL.LANDING} className="">
                <img src="/images/logo-wide-light.png" width={170} className="md:w-[170px] w-[150px] block select-none" alt="Logo Baksara Wide" />
            </Link>

            {/* Primary Navbar */}
            <div className="items-center gap-6 grow lg:flex hidden text-white font-semibold">
                <Link to={ROUTES.EXTERNAL.LANDING} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}> {translate('Beranda')}</Link>
                <Link to={ROUTES.EXTERNAL.ABOUT_US} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>{translate('Tentang Kami')}</Link>
                <Link to={ROUTES.EXTERNAL.ABOUT_US} state={{ section: 'features' }} onClick={() => scrollToTarget(document.querySelector('#features'), 70)}>{translate('Fitur Kami')}</Link>
                <Link to={ROUTES.EXTERNAL.NEWS} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>{translate('Berita')}</Link>
                <Link to={ROUTES.EXTERNAL.FAQ} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>{translate('FAQ')}</Link>
            </div>

            {/* Secondary Navbar */}
            <div className="items-center gap-3 lg:flex hidden">
                <DarkModeButton />
                <LanguageButton />
                <NavbarButton onClick={handleScrollDownload} className="flex items-center justify-center gap-2 rounded py-2 px-5 font-bold floating-shadow-md">
                    <FaDownload />
                    {translate('Unduh Aplikasi')}
                </NavbarButton>
            </div>
            <button className="text-3xl lg:hidden block text-white" type="button" onClick={() => setShowSidebar(true)}>
                <HiOutlineBars3 />
            </button>
        </div>
    </nav>
}

export default Navbar


interface NavbarProps {
    setShowSidebar: Dispatch<SetStateAction<boolean>>
    showBanner: boolean
}