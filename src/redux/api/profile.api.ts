import { baseApi } from "./base.api";

const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		myProfile: builder.query({
			query: () => ({
				url: "/profile/me",
				method: "GET",
			}),
			providesTags: ["user"],
		}),
		updateMyProfile: builder.mutation({
			query: (payload) => ({
				url: "/profile/update-profile",
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["user"],
		}),
	}),
});

export const { useMyProfileQuery, useUpdateMyProfileMutation } = profileApi;
