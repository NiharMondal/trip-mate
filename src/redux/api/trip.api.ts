import { TResponseFromServer, TTripResponse } from "@/types";
import { baseApi } from "./base.api";

const tripApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//create-destination
		createTrip: builder.mutation({
			query: (payload) => ({
				url: "/destination",
				method: "POST",
				body: payload,
			}),
		}),

		//fetech all destination
		getTrips: builder.query({
			query: () => ({
				url: "/destination",
				method: "GET",
			}),
		}),

		//update destination
		getSingleTrip: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
				method: "PATCH",
			}),
		}),

		//delete destinaiton
		deleteTrip: builder.mutation({
			query: (id) => ({
				url: `/destination/${id}`,
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
	useGetPopularTripQuery,
	useGetFreshlyAddedTripQuery
} = tripApi;
