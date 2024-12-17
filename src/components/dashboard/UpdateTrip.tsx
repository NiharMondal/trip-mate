"use client";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import TMSelect from "@/components/form/TMSelect";
import TMTextArea from "@/components/form/TMTextArea";
import FullModal from "@/components/shared/FullModal";
import { MdEditSquare } from "react-icons/md";
import { useAllDestinationQuery } from "@/redux/api/destination.api";
import { useTripByIdQuery, useUpdateTripMutation } from "@/redux/api/trip.api";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type TDestinationResponse = {
	_id: string;
	destination: string;
	slug: string;
};
export default function UpdateTrip({ tripId }: { tripId: string }) {
	const { data: tripDetails } = useTripByIdQuery(tripId);
	const query: Record<string, string> = {};
	query["fields"] = "destination,slug";
	const { data: destinations } = useAllDestinationQuery(query);
	const [updateTrip, { isLoading }] = useUpdateTripMutation();
	// modal state
	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	const handleUpdate: SubmitHandler<FieldValues> = async (data) => {
		data.budget = Number(data.budget);
		try {
			const res = await updateTrip({
				id: tripId,
				payload: data,
			}).unwrap();
			if (res.success) {
				toast.success("Trip updated successfully");
				close();
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};

	const defaultValues = {
		title: tripDetails?.result.title || "",
		from: tripDetails?.result.from || "",
		startDate: tripDetails?.result.startDate || "",
		endDate: tripDetails?.result.endDate || "",
		budget: tripDetails?.result.budget || "",
		details: tripDetails?.result.details || "",
		destination: tripDetails?.result.destination || "",
		photo: tripDetails?.result.photo || "",
	};
	return (
		<>
			<span title="Delete Trip" onClick={open}>
				<MdEditSquare className="size-5 text-teal-500 hover:text-teal-600 cursor-pointer" />
			</span>
			<FullModal isOpen={isOpen} close={close}>
				<TMForm onSubmit={handleUpdate} defaultValues={defaultValues}>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
						<TMInput name="title" label="Title" />
						<TMInput name="from" label="From" />
						<TMSelect name="destination" label="Select destination">
							{destinations?.result?.map(
								(value: TDestinationResponse) => (
									<option key={value._id} value={value.slug}>
										{value.destination}
									</option>
								)
							)}
						</TMSelect>
						<TMInput
							name="photo"
							label="Photo url"
							placeholder="https://unsplash.com/photos/shallow-focus-photography"
						/>

						<TMInput
							name="startDate"
							label="Start date"
							type="date"
						/>
						<TMInput name="endDate" label="End date" type="date" />
						<TMInput name="budget" label="Price" type="number" />
					</div>
					<TMTextArea
						name="details"
						label="Write details"
						placeholder="Give some information about this trip..."
					/>

					<SubmitBtn loading={isLoading}>Update Trip</SubmitBtn>
				</TMForm>
			</FullModal>
		</>
	);
}
