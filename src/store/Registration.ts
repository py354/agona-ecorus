import {createSlice} from '@reduxjs/toolkit'

export interface Registration {
    isOpenModal: boolean
}

const initialState: Registration = {
    isOpenModal: false
}

export const showRegistration = createSlice({
    name: 'showRegistration',
    initialState,
    reducers: {
        turnOnRegistration: (state) => {
            state.isOpenModal = true
        },
        turnOffRegistration: (state) => {
            state.isOpenModal = false
        }
    }
})

export const {turnOnRegistration, turnOffRegistration} = showRegistration.actions