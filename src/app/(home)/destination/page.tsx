import { getAllDestination } from "@/actions/destination";
import DestinationCard from "@/components/@ui/DestinationCard";

import PageTitle from "@/components/shared/PageTitle";

import React from "react";

export default async function DestinationPage() {
	const destinations = await getAllDestination();
	
	return (
		<div >
			<PageTitle
				title="Destinations"
				subTitle="Explore Tours By Destinations"
			/>
			<div className="bg-white py-20">
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 px-5  max-w-7xl mx-auto">
					{destinations?.result?.map((data) => (
						<DestinationCard
							data={data}
							height="h-[400px]"
							key={data._id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
