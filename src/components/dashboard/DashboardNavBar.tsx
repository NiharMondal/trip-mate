"use client";
import React, { useState } from "react";
import { COMMON_ITEMS, MENU_ITEMS } from "./menu";

export default function DashboardNavBar() {
	const [role] = useState<"admin" | "user">("user");
	const roleBasedRoutes = MENU_ITEMS[role] || [];

	return (
		<aside className="min-w-[300px] bg-primary min-h-screen shadow-lg">
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
