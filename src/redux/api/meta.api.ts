import { baseApi } from "./base.api";

const metaApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

        // ONLY ADMIN CAN SEE THIS DATA
		adminMetaData: builder.query({
			query: () => ({
				url: "meta/admin",
				method: "GET",
			}),
		}),
	}),
});

export const { useAdminMetaDataQuery } = metaApi;
