import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type AuthState = {
	user: null;
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
			console.log(user);
			state.user = user;
			state.token = token;
		},
	},
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
