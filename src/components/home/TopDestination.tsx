import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import { helpers } from "@/helpers";
import { assets } from "@/assets/image";
import DestinationCard from "../@ui/DestinationCard";
import VCard from "../@ui/VCard";
import LinkButton from "../@ui/LinkButton";

export default function TopDestination() {
	return (
		<div className=" max-w-7xl mx-auto">
			<SectionHeading text1="Top" text2="Destination" />
			<p className="text-center max-w-md mx-auto geist-sans text-lg mt-6">
				Explore our top destinations voted by more than 100,000+
				customers around the world.
			</p>

			<LinkButton href="/destination" title="All Destination" />

			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
				<VCard />
				<VCard />
				<VCard />
				<VCard />
				<VCard />
				<VCard />
				<VCard />
			</div>
		</div>
	);
}
