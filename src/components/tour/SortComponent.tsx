"use client";
import { useAppDispatch } from "@/redux/hooks";
import { updateQueries } from "@/redux/slice/querySlice";
import React from "react";

export default function SortComponent({
	totalCount,
}: {
	totalCount: number | undefined;
}) {
	const dispatch = useAppDispatch();
	const handleUpdateQuery = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value, name } = e.target;
		dispatch(updateQueries({ [name]: value }));
	};
	return (
		<div className="space-y-5">
			<h4 className="font-semibold heading">{totalCount} Result Found</h4>
			<div className="flex items-center gap-x-4">
				<p>Sort By</p>
				<select
					onChange={handleUpdateQuery}
					name="sortBy"
					id="sortBy"
					className="outline-none p-3 border rounded sm:min-w-[200px]"
				>
					<option selected>createdAt</option>
					<option value="title">Title</option>
					<option value="budget">Price</option>
					<option value="rating">Rating</option>
					<option value="visitors">Visitors</option>
				</select>
				<select
					onChange={handleUpdateQuery}
					name="order"
					id="order"
					className="outline-none p-3 border rounded sm:min-w-[200px]"
				>
					<option value="asc">Ascending</option>
					<option value="desc">Decending</option>
				</select>
			</div>
		</div>
	);
}
