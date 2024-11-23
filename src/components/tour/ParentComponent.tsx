"use client";
import React from "react";
import FilterComponent from "./FilterComponent";
import ResultComponent from "./ResultComponent";
import SortComponent from "./SortComponent";
import { useGetAllTripsQuery } from "@/redux/api/trip.api";
import { useAppSelector } from "@/redux/hooks";
// import { useRouter } from "next/navigation";
// const initialState = {
// 	search: "",
// 	destination: "",
// 	minBudget: "",
// 	maxBudget: "",
// };
export default function ParentComponent() {
	const query = useAppSelector((state) => state.query);
	console.log(query)
	// const router = useRouter()
	// const [filters, setFilters] = useState( initialState);

	// useEffect(() => {
	// 	const params = new URLSearchParams();

	// 	if (filters && Object.keys(filters).length) {
	// 		Object.keys(filters).forEach((key) => {
	// 			if (filters[key]  && filters[key].length > 0) {
	// 				params.append(key, filters[key].toString());
	// 			}
	// 		});
	// 	}
	// 	router.push(`?${params.toString()}`, undefined)
	// }, [filters, router]);

	const { data, isLoading } = useGetAllTripsQuery(query.queries);
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
