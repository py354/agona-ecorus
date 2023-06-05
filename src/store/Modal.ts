import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "react";

export interface Modal {
    currentForm: ReactElement | null;
}

const initialState: Modal = {
    currentForm: null,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
        setModal: (state, action: PayloadAction<ReactElement>) => {
			state.currentForm = action.payload;
        },

		destroyModal: (state) => {
			state.currentForm = null;
        },
	},
});

export const { setModal, destroyModal } = modalSlice.actions;
