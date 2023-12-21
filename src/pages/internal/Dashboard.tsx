import NewsCard from "../../components/common/NewsCard"
import InternalLayout from "../layouts/InternalLayout"
import { NewsCardSkeletons } from "../../components/common/Skeletons"
import { useMutation, useQuery } from "react-query"
import { getAllNews } from "../../api/news"
import useTranslation from "../../hooks/useTranslation"


const DashboardPage = () => {
    const getAllNewsQuery = useQuery('allNews', getAllNews)
    const { translate } = useTranslation()

    return <InternalLayout>
        <div className="min-w-screen text-primary dark:text-white py-16 transition duration-300 w-10/12 mx-auto">
            <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Daftar News</h1>
            {getAllNewsQuery.isLoading ?
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                    <NewsCardSkeletons />
                </div>
                :
                getAllNewsQuery.data ?
                    getAllNewsQuery.data.map((news, index) =>
                        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
                            <NewsCard key={index} {...news} isAdmin={true} />
                        </div>
                    ) :
                    <div className="flex flex-col items-center justify-center gap-4 mt-8 font-family-secondary">
                        <img src="/images/maskot-wave.png" alt="Baksara Not Found" className="min-w-[300px] max-w-[700px] w-1/2" />
                        <h1 className="text-center font-bold lg:text-3xl text-2xl">{translate('Maaf, tidak ada berita yang ditemukan 😔')}</h1>
                    </div>
            }

        </div>
    </InternalLayout>

}

export default DashboardPage