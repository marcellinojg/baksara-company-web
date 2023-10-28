import { useContext } from "react"
import { LoaderContext } from "../contexts/LoaderContext"

const useLoader = () => {
    return useContext(LoaderContext)
}

export default useLoader