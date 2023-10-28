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

    return <button type="button" onClick={handleSwitchLanguage} className={`bg-white w-9 h-9 flex items-center justify-center floating-shadow-md rounded hover:bg-slate-200 transition duration-300 ${className}`}>
        <ReactCountryFlag countryCode={countryCode} svg />
    </button>
}

export const DarkModeButton = (props: ButtonProps) => {
    const { className } = props
    const { isDarkMode, setIsDarkMode } = useTheme()
    return <button type="button" onClick={() => setIsDarkMode(prev => !prev)} className={`bg-white w-9 h-9 flex items-center justify-center floating-shadow-md rounded hover:bg-slate-200 transition duration-300 ${className}`}>
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
        isLoading = false,
        onClick = () => { },
        className,
        children = <></>
    } = props

    return <button type={type} onClick={onClick} className={`bg-red-300 hover:bg-red-400 transition duration-300 ${className}`}>
        {children}
    </button>
}

export const SecondaryButton = (props: ButtonProps) => {
    const {
        type = 'button',
        isLoading = false,
        onClick = () => { },
        className,
        children = <></>
    } = props

    return <button type={type} onClick={onClick} className={`border-[1px] border-gray-300 hover:bg-red-300 hover:text-white transition duration-300 ${className}`}>
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