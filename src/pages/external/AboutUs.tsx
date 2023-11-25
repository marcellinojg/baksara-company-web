import { Fade } from "react-awesome-reveal"
import ExternalLayout from "../layouts/ExternalLayout"
import useTranslation from "../../hooks/useTranslation"
import { AvatarMainTeam, AvatarTeam } from "../../components/common/AvatarTeam"
import SupportedBy from "../../components/common/SupportedByBanner"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import scrollToTarget from "../../utils/scrollOffset"
import FeatureCard from "../../components/common/FeatureCard"
import { FeatureModal } from "../../components/internal/Modal"
import teamData from "../../data/team"
import teamIntiData from "../../data/team_inti"


const AboutUsPage = () => {
    const { translate } = useTranslation()
    const { state } = useLocation()

    const [featureTitle, setFeatureTitle] = useState<string>('')
    const [featureDescription, setFeatureDescription] = useState<string>('')
    const [isModalActive, setIsModalActive] = useState<boolean>(false)


    useEffect(() => {
        if (state) {
            const element = document.querySelector(`#${state.section}`)
            if (element) scrollToTarget(element, 70)
        }
    }, [state])


    return <ExternalLayout title={translate('Baksara | Tentang Kami')}>
        {/* Section 1 About Us */}
        <div className="min-w-screen min-h-[100dvh] flex items-center justify-center pb-12">
            <div className="lg:w-2/3 w-10/12 flex lg:flex-row flex-col items-center justify-center">
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:h-[60vh] lg:w-auto lg:pt-0 pt-24" alt="Maskot Baksara Standing" />
                </Fade>
                <div className="pl-[5vw] flex flex-col gap-5 lg:pt-0 pt-12">
                    <Fade cascade damping={0.5}>
                        <h1 className="font-bold font-family-secondary lg:text-6xl text-3xl text-primary dark:text-white transition duration-300">{translate('Halo Bolo-Bolo')}</h1>
                        <h2 className="font-semibold lg:text-3xl text-xl text-primary dark:text-white transition duration-300">{translate('Nepangaken, jenengku Bakbolbot.')}</h2>
                        <p className="lg:text-xl text-lg text-primary dark:text-white transition duration-300">{translate('Mari menjelajahi Baksara bersamaku!')}</p>
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
                        <h1 className="font-family-secondary font-bold lg:text-5xl text-3xl">{translate('Sugeng Rawuh ing Baksara!')}</h1>
                        <br />
                        <p className="lg:text-xl text-justify">
                            {translate('Baksara adalah sebuah platform belajar bahasa Jawa yang didedikasikan untuk memperkaya pemahaman Anda tentang budaya Jawa melalui modul, kegiatan, dan latihan. 📚')}
                        </p>
                        <br />
                        <p className="lg:text-xl text-justify">
                            {translate('Kami berfokus pada pengajaran dan penyebaran kekayaan bahasa Jawa dengan menghubungkan antara pembelajar dan budaya Jawa. 🌟')}
                        </p>
                    </Fade>
                </div>
                <Fade>
                    <img src="/images/maskot-stand-cropped.png" width={150} className="lg:w-auto lg:h-[60vh]" alt="Maskot Baksara Standing" />
                </Fade>
            </div>
        </div>
        {/* Features */}
        <div id="features" className="min-w-screen flex flex-col items-center justify-start text-primary dark:text-white pt-20  pb-16 transition duration-300">
            <Fade direction="up">
                <h1 className="font-family-secondary font-bold lg:text-5xl text-3xl">{translate('Fitur Kami')}</h1>
            </Fade>
            <div className="flex flex-wrap items-stretch justify-center gap-12 gap-y-24 mt-24">
                <FeatureCard
                    setTitle={setFeatureTitle}
                    setDescription={setFeatureDescription}
                    setIsModalActive={setIsModalActive}
                    title={'Lorem, ipsum. 1'}
                    subtitle="Lorem, ipsum dolor sit amet."
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo beatae porro, animi sed soluta saepe accusamus non atque sapiente?'}
                    iconLink="/images/maskot-wave.png"
                />
                <FeatureCard
                    setTitle={setFeatureTitle}
                    setDescription={setFeatureDescription}
                    setIsModalActive={setIsModalActive}
                    title={'Lorem, ipsum. 2'}
                    subtitle="Lorem, ipsum dolor sit amet."
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo beatae porro, animi sed soluta saepe accusamus non atque sapiente?'}
                    iconLink="/images/maskot-wave.png"
                />
                <FeatureCard
                    setTitle={setFeatureTitle}
                    setDescription={setFeatureDescription}
                    setIsModalActive={setIsModalActive}
                    title={'Lorem, ipsum. 3'}
                    subtitle="Lorem, ipsum dolor sit amet."
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo beatae porro, animi sed soluta saepe accusamus non atque sapiente?'}
                    iconLink="/images/maskot-wave.png"
                />
                <FeatureCard
                    setTitle={setFeatureTitle}
                    setDescription={setFeatureDescription}
                    setIsModalActive={setIsModalActive}
                    title={'Lorem, ipsum. 4'}
                    subtitle="Lorem, ipsum dolor sit amet."
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo beatae porro, animi sed soluta saepe accusamus non atque sapiente?'}
                    iconLink="/images/maskot-wave.png"
                />
                <FeatureCard
                    setTitle={setFeatureTitle}
                    setDescription={setFeatureDescription}
                    setIsModalActive={setIsModalActive}
                    title={'Lorem, ipsum. 5'}
                    subtitle="Lorem, ipsum dolor sit amet."
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo beatae porro, animi sed soluta saepe accusamus non atque sapiente?'}
                    iconLink="/images/maskot-wave.png"
                />
            </div>
        </div>
        {/* Meet our team */}
        <div className="min-w-screen flex flex-col items-center justify-start text-primary dark:text-white py-16 transition duration-300">
            <Fade direction="up">
                <h1 className="font-family-secondary font-bold lg:text-5xl text-3xl">{translate('Perkenalkan Tim Kami')}</h1>
            </Fade>
            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-16 w-10/12 mx-auto gap-y-12">
                <Fade cascade direction="up" damping={0.1}>
                    {teamData.map(p =>
                        <AvatarTeam imgUrl={p.imgUrl} link={p.link} role={p.role} name={p.name} />
                    )}
                </Fade>
            </div>
        </div>
        {/* Main Team Bangkit */}
        <div className="min-w-screen min-h-[80dvh]  py-16  bg-primary-light dark:bg-primary-dark overflow-hidden relative mb-16 transition duration-300">
            <div className="flex lg:flex-row w-10/12 flex-col items-center lg:justify-between justify-center mx-auto">
                <Fade cascade direction="up" damping={0.1}>
                    <h1 className="lg:text-5xl text-3xl font-family-secondary font-bold text-white transition duration-300">{translate('From Bangkit to Baksara, Baksara for Indonesia')}</h1>
                    <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
                        <img src="/images/logo-km.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                        <img src="/images/logo-google.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                        <img src="/images/logo-bangkit.webp" width={120} className="lg:w-[120px] w-16" alt="" />
                    </div>
                </Fade>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-white mt-16 w-10/12 mx-auto gap-y-12">
                <Fade cascade direction="up" damping={0.1}>
                    {teamIntiData.map(p =>
                        <AvatarMainTeam path={p.path} name={p.name} role={p.role} imgUrl={p.imgUrl} />
                    )}
                </Fade>
            </div>
            <Fade>
                <div className="flex lg:flex-row flex-col items-center justify-center w-10/12 mx-auto mt-32 gap-12">
                    <img src="/images/maskot-wave.png" width={360} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                    <div className="lg:pr-[10%] lg:w-2/3">
                        <p className="text-white lg:text-xl text-justify">{translate('Sebagai bagian dari hasil program Bangkit 2023, Baksara berhasil meraih posisi top-20 dalam Proyek Capstone berbasis Produk dan menerima dukungan inkubasi dari Google Indonesia serta Dikti Kemdikbudristek. 🏅')}</p>
                        <br />
                        <p className="text-white lg:text-xl text-justify">{translate('Baksara mendapat dukungan dari Google Indonesia, Direktorat Jenderal Pendidikan Tinggi, Universitas Indonesia, dan Bangkit Academy yang dipimpin oleh Google, Tokopedia, Gojek, & Traveloka.')}</p>
                    </div>
                </div>
            </Fade>
        </div>

        <SupportedBy />
        {isModalActive === true &&
            <FeatureModal title={featureTitle} description={featureDescription} onClose={() => setIsModalActive(false)} />
        }
    </ExternalLayout>
}


export default AboutUsPage