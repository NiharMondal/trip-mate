"use client";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTripTable from "@/components/shared/TMTripTable";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";
import React from "react";

export default function ManageTrips() {


	const { data: allTrips, isLoading } = useGetAllTripsQuery({});

	if (isLoading) return <TMLoading />;


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
