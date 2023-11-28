import Accordion from "../../components/common/Accordion"
import Jumbotron from "../../components/common/Jumbotron"
import dataFaq from "../../data/faq"
import useTranslation from "../../hooks/useTranslation"
import ExternalLayout from "../layouts/ExternalLayout"


const FaqPage = () => {
    const { translate } = useTranslation()

    return <ExternalLayout title="Baksara | FAQ">
        <Jumbotron>
            <span>Frequently <br /> Asked<br /> Questions</span>
        </Jumbotron>
        <div className="w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 mt-24 gap-10 text-primary dark:primary-dark">
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">{translate('Tentang Baksara')}</h1>
                {dataFaq.tentang.map(f =>
                    <Accordion
                        title={f.title}
                        content={f.description}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">{translate('Penggunaan Aplikasi')}</h1>
                {dataFaq.aplikasi.map(f =>
                    <Accordion
                        title={f.title}
                        content={f.description}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">{translate('Isi dan Metode Pembelajaran')}</h1>
                {dataFaq.pembelajaran.map(f =>
                    <Accordion
                        title={f.title}
                        content={f.description}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">{translate('Berlangganan')}</h1>
                {dataFaq.langganan.map(f =>
                    <Accordion
                        title={f.title}
                        content={f.description}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">{translate('Umum')}</h1>
                {dataFaq.umum.map(f =>
                    <Accordion
                        title={f.title}
                        content={f.description}
                    />
                )}
            </div>
        </div>
    </ExternalLayout>
}

export default FaqPage