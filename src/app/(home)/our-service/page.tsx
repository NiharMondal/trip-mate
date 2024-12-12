import PageTitle from "@/components/shared/PageTitle";
import WOInfo from "@/components/shared/WOInfo";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaHandHoldingDollar, FaMapLocationDot } from "react-icons/fa6";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { SiAzuredataexplorer } from "react-icons/si";

export const metadata: Metadata = {
	title: "Our Services - Trip Mate",
	description:
		"Explore the range of services we offer, from trip planning to connecting you with like-minded travel companions.",
};

export default function OurService() {
	return (
		<div className="bg-white">
			<PageTitle title="Our Service" subTitle="What we do" />
			<div className="mx-auto max-w-7xl py-20 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2  gap-8">
					<div>
						<p className="px-4 py-2 shadow bg-white max-w-fit text-accent rounded-full">
							Great Service, Great Price
						</p>
						<h4 className="text-4xl font-medium my-5 text-gray-800">
							Freedom to discover, <br /> confidence to explore
						</h4>
						<p className="text-gray-500 text-lg">
							Leave your guidebooks at home and dive into the
							local cultures that make each destination so
							special. We’ll connect you with our exclusive
							experiences. Each trip is carefully crafted to let
							enjoy your vacation.
						</p>
					</div>
					<div className=" overflow-hidden">
						<iframe
							className="rounded-md"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/fEErySYqItI?si=uUtr0rihDnT63Rj7"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-40 gap-8">
					<div className="border py-12 px-8">
						<WOInfo
							icon={<LiaGlobeAmericasSolid />}
							subHeading="700 Destinations"
							details="Our expert team handpicked all destinations in this site"
						/>
					</div>
					<div className="border py-12 px-8">
						<WOInfo
							icon={<FaHandHoldingDollar />}
							subHeading="Best Price Gurantee"
							details="Price match within 48 hours of order confirmation"
						/>
					</div>
					<div className="border py-12 px-8">
						<WOInfo
							icon={<MdSupportAgent />}
							subHeading="Top Notch Support"
							details="We are here to help, before, during, and even after your trip."
						/>
					</div>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5">
					<Image
						src="/service-page.jpg"
						alt="about-us"
						width={200}
						height={500}
						className="object-contain object-center w-full h-[500px]"
					/>

					<div className="space-y-8">
						<h3 className="font-medium leading-none">
							We have been in the tourism industry for more than
							20 years
						</h3>

						<p className="text-xl tracking-wide text-gray-500">
							Leave your guidebooks at home and dive into the
							local cultures that make each destination so
							special. We’ll connect you with our exclusive
							experiences.
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
		</div>
	);
}
