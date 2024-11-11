import React from "react";
import SectionHeading from "../shared/SectionHeading";
import VCardWithDetails from "../@ui/VCardWithDetails";
import LinkButton from "../@ui/LinkButton";
import { recentTrip } from "@/actions/trip";


export default async function RecentlyAdded() {
	const data = await recentTrip();

	if(!data?.result){
		return <div>No data found!</div>
	}
	
	return (
		<div className="max-w-7xl mx-auto px-5">
			<SectionHeading text1="Freshly" text2="Added" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 mb-12">
				{
					data.result.map((recentTrip)=> <VCardWithDetails key={recentTrip._id} trip={recentTrip} />)
				}
			</div>
			<LinkButton href="/tour" title="View All Tours" />
		</div>
	);
}
