"use client";
import React, { useState } from "react";
import { COMMON_ITEMS, MENU_ITEMS } from "./menu";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
type DashboardNavBarProps = {
	show: boolean;
	toggle: () => void;
};

export default function DashboardNavBar({
	show,
	toggle,
}: DashboardNavBarProps) {
	const [role] = useState<"admin" | "user">("user");
	const roleBasedRoutes = MENU_ITEMS[role] || [];

	return (
		<aside
			className={`lg:relative min-w-[300px] fixed bg-gray-500 min-h-screen  ${
				show ? "" : "hidden lg:block"
			}`}
		>
			<div className="absolute top-4 right-4">
				<IoCloseSharp
					className="size-8 cursor-pointer text-gray-800 block lg:hidden"
					onClick={toggle}
				/>
			</div>
			<ul className="pl-10 pt-10 space-y-4 text-white">
				{/* Role-based routes */}
				{roleBasedRoutes.map((item, index) => (
					<li
						key={index}
						className="hover:text-secondary transition-colors duration-200 cursor-pointer"
					>
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}

				{/* Common routes */}
				{COMMON_ITEMS.map((item, index) => (
					<li
						key={`common-${index}`}
						className="hover:text-secondary transition-colors duration-200 cursor-pointer"
					>
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
