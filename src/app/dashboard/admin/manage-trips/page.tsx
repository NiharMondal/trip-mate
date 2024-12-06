"use client";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTable from "@/components/shared/TMTable";
import {
	useDeleteTripMutation,
	useGetAllTripsQuery,
} from "@/redux/api/trip.api";
import { TTripResponse } from "@/types";
import React from "react";
import { RiDeleteBin2Fill, RiFileEditFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function ManageTrips() {
	const { data: allTrips, isLoading } = useGetAllTripsQuery({});

	const [deleteTrip] = useDeleteTripMutation();

	if (isLoading) return <TMLoading />;

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
			{!allTrips?.result?.length ? (
				<TMNoData />
			) : (
				<TMTable
					columns={columns as []}
					data={allTrips?.result}
					keyField={"_id"}
				/>
			)}
		</div>
	);
}
