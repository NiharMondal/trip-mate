"use server";

import { TDestinationResponse, TResponseFromServer } from "@/types";
import { base_url } from "./../redux/api/base.api";

export const getAllDestination = async (): Promise<
	TResponseFromServer<TDestinationResponse[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/destination`, {
			next:{revalidate:2500},
		});
		if (res.ok) {
			const data = await res.json();
			return data;
		}
	} catch (error) {
		console.log("Error fetching destinations", error);
		return undefined;
	}
};
export const getPopularDestination = async (): Promise<
	TResponseFromServer<TDestinationResponse[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/destination/popular-destination`, {
			next: { revalidate: 2500 },
		});

		const data = await res.json();
		return data;
	} catch (error) {
		console.log("Error fetching destinations", error);
		return undefined;
	}
	
};
