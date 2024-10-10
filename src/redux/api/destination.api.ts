import { baseApi } from "./base.api";

const destinationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createDestination: builder.mutation({
			query: (payload) => ({
				url: "/destination",
				method: "POST",
				body: payload,
			}),
		}),
		allDestination: builder.query({
			query: (payload) => ({
				url: "/destination",
				method: "GET",
			}),
		}),

		updateDestination: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "PATCH",
			}),
		}),
		deleteDestination: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useCreateDestinationMutation,
	useAllDestinationQuery,
	useUpdateDestinationMutation,
	useDeleteDestinationMutation,
} = destinationApi;
