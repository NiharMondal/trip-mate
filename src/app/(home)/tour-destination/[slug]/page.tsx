import React from "react";

import PageTitle from "@/components/shared/PageTitle";
import TourDestinationWrapper from "./TourDestinationWrapper";

export default function TourDestination({
	params,
}: {
	params: { slug: string };
}) {


	let title = params.slug;

	title = title.split("-").join(" ").toUpperCase()

	return (
		<div className="pb-10 space-y-12 bg-white">
			<PageTitle
				title={title}
			/>
			<TourDestinationWrapper destination={params.slug} />
		</div>
	);
}
