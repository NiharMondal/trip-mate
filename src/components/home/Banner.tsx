"use client";
import React from "react";

import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";
import Link from "next/link";

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
							Find Next Place <br /> To
							<span className="text-primary">Visit</span>
						</h1>

						<p className="max-w-lg text-lg leading-6 font-mono">
							Discover amzaing places at exclusive deals. Eat,
							Shop, Visit interesting places around the world.
						</p>
					</div>
					<Link href="/tours" className="inline-block font-mono mt-8">
						<button className="btn btn-primary text-white">
							See Trips
						</button>
					</Link>
				</div>
				{/* photo section */}
				<div className="col-span-2 relative z-[-1] hidden lg:flex">
					<Image
						src={imageHelpers.heroRight}
						// loading="lazy"
						height={600}
						width={500}
						alt="avatar"
						priority={true}
						className="w-full h-full object-center object-cover rounded-md"
					/>
				</div>
			</div>
		</section>
	);
}
