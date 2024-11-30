"use client";
import React, { useState } from "react";
import { COMMON_ITEMS, MENU_ITEMS } from "./menu";
import { IoCloseSharp } from "react-icons/io5";
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
			className={`lg:relative min-w-[300px] fixed bg-primary min-h-screen  ${show? "block":"hidden"}`}
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
						<a href={item.path}>{item.label}</a>
					</li>
				))}

				{/* Common routes */}
				{COMMON_ITEMS.map((item, index) => (
					<li
						key={`common-${index}`}
						className="hover:text-secondary transition-colors duration-200 cursor-pointer"
					>
						<a href={item.path}>{item.label}</a>
					</li>
				))}
			</ul>
		</aside>
	);
}
