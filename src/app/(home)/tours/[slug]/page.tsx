import { imageHelpers } from "@/assets/image-helpers";
import Image from "next/image";
import React from "react";

import { FcClock } from "react-icons/fc";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { BsCalendarDate } from "react-icons/bs";



export default function TourDetailsPage() {
	return (
		<div className="bg-white py-20 px-5 sm:px-20 lg:px-5">
			<div className="max-w-7xl mx-auto">
				<div className="space-y-5">
					<h2>Dubai -- All Stunning Places</h2>
					<p> Number of Review</p>
					<div className="max-w-2xl flex items-center justify-between">
						<div className="inline-flex gap-x-3 items-center">
							<span>
								<FcClock className="text-gray-500 size-8" />
							</span>
							<span>Number of Days</span>
						</div>
						<div className="inline-flex gap-x-3 items-center">
							<span>
								<HiOutlineUserGroup className="text-gray-500 size-8" />
							</span>
							<span>Max Guests: 40</span>
						</div>
						<div className="inline-flex gap-x-3 items-center">
							<span>
								<SlCalender className="text-gray-500 size-8" />
							</span>
							<span>Apr - Oct</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
					{/* image section  */}
					<div className="lg:col-span-2">
						<Image
							src={imageHelpers.beach}
							height={300}
							width={200}
							alt="photo"
							className="w-full max-h-[500px] object-cover object-center rounded-md"
						/>
					</div>

					{/* booking section  */}
					<div className="bg-secondary rounded-md shadow-lg p-8">
						<h5>Price</h5>
						<h2 className="font-semibold">$1200</h2>
						<div className="space-y-8 mt-5">
							<div className="inline-flex gap-x-8">
								<span>
									<BsCalendarDate className="size-8 text-primary" />
								</span>
								<span>February 1,2025</span>
							</div>

							<div >
								<p className="pl-16 mb-3">Available: 0 seats</p>
								<div className="flex gap-x-8">
									<span>
										<HiOutlineUserGroup className="size-8 text-primary" />
									</span>
									<select
										name="people"
										id="people"
										className="w-full p-4 rounded-md outline-none"
									>
										<option value="">
											Number of People
										</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>

							<div>
								<button className="btn btn-primary w-full py-5 mt-5">proceed booking</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
