import { Fade } from "react-awesome-reveal"
import ExternalLayout from "../layouts/ExternalLayout"
import useTranslation from "../../hooks/useTranslation"
import { AvatarMainTeam, AvatarTeam } from "../../components/common/AvatarTeam"
import SupportedBy from "../../components/common/SupportedByBanner"


const AboutUsPage = () => {
    const { translate } = useTranslation()
    return <ExternalLayout title={translate('Baksara Indonesia | Tentang Kami')}>
        {/* Section 1 About Us */}
        <div className="min-w-screen min-h-[100dvh] flex items-center justify-center pb-12">
            <div className="lg:w-2/3 w-10/12 flex lg:flex-row flex-col items-center justify-center">
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:h-[60vh] lg:w-auto lg:pt-0 pt-24" alt="Maskot Baksara Standing" />
                </Fade>
                <div className="pl-[5vw] flex flex-col gap-5 lg:pt-0 pt-12">
                    <Fade cascade damping={0.5}>
                        <h1 className="font-bold font-family-secondary lg:text-6xl text-3xl text-primary dark:text-white transition duration-300">Lorem, ipsum dolor. [8]</h1>
                        <h2 className="font-semibold lg:text-3xl text-xl text-primary dark:text-white transition duration-300">Lorem ipsum dolor sit amet. [9]</h2>
                        <p className="lg:text-xl text-lg text-primary dark:text-white transition duration-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, veniam. [10]</p>
                    </Fade>
                </div>
            </div>
        </div>
        {/* Section 2 About Us */}
        <div className="min-w-screen min-h-[80dvh] flex items-center justify-center bg-primary-light dark:bg-primary-dark overflow-hidden relative transition duration-300">
            <img src="/images/main-pattern-light.png" className="absolute opacity-[0.03] select-none -top-1 rotate-45" alt="" />
            <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-center gap-4 py-12">
                <div className="lg:w-7/12 w-10/12 text-white lg:pr-[10%]">
                    <Fade cascade damping={0.3}>
                        <h1 className="font-family-secondary font-bold lg:text-4xl text-2xl">Lorem ipsum dolor sit amet. [11]</h1>
                        <br />
                        <p className="lg:text-xl text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quis perspiciatis molestiae placeat doloremque adipisci fugit rem sunt neque? Sed cum eius sequi aspernatur saepe. [12]
                        </p>
                        <br />
                        <p className="lg:text-xl text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, pariatur debitis fugit ea incidunt exercitationem quidem maiores veritatis? Autem, distinctio! [13]
                        </p>
                    </Fade>
                </div>
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:w-auto lg:h-[60vh]" alt="Maskot Baksara Standing" />
                </Fade>
            </div>
        </div>
        {/* Meet our team */}
        <div className="min-w-screen min-h-[100dvh] flex flex-col items-center justify-start text-primary dark:text-white py-16 transition duration-300">
            <Fade direction="up">
                <h1 className="font-family-secondary font-bold lg:text-5xl text-3xl">{translate('Perkenalkan Tim Kami')}</h1>
            </Fade>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-primary mt-16 w-10/12 mx-auto gap-y-12">
                <Fade cascade direction="up" damping={0.1}>
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                    <AvatarTeam imgUrl="/images/maskot-stand.png" link="https://www.linkedin.com" role="Project Manager" name="Maskot Baskara S.T M.Eng" />
                </Fade>
            </div>
        </div>
        {/* Main Team Bangkit */}
        <div className="min-w-screen min-h-[80dvh]  py-16  bg-primary-light dark:bg-primary-dark overflow-hidden relative mb-16 transition duration-300">
            <div className="flex lg:flex-row w-10/12 flex-col items-center lg:justify-between justify-center mx-auto">
                <h1 className="lg:text-5xl text-3xl font-family-secondary font-bold text-white transition duration-300">Lorem ipsum dolor sit. [14]</h1>
                <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
                    <img src="/images/logo-km.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                    <img src="/images/logo-google.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                    <img src="/images/logo-bangkit.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-white mt-16 w-10/12 mx-auto gap-y-12">
                <AvatarMainTeam path="cloud" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
                <AvatarMainTeam path="cloud" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
                <AvatarMainTeam path="ml" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
                <AvatarMainTeam path="ml" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
                <AvatarMainTeam path="android" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
                <AvatarMainTeam path="android" name="Maskot Baskara S.T M.Eng" role="Universitas Baksara" imgUrl="/images/maskot-stand.png" />
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center w-10/12 mx-auto mt-32 gap-12">
                <img src="/images/maskot-wave.png" width={360} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                <div className="lg:pr-[10%] lg:w-2/3">
                    <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus. [15]</p>
                    <br />
                    <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus. [16]</p>
                </div>
            </div>
        </div>

        <SupportedBy />
    </ExternalLayout>
}

export default AboutUsPage