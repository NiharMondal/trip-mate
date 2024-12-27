"use client";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import { useForgotPasswordMutation } from "@/redux/api/auth.api";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type TValue = { email: string };

export default function ForgotPasswordForm() {
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
	const { register, handleSubmit } = useForm<TValue>();
	const router = useRouter();

	const goBack = () => {
		router.back();
	};
	const onSubmit: SubmitHandler<TValue> = async (data) => {
		try {
			const res = await forgotPassword(data).unwrap();
			if (res.success) {
				toast.success("Check your email to reset password");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<>
			<button
				onClick={goBack}
				className="mb-5 font-semibold text-sm flex items-center text-primary/80"
			>
				&larr; Go Back
			</button>
			<form
				className="border rounded-md p-8"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label
					htmlFor="email"
					className="mb-2 text-gray-600 inline-block"
				>
					Email address
				</label>
				<input
					{...register("email", { required: true })}
					type="email"
					id="email"
					placeholder="Enter your email address"
					className="w-full outline-none p-3 ring-1 focus:ring-primary rounded-md"
				/>

				<SubmitBtn loading={isLoading} className="btn btn-primary">
					Submit
				</SubmitBtn>
			</form>
		</>
	);
}
