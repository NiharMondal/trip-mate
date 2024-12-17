"use client";
import { userLogout } from "@/actions/auth";
import { imageHelpers } from "@/assets/image-helpers";
import { useMyProfileQuery } from "@/redux/api/profile.api";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slice/authSlice";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserPopover() {
	const { data: user } = useMyProfileQuery(undefined);

	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		userLogout(); //remove cookie from cookie  using server action
		dispatch(logout()); //remove user details from local storage

		router.push("/");
	};

	const renderRoutes = () => {
		switch (user?.result?.role) {
			case "admin":
				return (
					<div className="space-y-1 flex flex-col">
						<Link
							href="/dashboard/admin"
							className="hover:text-primary"
						>
							Dashboard
						</Link>
						<Link
							href="/dashboard/admin/manage-trips"
							className="hover:text-primary"
						>
							Manage Trips
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
		<Popover className="relative " title="Profile">
			<PopoverButton className="outline-none size-12 rounded-full overflow-hidden">
				<Image
					src={user?.result?.avatar || imageHelpers.avatar}
					height={40}
					width={40}
					alt="user-avatar"
					className="w-full h-full object-cover object-center z-10 "
				/>
			</PopoverButton>
			<PopoverPanel
				anchor="bottom end"
				className="flex flex-col p-5 bg-white w-60 rounded border space-y-2"
			>
				<div>
					<h4 className="font-mono font-medium text-gray-700">
						Hello, {user?.result?.name}
					</h4>
				</div>
				<hr />
				{renderRoutes()}
				<button className="btn btn-secondary" onClick={handleLogout}>
					Logout
				</button>
			</PopoverPanel>
		</Popover>
	);
}
