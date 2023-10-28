import { FaAccusoft, FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ROUTES } from "../../models/consts/routes"
import { DarkModeButton, LanguageButton, PrimaryButton } from "./Button"
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Dispatch, SetStateAction } from "react"
import useTranslation from "../../hooks/useTranslation"

const Navbar = (props: NavbarProps) => {
    const { setShowSidebar } = props
    const { translate } = useTranslation()

    return <nav className="fixed w-full top-0 h-[8vh] min-h-[80px] z-10 bg-slate-200">
        <div className="flex justify-between items-center lg:px-[12.5vw] md:px-[8vw] px-[7.5vw] h-full gap-[2vw]">
            {/* Brand */}
            <Link to={ROUTES.EXTERNAL.LANDING} className="font-bold flex text-xl items-center gap-2">
                <FaAccusoft />
                <span className="text-lg">LOGO</span>
            </Link>

            {/* Primary Navbar */}
            <div className="items-center gap-6 grow lg:flex hidden">
                <Link to={ROUTES.EXTERNAL.LANDING}>{translate('Beranda')}</Link>
                <Link to={ROUTES.EXTERNAL.LANDING}>{translate('Tentang Kami')}</Link>
                <Link to={ROUTES.EXTERNAL.LANDING}>{translate('Berita')}</Link>
                <Link to={ROUTES.EXTERNAL.LANDING}>{translate('FAQ')}</Link>
            </div>

            {/* Secondary Navbar */}
            <div className="items-center gap-3 lg:flex hidden">
                <DarkModeButton />
                <LanguageButton />
                <PrimaryButton className="flex items-center justify-center gap-2 rounded py-2 px-5 font-bold floating-shadow-md">
                    <FaSignInAlt />
                    {translate('Masuk')}
                </PrimaryButton>
            </div>
            <button className="text-3xl lg:hidden block" type="button" onClick={() => setShowSidebar(true)}>
                <HiOutlineBars3 />
            </button>
        </div>
    </nav>
}

export default Navbar


interface NavbarProps {
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}