import { TResponseTrip } from "@/types";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";

type PopularTripCardProops = {
	data: TResponseTrip;
};

export default function PopularTripCard({ data }: PopularTripCardProops) {
	return (
		<div className="relative rounded-xl overflow-hidden group h-[480px] group">
			<Image
				src={data.photos[0]}
				alt={data.title}
				fill={true}
				className="h-full w-full object-cover object-left"
			/>
			<div className="bg_darken"></div>
			<div className="absolute inset-0 p-5 space-y-3 flex flex-col items-start justify-center text-white group-hover:translate-y-[35%] translate-y-[45%] duration-200">
				<h4 className="text-xl text-white font-semibold">
					{data.title}
				</h4>
				<div className="opacity-0 group-hover:opacity-100 w-full flex items-center justify-between">
					{data.reviews.length>0 ? (
						<div className="inline-flex gap-x-1 items-center">
							<Rating
								style={{ maxWidth: "100px" }}
								readOnly={true}
								value={data.rating}
							/>
							<span className="text-xs">
								({data.reviews.length} Reviews)
							</span>
						</div>
					) : (
						<div></div>
					)}
					<p className="font-bold text-lg right-0">${data.budget}</p>
				</div>
			</div>
		</div>
	);
}