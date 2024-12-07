import { baseApi } from "./base.api";

const metaApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		// ONLY VALID ADMIN CAN SEE THIS DATA
		adminMetaData: builder.query({
			query: () => ({
				url: "meta-data/admin",
				method: "GET",
			}),
		}),

		// ONLY VALID USER CAN SEE THIS DATA
		userMetaData: builder.query({
			query: (userId) => ({
				url: `/meta-data/user/${userId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useAdminMetaDataQuery, useUserMetaDataQuery } = metaApi;
