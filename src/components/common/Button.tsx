import { MouseEventHandler, ReactNode, useEffect, useState } from "react"
import useTranslation from "../../hooks/useTranslation"
import ReactCountryFlag from "react-country-flag"
import useTheme from "../../hooks/useTheme"
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"


export const LanguageButton = (props: ButtonProps) => {
    const { className } = props
    const { getLocale, selectLocale } = useTranslation()
    const [countryCode, setCountryCode] = useState<string>(getLocale() === "id-ID" ? 'id' : 'us')

    const handleSwitchLanguage = () => {
        if (getLocale() == 'id-ID') {
            setCountryCode('us')
            selectLocale('en-EN')
        }
        else {
            setCountryCode('id')
            selectLocale('id-ID')
        }
    }

    return <button type="button" onClick={handleSwitchLanguage} className={`bg-white dark:bg-primary-dark dark:hover:bg-primary-darker dark:text-white w-9 h-9 flex items-center justify-center floating-shadow-md rounded hover:bg-slate-200 transition duration-300 ${className}`}>
        <ReactCountryFlag countryCode={countryCode} svg />
    </button>
}

export const DarkModeButton = (props: ButtonProps) => {
    const { className } = props
    const { isDarkMode, setIsDarkMode } = useTheme()
    return <button type="button" onClick={() => setIsDarkMode(prev => !prev)} className={`bg-white dark:bg-primary-dark dark:hover:bg-primary-darker dark:text-white w-9 h-9 flex items-center justify-center floating-shadow-md rounded text-primary hover:bg-slate-200 transition duration-300 ${className}`}>
        {isDarkMode === true ?
            <FaMoon />
            :
            <FaSun />
        }
    </button>
}

export const PrimaryButton = (props: ButtonProps) => {
    const {
        type = 'button',
        onClick = () => { },
        className,
        children = <></>
    } = props

    return <button type={type} onClick={onClick} className={`bg-primary-light hover:bg-primary dark:bg-primary-dark dark:hover:bg-primary-darker transition duration-300 text-white ${className}`}>
        {children}
    </button>
}

export const SecondaryButton = (props: ButtonProps) => {
    const {
        type = 'button',
        onClick = () => { },
        className,
        children = <></>
    } = props

    return <button type={type} onClick={onClick} className={`border-[1px] border-gray-300 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition duration-300 ${className}`}>
        {children}
    </button>
}

export const ScrollTopButton = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const { translate } = useTranslation()

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500)
                setIsActive(true)
            else
                setIsActive(false)
        }

        window.addEventListener('scroll', handleShowButton)

        return () => window.removeEventListener('scroll', handleShowButton)
    }, [])

    return <>
        {isActive &&
            <Fade direction="up" className="fixed bottom-4 right-4 bg-primary group rounded-full z-20" duration={300}>
                <button className="w-full h-full  flex items-center justify-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="flex items-center justify-center gap-4 text-white hover:w-56 w-12 h-12 hover:px-4  transition-width duration-200">
                        <span className="text-xl ">
                            <FaArrowUp />
                        </span>
                        <span className="hidden group-hover:block font-semibold whitespace-nowrap overflow-hidden">{translate('Kembali ke Atas')}</span>
                    </div>
                </button>
            </Fade>
        }

    </>
}

interface ButtonProps {
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset'
    isLoading?: boolean
    className?: string
    children?: ReactNode
}