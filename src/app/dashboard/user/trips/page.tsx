import TripList from "@/components/dashboard/@user/@my-trip/TripList";
import React from "react";

export default function UserTripList() {
	return (
		<div className="space-y-5">
			<button className="text-white btn btn-primary">Create new trip</button>

			<TripList />
		</div>
	);
}
