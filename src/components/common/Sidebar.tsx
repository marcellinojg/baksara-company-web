import { Dispatch, MouseEventHandler, SetStateAction, useRef } from "react"
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import useTranslation from "../../hooks/useTranslation"
import { DarkModeButton, LanguageButton, NavbarButton } from "./Button"
import { IconType } from "react-icons"
import { ROUTES } from "../../models/consts/routes"
import { FaDownload, FaHome, FaQuestionCircle, FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"
import { HiNewspaper } from "react-icons/hi2"
import scrollToTarget from "../../utils/scrollOffset"
import { TbHeartHandshake } from 'react-icons/tb'


const Sidebar = (props: SidebarProps) => {
    const { showSidebar, setShowSidebar } = props
    const { translate } = useTranslation()
    const sidebarRef = useRef(null)
    useOutsideAlerter(sidebarRef, () => setShowSidebar(false))

    const handleScrollDownload = () => {
        scrollToTarget(document.querySelector('#downloadApp')!)
        setShowSidebar(false)
    }

    return <>
        {showSidebar && <div className="w-screen h-[100dvh] fixed top-0 z-[30] bg-black bg-opacity-70 left-0 lg:hidden block transition duration-300"></div>}
        <div ref={sidebarRef}
            className={`sidebar ${!showSidebar && 'md:translate-x-[40vw] translate-x-[85vw]'}`}>
            <span className="text-2xl font-semibold">{translate('Selamat Datang!')}</span>
            <div className="grow max-w-full max-h-full overflow-auto">
                <SidebarItem to={ROUTES.EXTERNAL.LANDING} label={translate('Beranda')} Icon={FaHome} />
                <SidebarItem to={ROUTES.EXTERNAL.ABOUT_US} label={translate('Tentang Kami')} Icon={FaUsers} />
                <SidebarItem to={ROUTES.EXTERNAL.FEATURES} label={translate('Fitur Kami')} Icon={TbHeartHandshake} state={{ section: 'features' }} onClick={() => scrollToTarget(document.querySelector('#features'), 70)} />
                <SidebarItem to={ROUTES.EXTERNAL.NEWS} label={translate('Berita')} Icon={HiNewspaper} />
                <SidebarItem to={ROUTES.EXTERNAL.FAQ} label={translate('FAQ')} Icon={FaQuestionCircle} />
                <NavbarButton onClick={handleScrollDownload} className="w-full flex justify-between items-center rounded py-3 px-6 mt-8 mb-4">
                    <span className="font-semibold">{translate('Unduh Aplikasi')}</span>
                    <FaDownload />
                </NavbarButton>

            </div>
            <div className="flex items-center justify-center gap-4">
                <DarkModeButton className="grow" />
                <LanguageButton className="grow" />
            </div>
        </div>

    </>
}

export default Sidebar

const SidebarItem = (props: SidebarItemProps) => {
    const { to, label, Icon, state, onClick } = props
    return <Link state={state} onClick={onClick} to={to} className="flex items-center gap-3 text-lg border-b-[1px] border-gray-300 px-3 py-4">
        <Icon />
        <span>{label}</span>
    </Link>
}


interface SidebarProps {
    showSidebar: boolean
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

interface SidebarItemProps {
    to: string
    label: string
    Icon: IconType
    state?: any
    onClick?: MouseEventHandler
}