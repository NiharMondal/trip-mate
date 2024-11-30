import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const base_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: base_url,
	}),
	endpoints: () => ({}),
	tagTypes:["trip","buddyRequest","destination","review",]
});