

"use server";

import { TDestinationResponse, TResponseFromServer } from "@/types";
import { base_url } from "./../redux/api/base.api";

export const getAllDestination = async (): Promise<
	TResponseFromServer<TDestinationResponse[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/destination`, {
			cache: "no-store",
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
		const res = await fetch(`${base_url}/destination?limit=6`, {
			cache: "no-store",
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
