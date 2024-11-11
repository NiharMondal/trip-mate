
import React from "react";
import SectionHeading from "../shared/SectionHeading";

import VCard from "../@ui/VCard";
import LinkButton from "../@ui/LinkButton";

import { getAllDestination } from "@/actions/destination";

export default async function TopDestination() {
	const des = await getAllDestination();

	return (
		<div className=" max-w-7xl mx-auto">
			<SectionHeading text1="Top" text2="Destination" />
			<p className="text-center max-w-md mx-auto geist-sans text-lg mt-6">
				Explore our top des voted by more than 100,000+ customers around
				the world.
			</p>

			<LinkButton href="/destination" title="All Destination" />

			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
				{des?.result?.length &&
					des?.result?.map((data) => (
						<VCard data={data && data} key={data._id} />
					))}
			</div>
		</div>
	);
}
