"use client";
import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";


export default function DashboardWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<DashboardTopbar />

			<div className="flex gap-x-8">
				<DashboardNavBar />
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
}
