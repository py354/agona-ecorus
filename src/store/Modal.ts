import {createSlice} from '@reduxjs/toolkit'

export interface Modal {
    isOpenModal: boolean
    currentForm: 'login' | 'registration'
}

const initialState: Modal = {
    isOpenModal: false,
    currentForm: 'login'
}

export const showModal = createSlice({
    name: 'showModal',
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

export const {turnOnLogin, turnOnRegistration, turnOffModal} = showModal.actions