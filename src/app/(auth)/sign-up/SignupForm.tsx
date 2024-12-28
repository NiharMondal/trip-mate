/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";

import { useSignUpMutation } from "@/redux/api/auth.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignupForm() {
	const router = useRouter();
	const [signUp, { isLoading }] = useSignUpMutation();

	const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			const res = await signUp(values).unwrap();
			if (res.success) {
				toast.success("Account created successfully");
				router.push("/login");
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};
	return (
		<div className="min-w-[400px] mt-5 registration_form">
			<TMForm onSubmit={handleSubmit}>
				<TMInput
					name="name"
					placeholder="Full name"
					label="Full name"
				/>
				<TMInput
					name="email"
					type="email"
					placeholder="Email address"
					label="Email"
				/>
				<TMInput
					name="password"
					type="password"
					placeholder="Password"
					label="Password"
				/>
				<SubmitBtn loading={isLoading} className="btn btn-primary">
					Create Account
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
	);
}
