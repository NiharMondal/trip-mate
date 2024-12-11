import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import TMModal from "@/components/shared/TMModal";
import { useCreateDestinationMutation } from "@/redux/api/destination.api";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateDestination() {
    const [createDestination]  = useCreateDestinationMutation()
	const [modal, setModal] = useState(false);
	const open = () => {
		setModal(true);
	};
	const close = () => {
		setModal(false);
	};

	const handleCreateDestination: SubmitHandler<FieldValues> = async (data) => {
		try {
            const res = await createDestination(data).unwrap();
            if(res.success){
                toast.success("Destination created successfully");
                close()
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error?.data?.message)
        }
	};
	return (
		<div>
			<button className="text-gray-700 btn btn-secondary" onClick={open}>
				Create Destination
			</button>

			<TMModal close={close} isOpen={modal}>
				<TMForm onSubmit={handleCreateDestination}>
					<TMInput name="destination" label="Destination name" />
					<TMInput name="shortInfo" label="Short description" />
					<TMInput
						name="thumbnail"
						label="Thumbnail URL"
						placeholder="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc"
					/>
					<SubmitBtn>Create</SubmitBtn>
				</TMForm>
			</TMModal>
		</div>
	);
}
