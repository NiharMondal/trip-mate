import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import avatar from "../../assets/images/avatar.jpg";
import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";

export default function Banner() {
	return (
		<section className="mx-auto max-w-6xl geist-sans">
			<div className="grid grid-cols-1 lg:grid-cols-5 min-h-[560px]">
				<div className="col-span-3 px-5">
					<div className="space-y-8">
						<p className="py-1 px-5 max-w-fit bg-white rounded-full text-accent text-lg font-semibold">
							Book With Us!
						</p>
						<h1 className="lg:text-8xl heading">
							Find Next Place To{" "}
							<span className="text-primary">Visit</span>
						</h1>

						<p className="max-w-lg text-lg ">
							Discover amzaing places at exclusive deals. Eat,
							Shop, Visit interesting places around the world.
						</p>
					</div>
					<div className="mt-10  bg-white w-full lg:min-w-[800px] grid grid-cols-1 lg:grid-cols-4 rounded-md gap-x-5 overflow-hidden z-10">
						<div className="space-y-2 p-5">
							<h4>Keywords</h4>
							<input
								className="outline-none w-full"
								type="text"
								placeholder="Type your destination"
							/>
						</div>
						<div className="space-y-2 p-5">
							<h4>Destination</h4>
							<select
								name="destination"
								id="destination"
								className="w-full outline-none"
							>
								<option value="asia">Asia</option>
								<option value="america">America</option>
								<option value="europe">Europe</option>
								<option value="latin-america">
									Latin America
								</option>
							</select>
						</div>
						<div className="space-y-2 p-5">
							<h4>Duration</h4>
							<select
								name="duration"
								id="duration"
								className="w-full outline-none"
							>
								<option value="1">1 Days tour</option>
								<option value="2-4">2-4 Days tour</option>
								<option value="5-7">5-7 Days tour</option>
								<option value="7-19">7+ Days tour</option>
							</select>
						</div>
						<div className="flex flex-col items-center justify-center h-full bg-primary text-white font-semibold p-5">
							<button className="flex flex-col items-center justify-center w-full">
								<AiOutlineSearch className="size-8" />

								<span>Search</span>
							</button>
						</div>
					</div>
				</div>
				{/* photo section */}
				<div className="col-span-2 relative z-[-1] hidden lg:flex">
					<Image
						src={imageHelpers.heroRight}
						fill
						alt="avatar"
						className="object-center object-cover rounded-md"
					/>
				</div>
			</div>
		</section>
	);
}
