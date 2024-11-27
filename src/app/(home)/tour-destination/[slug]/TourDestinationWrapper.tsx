"use client";

import React, { useState } from "react";

import ResultComponent from "@/components/tour/ResultComponent";
import { useGetTripByDestinationQuery } from "@/redux/api/destination.api";
import { useDebounce } from "use-debounce";
import Loading from "@/app/loading";

export default function TourDestinationWrapper({
	destination,
}: {
	destination: string;
}) {
	const [search, setSearch] = useState("");

	const [searchParams] = useDebounce(search, 750);

	const query: Record<string, string> = {};

	query["search"] = searchParams;
	query["destination"] = destination;

	const { data, isLoading } = useGetTripByDestinationQuery({ ...query });

	if (isLoading) return <Loading />;

	return (
		<div className="max-w-7xl mx-auto px-5 py-10">
			<div className="space-y-5">
				<div>
					<div className="flex items-center justify-between mb-3">
						<span className="font-medium font-mono">
							Search Trip
						</span>
						<span className="font-semibold text-primary">
							{data?.result.length} Trips Found
						</span>
					</div>
					<input
						type="text"
						placeholder="Search by title"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full outline-none p-3 border"
					/>
				</div>

				{!data?.result.length ? (
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
