/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCreateBuddyRequestMutation } from "@/redux/api/buddyRequest.api";
import { useAppSelector } from "@/redux/hooks";
import { seletedUser } from "@/redux/slice/authSlice";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { toast } from "react-toastify";

type BookingSectionProps = {
	budget: number;
	seats: number;
	tripId: string;
	date: string;
};

export default function BookingSection({
	budget,
	seats,
	date,
	tripId,
}: BookingSectionProps) {
	const user: any = useAppSelector(seletedUser);
	const [createBuddyRequest] = useCreateBuddyRequestMutation();
	const { register, handleSubmit } = useForm();

	const dt = new Date(date).toLocaleDateString();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		data.user = user?.id;
		data.trip = tripId;
		data.people = Number(data.people);
		data.totalCost = budget * Number(data.people);

		try {
			const res = await createBuddyRequest(data).unwrap();
			if (res.success) {
				toast("Buddy request has been sent successfully");
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<div className="bg-accent rounded-md shadow-lg p-8">
			<h5>Price</h5>
			<h2 className="font-semibold">${budget}</h2>
			<div className="space-y-5 mt-5">
				<div className="inline-flex gap-x-8">
					<span>
						<BsCalendarDate className="size-8 text-primary" />
					</span>
					<span>{dt}</span>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<p className="pl-16 mb-3 font-medium text-gray-700">
						Available seats: {seats}
					</p>
					<div className="flex gap-x-8">
						<span>
							<HiOutlineUserGroup className="size-8 text-primary" />
						</span>
						<input
							type="number"
							className="p-4 outline-none rounded-md"
							{...register("people")}
							defaultValue={1}
						/>
					</div>

					<div className="mt-5">
						<button
							className="btn btn-primary w-full py-4 mt-5 capitalize text-lg text-white"
							type="submit"
						>
							proceed booking
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
