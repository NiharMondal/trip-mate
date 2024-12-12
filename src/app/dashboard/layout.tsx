import React from "react";
import DashboardWrapper from "../../components/dashboard/DashboardWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard - Trip Mate",
	description:
		"Manage your trips, check your buddy requests, and update your travel preferences on your personalized dashboard.",
};

export default function DasboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardWrapper>{children}</DashboardWrapper>;
}
