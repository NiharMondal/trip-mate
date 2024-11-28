import { TResponseFromServer, TReviewRequest, TReviewsResponse } from "@/types";
import { baseApi } from "./base.api";

const reviewApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		// create review
		giveReview: builder.mutation<
			TResponseFromServer<TReviewsResponse>,
			TReviewRequest
		>({
			query: (payload) => ({
				url: "review",
				method: "POST",
				body: payload,
			}),
		}),

		getReview: builder.query<
			TResponseFromServer<TReviewsResponse[]>,
			void
		>({
			query: () => ({
				url: "/review",
				method: "GET",
			}),
		}),
	}),
});


export const {useGetReviewQuery, useGiveReviewMutation} = reviewApi;