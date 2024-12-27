import { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";
export const metadata: Metadata = {
	title: "Trim Mate - Reset Password",
	description: "Reset your password",
};
export default function ResetPasswordPage() {
	return (
		<div className="grid grid-cols-1 h-screen place-content-center place-items-center">
			<div className="w-full max-w-lg">
				<ResetPasswordForm />
			</div>
		</div>
	);
}