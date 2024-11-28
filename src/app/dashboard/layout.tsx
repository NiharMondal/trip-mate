import React from "react";
import DashboardWrapper from "./DashboardWrapper";

export default function DasboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardWrapper>{children}</DashboardWrapper>;
}
