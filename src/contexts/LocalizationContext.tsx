import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import id_ID from "../localization/id_ID";
import en_EN from "../localization/en_EN";

interface LocalizationContextModel {
    selectLocale: (key: 'id-ID' | 'en-EN') => void
    translate: (key: string) => string
    getLocale: () => 'id-ID' | 'en-EN'
}

interface LocalizationProviderProps {
    children: ReactNode
    locale: 'id-ID' | 'en-EN'
    setLocale: Dispatch<SetStateAction<'id-ID' | 'en-EN'>>

}

export const LocalizationContext = createContext<LocalizationContextModel>({
    selectLocale: (_key: string) => { },
    translate: (_key: string) => "",
    getLocale: () => "id-ID"
});


export const LocalizationProvider = (props: LocalizationProviderProps) => {
    const { children, locale, setLocale } = props

    const selectLocale = (key: 'id-ID' | 'en-EN') => {
        setLocale(key)
    }

    const getLocale = () => {
        return locale
    }

    const translate = (key: string) => {
        if (locale == 'id-ID' && id_ID[key])
            return id_ID[key]
        else if (locale == 'en-EN' && en_EN[key])
            return en_EN[key]
        else
            return key
    }


    return <LocalizationContext.Provider value={{ selectLocale, translate, getLocale }}>
        {children}
    </LocalizationContext.Provider>
}
