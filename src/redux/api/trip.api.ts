import { TResponseFromServer, TTripResponse } from "@/types";
import { baseApi } from "./base.api";

const tripApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//create-trip
		createTrip: builder.mutation({
			query: (payload) => ({
				url: "/trip",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["trip"],
		}),

		//fetech all trip : public
		getAllTrips: builder.query<
			TResponseFromServer<TTripResponse[]>,
			Record<string, string>
		>({
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
					url: "/trip",
					method: "GET",
					params,
				};
			},
			providesTags: ["trip"],
		}),

		//delete destinaiton
		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/trip/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["trip"],
		}),

		//get popular trip
		getPopularTrip: builder.query<
			TResponseFromServer<TTripResponse[]>,
			void
		>({
			query: () => ({
				url: "/trip/popular-trip",
				method: "GET",
			}),
			providesTags: ["trip"],
		}),
		//get recently added trip
		getFreshlyAddedTrip: builder.query<
			TResponseFromServer<TTripResponse[]>,
			void
		>({
			query: () => ({
				url: "/trip/freshly-added",
				method: "GET",
			}),
			providesTags: ["trip"],
		}),

		//get related trip
		relatedTrip: builder.query<
			TResponseFromServer<TTripResponse[]>,
			string
		>({
			query: (id) => ({
				url: `/trip/related-trip/${id}`,
				method: "GET",
			}),
			providesTags: ["trip"],
		}),

		getMyTrip: builder.query<TResponseFromServer<TTripResponse[]>, string>({
			query: (userId) => ({
				url: `/trip/my-trip/${userId}`,
				method: "GET",
			}),
			providesTags: ["trip"],
		}),
	}),
});

export const {
	useCreateTripMutation,
	useGetAllTripsQuery,
	useGetPopularTripQuery,
	useGetFreshlyAddedTripQuery,
	useRelatedTripQuery,
	useDeleteTripMutation,
	useGetMyTripQuery,
} = tripApi;
