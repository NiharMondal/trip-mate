import { TDestinationResponse, TResponseFromServer, TTripResponse } from "@/types";
import { baseApi } from "./base.api";

type TSlugOnly = {
	_id: string;
	slug: string;
	destination: string;
};

const destinationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//create-destination
		createDestination: builder.mutation({
			query: (payload) => ({
				url: "/destination",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["destination"],
		}),

		//fetech all destination
		allDestination: builder.query({
			query: (query) => {
				const params = new URLSearchParams();
				if (query && Object.keys(query).length) {
					Object.keys(query).forEach((key) => {
						if (query[key] && query[key].length > 0) {
							params.append(key, query[key].toString());
						}
					});
				}
				return {
					url: "/destination",
					method: "GET",
					params,
				};
			},
			providesTags: ["destination"],
		}),

		getOnlyDestinationSlug: builder.query<
			TResponseFromServer<TSlugOnly[]>,
			void
		>({
			query: () => ({
				url: "/destination?fields=slug,destination",
				method: "GET",
			}),
			providesTags: ["destination"],
		}),

		//update destination
		updateDestination: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "PATCH",
			}),
			invalidatesTags: ["destination"],
		}),

		//delete destinaiton
		deleteDestination: builder.mutation<
			TResponseFromServer<TDestinationResponse>,
			string
		>({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["destination"],
		}),

		//get trips by destination
		getTripByDestination: builder.query<
			TResponseFromServer<TTripResponse[]>,
			Record<string, string>
		>({
			query: (query) => {
				const params = new URLSearchParams();
				if (query.search) {
					params.append("search", query.search);
				}
				return {
					url: `/destination/${query.destination}/trips`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["destination"],
		}),
	}),
});

export const {
	useCreateDestinationMutation,
	useAllDestinationQuery,
	useGetOnlyDestinationSlugQuery,
	useUpdateDestinationMutation,
	useDeleteDestinationMutation,

	//

	useGetTripByDestinationQuery,
} = destinationApi;
