"use client";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import { useChangePasswordMutation } from "@/redux/api/auth.api";

import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

// common routes for user and admin
export default function ChangePassword() {
	const [changePassword] = useChangePasswordMutation();
	const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
		try {
			console.log(data);
			const res = await changePassword(data).unwrap();
			if (res.success) {
				toast.success("Password changed successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<div className="max-w-xl">
			<TMForm onSubmit={handleChangePassword}>
				<TMInput name="oldPassword" label="Old password" />
				<TMInput name="newPassword" label="New password" />
				<TMInput name="confirmPassword" label="Confirm password" />
				<button className="btn btn-primary  text-white" type="submit">
					Change Password
				</button>
			</TMForm>
		</div>
	);
}
