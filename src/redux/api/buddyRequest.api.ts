import {
	TBookingRequest,
	TBookingResponse,
	TGetMyIncomingRequests,
	TResponseFromServer,
} from "@/types";
import { baseApi } from "./base.api";
import { FieldValues } from "react-hook-form";

const buddyApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
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

		updateBuddyRequestStatus: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/buddy-request/response/${id}/update-status`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["buddyRequest"],
		}),

		getIncomingRequests: builder.query<
			TResponseFromServer<TGetMyIncomingRequests[]>,
			string
		>({
			query: (userId) => ({
				url: `/buddy-request/user/${userId}/incoming-requests`,
			}),
			providesTags: ["buddyRequest"],
		}),
	}),
});

export const {
	useCreateBuddyRequestMutation,
	useGetIncomingRequestsQuery,
	useUpdateBuddyRequestStatusMutation,
} = buddyApi;
