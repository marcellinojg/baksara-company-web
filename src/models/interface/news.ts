
interface NewsModel {
    date: string
    imgUrl: string
    title: string
    description: string
    source: string
    sourceYear?: number
    link: string
    imgFile?: FileList
}
export default NewsModel