import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
    balance: number | undefined;
    email: string | undefined;
}

const initialState: Profile = {
	balance: 0,
    email: "",
};

export const profileSlice = createSlice({
    name: "profile",
	initialState,
    reducers: {
		setBalance: (state, action: PayloadAction<number | undefined>) => {
			state.balance = action.payload;
        },
		setEmail: (state, action: PayloadAction<string | undefined>) => {
			state.email = action.payload;
        },
	},
});

export const { setBalance, setEmail } = profileSlice.actions;
