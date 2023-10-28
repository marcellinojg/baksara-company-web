import { createContext, ReactNode, useState } from 'react';
import { FullPageLoader } from '../components/common/Loader';
import PropTypes from 'prop-types';


interface LoaderContextModel {
    showLoader: () => void
    hideLoader: () => void
}

export const LoaderContext = createContext<LoaderContextModel>({
    showLoader: () => { },
    hideLoader: () => { }
})

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [isLoaderOpen, setIsLoaderOpen] = useState<boolean>(false)

    const showLoader = () => {
        setIsLoaderOpen(true)
    }

    const hideLoader = () => {
        setIsLoaderOpen(false)
    }

    return <LoaderContext.Provider value={{ showLoader, hideLoader }}>
        {isLoaderOpen === true && <FullPageLoader />}
        {children}
    </LoaderContext.Provider>

}

LoaderProvider.propTypes = {
    children: PropTypes.node.isRequired
}