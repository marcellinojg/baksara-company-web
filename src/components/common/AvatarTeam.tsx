import { FaLinkedin } from "react-icons/fa"


export const AvatarTeam = (props: AvatarTeamProps) => {
    const { link = '', imgUrl, name, role } = props


    return <div className="flex flex-col items-center justify-center lg:w-auto relative mx-auto">
        <div className="relative mb-4">
            <img src={imgUrl} className="md:w-48 md:h-48 w-[35vw] h-[35vw] object-cover rounded-full" alt={`Foto ${name}`} />
            <button
                onClick={() => window.open(link, '_blank')}
                className="text-2xl floating-shadow-md p-3 rounded-full bg-[#0072b1] hover:bg-[#3a77a9] transition duration-300 absolute bottom-2 right-2"
            >
                <span className="text-white">
                    <FaLinkedin />
                </span>
            </button>
        </div>
        <b className=" break-words text-center">{name}</b>
        <span className=" break-words text-center">{role}</span>
    </div>
}


export const AvatarMainTeam = (props: AvatarMainTeamProps) => {
    const { imgUrl, name, role, path } = props

    let PathElement;

    switch (path) {
        case 'cloud':
            PathElement = <div className="text-2xl floating-shadow-lg p-3 rounded-full bg-white transition duration-300 absolute bottom-2 right-2">
                <img src='/images/gcp.png' width={24} className="object-contain w-6 h-6" />
            </div>
            break
        case 'ml':
            PathElement = <div className="text-2xl floating-shadow-lg p-3 rounded-full bg-white transition duration-300 absolute bottom-2 right-2">
                <img src="/images/tensorflow.svg" width={24} className="object-contain w-6 h-6" />
            </div>
            break
        case 'android':
            PathElement = <div className="text-2xl floating-shadow-lg p-3 rounded-full bg-white transition duration-300 absolute bottom-2 right-2">
                <img src="/images/android.svg" width={24} className="object-contain w-6 h-6 scale-[1.75]" />
            </div>
            break
    }

    return <div className="flex flex-col items-center justify-center lg:w-auto relative mx-auto">
        <div className="relative mb-4">
            <img src={imgUrl} className="md:w-48 md:h-48 w-[35vw] h-[35vw] object-cover rounded-full" alt={`Foto ${name}`} />
            {PathElement}
        </div>
        <b className="break-words text-center">{name}</b>
        <span className="break-words text-center">{role}</span>
    </div>
}

export interface AvatarMainTeamProps extends AvatarTeamProps {
    path: 'cloud' | 'android' | 'ml'
}

export interface AvatarTeamProps {
    link?: string,
    imgUrl: string,
    name: string,
    role: string,
}