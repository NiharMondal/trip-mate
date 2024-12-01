"use client";
import React, { useRef } from "react";
import SectionHeading from "../shared/SectionHeading";
import LinkButton from "../@ui/LinkButton";

import PopularTripCard from "../@ui/PopularTripCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetPopularTripQuery } from "@/redux/api/trip.api";
import { Swiper as SwiperInstance } from "swiper/types";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";



export default  function PopularTour() {
	const { data } = useGetPopularTripQuery();
	
	const swiperRef = useRef<SwiperInstance | null>(null);


	return (
		<div className="max-w-7xl mx-auto px-5">
			<SectionHeading text1="Popular" text2="Tours" />
			{!data?.result && <p>No data found!</p>}

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
				
				modules={[Navigation, Autoplay]}
				slidesPerView={3}
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
					1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
				}}
			>
				{data?.result.map((popularTrip) => (
					<SwiperSlide key={popularTrip._id}>
						<PopularTripCard data={popularTrip} />
					</SwiperSlide>
				))}
			</Swiper>

			<LinkButton href="/tours" title="See more" />
		</div>
	);
}
