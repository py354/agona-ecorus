import {configureStore} from '@reduxjs/toolkit'
import {AuthApi} from '../services/auth'
import {showProfile} from './Profile'
import {showModal} from "./Modal";


export const rootStore = configureStore({
    devTools: true,
    reducer: {
        [showModal.name]: showModal.reducer,
        [showProfile.name]: showProfile.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([AuthApi.middleware]),
})

export type RootState = ReturnType<typeof rootStore.getState>
