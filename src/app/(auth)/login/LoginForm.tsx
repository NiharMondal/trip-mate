/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setCookie } from "@/actions/auth";
import SubmitBtn from "@/components/@ui/SubmitBtn";
import TMForm from "@/components/form/TMForm";
import TMInput from "@/components/form/TMInput";
import { decodeToken } from "@/helpers/decodeToken";
import { useLoginMutation } from "@/redux/api/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { setCredentials } from "@/redux/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function LoginForm() {
	const router = useRouter();
	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useAppDispatch();

	const handleLogin: SubmitHandler<FieldValues> = async (data) => {
		try {
			const res = await login(data).unwrap();

			if (res.success) {
				setCookie(res?.result?.accessToken);
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
		}
	};

	return (
		<div className="min-w-[400px] mt-5 login_form">
			<TMForm onSubmit={handleLogin}>
				<TMInput name="email" label="Email" type="email" />
				<TMInput name="password" label="Password" type="password" />

				<SubmitBtn className="bg-primary" loading={isLoading}>
					Login
				</SubmitBtn>
			</TMForm>
			<div className=" space-y-2 mt-5">
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
		</div>
	);
}
