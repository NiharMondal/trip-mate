"use client";

import useFetchUser from "@/lib/loadUser";
import { useDeleteTripMutation, useGetMyTripQuery } from "@/redux/api/trip.api";

import React from "react";
import { RiDeleteBin2Fill, RiFileEditFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function TripList() {
	const {user} = useFetchUser()
	const { data: myTrips, isLoading } = useGetMyTripQuery(user?.id as string);

	const [deleteTrip] = useDeleteTripMutation();

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

	if (isLoading) return <p>Please wait...</p>;

	return (
		<div>
			{!myTrips?.result?.length ? (
				<p>No data found</p>
			) : (
				<div className="p-4 shadow rounded overflow-x-scroll text-nowrap">
					<table className="w-full ">
						<thead className="bg-gray-200 text-left">
							<tr>
								<th className="py-5 pl-2">Title</th>
								<th>From</th>
								<th>Start date</th>
								<th>End date</th>
								<th>Budget</th>
								<th>Available Seats</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{myTrips?.result?.map((mt) => (
								<tr key={mt._id}>
									<td >{mt.title}</td>
									<td>{mt.from}</td>
									<td>{mt.startDate.split("T")[0]}</td>
									<td>{mt.endDate.split("T")[0]}</td>
									<td>{mt.budget}</td>
									<td>{mt.availAbleSeats}</td>
									<td className="inline-flex gap-x-3">
										<span
											title="Delete Trip"
											onClick={() =>
												handleDeleteTrip(mt?._id)
											}
										>
											<RiDeleteBin2Fill className="size-5 text-red-500 hover:text-red-600 cursor-pointer" />
										</span>
										<span title="Edit Trip">
											<RiFileEditFill className="size-5 text-teal-500 hover:text-teal-600 cursor-pointer" />
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
