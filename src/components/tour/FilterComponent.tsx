"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useGetOnlyDestinationSlugQuery } from "@/redux/api/destination.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearQueries, updateQueries } from "@/redux/slice/querySlice";

export type TFilters = {
	search: string;
	destination: string;
	minBudget: string;
	maxBudget: string;
};

type TEvent =
	| React.ChangeEvent<HTMLInputElement>
	| React.ChangeEvent<HTMLSelectElement>;

export default function FilterComponent() {
	const dispatch = useAppDispatch();
	const query = useAppSelector((state) => state.query);

	const { data } = useGetOnlyDestinationSlugQuery();

	const handleUpdateQuery = (e: TEvent) => {
		const { value, name } = e.target;
		dispatch(updateQueries({ [name]: value }));
	};
	return (
		<div className="w-full col-span-full lg:col-span-1">
			<div className=" border border-gray-300 p-8 rounded-md space-y-5 filter-wrapper col-span-4 sm:col-span-2 lg:col-span-1">
				<div className="space-y-2">
					<h5>Keyword</h5>
					<div className="border p-3 flex justify-between rounded max-w-full">
						<input
							type="text"
							className="outline-none w-full"
							name="search"
							value={query.queries.search}
							onChange={handleUpdateQuery}
						/>
						<span>
							<IoSearch className="size-5 text-gray-400" />
						</span>
					</div>
				</div>
				<div className="space-y-2">
					<h5>Destination</h5>
					<div className="relative border p-3 flex justify-between rounded">
						<select
							name="destination"
							id="destination"
							className="w-full outline-none p-1"
							onChange={handleUpdateQuery}
							value={query.queries.destination}
						>
							{!data?.result ? (
								<option value="">No data found</option>
							) : (
								data?.result.map((deslug) => (
									<option
										key={deslug._id}
										value={deslug.slug}
									>
										{deslug.destination}
									</option>
								))
							)}
						</select>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-x-2">
					<div className="space-y-3">
						<h5>Min Price</h5>
						<input
							name="minBudget"
							onChange={handleUpdateQuery}
							value={query.queries.minBudget}
							type="number"
							className="outline-none p-3 border rounded max-w-full"
						/>
					</div>
					<div className="space-y-3">
						<h5>Max Price</h5>
						<input
							name="maxBudget"
							onChange={handleUpdateQuery}
							value={query.queries.maxBudget}
							type="number"
							className="outline-none p-3 border rounded max-w-full"
						/>
					</div>
				</div>

				<div
					className="inline-flex items-center gap-x-2 text-primary/70 hover:text-primary/85 cursor-pointer duration-150"
					onClick={() => dispatch(clearQueries())}
				>
					<span>
						<IoMdClose />
					</span>{" "}
					Clear Filter
				</div>

				<button className="btn btn-primary w-full text-white uppercase text-sm py-4">
					Search
				</button>
			</div>
		</div>
	);
}
