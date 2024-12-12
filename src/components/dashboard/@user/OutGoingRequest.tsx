"use client";

import useFetchUser from "@/lib/loadUser";
import { useGetOutGoingRequestsQuery } from "@/redux/api/buddyRequest.api";

import React from "react";

export default function OutGoingRequest() {
	const {user} = useFetchUser()
	const { data: outGoingRequest, isLoading } = useGetOutGoingRequestsQuery(
		user?.id as string
	);

	if (isLoading) return <p>Please wait...</p>;
	console.log(outGoingRequest);
	return (
		<div>
			{!outGoingRequest?.result?.length ? (
				<p>No data found!</p>
			) : (
				<div className="p-4 shadow rounded overflow-x-scroll text-nowrap">
					<table className="w-full">
						<thead className="bg-gray-200 text-left">
							<tr>
								<th className="py-5 pl-2">Trip Name</th>
								<th>Trip Owner</th>

								<th>Status</th>
								<th>Start Date</th>
							</tr>
						</thead>
						<tbody>
							{outGoingRequest?.result?.map((ot) => (
								<tr key={ot?._id}>
									<td className="p-2">{ot?.trip?.title}</td>
									<td>{ot?.trip?.user?.name}</td>
									<td>
										<span
											className={`bg-gray-300 px-4 py-1 rounded-md  text-sm font-mono ${
												ot.status === "APPROVED"
													? "text-primary"
													: "text-accent"
											}`}
										>
											{ot.status}
										</span>
									</td>
									<td>
										{ot?.trip?.startDate?.split("T")[0]}
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
