import {
	TBookingRequest,
	TBookingResponse,
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
		}),
	}),
});

export const { useCreateBuddyRequestMutation } = buddyApi;
