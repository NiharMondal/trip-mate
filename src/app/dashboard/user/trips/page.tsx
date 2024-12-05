"use client";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTripTable from "@/components/shared/TMTripTable";
import { useGetMyTripQuery } from "@/redux/api/trip.api";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import React from "react";

export default function UserTripList() {
	const user = useAppSelector(selectedUser);
	const { data: myTrips, isLoading } = useGetMyTripQuery(user?.id as string);
	if (isLoading) return <TMLoading />;
	return (
		<div className="space-y-5">
			<button className="text-white btn btn-primary">
				Create new trip
			</button>
			<div>
				{!myTrips?.result.length ? (
					<TMNoData />
				) : (
					<TMTripTable trips={myTrips.result} />
				)}
			</div>
		</div>
	);
}
