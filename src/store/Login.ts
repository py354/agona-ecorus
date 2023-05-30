import {createSlice} from '@reduxjs/toolkit'

export interface Login {
    isOpenModal: boolean
}

const initialState: Login = {
    isOpenModal: false
}

export const showModalLogin = createSlice({
    name: 'showModalLogin',
    initialState,
    reducers: {
        turnOnLogin: (state) => {
            state.isOpenModal = true
        },
        turnOffLogin: (state) => {
            state.isOpenModal = false
        }
    }
})

export const {turnOnLogin, turnOffLogin} = showModalLogin.actions