import { TResponseFromServer, TReviewRequest, TReviewsResponse } from "@/types";
import { baseApi } from "./base.api";

const reviewApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		// create review
		giveReview: builder.mutation<
			TResponseFromServer<TReviewRequest>,
			TReviewRequest
		>({
			query: (payload) => ({
				url: "review",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["review"],
		}),

		getReview: builder.query<TResponseFromServer<TReviewsResponse[]>, void>(
			{
				query: () => ({
					url: "/review",
					method: "GET",
				}),
				providesTags: ["review"],
			}
		),
	}),
});

export const { useGetReviewQuery, useGiveReviewMutation } = reviewApi;
