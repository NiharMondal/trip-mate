"use client";

import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";
import { TTripResponse } from "@/types";

type PopularTripCardProops = {
	data: TTripResponse;
};

export default function PopularTripCard({ data }: PopularTripCardProops) {
	return (
		<div>
			<div className="relative rounded-xl overflow-hidden group h-[480px] group">
				<Image
					src={data?.photo}
					alt={data.title}
					width={200}
					height={200}
					loading="lazy"
					className="h-full w-full object-cover object-left"
				/>
				<div className="bg_darken"></div>
				<div className="absolute inset-0 p-5 space-y-3 flex flex-col items-start justify-center text-white group-hover:translate-y-[35%] translate-y-[45%] duration-200">
					<Link
						href={`/tours/${data.slug}`}
						className="text-2xl text-white font-normal font-mono"
					>
						{data.title}
					</Link>
					<div className="opacity-0 group-hover:opacity-100 w-full flex items-center justify-between">
						{data.reviews && data.reviews && (
							<div className="inline-flex gap-x-1 items-center">
								<Rating
									style={{ maxWidth: "100px" }}
									readOnly={true}
									value={data.rating}
								/>
								<span className="text-xs text-gray-300">
									({data.reviews.length} Reviews)
								</span>
							</div>
						)}
						<p className="font-bold text-lg right-0">
							${data.budget}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
