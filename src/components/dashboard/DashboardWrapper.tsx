"use client";
import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import { useState } from "react";

export default function DashboardWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showNavbar, setShowNavbar] = useState(true);

	const toggleNavbar = () => setShowNavbar((prev) => !prev);
	return (
		<div className="flex">
			<DashboardNavBar show={showNavbar} toggle={toggleNavbar} />
			<div className="w-full">
				<DashboardTopbar  toggle={toggleNavbar} />
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
}
