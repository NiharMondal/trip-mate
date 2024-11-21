import React from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";
import { popularTrip } from "@/actions/trip";
import PopularTripCard from "../@ui/PopularTripCard";

export default async function PopularTour() {
	const data = await popularTrip();


	return (
		<div className="max-w-7xl mx-auto px-5">
			<SectionHeading text1="Popular" text2="Tours" />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10">
				{!data?.result && <p>No data found!</p>}
				{data?.result.map((popularTrip) => (
					<PopularTripCard key={popularTrip._id} data={popularTrip} />
				))}
			</div>
			<LinkButton href="/tours" title="See more" />
		</div>
	);
}
