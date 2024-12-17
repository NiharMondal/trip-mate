"use client";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTripTable from "@/components/shared/TMTripTable";
import { useGetMyTripQuery } from "@/redux/api/trip.api";

import React from "react";
import CreateTrip from "../../../../components/dashboard/CreateTrip";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";

export default function UserTripList() {
	const user = useAppSelector(selectedUser);
	const { data: myTrips, isLoading } = useGetMyTripQuery(user?.id as string);

	if (isLoading) return <TMLoading />;
	if (!myTrips?.result.length) return <TMNoData />;

	return (
		<div>
			<CreateTrip />
			<TMTripTable trips={myTrips.result} />
		</div>
	);
}
