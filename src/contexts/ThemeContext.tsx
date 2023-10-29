import { Dispatch, ReactNode, SetStateAction, createContext, useEffect } from "react"
import PropTypes from 'prop-types';

interface ThemeContextModel {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<SetStateAction<boolean>>
}

interface ThemeProviderProps {
    children: ReactNode
    isDarkMode: boolean
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextModel>({
    isDarkMode: false,
    setIsDarkMode: () => { }
})


export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, isDarkMode, setIsDarkMode } = props

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode))
    }, [isDarkMode])


    return <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <div className="bg-white dark:bg-primary-lighter transition duration-300">
                {children}
            </div>
        </div>
    </ThemeContext.Provider>
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}