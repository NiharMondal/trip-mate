"use client";
import {
	useGetIncomingRequestsQuery,
	useUpdateBuddyRequestStatusMutation,
} from "@/redux/api/buddyRequest.api";

import { MdKeyboardControlKey } from "react-icons/md";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { toast } from "react-toastify";
import useFetchUser from "@/lib/loadUser";

export default function IncomingRequests() {
	const {user} = useFetchUser()
	const [updateBuddyRequestStatus] = useUpdateBuddyRequestStatusMutation();
	const { data: incomingBuddyRequests, isLoading } =
		useGetIncomingRequestsQuery(user?.id as string);

	const handleUpdateStatus = async (
		status: string,
		id: string,
		userId: string
	) => {
		try {
			const res = await updateBuddyRequestStatus({
				id: id,
				payload: { status, userId },
			}).unwrap();
			if (res.success) {
				toast.success("Buddy request updated successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	if (isLoading) return <p>Please wait...</p>;
	return (
		<div>
			{!incomingBuddyRequests?.result.length ? (
				<p>No data found</p>
			) : (
				<div className="w-full  divide-y divide-black/20 rounded-xl bg-black/5">
					{incomingBuddyRequests.result.map((inreq) => (
						<Disclosure
							as="div"
							className="p-6"
							defaultOpen={true}
							key={inreq._id}
						>
							<DisclosureButton className="group flex w-full items-center justify-between">
								<span className="font-medium ">
									{inreq.title}
								</span>
								<MdKeyboardControlKey className="size-5 fill-black group-data-[open]:rotate-180" />
							</DisclosureButton>
							<DisclosurePanel className="mt-2 ">
								{!inreq.buddyRequest.length ? (
									<p>No request found for this trip</p>
								) : (
									inreq.buddyRequest.map((buddy) => (
										<table
											className="w-full"
											key={buddy._id}
										>
											<thead className="text-left">
												<tr>
													<th>User name</th>
													<th>People</th>
													<th>Total Amount</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{buddy.user.name}</td>
													<td>{buddy.people}</td>
													<td>{buddy.totalCost}</td>
													<td className="flex items-center gap-x-4">
														<span
															className={`cursor-pointer ${
																buddy.status ===
																"PENDING"
																	? "bg-primary px-2 py-1 rounded-md text-white"
																	: ""
															}`}
															onClick={() =>
																handleUpdateStatus(
																	"PENDING",
																	buddy._id,
																	buddy.user
																		._id
																)
															}
														>
															PENDING
														</span>
														<span
															onClick={() =>
																handleUpdateStatus(
																	"APPROVED",
																	buddy._id,
																	buddy.user
																		._id
																)
															}
															className={`cursor-pointer ${
																buddy.status ===
																"APPROVED"
																	? "bg-primary px-2 py-1 rounded-md text-white"
																	: ""
															}`}
														>
															APPROVED
														</span>
														<span
															onClick={() =>
																handleUpdateStatus(
																	"REJECTED",
																	buddy._id,
																	buddy.user
																		._id
																)
															}
															className={`cursor-pointer ${
																buddy.status ===
																"REJECTED"
																	? "bg-primary px-2 py-1 rounded-md text-white"
																	: ""
															}`}
														>
															REJECTED
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									))
								)}
							</DisclosurePanel>
						</Disclosure>
					))}
				</div>
			)}
		</div>
	);
}
