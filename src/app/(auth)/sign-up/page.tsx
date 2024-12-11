/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Logo from "@/components/@ui/Logo";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import TMSvg from "@/components/shared/TMSvg";
import { decodeToken } from "@/helpers/decodeToken";
import { useSignUpMutation, useLoginMutation } from "@/redux/api/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/slice/authSlice";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignUp() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [signUp] = useSignUpMutation();
	const [login, { isLoading }] = useLoginMutation();

	const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			const res = await signUp(values).unwrap();
			if (res.success) {
				const data = await login({
					email: values.email,
					password: values.password,
				}).unwrap();
				const token = data?.result?.accessToken;
				const user: any = decodeToken(token);

				dispatch(setCredentials({ user: user, token: token }));

				toast.success("Account created successfully");
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
		<div className="grid grid-cols-1 place-items-center h-screen px-5">
			<div className="shadow-md rounded-md p-8">
				<div className="flex justify-center mb-8">
					<Logo />
				</div>
				<h4 className="geist-sans text-2xl font-medium">
					Create a new account
				</h4>
				<div className="min-w-[400px] mt-5">
					<TMForm onSubmit={handleSubmit}>
						<TMInput name="name" label="Full name" />
						<TMInput name="email" type="email" label="Email" />
						<TMInput
							name="password"
							type="password"
							label="Password"
						/>
						<SubmitBtn
							loading={isLoading}
							className="btn btn-primary"
						>
							Sign up
						</SubmitBtn>
						<div className="mt-5">
							<p>
								Already have an account?{" "}
								<Link
									href="/login"
									className="text-primary hover:underline geist-sans"
								>
									Login here
								</Link>
							</p>
						</div>
					</TMForm>
				</div>
			</div>
			<TMSvg />
		</div>
	);
}
