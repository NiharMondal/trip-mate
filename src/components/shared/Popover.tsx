import { userLogout } from "@/actions/auth";
import { imageHelpers } from "@/assets/image-helpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectedUser } from "@/redux/slice/authSlice";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserPopover() {
	const router = useRouter();
	const user = useAppSelector(selectedUser);
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		
		userLogout(); //remove cookie from cookie session using server action
		dispatch(logout()); //remove user details from local session

		router.push("/");
	};

	return (
		<Popover className="relative ">
			<PopoverButton className="outline-none">
				<Image
					src={imageHelpers.logo}
					height={40}
					width={40}
					alt="user-avatar"
					className="w-full h-full object-cover object-center z-10"
				/>
			</PopoverButton>
			<PopoverPanel
				anchor="bottom end"
				className="flex flex-col p-5 bg-white w-60 rounded border space-y-2"
			>
				<div>
					<h4 className="font-mono font-medium text-gray-700">
						Hello, {user?.name}
					</h4>
				</div>
				<hr />
				<a href="/analytics">Analytics</a>
				<a href="/engagement">Engagement</a>
				<a href="/security">Security</a>
				<a href="/integrations">Integrations</a>

				<button
					className="btn btn-primary text-white"
					onClick={handleLogout}
				>
					Logout
				</button>
			</PopoverPanel>
		</Popover>
	);
}
