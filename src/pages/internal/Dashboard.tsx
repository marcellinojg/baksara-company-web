import { useState } from "react"
import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import NewsModel from "../../models/interface/news"
import { AllNewsLoader } from "../../utils/newsLoader"


const DashboardPage = () => {
    const [allNews, setAllNews] = useState<NewsModel[]>([])


    return <InternalLayout>
        <AllNewsLoader setData={setAllNews}>
            <div className="min-w-screen text-primary dark:text-white py-16 transition duration-300 w-10/12 mx-auto">
                <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Daftar News</h1>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                    {allNews.map(news => <NewsCard
                        imgUrl={news.imgUrl}
                        date={news.date}
                        title={news.title}
                        description={news.title}
                        source={news.source}
                        sourceYear={news.sourceYear}
                        link={news.link}
                        isAdmin={true}
                    />
                    )}
                    <NewsCard
                        imgUrl="/images/maskot-wave.png"
                        date={new Date().toISOString()}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                        source="Baksara"
                        sourceYear={2023}
                        link={'https://www.google.com'}
                        isAdmin={true}
                    />
                    <NewsCard
                        imgUrl="/images/maskot-wave.png"
                        date={new Date().toISOString()}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                        source="Baksara"
                        sourceYear={2023}
                        link={'https://www.google.com'}
                        isAdmin={true}
                    />
                    <NewsCard
                        imgUrl="/images/maskot-wave.png"
                        date={new Date().toISOString()}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                        source="Baksara"
                        sourceYear={2023}
                        link={'https://www.google.com'}
                        isAdmin={true}
                    />
                    <NewsCard
                        imgUrl="/images/maskot-wave.png"
                        date={new Date().toISOString()}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                        source="Baksara"
                        sourceYear={2023}
                        link={'https://www.google.com'}
                        isAdmin={true}
                    />
                    <NewsCard
                        imgUrl="/images/maskot-wave.png"
                        date={new Date().toISOString()}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis corporis?"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate commodi, sint tempore quas voluptatum sequi ex facilis! Reiciendis, totam eius et voluptatum nostrum facere, doloremque at illum nesciunt suscipit amet labore eligendi maiores, sed unde?"
                        source="Baksara"
                        sourceYear={2023}
                        link={'https://www.google.com'}
                        isAdmin={true}
                    />

                </div>
            </div>
        </AllNewsLoader>

    </InternalLayout>

}

export default DashboardPage