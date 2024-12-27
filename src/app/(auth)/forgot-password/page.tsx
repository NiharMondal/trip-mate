import { Metadata } from "next";
import ForgotPasswordForm from "./ForgotPasswordForm";

export const metadata: Metadata = {
	title: "Trim Mate - Forgot Password",
	description:
		"This page will help you to to resent password link to your email address",
};

export default function ForgotPasswordPage() {
	return (
		<div className="grid grid-cols-1 h-screen place-content-center place-items-center">
			<div className="w-full max-w-lg">
				<ForgotPasswordForm />
			</div>
		</div>
	);
}
