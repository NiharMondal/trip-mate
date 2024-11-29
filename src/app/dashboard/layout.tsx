import React from "react";
import DashboardWrapper from "../../components/dashboard/DashboardWrapper";

export default function DasboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardWrapper>{children}</DashboardWrapper>;
}
