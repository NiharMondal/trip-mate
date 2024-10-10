import { ITrip } from './../../../server/src/app/modules/trip/trip.interface';
"use server";

import { TResponseFromServer } from "@/types";
import { base_url } from "./../redux/api/base.api";

export const getAllDestination = async (): Promise<
	TResponseFromServer<ITrip[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/trip`, {
			cache: "no-store",
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
