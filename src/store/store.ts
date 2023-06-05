import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../services/auth";
import { profileSlice } from "./Profile";
import { modalSlice } from "./Modal";

export const rootStore = configureStore({
    devTools: true,
	reducer: {
		[modalSlice.name]: modalSlice.reducer,
		[profileSlice.name]: profileSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
	},
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([AuthApi.middleware]),
});

export type RootState = ReturnType<typeof rootStore.getState>;
