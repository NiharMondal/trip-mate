import React from "react";

import Tours from "./Tours";
import ToursQuery from "./ToursQuery";
import PageTitle from "@/components/shared/PageTitle";

export default function TourPage() {
	return (
		<div className="pb-10 space-y-12 bg-white">
			<PageTitle
				title="Search Tours"
				subTitle="Filter according your desire"
			/>
			<div className="mx-auto max-w-7xl px-5 sm:px-36 md:px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* start of left side */}
				<ToursQuery />

				{/* start of right side */}
				<Tours />
			</div>
		</div>
	);
}
