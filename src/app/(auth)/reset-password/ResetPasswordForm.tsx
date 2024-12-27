"use client";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import { useResetPasswordMutation } from "@/redux/api/auth.api";
import { TResetPasswordRequest } from "@/types";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ResetPasswordForm({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const router = useRouter();
	const [resetPassword, { isLoading }] = useResetPasswordMutation();
	const { register, handleSubmit } = useForm<TResetPasswordRequest>();
	const onSubmit: SubmitHandler<TResetPasswordRequest> = async (data) => {
		try {
			const res = await resetPassword({
				payload: data,
				searchParams: searchParams,
			}).unwrap();

			if (res.success) {
				toast.success("Successfully reseted your password");
				router.push("/login");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<form
			className="border rounded-md p-8 space-y-5"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<label
					htmlFor="password"
					className="mb-2 text-gray-600 inline-block"
				>
					Password
				</label>
				<input
					{...register("password")}
					type="password"
					id="password"
					placeholder="Type new password"
					className="w-full outline-none p-3 ring-1 focus:ring-primary rounded-md"
				/>
			</div>
			<div>
				<label
					htmlFor="confirmPassword"
					className="mb-2 text-gray-600 inline-block"
				>
					Confirm password
				</label>
				<input
					{...register("confirmPassword")}
					type="password"
					id="confirmPassword"
					placeholder="Re-type password here"
					className="w-full outline-none p-3 ring-1 focus:ring-primary rounded-md"
				/>
			</div>

			<SubmitBtn loading={isLoading} className="btn btn-primary">
				Reset Password
			</SubmitBtn>
		</form>
	);
}
