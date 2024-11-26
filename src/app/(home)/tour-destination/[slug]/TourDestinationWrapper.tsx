"use client";

import React from "react";

import ResultComponent from "@/components/tour/ResultComponent";
import { useGetTripByDestinationQuery } from "@/redux/api/trip.api";

export default function TourDestinationWrapper({ destination }: { destination: string }) {
	const { data, isLoading } = useGetTripByDestinationQuery(destination);

	return (
		<div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
			<div className="lg:col-span-3 space-y-5">
				{!data?.result ? (
					<p>No data found!</p>
				) : (
					<ResultComponent
						data={data?.result}
						isLoading={isLoading}
					/>
				)}
			</div>
		</div>
	);
}
