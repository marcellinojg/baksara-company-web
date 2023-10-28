import { useContext } from "react"
import { LocalizationContext } from "../contexts/LocalizationContext"

const useTranslation = () => {
    return useContext(LocalizationContext)
}
export default useTranslation