"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
type TSelectData = {
	_id: string;
	slug: string;
	destination: string;
};
type TMSelectProps = {
	name: string;
	label?: string;
	data: TSelectData[];
};
export default function TMSelect({ label, name, data }: TMSelectProps) {
	const { register } = useFormContext();
	return (
		<div className="space-y-2 mb-5 w-full">
			<label htmlFor="destination" className="text-white">
				{label ? label : null}
			</label>
			<select
				{...register(name)}
				className="w-full px-2 py-[9px] outline-none rounded-md"
			>
				{!data.length ? (
					<option selected>No destination found</option>
				) : (
					data.map((des) => (
						<option key={des._id} value={des.slug}>
							{des.destination}
						</option>
					))
				)}
			</select>
		</div>
	);
}
