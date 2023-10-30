import Jumbotron from "../../components/common/Jumbotron"
import ExternalLayout from "../layouts/ExternalLayout"


const NewsPage = () => {
    return <ExternalLayout>
        <Jumbotron>
            <span>Baksara<br /> News</span>
        </Jumbotron>
        <div className="min-w-screen text-primary dark:text-white py-16 transition duration-300 w-10/12 mx-auto">
            <h1 className="font-bold font-family-secondary lg:text-5xl text-3xl">Lorem, ipsum. [17]</h1>

        </div>
    </ExternalLayout>
}

export default NewsPage