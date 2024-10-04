import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";




export default function ToursQuery() {
  return (
		<div className=" border border-gray-300 p-8 rounded-md space-y-5 filter-wrapper col-span-4 sm:col-span-2 lg:col-span-1">
			<div className="space-y-2">
				<h5>Keyword</h5>
				<div className="border p-3 flex justify-between rounded max-w-full">
					<input type="text" className="outline-none w-full" />
					<span>
						<IoSearch className="size-5 text-gray-400" />
					</span>
				</div>
			</div>
			<div className="space-y-2">
				<h5>Duration</h5>
				<div className="relative border p-3 flex justify-between rounded">
					<select
						name="destination"
						id="destination"
						className="w-full outline-none p-1"
					>
						<option value="asia">Asia</option>
						<option value="america">America</option>
						<option value="europe">Europe</option>
						<option value="latin-america">Latin America</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-x-2">
				<div className="space-y-3">
					<h5>Min Price</h5>
					<input
						type="text"
						className="outline-none p-3 border rounded max-w-full"
					/>
				</div>
				<div className="space-y-3">
					<h5>Max Price</h5>
					<input
						type="text"
						className="outline-none p-3 border rounded max-w-full"
					/>
				</div>
			</div>

			<div className="inline-flex items-center gap-x-2 text-primary/70 hover:text-primary/85 cursor-pointer duration-150">
				<span>
					<IoMdClose />
				</span>{" "}
				Clear Filter
			</div>

			<div className="border-t pt-5">
				<h4 className="font-semibold text-primary">Type Filter</h4>

				<div className="mt-5">
					<h5>Destination</h5>

					<div className="space-y-2 mt-4">
						{[...Array(4)].map((_, index) => (
							<div className="flex items-center gap-x-2">
								<input
									type="checkbox"
									name="destination"
									id="america"
								/>
								<label htmlFor="america">America</label>
							</div>
						))}
					</div>
				</div>
			</div>

			<button className="btn btn-primary w-full text-white uppercase text-sm py-4">
				Search
			</button>
		</div>
  );
}
