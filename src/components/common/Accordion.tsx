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
        <div className="w-full border-b-2 border-primary dark:text-white dark:border-white">
            <button type="button" onClick={() => setIsActive(prev => !prev)} className="flex py-4 px-2 w-full justify-between items-center cursor-pointer bg-transparent">
                <h2 className="text-xl font-semibold text-start">{title}</h2>
                <span className={`text-primary dark:text-white transition duration-300 ${isActive === true ? 'rotate-180' : 'rotate-0'}`}><FaChevronDown/></span>
            </button>
            <div className={`w-full overflow-hidden transition-all ease-linear duration-300 ${isActive === true ? 'xl:max-h-[80px] lg:max-h-[100px] md:max-h-[150px] max-h-[250px]' : 'max-h-0'}`}>
                <p className="mx-2 mb-4">{content}</p>
            </div>
        </div>
    </>
}

export default Accordion