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


const LandingPage = () => {
    const { translate } = useTranslation()
    return <ExternalLayout showBanner={true}>
        <div className="w-full min-h-[100dvh] flex lg:flex-row flex-col-reverse items-center justify-center lg:pt-0 pt-[150px]">
            <img src="/images/ternary-pattern-dark.png" width={200} className="absolute select-none block dark:hidden opacity-[0.03] lg:h-[150vh] w-auto lg:rotate-12" alt="" />
            <img src="/images/ternary-pattern-light.png" width={200} className="absolute select-none hidden dark:block opacity-[0.05] lg:h-[150vh] w-auto lg:rotate-12" alt="" />
            <div className="lg:w-4/12 w-10/12 flex flex-col lg:gap-8 gap-6 ">
                <Fade>
                    <p className="md:text-5xl text-4xl font-family-secondary self-start font-bold">
                        <span className="highlight relative text-primary dark:text-primary-dark">Lorem, ipsum dolor. [1]</span> <br />
                        <span className="text-primary-lighter dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, incidunt. [2]</span>
                    </p>
                    <p className="md:text-xl text-black dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptatem explicabo cupiditate quasi tenetur dicta praesentium, perferendis harum fugit dignissimos magnam in voluptatum fugiat voluptatibus libero doloribus dolorum et ipsum! [3]</p>
                    <PrimaryButton
                        onClick={() => window.open("https://www.instagram.com", '_blank')}
                        className="flex items-center justify-center gap-4 w-[250px] p-2.5  rounded font-semibold"
                    >
                        <FaInstagram />
                        {translate('Ikuti kami di Instagram')}
                    </PrimaryButton>
                </Fade>
            </div>
            <Fade className=" lg:w-5/12 w-10/12">
                <img src="/images/maskot-wave.png" className="lg:translate-x-24 mx-auto" width={700} alt="Maskot Baksara Waving" />
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
                        <img src="/images/maskot-wave.png" width={400} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                        <div className="lg:pr-[10%] lg:w-2/3 flex flex-col gap-3">
                            <h2 className="text-white font-bold font-family-secondary lg:text-4xl text-2xl">Title title title 1</h2>
                            <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus.</p>
                            <span className="font-semibold text-white">Sumber: Sumber (1970)</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <img src="/images/maskot-wave.png" width={400} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                        <div className="lg:pr-[10%] lg:w-2/3 flex flex-col gap-3">
                            <h2 className="text-white font-bold font-family-secondary lg:text-4xl text-2xl">Title title title 2</h2>
                            <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus.</p>
                            <span className="font-semibold text-white">Sumber: Sumber (1970)</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <img src="/images/maskot-wave.png" width={400} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                        <div className="lg:pr-[10%] lg:w-2/3 flex flex-col gap-3">
                            <h2 className="text-white font-bold font-family-secondary lg:text-4xl text-2xl">Title title title 3</h2>
                            <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus.</p>
                            <span className="font-semibold text-white">Sumber: Sumber (1970)</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex lg:flex-row flex-col items-center mx-auto lg:gap-24 gap-12">
                        <img src="/images/maskot-wave.png" width={400} className="bg-navbar-light rounded-lg lg:ml-[10%]" alt="" />
                        <div className="lg:pr-[10%] lg:w-2/3 flex flex-col gap-3">
                            <h2 className="text-white font-bold font-family-secondary lg:text-4xl text-2xl">Title title title 4</h2>
                            <p className="text-white lg:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolorum iste velit mollitia ratione odit nostrum dolorem maiores, nisi minus.</p>
                            <span className="font-semibold text-white">Sumber: Sumber (1970)</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </ExternalLayout>
}

export default LandingPage