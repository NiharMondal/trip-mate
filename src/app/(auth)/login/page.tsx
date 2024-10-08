
import Logo from "@/components/@ui/Logo";
import TMSvg from "@/components/shared/TMSvg";
import { svgColors } from "@/helpers";
import Link from "next/link";
import React from "react";


export default function LoginPage() {
	return (
		<div className="relative grid grid-cols-1 place-items-center h-screen px-5">
			<div className="shadow-md rounded-md p-8 z-10">
				<div className="flex justify-center mb-8">
					<Logo />
				</div>
				<h4 className="geist-sans text-2xl font-medium">
					Login to your account
				</h4>
				<form action="" className="space-y-5 w-full min-w-[400px] mt-5">
					<div className="flex flex-col space-y-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="p-2  outline-none ring-1 ring-secondary w-full rounded"
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="p-2  outline-none ring-1 ring-secondary w-full rounded"
						/>
					</div>
					<button className="btn btn-primary w-full text-white">
						Login
					</button>
					<div>
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
				</form>
			</div>
			<TMSvg fill={svgColors.primary.lighter} position="top-0" />
		</div>
	);
}
