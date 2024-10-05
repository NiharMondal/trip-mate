
import Logo from "@/components/@ui/Logo";

import Link from "next/link";
import React from "react";

export default function SignUp() {
	return (
		<div className="grid grid-cols-1 place-items-center h-screen px-5">
			<div className="shadow-md rounded-md p-8">
				<div className="flex justify-center mb-8">
					<Logo/>
				</div>
				<h4 className="geist-sans text-2xl font-medium">
					Create a new account
				</h4>
				<form action="" className="space-y-5 w-full min-w-[400px] mt-5">
					<div className="flex flex-col space-y-2">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							className="p-2  outline-none ring-1 ring-secondary w-full rounded"
						/>
					</div>
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
							Already have an account?{" "}
							<Link
								href="/login"
								className="text-accent hover:underline geist-sans"
							>
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
