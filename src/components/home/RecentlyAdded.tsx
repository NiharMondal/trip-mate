"use client";
import React, { useRef } from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetFreshlyAddedTripQuery } from "@/redux/api/trip.api";
import { Swiper as SwiperInstance } from "swiper/types";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import TMCardWithDetails from "../@ui/TMCardWithDetails";
import TMLoading from "../shared/TMLoading";
import Image from "next/image";

export default function RecentlyAdded() {
	const swiperRef = useRef<SwiperInstance | null>(null);
	const { data, isLoading } = useGetFreshlyAddedTripQuery();
	return (
		<section className="overflow-hidden relative">
			<div className=" absolute -bottom-24 -right-24 size-[250px]">
				<Image
					src={"/images/circle.png"}
					height={200}
					width={200}
					alt="circle"
					className="-z-20 w-full h-full object-cover object-center opacity-60 image-spin"
				/>
			</div>
			<div className="max-w-7xl mx-auto px-5 py-10">
				<SectionHeading text1="Freshly" text2="Added" />
				{isLoading && <TMLoading />}
				<div className="flex justify-end items-center gap-x-6 mt-20 text-white">
					<button
						className="size-[56px] p-4 bg-primary rounded-full"
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<FaArrowLeftLong className="size-6" />
					</button>
					<button
						className="size-[56px] p-4 bg-primary rounded-full"
						onClick={() => swiperRef.current?.slideNext()}
					>
						<FaArrowRightLong className="size-6" />
					</button>
				</div>
				<Swiper
					className="mt-5 rounded-xl overflow-hidden"
					loop={true}
					modules={[Navigation, Autoplay]}
					slidesPerView={4}
					spaceBetween={30}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
					autoplay={{
						delay: 9000,
						disableOnInteraction: false,
					}}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					breakpoints={{
						// Responsive breakpoints
						320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
						640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
						1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
					}}
				>
					{data?.result?.map((trip) => (
						<SwiperSlide key={trip._id}>
							<TMCardWithDetails trip={trip} />
						</SwiperSlide>
					))}
				</Swiper>

				<LinkButton href="/tours" title="See more" />
			</div>
		</section>
	);
}
