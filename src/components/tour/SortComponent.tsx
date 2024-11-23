import React from 'react'

export default function SortComponent({ totalCount }: { totalCount: number | undefined}) {
	return (
		<div className="space-y-5">
			<h4 className="font-semibold heading">{totalCount} Result Found</h4>
			<div className="flex items-center gap-x-4">
				<p>Sort By</p>
				<select
					name="sortBy"
					id="sortBy"
					className="px-4 py-2 outline-none ring-1 ring-primary rounded"
				>
					<option value="title">Title</option>
					<option value="price">Price</option>
					<option value="rating">Rating</option>
				</select>
				<select
					name="orderBy"
					id="orderBy"
					className="px-4 py-2 outline-none ring-1 ring-primary rounded"
				>
					<option value="title">ASC</option>
					<option value="price">DSCE</option>
				</select>
			</div>
		</div>
	);
}
