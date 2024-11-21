import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import { FcClock } from "react-icons/fc";
import { HiOutlineUserGroup } from "react-icons/hi2";


import { getSingleTrip } from "@/actions/trip";
import { calculateDayDifference } from "@/helpers/calculateDate";
import BookingSection from "./BookingSection";

export default async function TourDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const trip = await getSingleTrip(params.slug);
	if (!trip.result) return <p>No data found!</p>;

	const duration = calculateDayDifference(
		trip.result.startDate,
		trip.result.endDate
	);

	return (
		<div className="bg-white py-20 px-5 sm:px-20 lg:px-5">
			<div className="max-w-7xl mx-auto">
				<div className="space-y-5">
					<h2 className="font-semibold font-mono">
						{trip.result.title}
					</h2>
					<div className="inline-flex gap-x-2 items-center text-gray-500">

					<Rating
						value={trip.result.rating}
						readOnly={true}
						className="max-w-[100px]"
					/>
					<p className="text-xs">( {trip.result.reviews.length} Review )</p>
					</div>
					<div className="max-w-2xl flex items-center justify-between text-gray-600">
						<div className="inline-flex gap-x-3 items-center">
							<span>
								<FcClock className=" size-8" />
							</span>
							<span>{duration} Days</span>
						</div>
						<div className="inline-flex gap-x-3 items-center">
							<span>
								<HiOutlineUserGroup className=" size-8" />
							</span>
							<span>
								Max Guests: {trip?.result?.maxGuests}
							</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
					{/* image section  */}
					<div className="lg:col-span-2">
						<Image
							src={trip.result.photos[0]}
							height={300}
							width={200}
							alt="photo"
							className="w-full max-h-[500px] object-cover object-center rounded-md"
						/>
					</div>

					{/* booking section  */}
					<BookingSection budget={trip.result.budget} seats={trip.result.availAbleSeats} date={trip.result.startDate} />
				</div>
				<div className="py-10">{trip.result.details}</div>
			</div>
		</div>
	);
}

