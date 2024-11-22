"use client"
import React from "react";
import FilterComponent from "./FilterComponent";
import ResultComponent from "./ResultComponent";
import SortComponent from "./SortComponent";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";

export default function ParentComponent() {
    const {data, isLoading} = useGetAllTripsQuery()

    if(!data?.result) return <p>No data found!</p>

	return (
		<div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
			<FilterComponent />
			<div className="lg:col-span-3 space-y-5">
				<SortComponent />
				<ResultComponent data={data.result} isLoading={isLoading}/>
			</div>
		</div>
	);
}
