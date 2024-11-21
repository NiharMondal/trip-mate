"use client";
import React, { useRef } from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetFreshlyAddedTripQuery } from "@/redux/api/trip.api";
import { Swiper as SwiperInstance } from "swiper/types";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import FreshlyAddedCard from "../@ui/FreshlyAddedCard";

export default function RecentlyAdded() {
	const swiperRef = useRef<SwiperInstance | null>(null);
	const { data, isLoading } = useGetFreshlyAddedTripQuery();
	if (!data?.result) return <p>No data found!</p>;
	return (
		<div className="max-w-7xl mx-auto px-5">
			<SectionHeading text1="Popular" text2="Tours" />
			{isLoading && <p>Loading...</p>}
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
				{data?.result.map((trip) => (
					<SwiperSlide key={trip._id}>
						<FreshlyAddedCard trip={trip} />
					</SwiperSlide>
				))}
			</Swiper>

			<LinkButton href="/tours" title="See more" />
		</div>
	);
}
