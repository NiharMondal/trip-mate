import React from "react";

import PageTitle from "@/components/shared/PageTitle";
import TourDestinationWrapper from "./TourDestinationWrapper";

export default function TourDestination({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<div className="pb-10 space-y-12 bg-white">
			<PageTitle
				title="Search Tours"
				subTitle="Filter according your desire"
			/>
			<TourDestinationWrapper destination={params.slug} />
		</div>
	);
}
