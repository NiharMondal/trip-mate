import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const base_url = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: base_url,
		credentials: "include",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;

			if (token) {
				headers.set("authorization", token);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),

	tagTypes: ["trip", "buddyRequest", "destination", "review", "user"],
});
