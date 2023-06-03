import {createSlice} from '@reduxjs/toolkit'

export interface AuthModal {
    isOpenModal: boolean
    currentForm: 'login' | 'registration'
}

const initialState: AuthModal = {
    isOpenModal: false,
    currentForm: 'login'
}

export const showAuthModal = createSlice({
    name: 'showAuthModal',
    initialState,
    reducers: {
        turnOnLogin: (state) => {
            state.isOpenModal = true
            state.currentForm = 'login'
        },
        turnOnRegistration: (state) => {
            state.isOpenModal = true
            state.currentForm = 'registration'
        },
        turnOffModal: (state) => {
            state.isOpenModal = false
        }
    }
})

export const {turnOnLogin, turnOnRegistration, turnOffModal} = showAuthModal.actions