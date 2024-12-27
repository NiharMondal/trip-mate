/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { userLogin } from "@/actions/auth";

import SubmitBtn from "@/components/@ui/SubmitBtn";
import { decodeToken } from "@/helpers/decodeToken";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(false);

	const handleLogin = async (formData: FormData) => {
		try {
			setLoading(true); // Start loading
			const res = await userLogin(formData);

			if (res.success) {
				const user: any = decodeToken(res?.result?.accessToken);
				toast.success("Logged in successfully");
				dispatch(
					setCredentials({
						user: user,
						token: res?.result?.accessToken,
					})
				);
				if (user.role === "admin") {
					router.push("/dashboard/admin");
				} else {
					router.push("/dashboard");
				}
			} else {
				toast.error("Invalid credentials!");
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error: any) {
			toast.error("Something went wrong!");
			setLoading(false); // Stop loading
		} finally {
			setLoading(false); // Stop loading
		}
	};

	return (
		<div className="min-w-[400px] mt-5">
			<form
				action={(formData) => handleLogin(formData)}
				className="flex flex-col gap-y-8"
			>
				<input
					type="email"
					name="email"
					placeholder="Your email address"
					className="p-2 outline-none ring-1 ring-secondary w-full rounded"
				/>
				<input
					type="password"
					name="password"
					placeholder="Type your password"
					className="p-2 outline-none ring-1 ring-secondary w-full rounded"
				/>
				<SubmitBtn loading={loading} className="btn btn-primary">
					Login
				</SubmitBtn>
				<div className=" space-y-2">
					<p>
						Don&apos;t have an account?{" "}
						<Link
							href="/sign-up"
							className="text-primary hover:underline geist-sans"
						>
							Create one
						</Link>
					</p>
					<p>
						<Link
							href={"/forgot-password"}
							className="text-sm font-semibold hover:underline"
						>
							Forgot your password?
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
