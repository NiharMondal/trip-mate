
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
	}),
});

export const { useLoginMutation } = authApi;
