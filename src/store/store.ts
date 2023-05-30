import {configureStore} from '@reduxjs/toolkit'
import {showModalLogin} from './Login'
import {AuthApi} from '../services/auth'
import {showRegistration} from './Registration'
import {showProfile} from './Profile'


export const rootStore = configureStore({
    devTools: true,
    reducer: {
        [showModalLogin.name]: showModalLogin.reducer,
        [showRegistration.name]: showRegistration.reducer,
        [showProfile.name]: showProfile.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([AuthApi.middleware]),
})

export type RootState = ReturnType<typeof rootStore.getState>
