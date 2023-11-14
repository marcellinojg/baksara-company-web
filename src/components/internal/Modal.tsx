import { MouseEventHandler, useRef } from "react"
import { PrimaryButton, SecondaryButton } from "../common/Button"
import { FaTimesCircle, FaTrashAlt } from "react-icons/fa"
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import { Fade } from "react-awesome-reveal"

interface ModalProps {
    onClose?: any
    onSuccess?: MouseEventHandler
    title?: string
    description?: string
}

export const ConfirmationModal = (props: ModalProps) => {
    const { onClose, onSuccess, title, description } = props
    return <>
        <div className="w-screen h-screen bg-black text-primary bg-opacity-70 fixed left-0 top-0 z-20 flex items-center justify-center">
            <div className="flex flex-col bg-white floating-shadow-lg lg:px-10 px-4 py-8 lg:w-[600px] md:w-1/2 w-11/12 rounded-md">
                <span className="font-bold text-lg">{title}</span>
                <p className="mt-3">{description}</p>
                <div className="w-full flex gap-4 mt-7">
                    <SecondaryButton
                        className="flex items-center justify-center grow gap-2 py-2.5 text-primary"
                        onClick={onClose}
                    >
                        <FaTimesCircle />
                        Batal
                    </SecondaryButton>
                    <PrimaryButton
                        className="flex items-center justify-center grow gap-2 py-2.5"
                        onClick={onSuccess}
                    >
                        <FaTrashAlt />
                        Hapus
                    </PrimaryButton>
                </div>
            </div>

        </div>
    </>
}

export const FeatureModal = (props: ModalProps) => {
    const { title, description, onClose = () => { } } = props
    const modalRef = useRef(null)
    useOutsideAlerter(modalRef, onClose)

    return <>

        <Fade duration={200} className="w-screen h-screen fixed left-0 top-0 z-20">
            <div className="w-full h-full bg-black text-primary bg-opacity-70 flex items-center justify-center">
                <div ref={modalRef}>
                    <Fade direction="down" duration={400}>
                        <div className="flex flex-col bg-white floating-shadow-lg lg:px-10 px-4 py-8 lg:w-[600px] md:w-1/2 w-11/12 mx-auto rounded-md">
                            <span className="font-bold text-lg text-center">{title}</span>
                            <p className="mt-3">{description}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </Fade>

    </>
}