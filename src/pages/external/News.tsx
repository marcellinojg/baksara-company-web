import Jumbotron from "../../components/common/Jumbotron"
import ExternalLayout from "../layouts/ExternalLayout"
import NewsCard from "../../components/common/NewsCard"
import useTranslation from "../../hooks/useTranslation"
import { useQuery } from "react-query"
import { getAllNews } from '../../api/news';
import { NewsCardSkeletons } from "../../components/common/Skeletons"


const NewsPage = () => {
    const { translate } = useTranslation()
    const { data: news, isLoading } = useQuery('allNews', () => getAllNews(), {
        refetchOnWindowFocus: false
    })


    return <ExternalLayout title={translate('Baksara | Berita')}>
        <Jumbotron>
            <span>Baksara<br /> News</span>
        </Jumbotron>
        <div className="min-w-screen text-primary dark:text-white py-16 transition duration-300 w-10/12 mx-auto">
            <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl lg:text-start text-center">{translate('Berita Kebudayaan Jawa')}</h1>

            {isLoading ?
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                    <NewsCardSkeletons />
                </div>
                :
                news && news.length > 0 ?
                    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                        {news.map((news, index) =>
                            <NewsCard key={index} {...news} />
                        )}  
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center gap-4 mt-8 font-family-secondary">
                        <img src="/images/maskot-wave.png" alt="Baksara Not Found" className="min-w-[300px] max-w-[700px] w-1/2" />
                        <h1 className="text-center font-bold lg:text-3xl text-2xl">{translate('Maaf, tidak ada berita yang ditemukan 😔')}</h1>
                    </div>
            }

            {/* <NewsCard
                    imgUrl="/images/maskot-wave.png"
                    date={new Date().toISOString()}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                    source="Baksara"
                    sourceYear={2023}
                    link={'https://www.google.com'}
                /> */}
        </div>
    </ExternalLayout>
}

export default NewsPage