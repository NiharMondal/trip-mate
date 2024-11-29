"use client";
import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";


export default function DashboardWrapper({
	children,
}: {
	children: React.ReactNode;
}) {

	
	return (
		<div className="flex">
			<DashboardNavBar  />
			<div className="w-full">
				<DashboardTopbar />
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
}
