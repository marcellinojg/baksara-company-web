import { MouseEventHandler, ReactNode, useState } from "react"
import useTranslation from "../../hooks/useTranslation"
import ReactCountryFlag from "react-country-flag"
import useTheme from "../../hooks/useTheme"
import { FaMoon, FaSun } from "react-icons/fa"


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

interface ButtonProps {
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset'
    isLoading?: boolean
    className?: string
    children?: ReactNode
}