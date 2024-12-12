import Logo from "@/components/@ui/Logo";

import TMSvg from "@/components/shared/TMSvg";
import { svgColors } from "@/helpers";

import { Metadata } from "next";

import LoginForm from "./LoginForm";

export const metadata: Metadata = {
	title: "Login - Trip Mate",
	description:
		"Access your Trip Mate account and start planning your next adventure.",
};

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

				<LoginForm />
			</div>
			<TMSvg fill={svgColors.primary.lighter} position="top-0" />
		</div>
	);
}
