"use client";

import ClassicCard from "@/components/@ui/ClassicCard";


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
			
			</div>

			{/** classic card */}
			<div className={`${toggleView === "clasic" ? "block" : "hidden"}`}>
				<ClassicCard/>
			</div>
		</div>
	);
}
