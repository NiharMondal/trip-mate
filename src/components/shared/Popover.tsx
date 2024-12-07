import { userLogout } from "@/actions/auth";
import { imageHelpers } from "@/assets/image-helpers";
import useFetchUser from "@/lib/loadUser";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slice/authSlice";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserPopover() {
	const router = useRouter();
	const { user } = useFetchUser();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		userLogout(); //remove cookie from cookie  using server action
		dispatch(logout()); //remove user details from local storage

		router.push("/");
	};

	const renderRoutes = () => {
		switch (user?.role) {
			case "admin":
				return (
					<div className="space-y-1 flex flex-col">
						<Link
							href="/dashboard/admin"
							className="hover:text-primary"
						>
							Dashboard
						</Link>
					</div>
				);
			case "user":
				return (
					<div className="space-y-1 flex flex-col">
						<Link href="/dashboard" className="hover:text-primary">
							Dashboard
						</Link>
						<Link
							href="/dashboard/user/trips"
							className="hover:text-primary"
						>
							My Trips List
						</Link>
					</div>
				);
		}
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
				{renderRoutes()}

				<button
					className="btn btn-primary text-white mt-3"
					onClick={handleLogout}
				>
					Logout
				</button>
			</PopoverPanel>
		</Popover>
	);
}
