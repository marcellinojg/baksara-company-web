import NewsModel from "../models/interface/news"
import { createAxiosInstance } from "../utils/createAxiosInstance"

export const getAllNews = async (): Promise<NewsModel[]> => {
    const instance = createAxiosInstance()
    const res = await instance.get('beritas')
    return res.data as NewsModel[]
}

export const postNews = async (news: NewsModel): Promise<NewsModel> => {
    const instance = createAxiosInstance()
    const res = await instance.post('beritas', news)
    return res.data as NewsModel
}

export const updateNews = async ({ id, news }: { id: string, news: NewsModel }): Promise<NewsModel> => {
    const instance = createAxiosInstance()
    const res = await instance.put(`beritas/${id}`, news)
    return res.data as NewsModel
}

export const deleteNews = async (id: string) => {
    const instance = createAxiosInstance()
    await instance.delete(`beritas/${id}`)
    return 'SUCCESS'
}

export const getNews = async (id: string): Promise<NewsModel> => {
    const instance = createAxiosInstance()
    const res = await instance.get(`beritas/${id}`)
    return res.data as NewsModel
}