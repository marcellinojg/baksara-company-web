import { Fade } from "react-awesome-reveal"
import ExternalLayout from "../layouts/ExternalLayout"
import { PrimaryButton } from "../../components/common/Button"
import { FaInstagram } from "react-icons/fa"
import useTranslation from "../../hooks/useTranslation"
import SupportedBy from "../../components/common/SupportedByBanner"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules"
import { ActivitySlider, TestimoniSlider } from "../../components/common/Slide"


const LandingPage = () => {
    const { translate } = useTranslation()
    return <ExternalLayout showBanner={true}>
        <div className="w-full min-h-[100dvh] flex lg:flex-row flex-col-reverse items-center justify-center lg:pt-0 pt-[150px]">
            {/* <img src="/images/ternary-pattern-dark.png" width={200} className="absolute select-none block dark:hidden opacity-[0.03] lg:h-[150vh] top-14 w-auto lg:rotate-12" alt="" /> */}
            {/* <img src="/images/ternary-pattern-light.png" width={200} className="absolute select-none hidden dark:block opacity-[0.05] lg:h-[150vh] top-14 w-auto lg:rotate-12" alt="" /> */}
            <div className="xl:w-4/12 lg:w-6/12 w-10/12 flex flex-col gap-6 xl:translate-x-0 lg:translate-x-24">
                <Fade>
                    <p className="font-family-secondary self-start font-bold mt-6">
                        <span className="highlight xl:text-6xl text-4xl relative text-primary dark:text-primary-dark">{translate('Sugeng Rawuh')}</span>
                        <br />
                        <span className="text-primary-lighter xl:text-5xl text-3xl tracking-wider dark:text-white">{translate('Pamawas Basa Jawa Minangka Budaya Kita')}</span>
                    </p>
                    <p className="xl:text-xl md:text-lg text-black dark:text-white">
                        {translate('Basa Jawa ora bakal luntur dening jaman merga ing kene kita wis siyap nguri-uri bebarengan karo')} <b>BAKSARA</b>.
                    </p>
                    <PrimaryButton
                        onClick={() => window.open("https://www.instagram.com", '_blank')}
                        className="flex items-center justify-center gap-4 w-[250px] p-2.5  rounded font-semibold"
                    >
                        <FaInstagram />
                        {translate('Ikuti kami di Instagram')}
                    </PrimaryButton>
                </Fade>
            </div>
            <Fade className="xl:w-5/12 lg:w-5/12 w-10/12">
                <img src="/images/maskot-wave.png" className="xl:translate-x-24 mx-auto " width={700} alt="Maskot Baksara Waving" />
            </Fade>
        </div>
        <div className="lg:-translate-y-1/3 lg:mt-0 mt-12">
            <SupportedBy />
        </div>
        <div className="min-w-screen- min-h-[50dvh] py-12 mt-16  bg-primary-light flex items-center justify-center dark:bg-primary-dark overflow-hidden relative transition duration-300">
            <div className="w-10/12 mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={150}
                    autoplay={{
                        delay: 4000,
                    }}
                    className="cursor-grab"
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <ActivitySlider
                            imgAlt="Gambar Aktivitas"
                            imgUrl="/images/maskot-wave.png"
                            title="Title title title 1"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus."
                            source="Media Baksara"
                            sourceYear={1970}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <ActivitySlider
                            imgAlt="Gambar Aktivitas"
                            imgUrl="/images/maskot-wave.png"
                            title="Title title title 2"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus."
                            source="Media Baksara"
                            sourceYear={1970}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <ActivitySlider
                            imgAlt="Gambar Aktivitas"
                            imgUrl="/images/maskot-wave.png"
                            title="Title title title 3"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus."
                            source="Media Baksara"
                            sourceYear={1970}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="min-w-screen flex flex-col items-center justify-start text-primary dark:text-white pt-28 transition duration-300">
            <Fade direction="up">
                <h1 className="font-family-secondary font-bold lg:text-5xl text-3xl text-center mx-6">{translate('Kata mereka tentang Baksara')}</h1>
            </Fade>
            <div className="w-10/12 mt-12">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay={{
                        delay: 5000,
                    }}
                    className="cursor-grab"
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide className="py-16">
                        <TestimoniSlider name="Maskot Baskara S.T M.Eng" role="Dosen Informatika Universitas Baksara" testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quos sunt vero quas alias delectus culpa quasi quaerat ducimus?" />
                    </SwiperSlide>
                    <SwiperSlide className="py-16">
                        <TestimoniSlider name="Maskot Baskara S.T M.Eng" role="Dosen Informatika Universitas Baksara" testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quos sunt vero quas alias delectus culpa quasi quaerat ducimus?" />
                    </SwiperSlide>
                    <SwiperSlide className="py-16">
                        <TestimoniSlider name="Maskot Baskara S.T M.Eng" role="Dosen Informatika Universitas Baksara" testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quos sunt vero quas alias delectus culpa quasi quaerat ducimus?" />
                    </SwiperSlide>
                    <SwiperSlide className="py-16">
                        <TestimoniSlider name="Maskot Baskara S.T M.Eng" role="Dosen Informatika Universitas Baksara" testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quos sunt vero quas alias delectus culpa quasi quaerat ducimus?" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </ExternalLayout >
}

export default LandingPage