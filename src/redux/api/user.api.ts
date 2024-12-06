import { baseApi } from "./base.api";


const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//ADMIN ROUTES
		getAllUser: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
            providesTags:["user"]
		}),

		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `/user/${userId}`,
				method: "DELETE",
			}),
            invalidatesTags:["user"]
		}),


	}),
});

export const {useGetAllUserQuery, useDeleteUserMutation}  = userApi;