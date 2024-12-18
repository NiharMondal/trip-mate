"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
type TMSelectProps = {
	name: string;
	label?: string;
	children: React.ReactNode;
};
export default function TMSelect({ label, name, children }: TMSelectProps) {
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
				{children}
			</select>
		</div>
	);
}
