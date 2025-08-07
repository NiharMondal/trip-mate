import React from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";

import { getPopularDestination } from "@/actions/destination";
import DestinationCard from "../@ui/DestinationCard";
import Image from "next/image";

export default async function TopDestination() {
	const destinations = await getPopularDestination();

	return (
		<section className="relative overflow-hidden">
			<div className="hidden xl:block absolute -top-16 -right-16 size-[320px] ">
				<Image
					src={"/images/circle.png"}
					height={200}
					width={200}
					alt="circle"
					className="w-full h-full object-cover object-center opacity-60 image-spin"
				/>
			</div>
			<div className=" max-w-7xl mx-auto py-10">
				<SectionHeading text1="Top" text2="Destination" />
				<p className="text-center max-w-md mx-auto geist-sans text-lg mt-6">
					Explore our top des voted by more than 100,000+ customers
					around the world.
				</p>

				<LinkButton href="/destination" title="All Destination" />

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
					{!destinations?.result && <p>No data found!</p>}
					{destinations?.result.map((data) => (
						<DestinationCard data={data} key={data._id} />
					))}
				</div>
			</div>
		</section>
	);
}
