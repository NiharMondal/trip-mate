"use client";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";

import { useMyProfileQuery, useUpdateMyProfileMutation } from "@/redux/api/profile.api";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateProfile() {

	//fetching user profile
	const { data: user } = useMyProfileQuery(undefined);


    const [updateMyProfile,{isLoading}] = useUpdateMyProfileMutation();


	const defaultValues = {
		name: user?.result?.name || "",
		email: user?.result?.email || "",
		avatar: user?.result?.avatar || "",
	};

	const handleProfileUpdate: SubmitHandler<FieldValues> = async (data) => {
		try {
            const res = await updateMyProfile(data).unwrap();
			if(res.success){
				toast.success("Profile updated successfully")
			}

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error?.data?.message)
        }
	};

	return (
		<div className="max-w-md">
			<TMForm
				onSubmit={handleProfileUpdate}
				defaultValues={defaultValues}
			>
				<TMInput label="Name" name="name" />
				<TMInput label="Email" name="email" />
				<TMInput
					label="Profile picture"
					name="avatar"
					placeholder="https://unsplash.com/photos/woman-crossing"
				/>
				<SubmitBtn loading={isLoading} className="bg-primary">Update profile</SubmitBtn>
			</TMForm>
		</div>
	);
}
