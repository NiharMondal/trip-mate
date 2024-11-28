"use client";
import { imageHelpers } from "@/assets/image-helpers";

import { TReviewsResponse } from "@/types";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";

export default function Review({ review }: { review: TReviewsResponse }) {
	
	return (
		<div className="flex gap-x-6 py-5 border-b min-w-full">
			<div className="relative min-h-16 min-w-16 rounded-full overflow-hidden">
				<Image
					src={review.userId?.avatar || imageHelpers.logo}
					alt="user-avatar"
					width={64}
					height={64}
				/>
			</div>
			<div>
				<h4 className="font-medium">{review?.userId?.name}</h4>
				<Rating
					value={review?.rating}
					readOnly={true}
					className="max-w-[100px]"
				/>
				<p>{review.comment}</p>
			</div>
		</div>
	);
}
