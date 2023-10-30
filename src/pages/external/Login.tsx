import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from "../../hooks/useTranslation"
import ExternalLayout from "../layouts/ExternalLayout"
import { LoginUser } from "../../models/interface/auth"
import { PrimaryButton } from "../../components/common/Button"

const LoginPage = () => {
    const { translate } = useTranslation()
    const { register, formState: { errors }, handleSubmit } = useForm<LoginUser>()

    const onSubmit: SubmitHandler<LoginUser> = (data: LoginUser) => {

    }

    return <ExternalLayout showFooter={false} title={translate("Baksara Indonesia | Masuk")}>
        <div className="min-w-screen min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-primary-light text-primary dark:text-white rounded floating-shadow-md p-8 lg:w-1/3 md:w-1/2 w-10/12">
                <h1 className="text-center font-family-secondary font-bold lg:text-5xl text-4xl">Sign In</h1>
                <div className="space-y-4 my-7">
                    <div className="w-11/12 flex flex-col gap-1 mx-auto">
                        <label htmlFor="username" className="font-semibold">{translate('Nama Pengguna')}</label>
                        <input
                            type="text"
                            id="username"
                            placeholder={translate('Masukkan nama pengguna anda')}
                            className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                            {...register('username', {
                                required: 'Nama pengguna harus diisi'
                            })}
                        />
                        <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.username?.message!)}</span>
                    </div>
                    <div className="w-11/12 flex flex-col gap-1 mx-auto">
                        <label htmlFor="password" className="font-semibold">{translate('Kata Sandi')}</label>
                        <input
                            type="password"
                            id="password"
                            placeholder={translate('Masukkan kata sandi anda')}
                            className="w-full border-2 border-primary dark:border-none text-primary rounded p-1.5"
                            {...register('password', {
                                required: 'Kata sandi harus diisi'
                            })}
                        />
                        <span className="text-red-500 dark:text-red-300 font-semibold text-sm mt-0.5">{translate(errors.password?.message!)}</span>
                    </div>
                </div>
                <div className="w-11/12 mx-auto">
                    <PrimaryButton className="w-full px-4 py-3 rounded font-semibold" type="submit">
                        {translate('Sign In')}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </ExternalLayout>
}

export default LoginPage