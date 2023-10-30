import { ReactNode } from "react";

const Jumbotron = ({ children }: { children: ReactNode }) => {
    return <div className="min-h-[40dvh] mt-[75px] py-12 w-full bg-primary flex lg:flex-row flex-col items-center justify-center lg:gap-16 gap-8">
        <img src="/images/maskot-stand-cropped.png" width={120} alt="Maskot Baskara Standing" />
        <div className="text-white font-family-secondary font-bold xl:text-[3.5vw] lg:text-[6vw]  text-5xl lg:text-start text-center">
            {children}
        </div>
    </div>
}

export default Jumbotron