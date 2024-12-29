"use client";
import TMLoading from "@/components/shared/TMLoading";
import { useDeleteTripMutation, useGetMyTripQuery } from "@/redux/api/trip.api";

import React from "react";
import CreateTrip from "../../../../components/dashboard/CreateTrip";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import { TTripResponse } from "@/types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import UpdateTrip from "@/components/dashboard/UpdateTrip";
import { toast } from "react-toastify";
import TMTable from "@/components/shared/TMTable";

export default function UserTripList() {
	const user = useAppSelector(selectedUser);
	const { data: myTrips, isLoading } = useGetMyTripQuery(user?.id as string);
	const [deleteTrip] = useDeleteTripMutation();
	if (isLoading) return <TMLoading />;

	const columns = [
		{ header: "Title", accessor: "title" },
		{ header: "Destination", accessor: "destination" },
		{ header: "Start Date", accessor: "startDate" },
		{ header: "End Date", accessor: "endDate" },
		{ header: "Budget", accessor: "budget" },
		{ header: "Max Guests", accessor: "maxGuests" },
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
					<UpdateTrip tripId={trip._id} />
				</span>
			),
		},
	];

	const handleDeleteTrip = async (id: string) => {
		try {
			const res = await deleteTrip(id).unwrap();
			if (res.success) {
				toast.success("Trip deleted successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<div>
			<CreateTrip />
			<TMTable
				columns={columns as []}
				data={myTrips?.result as []}
				keyField={"_id"}
			/>
		</div>
	);
}
