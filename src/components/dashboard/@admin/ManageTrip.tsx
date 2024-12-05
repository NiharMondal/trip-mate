"use client";
import TMNoData from "@/components/shared/TMNoData";
import TMTripTable from "@/components/shared/TMTripTable";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";
import React from "react";

export default function ManageTrip() {
	const { data: allTrips, isLoading } = useGetAllTripsQuery({});

	if (isLoading) return <p>Please wait...</p>;
	return (
		<div>
			{!allTrips?.result.length ? (
				<TMNoData />
			) : (
				<TMTripTable trips={allTrips.result} />
			)}
		</div>
	);
}
