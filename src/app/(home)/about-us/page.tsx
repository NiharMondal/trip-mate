import PageTitle from "@/components/shared/PageTitle";
import WOInfo from "@/components/shared/WOInfo";
import Image from "next/image";
import React from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiAzuredataexplorer } from "react-icons/si";
export default function AboutUsPage() {
	return (
		<div className="bg-white">
			<PageTitle title="About Us" subTitle="The Story About Us" />

			<div className="px-4 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5">
				<Image
					src="/about-us.jpg"
					alt="about-us"
					width={200}
					height={500}
					className="object-contain object-center w-full h-[500px]"
				/>

				<div className="space-y-8">
					<h3 className="font-medium leading-none">
						We have been in the tourism industry for more than 20
						years
					</h3>

					<p className="text-xl tracking-wide text-gray-500">
						Leave your guidebooks at home and dive into the local
						cultures that make each destination so special. We’ll
						connect you with our exclusive experiences.
					</p>
					<div className="space-y-8">
						<WOInfo
							icon={<RiFlightTakeoffFill />}
							subHeading="Book With Confidence"
							details="Plan your travels with peace of mind. Our secure platform ensures a hassle-free booking experience, letting you focus on enjoying your journey without worrying about the details."
						/>
						<WOInfo
							icon={<SiAzuredataexplorer />}
							subHeading="Freedom to Discover, Confidence to Explore"
							details="Unlock the freedom to explore new destinations, knowing you have reliable tools and support at every step. From finding travel companions to curated itineraries, we've got you covered."
						/>
						<WOInfo
							icon={<FaMapLocationDot />}
							subHeading="Dive into Culture"
							details="Immerse yourself in the rich traditions and vibrant lifestyles of the places you visit. Connect with local experiences that let you truly live the culture, not just see it."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
