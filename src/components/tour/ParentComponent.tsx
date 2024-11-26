"use client";
import React from "react";
import FilterComponent from "./FilterComponent";
import ResultComponent from "./ResultComponent";
import SortComponent from "./SortComponent";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";
import { useAppSelector } from "@/redux/hooks";
import { useDebounce } from "use-debounce";


export default function ParentComponent() {
	const query = useAppSelector((state) => state.query);
	const [search] = useDebounce(query.queries.search, 750);
	const [minBudget] = useDebounce(query.queries.minBudget, 750);
	const [maxBudget] = useDebounce(query.queries.maxBudget, 750);
	const { data, isLoading } = useGetAllTripsQuery({
		...query.queries,
		search,
		minBudget,
		maxBudget,
	});
	return (
		<div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
			<FilterComponent />
			<div className="lg:col-span-3 space-y-5">
				<SortComponent totalCount={data?.result?.length} />
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
