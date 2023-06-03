import {configureStore} from '@reduxjs/toolkit'
import {AuthApi} from '../services/auth'
import {showProfile} from './Profile'
import {showAuthModal} from "./AuthModal";


export const rootStore = configureStore({
    devTools: true,
    reducer: {
        [showAuthModal.name]: showAuthModal.reducer,
        [showProfile.name]: showProfile.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([AuthApi.middleware]),
})

export type RootState = ReturnType<typeof rootStore.getState>
