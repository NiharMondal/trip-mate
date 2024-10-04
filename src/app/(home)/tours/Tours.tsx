"use client";
import { imageHelpers } from "@/assets/image-helpers";
import Image from "next/image";
import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Tours() {
	const [toggleView, setToggleView] = useState("grid");

	return (
		<div className="col-span-4 sm:col-span-2 lg:col-span-3 space-y-8">
			<h4 className="font-semibold heading">0 Result Found</h4>
			<div className="p-3 border rounded-md flex justify-between ">
				<div className="inline-flex gap-x-2">
					<p className="font-semibold">Sort by</p>
					<select
						name="createdAt"
						id="createdAt"
						className="text-gray-500 outline-none px-3"
					>
						<option value="desc">Decending</option>
						<option value="desc">Ascending</option>
					</select>
				</div>
				<div className="inline-flex gap-x-2">
					<span onClick={() => setToggleView("clasic")}>
						<TfiMenuAlt
							className={`size-6 cursor-pointer ${
								toggleView === "clasic"
									? "text-primary"
									: "text-gray-500"
							}`}
						/>
					</span>
					<span onClick={() => setToggleView("grid")}>
						<CiGrid41
							className={`size-6 cursor-pointer ${
								toggleView === "grid"
									? "text-primary"
									: "text-gray-500"
							}`}
						/>
					</span>
				</div>
			</div>

			{/* tours card  */}
			<div className={`${toggleView === "grid" ? "block" : "hidden"}`}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="shadow-xl rounded-md overflow-hidden bg-secondary">
						<div className="relative h-[250px]">
							<Image
								src={imageHelpers.beach}
								alt="photo"
								fill
								className="h-[200px] w-[140px] object-cover object-center"
							/>
						</div>
						<div className="p-10 space-y-2">
							<h4>Hello Beautiful travelers</h4>
							<div className="flex gap-x-3">
								<p className="text-gray-400">From</p>
								<p className="text-primary text-xl font-semibold">
									$60
								</p>
							</div>
							<button className="text-xs uppercase btn btn-primary text-white py-3">
								view details
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${toggleView === "clasic" ? "block" : "hidden"}`}>
				<div className="flex flex-wrap items-center text-center justify-between overflow-hidden shadow-xl rounded-md ">
					<div className="relative h-[250px] w-full lg:max-w-[300px]">
						<Image
							src={imageHelpers.beach}
							alt="photo"
							fill
						/>
					</div>
					<h4 className="border-r border-primary/40 p-5 text-wrap min-h-full">Hello Beautiful travelers</h4>
					<div className="space-y-3 p-5">
						<p className="text-gray-400">From</p>
						<p className="text-primary text-xl font-semibold">
							$60
						</p>
						<button className="text-xs uppercase btn btn-primary text-white py-3">
							view details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
