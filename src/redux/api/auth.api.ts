import { baseApi } from "./base.api";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
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
	}),
});

export const { useLoginMutation, useChangePasswordMutation, useLogoutMutation } = authApi;
