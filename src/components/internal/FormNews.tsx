import { SubmitHandler, UseFormReturn } from "react-hook-form";
import NewsModel from "../../models/interface/news";
import useTranslation from "../../hooks/useTranslation";
import { PrimaryButton } from "../common/Button";
import formatDate from "../../utils/formatDate";


const FormNews = (props: FormNewsProps) => {
    const { form, onSubmit, title, description, date, source, sourceYear, link } = props
    const { register, handleSubmit, formState: { errors } } = form
    const { translate } = useTranslation()

    return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="title" className="font-semibold">{translate('Judul Berita')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="text"
                id="title"
                defaultValue={title}
                placeholder={translate('Masukkan judul berita')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('title', {
                    required: 'Judul berita harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.title?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="description" className="font-semibold">{translate('Deskripsi Berita')} <span className="text-red-500 text-sm">*</span></label>
            <textarea
                id="description"
                defaultValue={description}
                rows={10}
                placeholder={translate('Masukkan Deskripsi Berita')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5 resize-none"
                {...register('description', {
                    required: 'Deskripsi Berita harus diisi'
                })}
            ></textarea>
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.description?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="source" className="font-semibold">{translate('Sumber Berita')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="text"
                id="source"
                defaultValue={source}
                placeholder={translate('Masukkan Sumber Berita')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('source', {
                    required: 'Sumber Berita harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.source?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="link" className="font-semibold">{translate('Link Berita')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="text"
                id="link"
                defaultValue={link}
                placeholder={translate('Masukkan Link Berita')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('link', {
                    required: 'Link Berita harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.source?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="sourceYear" className="font-semibold">{translate('Tahun')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="number"
                id="sourceYear"
                defaultValue={sourceYear}
                placeholder={translate('Masukkan Tahun')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('sourceYear', {
                    required: 'Tahun harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.sourceYear?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="date" className="font-semibold">{translate('Tanggal')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="date"
                id="date"
                defaultValue={formatDate(date, 'id-ID', true)}
                placeholder={translate('Masukkan Tanggal')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('date', {
                    required: 'Tanggal harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.sourceYear?.message!)}</span>
        </div>
        <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="imgFile" className="font-semibold">{translate('Gambar')} <span className="text-red-500 text-sm">*</span></label>
            <input
                type="file"
                id="imgFile"
                placeholder={translate('Masukkan Gambar')}
                className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                {...register('imgFile', {
                    required: 'Gambar harus diisi'
                })}
            />
            <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.imgFile?.message!)}</span>
        </div>
        <PrimaryButton className="w-full py-2 rounded" type="submit">
            Submit
        </PrimaryButton>
    </form>
}

export default FormNews

interface FormNewsProps extends NewsModel {
    form: UseFormReturn<NewsModel>
    onSubmit: SubmitHandler<NewsModel>
}