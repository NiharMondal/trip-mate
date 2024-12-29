"use client";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import TMSelect from "@/components/form/TMSelect";
import TMTextArea from "@/components/form/TMTextArea";
import FullModal from "@/components/shared/FullModal";
import useFetchUser from "@/lib/loadUser";
import { useAllDestinationQuery } from "@/redux/api/destination.api";
import { useCreateTripMutation } from "@/redux/api/trip.api";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateTrip() {
	const { user } = useFetchUser();
	const query: Record<string, string> = {};
	query["fields"] = "destination,slug";
	const { data: destinations } = useAllDestinationQuery(query);
	const [createTrip, { isLoading }] = useCreateTripMutation();
	// modal state
	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
		data.user = user?.id;
		data.budget = Number(data.budget);
		data.maxGuests = Number(data.maxGuests);
		console.log(data);
		try {
			const res = await createTrip(data).unwrap();
			if (res.success) {
				toast.success("Trip created successfully");
				close();
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};

	return (
		<>
			<button className="text-gray-700 btn btn-secondary" onClick={open}>
				Create new trip
			</button>
			<div className="p-5">
				<FullModal isOpen={isOpen} close={close}>
					<TMForm onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 modal_label">
							<TMInput name="title" label="Title" />
							<TMInput name="from" label="From" />
							<TMSelect
								name="destination"
								label="Select destination"
								data={destinations?.result}
							></TMSelect>
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
							<TMInput
								name="endDate"
								label="End date"
								type="date"
							/>
							<TMInput
								name="budget"
								label="Price"
								type="number"
							/>
							<TMInput
								name="maxGuests"
								label="Max Guests"
								type="number"
							/>
						</div>
						<TMTextArea
							name="details"
							label="Write details"
							placeholder="Give some information about this trip..."
						/>

						<SubmitBtn loading={isLoading}>Create Trip</SubmitBtn>
					</TMForm>
				</FullModal>
			</div>
		</>
	);
}
