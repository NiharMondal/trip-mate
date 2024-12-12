import Logo from "@/components/@ui/Logo";
import TMSvg from "@/components/shared/TMSvg";
import { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
	title: "Sign Up - Trip Mate",
	description:
		"Create a Trip Mate account and join our community of travel enthusiasts.",
};

export default function SignUp() {
	return (
		<div className="grid grid-cols-1 place-items-center h-screen px-5">
			<div className="shadow-md rounded-md p-8">
				<div className="flex justify-center mb-8">
					<Logo />
				</div>
				<h4 className="geist-sans text-2xl font-medium">
					Create a new account
				</h4>

				<SignupForm />
			</div>
			<TMSvg />
		</div>
	);
}
