import { Fade } from "react-awesome-reveal"
import ExternalLayout from "../layouts/ExternalLayout"
import useTranslation from "../../hooks/useTranslation"


const AboutUsPage = () => {
    const { translate } = useTranslation()
    return <ExternalLayout title={translate('Baksara Indonesia | Tentang Kami')}>
        <div className="min-w-screen min-h-[100dvh] flex items-center justify-center">
            <div className="lg:w-2/3 w-10/12 flex lg:flex-row flex-col items-center justify-center">
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:h-[60vh] lg:w-auto lg:pt-0 pt-24" alt="Maskot Baksara Standing" />
                </Fade>
                <div className="pl-[5vw] flex flex-col gap-5 lg:pt-0 pt-12">
                    <Fade cascade damping={0.5}>
                        <h1 className="font-bold font-family-secondary lg:text-6xl text-3xl text-primary dark:text-white">Lorem, ipsum dolor.</h1>
                        <h2 className="font-semibold lg:text-3xl text-xl text-primary dark:text-white">Lorem ipsum dolor sit amet.</h2>
                        <p className="lg:text-xl text-lg text-primary dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, veniam.</p>
                    </Fade>
                </div>
            </div>
        </div>
        <div className="min-w-screen min-h-[80dvh] flex items-center justify-center bg-primary-light dark:bg-primary-dark">
            <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-center gap-4 py-12">
                <div className="lg:w-7/12 w-10/12 text-white lg:pr-[10%]">
                    <Fade cascade damping={0.3}>
                        <h1 className="font-family-secondary font-bold lg:text-4xl text-2xl">Lorem ipsum dolor sit amet.</h1>
                        <br />
                        <p className="lg:text-xl text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quis perspiciatis molestiae placeat doloremque adipisci fugit rem sunt neque? Sed cum eius sequi aspernatur saepe.
                        </p>
                        <br />
                        <p className="lg:text-xl text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, pariatur debitis fugit ea incidunt exercitationem quidem maiores veritatis? Autem, distinctio!
                        </p>
                    </Fade>
                </div>
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:w-auto lg:h-[60vh]" alt="Maskot Baksara Standing" />
                </Fade>
            </div>
        </div>
    </ExternalLayout>
}

export default AboutUsPage