import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type AuthUser = {
	id: string;
	email: string;
	name: string;
	role: string;
	iat: number;
};
type AuthState = {
	user: AuthUser | null;
	token: string | null;
};

export const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: null } as AuthState,
	reducers: {

		setCredentials: (
			state,
			{ payload: { user, token } }: PayloadAction<AuthState>
		) => {
			state.user = user;
			state.token = token;
		},

		logout: (state) => {
			state.token = null;
			state.user = null;
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectedUser = (state: RootState) => state.auth.user;
export const selectedToken = (state: RootState) => state.auth.token;
