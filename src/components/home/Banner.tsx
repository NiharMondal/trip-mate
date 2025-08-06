"use client";
import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { heroSlideData } from "../demo-data/hero-slide";
import Link from "next/link";

const pagination = {
	clickable: true,
	renderBullet: (index: number, className: string) =>
		`<span class="${className} custom-bullet">${index + 1}</span>`,
};
export default function Banner() {
	return (
		<section className="bg-[url('/images/banner-bg.png')] py-10 px-5 xl:px-0">
			<div className="max-w-7xl mx-auto h-screen">
				<Swiper
					effect="fade"
					pagination={pagination}
					autoplay={{ delay: 3000 }}
					modules={[EffectFade, Pagination, Autoplay]}
					className="mySwiper h-full"
				>
					{heroSlideData.map((item, index) => (
						<SwiperSlide
							key={index}
							className="relative h-full py-10 bg-[url('/images/banner-bg.png')]"
						>
							{/* Absolutely positioned wrapper to overlay */}
							<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between ">
								{/* Left text content */}
								<div className="space-y-6 max-w-xl">
									<p className="text-xl font-semibold text-orange-500">
										Let&apos;s Go Now
									</p>
									<h1 className="text-4xl font-bold capitalize">
										{item.heading}
									</h1>
									<p className="text-lg text-gray-600 leading-[17.5px]">
										{item.subHeading}
									</p>
									<div className="text-white">
										<Link
											href={"/tours"}
											className="btn btn-primary"
										>
											<button>See More</button>
										</Link>
									</div>
								</div>

								{/* Right image */}
								<div className="relative flex items-center h-full">
									<div className="lg:scale-125  border-[20px] rounded-[240px]  border-white overflow-hidden">
										<Image
											src={item.mainPhoto}
											loading="lazy"
											height={500}
											width={300}
											alt="banner-image"
											className="w-full h-full object-center object-cover rounded-md"
										/>
									</div>
									<div className="scale-75 lg:scale-95 border-[20px] rounded-[240px] border-white -ml-20 overflow-hidden">
										<Image
											src={item.secondPhoto}
											loading="lazy"
											height={300}
											width={200}
											alt="banner-image"
											className="w-full h-full object-center object-cover rounded-md"
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
