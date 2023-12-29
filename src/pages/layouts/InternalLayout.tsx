import { ReactNode, useRef, useState } from "react"
import { FaBars, FaSignOutAlt } from "react-icons/fa"
import InitialsAvatar from 'react-initials-avatar';
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { SecondaryButton } from "../../components/common/Button";
import Sidebar from "../../components/internal/Sidebar";
import useAuth from "../../hooks/useAuth";

interface InternalLayoutProps {
    children?: ReactNode
    useTopBarrier?: boolean
}

const InternalLayout = (props: InternalLayoutProps) => {
    const { children, useTopBarrier = true } = props
    const [dropdownActive, setDropdownActive] = useState<boolean>(false)
    const [sidebarActive, setSidebarActive] = useState<boolean>(false)
    const dropdownRef = useRef(null)
    const sidebarRef = useRef(null)
    useOutsideAlerter(dropdownRef, () => setDropdownActive(false))
    useOutsideAlerter(sidebarRef, () => setSidebarActive(false))
    const { signOut } = useAuth()
    const { user } = useAuth()


    const handleLogout = () => {
        signOut()
    }


    return <>
        {user &&
            <div className="min-w-screen min-h-screen bg-login pb-24">
                <header className="fixed top-0 w-full p-4 lg:px-10 z-10 flex justify-between place-items-center bg-primary floating-shadow-md">
                    <button onClick={() => setSidebarActive(true)} className="flex lg:gap-4 items-center bg-white hover:bg-slate-200 p-4 md:px-10 text-primary font-bold rounded-full transition duration-300">
                        <FaBars />
                        <span className="lg:block hidden">Menu</span>
                    </button>
                    <div className="relative">
                        <button className="text-primary  bg-white font-bold h-12 w-12 rounded-md" onClick={() => setDropdownActive(prev => !prev)}>
                            <InitialsAvatar name={user.email!} />
                        </button>
                        {/* Dropdown */}
                        {dropdownActive &&
                            <div className="bg-white p-4 absolute floating-shadow-md -translate-x-[300px] translate-y-4 w-[350px] rounded-lg" ref={dropdownRef}>
                                <div className="flex flex-col items-start justify-center w-full">
                                    <div className="flex items-center justify-start gap-4 border-b-2 border-slate-400 pb-4 w-full">
                                        <InitialsAvatar className="bg-white text-primary border-2 border-primary  font-bold h-[50px] w-[50px] rounded-md flex items-center justify-center" name={user.email!} />
                                        <div className="flex flex-col">
                                            <span>{user.email!}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full mt-4">
                                        <SecondaryButton
                                            onClick={handleLogout}
                                            className="w-full text-start flex items-center py-2 px-4 gap-5 text-primary hover:text-white"
                                        >
                                            <FaSignOutAlt />
                                            <span className="text-[16px]">Sign out</span>
                                        </SecondaryButton>
                                    </div>
                                </div>
                            </div>
                        }

                        <Sidebar userData={user} sidebarActive={sidebarActive} sidebarRef={sidebarRef} setSidebarActive={setSidebarActive} />
                    </div>
                </header>
                {useTopBarrier &&
                    <div className="h-28">

                    </div>
                }
                {children}
            </div>
        }
    </>

}
export default InternalLayout