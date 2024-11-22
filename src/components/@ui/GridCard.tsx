import { TTripResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GridCard({ trip }: { trip: TTripResponse }) {
	return (
		<div className="shadow-xl rounded-md overflow-hidden bg-secondary">
			<div className="relative h-[250px]">
				<Image
					src={trip.photos[0]}
					alt={trip.title}
					fill
					className="h-[200px] w-[140px] object-cover object-center"
				/>
			</div>
			<div className="p-10 space-y-2">
				<h4 className="font-mono font-medium text-xl">{trip.title}</h4>
				<div className="flex gap-x-3">
					<p className="text-gray-400">From</p>
					<p className="text-primary text-xl font-semibold">
						${trip.budget}
					</p>
				</div>
				<Link
					href={`/tours/${trip.slug}`}
					className="text-xs uppercase btn btn-primary text-white py-3"
				>
					view details
				</Link>
			</div>
		</div>
	);
}
