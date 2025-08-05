"use client";
import React from "react";

import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { heroSlideData } from "../demo-data/hero-slide";
export default function Banner() {
	return (
		<section className="py-10 bg-[url('/images/banner-bg.png')] swiper-container-wrapper">
			<Swiper
				pagination={{
					clickable: true,
					renderBullet: (index, className) =>
						`<span class="${className} custom-bullet">${
							index + 1
						}</span>`,
				}}
				autoplay={{
					delay: 3000,
				}}
				modules={[Autoplay, Pagination]}
				slidesPerView={1}
				className="custom-swiper"
			>
				{heroSlideData.map((item, index) => (
					<SwiperSlide key={index} className="h-full">
						<div className="h-full flex items-center">
							<div className="mx-auto max-w-6xl geist-sans grid grid-cols-1 lg:grid-cols-2 place-content-center gap-10 h-full">
								{/* left content */}
								<div className="px-5 xl:px-0 flex flex-col justify-center">
									<div className="space-y-5">
										<p className="text-2xl font-bold text-primary">
											Lets Go Now
										</p>
										<h1 className="font-mono">
											{item.heading}
										</h1>
										<p className="max-w-lg text-lg leading-6 font-mono">
											{item.subHeading}
										</p>
									</div>
									<Link
										href="/tours"
										className="inline-block font-mono mt-8"
									>
										<button className="btn btn-primary text-white">
											See Trips
										</button>
									</Link>
								</div>

								{/* right image */}
								<div className="relative p-5 flex ">
									<div className="h-[400px] xl:h-[600px] w-[340px] xl:w-[440px] border-[12px] border-white">
										<Image
											src={imageHelpers.heroRight}
											loading="lazy"
											height={500}
											width={300}
											alt="banner-image"
											className="w-full h-full object-center object-cover rounded-md"
										/>
									</div>
									<div className="h-[200px] xl:h-[300px] w-[240px] border-[12px] border-white absolute top-1/2 left-1/2 -translate-y-1/2">
										<Image
											src={imageHelpers.heroRight}
											loading="lazy"
											height={500}
											width={300}
											alt="banner-image"
											className="w-full h-full object-center object-cover rounded-md"
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
