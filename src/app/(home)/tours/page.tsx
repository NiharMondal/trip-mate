import React from "react";
import PageTitle from "@/components/shared/PageTitle";
import ParentComponent from "@/components/tour/ParentComponent";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Available Tours - Trip Mate",
	description:
		"Browse our collection of exciting tours and find the perfect destination for your next adventure.",
};

export default function TourPage() {
	return (
		<div className="pb-10 space-y-12 bg-white">
			<PageTitle title="Search Tours" />
			<ParentComponent />
		</div>
	);
}
