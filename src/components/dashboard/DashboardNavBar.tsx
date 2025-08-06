"use client";
import React from "react";
import { COMMON_ITEMS, MENU_ITEMS } from "./menu";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

import useFetchUser from "@/lib/loadUser";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";
type DashboardNavBarProps = {
	show: boolean;
	toggle: () => void;
};

export default function DashboardNavBar({
	show,
	toggle,
}: DashboardNavBarProps) {
	const path = usePathname();
	const { user } = useFetchUser();
	const roleBasedRoutes = MENU_ITEMS[(user?.role as "user") || "admin"] || [];

	return (
		<aside
			className={`lg:relative min-w-[300px] fixed bg-black min-h-screen  ${
				show ? "" : "hidden lg:block"
			}`}
		>
			<div className="absolute top-4 right-4">
				<IoCloseSharp
					className="size-8 cursor-pointer text-white block lg:hidden"
					onClick={toggle}
				/>
			</div>
			<div className="pt-10">
				<div className="flex items-center justify-center w-full -pl-10">
					<Link href={"/"}>
						<Image
							src={imageHelpers.logo}
							width={100}
							height={100}
							alt="logo"
						/>
					</Link>
				</div>
			</div>
			<ul className="mt-10 space-y-2 px-2 text-white">
				{/* Role-based routes */}
				{roleBasedRoutes.map((item, index) => (
					<li
						key={index}
						className={`pl-5 py-2 bg-primary/30 hover:text-accent transition-colors duration-200 cursor-pointer rounded-md ${
							path === item.path
								? "text-primary font-semibold"
								: "font-medium"
						}`}
					>
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}

				{/* Common routes */}
				{COMMON_ITEMS.map((item, index) => (
					<li
						key={`common-${index}`}
						className={`pl-5 py-2 bg-primary/30 hover:text-accent transition-colors duration-200 cursor-pointer rounded-md ${
							path === item.path
								? "text-primary font-semibold"
								: "font-medium"
						}`}
					>
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
