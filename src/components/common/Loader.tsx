import { Oval } from 'react-loader-spinner';


export function FullPageLoader() {
    return <div className='min-w-screen min-h-screen w-screen h-screen fixed bg-black flex justify-center top-0 items-center bg-opacity-[0.7] z-10'>
        <Oval color={'#000000'} secondaryColor={'#FFFFFF'} />
    </div>

}