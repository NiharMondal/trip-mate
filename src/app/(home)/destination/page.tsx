import { imageHelpers } from "@/assets/image-helpers";
import VCard from "@/components/@ui/VCard";
import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";
import React from "react";

export default function DestinationPage() {
	return (
		<div className="space-y-5 bg-white">
			<PageTitle
				title="Destinations"
				subTitle="Explore Tours By Destinations"
			/>
			
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-20">
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				<VCard cardHeight="h-[320px] lg:h-[500px]" />
				
			</div>
		</div>
	);
}
