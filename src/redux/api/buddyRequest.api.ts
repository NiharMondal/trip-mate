import {
	TBookingRequest,
	TBookingResponse,
	TGetMyIncomingRequests,
	TOutGoingResponse,
	TResponseFromServer,
} from "@/types";
import { baseApi } from "./base.api";
import { FieldValues } from "react-hook-form";

const buddyApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		//create buddy request
		createBuddyRequest: builder.mutation<
			TResponseFromServer<TBookingResponse>,
			TBookingRequest | FieldValues
		>({
			query: (payload) => ({
				url: `/buddy-request/${payload.trip}/request`,
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["buddyRequest"],
		}),

		//update buddy request status
		updateBuddyRequestStatus: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/buddy-request/response/${id}/update-status`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["buddyRequest"],
		}),

		// incoming buddy request
		getIncomingRequests: builder.query<
			TResponseFromServer<TGetMyIncomingRequests[]>,
			string
		>({
			query: (userId) => ({
				url: `/buddy-request/user/${userId}/incoming-requests`,
			}),
			providesTags: ["buddyRequest"],
		}),

		//my outgoing buddy request
		getOutGoingRequests: builder.query<
			TResponseFromServer<TOutGoingResponse[]>,
			string
		>({
			query: (userId) => ({
				url: `/buddy-request/user/${userId}/outgoing-requests`,
			}),
			providesTags: ["buddyRequest"],
		}),
	}),
});

export const {
	useCreateBuddyRequestMutation,
	useGetIncomingRequestsQuery,
	useUpdateBuddyRequestStatusMutation,
	useGetOutGoingRequestsQuery,
} = buddyApi;
