import Jumbotron from "../../components/common/Jumbotron"
import ExternalLayout from "../layouts/ExternalLayout"
import NewsCard from "../../components/common/NewsCard"
import useTranslation from "../../hooks/useTranslation"


const NewsPage = () => {
    const { translate } = useTranslation()
    return <ExternalLayout title={translate('Baksara | Berita')}>
        <Jumbotron>
            <span>Baksara<br /> News</span>
        </Jumbotron>
        <div className="min-w-screen text-primary dark:text-white py-16 transition duration-300 w-10/12 mx-auto">
            <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">{translate('Berita Kebudayaan Jawa')}</h1>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                />
                                <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                />
                                <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                />
                                <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                />
                                <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                />
                
            </div>
        </div>
    </ExternalLayout>
}

export default NewsPage