import React from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";

import { getPopularDestination } from "@/actions/destination";
import DestinationCard from "../@ui/DestinationCard";

export default async function TopDestination() {
	const destinations = await getPopularDestination();
	if (!destinations?.result) return <p>No data found!</p>;
	return (
		<div className=" max-w-7xl mx-auto">
			<SectionHeading text1="Top" text2="Destination" />
			<p className="text-center max-w-md mx-auto geist-sans text-lg mt-6">
				Explore our top des voted by more than 100,000+ customers around
				the world.
			</p>

			<LinkButton href="/destination" title="All Destination" />

			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
				{destinations?.result?.map((data) => (
					<DestinationCard data={data} key={data._id} />
				))}
			</div>
		</div>
	);
}
