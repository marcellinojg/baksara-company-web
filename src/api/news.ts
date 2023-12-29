import { nanoid } from "nanoid"
import supabase from "../../supabase"
import NewsModel from "../models/interface/news"
import { createAxiosInstance } from "../utils/createAxiosInstance"


export const getAllNews = async (): Promise<NewsModel[]> => {
    const { data, error } = await supabase.from('news').select()
    if (error) throw error
    return data as NewsModel[]
}

export const postNews = async (news: NewsModel) => {
    const newsImageId = nanoid()
    const file = news.imgFile![0]
    const { data, error: bucketError } = await supabase.storage.from('News').upload(`public/${newsImageId}`, file, {
        cacheControl: '3600',
        upsert: false,
    })
    if (bucketError) throw bucketError

    const { data: createdNews, error } = await supabase.from('news').insert({
        date: news.date,
        imgUrl: data.path,
        title: news.title,
        description: news.description,
        source: news.source,
        sourceYear: news.sourceYear,
        link: news.link
    }).select()

    if (error) throw error

    return createdNews[0] as NewsModel
}

export const updateNews = async ({ id, news }: { id: string, news: NewsModel }): Promise<NewsModel> => {
    const instance = createAxiosInstance()
    const res = await instance.put(`beritas/${id}`, news)
    return res.data as NewsModel
}


export const deleteNews = async (id: string) => {
    const { data, error } = await supabase.from('news').delete().eq('id', id).select()
    if (error) throw error
    return data
}

export const getNews = async (id: string): Promise<NewsModel> => {
    const { data, error } = await supabase.from('news').select().eq('id', id)
    if (error) throw error
    return data[0]
}