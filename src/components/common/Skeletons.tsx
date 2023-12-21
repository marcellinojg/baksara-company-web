

export const NewsCardSkeletons = () => {
    const count = [1, 2, 3, 4, 5, 6];
    return count.map(c =>
        <div key={c} className="floating-shadow-md rounded">
            <div className="flex items-center justify-center h-56 bg-gray-300 animate-pulse w-full">
                <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="bg-white dark:bg-primary py-8 px-6 rounded-b flex flex-col gap-4">
                <div className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )

}