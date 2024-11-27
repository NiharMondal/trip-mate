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
		}),

		//fetech all trip
		getAllTrips: builder.query<
			TResponseFromServer<TTripResponse[]>,
			Record<string, string>
		>({
			query: (query) => {
				console.log(query);
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
		}),

		//update trip
		getSingleTrip: builder.mutation({
			query: (id) => ({
				url: `/trip/${id}`,
				method: "PATCH",
			}),
		}),

		//delete destinaiton
		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/trip/${id}`,
				method: "DELETE",
			}),
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
		}),
		
	
	}),
});

export const {
	useGetAllTripsQuery,
	useGetPopularTripQuery,
	useGetFreshlyAddedTripQuery,
	
} = tripApi;
