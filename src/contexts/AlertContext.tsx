import { createContext, ReactNode, useState } from 'react';
import AlertProps from '../models/interface/alert';
import Alert from '../components/common/Alert';

interface AlertContextModel {
    addAlert: (props: AlertProps) => void
    clearAlert: () => void
}


export const AlertContext = createContext<AlertContextModel>(
    {
        addAlert: () => { },
        clearAlert: () => { },
    }
)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alerts, setAlerts] = useState<ReactNode[]>([])


    const addAlert = (alertProps: AlertProps) => {
        setAlerts(prev => [...prev, (<Alert title={alertProps.title} type={alertProps.type} message={alertProps.message} key={alerts.length}></Alert>)])
    }
    const clearAlert = () => {
        setAlerts([])
    }

    return <AlertContext.Provider value={{ addAlert, clearAlert }}>
        <div className='fixed bottom-6 lg:right-4 right-[5vw] z-30  flex flex-col gap-2 lg:min-w-[30vw] lg:max-w-[60vw] min-w-[50vw] max-w-[100vw] w-[90vw]  '>
            {alerts}
        </div>
        {children}
    </AlertContext.Provider>
}
