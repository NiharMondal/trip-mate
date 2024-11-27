"use client";
import TMCardWithDetails from "@/components/@ui/TMCardWithDetails";
import { useRelatedTripQuery } from "@/redux/api/trip.api";
import React from "react";

export default function RelatedTrips({ tripId }: { tripId: string }) {
	const { data, isLoading } = useRelatedTripQuery(tripId);
	if (isLoading) return <p>Please wait...</p>;
	return (
		<div className="space-y-8">
			<h3 className="font-medium">Related Trip</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{data?.result.map((trip) => (
					<TMCardWithDetails key={trip._id} trip={trip} />
				))}
			</div>
		</div>
	);
}
