"use client"
import Logo from "@/components/@ui/Logo";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import TMSvg from "@/components/shared/TMSvg";

import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function SignUp() {
	const handleSubmit : SubmitHandler<FieldValues> = (data)=>{
		console.log(data)
	}
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
						<TMInput name="name"  label="Full name" />
						<TMInput name="email" type="email" label="Email" />
						<TMInput
							name="password"
							type="password"
							label="Password"
						/>
						<button
							className="btn btn-primary w-full text-white"
							type="submit"
						>
							Sign up
						</button>
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
