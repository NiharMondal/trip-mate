import { TDestinationResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DestinationCardProps = {
	data: TDestinationResponse;
	height?: string;
};

export default function DestinationCard({
	data,
	height = "h-[260px]",
}: DestinationCardProps) {
	return (
		<div
			className={`relative rounded-xl overflow-hidden group h-[260px] bg-black ${height}`}
		>
			<Image
				src={data?.thumbnail}
				width={400}
				height={500}
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
				<h4 className="text-2xl font-medium font-mono">
					{data.destination}
				</h4>
				<p
					className={`opacity-0 group-hover:opacity-100 font-sans ${
						height ? "max-w-[320px]" : ""
					}`}
				>
					{data.shortInfo}
				</p>
				<Link
					href={`/tour-destination/${data.slug}`}
					className="text-lg font-semibold text-primary"
				>
					View all tours
				</Link>
			</div>
		</div>
	);
}
