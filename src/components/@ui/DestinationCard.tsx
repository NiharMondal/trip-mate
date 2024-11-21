
import { TDestinationResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DestinationCardProps = {
	data: TDestinationResponse;
};
const img =
	"https://images.unsplash.com/photo-1541615060331-ca684e62c5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdXJyZWR8ZW58MHx8MHx8fDA%3D";


export default function DestinationCard({ data }: DestinationCardProps) {
	return (
		<div className="relative rounded-xl overflow-hidden group h-[260px] bg-black">
			<Image
				src={img}
				fill
				alt={data.destination}
				className="h-full w-full object-cover object-center"
			/>
			<div className="absolute top-3 right-3 px-4 py-2 bg-primary text-white rounded-md z-20">
				<p className="font-semibold text-sm">
					{data.trips?.length} tours
				</p>
			</div>
			<div className="bg_darken"></div>
			<div className="absolute inset-0 p-5 text-center space-y-3 flex flex-col items-center justify-center text-white group-hover:translate-y-0 translate-y-[50%] duration-200">
				<h4 className="text-2xl font-medium font-mono">{data.destination}</h4>
				<p className="opacity-0 group-hover:opacity-100 font-sans">{data.shortInfo}</p>
				<Link href={`/tour-destination/${data.slug}`} className="text-lg font-semibold text-primary">
					View all tours
				</Link>
			</div>
		</div>
	);
}
