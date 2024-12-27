import { baseApi } from "./base.api";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//login
		signUp: builder.mutation({
			query: (paylaod) => ({
				url: "/auth/sign-up",
				method: "POST",
				body: paylaod,
			}),
		}),
		//login
		login: builder.mutation({
			query: (paylaod) => ({
				url: "/auth/login",
				method: "POST",
				body: paylaod,
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
		}),

		//change-password
		changePassword: builder.mutation({
			query: (payload) => ({
				url: "/auth/change-password",
				method: "PATCH",
				body: payload,
			}),
		}),

		//forgot-password
		forgotPassword: builder.mutation({
			query: (payload) => ({
				url: "/auth/forgot-password",
				method: "POST",
				body: payload,
			}),
		}),

		// reset-password
		resetPassword: builder.mutation({
			query: (payload) => ({
				url: "/auth/reset-password",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const {
	useSignUpMutation,
	useLoginMutation,
	useChangePasswordMutation,
	useLogoutMutation,

	useForgotPasswordMutation,
	useResetPasswordMutation,
} = authApi;
