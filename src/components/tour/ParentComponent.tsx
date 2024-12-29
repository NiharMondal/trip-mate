"use client";
import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import ResultComponent from "./ResultComponent";
import SortComponent from "./SortComponent";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";
import { useAppSelector } from "@/redux/hooks";
import { useDebounce } from "use-debounce";
import Pagination from "../shared/Pagination";

export default function ParentComponent() {
	const [limit, setLimit] = useState("10");
	const query = useAppSelector((state) => state.query);
	const [search] = useDebounce(query?.queries.search, 750);
	const [minBudget] = useDebounce(query.queries.minBudget, 750);
	const [maxBudget] = useDebounce(query.queries.maxBudget, 750);
	const [currentPage, setCurrentPage] = useState(1);

	const lpQuery: Record<string, string> = {};

	lpQuery["limit"] = limit;
	lpQuery["page"] = currentPage.toString();

	const { data: allTrips, isLoading } = useGetAllTripsQuery({
		...query.queries,
		...lpQuery,
		search,
		minBudget,
		maxBudget,
	});

	return (
		<div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
			<FilterComponent />
			<div className="lg:col-span-3 space-y-5">
				<SortComponent totalCount={allTrips?.meta?.totalDocs} />
				{!allTrips?.result ? (
					<p>No data found!</p>
				) : (
					<ResultComponent
						data={allTrips?.result}
						isLoading={isLoading}
					/>
				)}
				<div className="flex items-center justify-end gap-x-8">
					<select
						name="limit"
						id="limit"
						onChange={(e) => setLimit(e.target.value)}
						className=" outline-none p-2 border"
					>
						<option selected>Limit</option>
						<option value="6">6</option>
						<option value="12">12</option>
						<option value="20">20</option>
					</select>
					{(allTrips?.meta?.totalDocs as number) > 0 && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPages={allTrips?.meta?.totalPages as number}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
