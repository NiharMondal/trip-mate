/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TResponseFromServer, TTripResponse } from "@/types";
import { base_url } from "./../redux/api/base.api";
import { notFound } from "next/navigation";

export const getAllTrips = async (): Promise<
	TResponseFromServer<TTripResponse[]> | unknown
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
	} catch (error: any) {
		console.log("Error fetching recent trips", error.message);
		return null;
	}
};

//single trip
export const getSingleTrip = async (slug: string) => {
	const res = await fetch(`${base_url}/trip/${slug}`, {
		// next: { revalidate: 2000 },
		cache:"no-store"
	});
	const trip: TResponseFromServer<TTripResponse> = await res.json();
	if (!trip) notFound();
	return trip;
};

export const recentTrip = async (): Promise<
	TResponseFromServer<TTripResponse[]> | undefined
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

export const popularTrip = async (): Promise<
	TResponseFromServer<TTripResponse[]> | undefined
> => {
	try {
		const res = await fetch(`${base_url}/trip/popular-trip`);
		if (!res.ok) {
			throw new Error("Failed to fetch popular trip");
		}
		const data = await res.json();
		return data;
	} catch (error: any) {
		console.log("Error fetching popular trip", error.message);
		return undefined;
	}
};
