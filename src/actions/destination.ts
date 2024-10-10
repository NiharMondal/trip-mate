"use server";

import { TResponseFromServer } from "@/types";
import { base_url } from "./../redux/api/base.api";
type TDestinationResponse = {
	_id: string;
	trips: string[];
	destination: string;
	slug: string;
};
export const getAllDestination = async (): Promise<
	TResponseFromServer<TDestinationResponse[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/destination`, {
			cache: "no-store",
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
