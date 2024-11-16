import { baseApi } from "./base.api";

const destinationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		
		//create-destination
		createDestination: builder.mutation({
			query: (payload) => ({
				url: "/destination",
				method: "POST",
				body: payload,
			}),
		}),

		//fetech all destination
		allDestination: builder.query({
			query: () => ({
				url: "/destination",
				method: "GET",
				
			}),
		}),

		//update destination
		updateDestination: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "PATCH",
			}),
		}),

		//delete destinaiton
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
