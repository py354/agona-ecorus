export interface ModalProps {
    isOpen: boolean
    closeModal: () => void
    currentForm: 'login' | 'registration'
}

export interface FormProps {
    closeModal: () => void
}
