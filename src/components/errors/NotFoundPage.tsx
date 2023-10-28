import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="bg-white px-[3vw] py-4 rounded-lg text-center pb-16">
            <img src="/404.png" className="h-[50vh]" alt="" />
            <h2 className="mb-12 font-bold text-xl">Page not found</h2>
            <Link to="/" className="bg-gray-900 hover:bg-gray-700 transition duration-300 p-4 px-10 rounded-md text-white font-bold">
                Back to Home
            </Link>
        </div>
    </div>
}