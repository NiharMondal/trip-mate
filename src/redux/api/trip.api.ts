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
		getAllTrips: builder.query<TResponseFromServer<TTripResponse[]>, void>({
			query: () => ({
				url: "/trip",
				method: "GET",
			}),
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
	useGetFreshlyAddedTripQuery
} = tripApi;
