/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";


import { TResponseFromServer, TResponseTrip } from "@/types";
import { base_url } from "./../redux/api/base.api";

export const getAllDestination = async (): Promise<
	TResponseFromServer<TResponseTrip[]> | unknown
> => {
	try {
		const res = await fetch(`${base_url}/trip`, {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Failed to fetch data status:" + res.status);
		}
		const data = await res.json();
		return data;
	} catch (error:any) {
		console.log("Error fetching recent trips", error.message);
		return null;
	}
};

export const recentTrip = async (): Promise<
	TResponseFromServer<TResponseTrip[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/trip/freshly-added`);
		if (!res.ok) {
			throw new Error("Failed to fetch data status:" + res.status);
		}
		const data = await res.json();
		return data;
	} catch (error: any) {
		console.log("Error fetching recent trips", error.message);
		return undefined;
	}
};
