import { FaChartLine, FaNewspaper, FaTimes } from "react-icons/fa"
import { ROUTES } from "../../models/consts/routes"
import { Link, useLocation } from "react-router-dom"
import { MutableRefObject, SetStateAction } from "react"
import { IconType } from "react-icons"
import { User } from "@supabase/supabase-js"



const Sidebar = (props: SidebarProps) => {
    const { sidebarRef, sidebarActive, setSidebarActive } = props

    return <>
        {sidebarActive && <div className="w-screen h-screen fixed top-0 bg-black bg-opacity-70 left-0"></div>}
        <div ref={sidebarRef}
            className={`fixed h-screen bg-slate-200 floating-shadow-lg left-0 top-0 
            lg:w-[350px] md:w-1/2 w-full
            transition duration-300
            ${!sidebarActive && 'lg:-translate-x-[350px] md:-translate-x-[50vw] -translate-x-full'}
        `}
            style={{ zIndex: '2 !important' }}
        >

            <div className="flex md:justify-center justify-between items-center md:py-6 py-3 px-6 border-b-2 border-primaryDarker bg-primary">
                <img src="/images/logo-wide-light.png" width={200} className="md:w-2/3 w-3/12 rounded-full p-2" alt="" />
                <button className="bg-white md:hidden flex h-12 w-12 items-center justify-center rounded-full text-primary" onClick={() => setSidebarActive(false)}>
                    <FaTimes />
                </button>
            </div>
            {/* Sidebar items */}
            <div className="w-full h-full bg-white flex flex-col">
                <SidebarItem
                    label="Dashboard"
                    Icon={FaChartLine}
                    to={ROUTES.INTERNAL.DASHBOARD}
                />
                <SidebarItem
                    label="Buat News"
                    Icon={FaNewspaper}
                    to={ROUTES.INTERNAL.CREATE_NEWS}
                />
            </div>
        </div>

    </>
}

const SidebarItem = (props: SidebarItemProps) => {
    const { to, Icon, label } = props
    const location = useLocation()
    return <Link
        to={to}
        className={`p-6 text-black flex gap-3 items-center 
            hover:bg-gray-200 transition duration-300 font-bold
                ${location.pathname == to && 'bg-gray-200'}
            `}>
        <span className="text-2xl">
            <Icon />
        </span>
        <span>{label}</span>
    </Link>
}

interface SidebarProps {
    sidebarRef: MutableRefObject<any>
    sidebarActive: boolean
    setSidebarActive: React.Dispatch<SetStateAction<boolean>>
    userData: User
}

interface SidebarItemProps {
    to: string
    label: string
    Icon: IconType
}



export default Sidebar