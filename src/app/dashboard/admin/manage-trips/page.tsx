"use client";
import Pagination from "@/components/shared/Pagination";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTable from "@/components/shared/TMTable";
import {
	useDeleteTripMutation,
	useGetAllTripsQuery,
} from "@/redux/api/trip.api";
import { TTripResponse } from "@/types";
import React, { useState } from "react";
import { RiDeleteBin2Fill, RiFileEditFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";

export default function ManageTrips() {
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");
	const [limit, setLimit] = useState("");
	const [debounceValue] = useDebounce(search, 500);
	const query: Record<string, string> = {};
	query["page"] = currentPage.toString();
	query["limit"] = limit;
	query["search"] = debounceValue;

	const { data: allTrips, isLoading } = useGetAllTripsQuery(query);

	const [deleteTrip] = useDeleteTripMutation();

	if (isLoading) return <TMLoading />;

	if (!allTrips?.result) return <TMNoData />;

	const handleDeleteTrip = async (id: string) => {
		try {
			const res = await deleteTrip(id).unwrap();
			if (res.success) {
				toast.success("Trip deleted successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};
	const columns = [
		{ header: "Title", accessor: "title" },
		{ header: "Destination", accessor: "destination" },
		{ header: "Start Date", accessor: "startDate" },
		{ header: "End Date", accessor: "endDate" },
		{ header: "Budget", accessor: "budget" },
		{ header: "Available Seats", accessor: "availAbleSeats" },
		{
			header: "Actions",
			render: (trip: TTripResponse) => (
				<span className="w-full h-full inline-flex items-center justify-between">
					<span
						title="Delete trip"
						onClick={() => handleDeleteTrip(trip._id)}
					>
						<RiDeleteBin2Fill className="size-5 text-red-500 hover:text-red-600 cursor-pointer" />
					</span>
					<span title="Edit Trip">
						<RiFileEditFill className="size-5 text-teal-500 hover:text-teal-600 cursor-pointer" />
					</span>
				</span>
			),
		},
	];

	return (
		<div>
			<>
				<div className="flex flex-col sm:flex-row gap-8 justify-between items-center py-10">
					<div className="w-full">
						<input
							type="text"
							className="border outline-none p-3 w-full sm:min-w-16"
							placeholder="Search by trip title or destination"
							onChange={(e) => setSearch(e.target.value)}
						/>{" "}
					</div>
					<div className="w-full flex justify-between items-center">
						<div>
							<p>Limit: </p>
						</div>
						<select
							name="limit"
							id="limit"
							onChange={(e) => setLimit(e.target.value)}
							className=" outline-none p-2 border"
						>
							<option value="5">3</option>
							<option value="10">5</option>
							<option value="15">15</option>
							<option value="20">20</option>
						</select>
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPages={allTrips.meta?.totalPages as number}
						/>
					</div>
				</div>
				<TMTable
					columns={columns as []}
					data={allTrips?.result}
					keyField={"_id"}
				/>
			</>
		</div>
	);
}
