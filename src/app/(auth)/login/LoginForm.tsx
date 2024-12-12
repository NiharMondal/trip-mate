"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";

import { decodeToken } from "@/helpers/decodeToken";
import { useLoginMutation } from "@/redux/api/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function LoginForm() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			const response = await login(data).unwrap();
			if (response.success) {
				const token = response?.result?.accessToken;
				const user: any = decodeToken(token);

				dispatch(setCredentials({ user: user, token: token }));

				toast.success("Logged in successfully");
				if (user?.role === "admin") {
					router.push("/dashboard/admin");
				} else {
					router.push("/dashboard");
				}
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<div className="min-w-[400px] mt-5">
			<TMForm onSubmit={handleSubmit}>
				<TMInput name="email" type="email" label="Email" />
				<TMInput name="password" type="password" label="Password" />
				<SubmitBtn loading={isLoading} className="btn btn-primary">
					Login
				</SubmitBtn>
				<div className="mt-5">
					<p>
						Don&apos;t have an account?{" "}
						<Link
							href="/sign-up"
							className="text-primary hover:underline geist-sans"
						>
							Create one
						</Link>
					</p>
				</div>
			</TMForm>
		</div>
	);
}
