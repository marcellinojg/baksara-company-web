import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

interface AccordionProps {
    title: string,
    content: string,
}


const Accordion = (props: AccordionProps) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const { title, content } = props
    return <>
        <div className="w-full border-b-2 border-primary">
            <button type="button" onClick={() => setIsActive(prev => !prev)} className="flex py-4 px-2 w-full justify-between items-center cursor-pointer">
                <h2>{title}</h2>
                <span className={`text-primary transition duration-300 ${isActive === true ? 'rotate-180' : 'rotate-0'}`}><FaChevronDown/></span>
            </button>
            <div className={`w-full overflow-hidden transition-all ease-linear duration-300 ${isActive === true ? 'max-h-[350px]' : 'max-h-0'}`}>
                <p className="my-4 mx-2 text-justify">{content}</p>
            </div>
        </div>
    </>
}

export default Accordion