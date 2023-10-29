import { FaLinkedin } from "react-icons/fa"


const AvatarTeam = (props: AvatarTeamProps) => {
    const { linkedInUrl, imgUrl, name, role } = props


    return <div className="flex flex-col items-center justify-center lg:w-auto relative mx-auto">
        <div className="relative mb-4">
            <img src={imgUrl} className="md:w-48 md:h-48 w-[35vw] h-[35vw] object-cover bg-navbar-light rounded-full" alt={`Foto ${name}`} />
            <button
                onClick={() => window.open(linkedInUrl, '_blank')}
                className="text-2xl floating-shadow-md p-3 rounded-full bg-[#0072b1] hover:bg-[#3a77a9] transition duration-300 absolute -bottom-0 -right-0"
            >
                <span className="text-white">
                    <FaLinkedin />
                </span>
            </button>
        </div>
        <b className="md:w-48 w-[35vw] break-words text-center">{name}</b>
        <span className="md:w-48 w-[35vw] break-words text-center">{role}</span>
    </div>
}

export default AvatarTeam


interface AvatarTeamProps {
    linkedInUrl: string,
    imgUrl: string,
    name: string,
    role: string,
}