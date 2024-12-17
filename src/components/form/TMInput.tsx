import React from "react";
// import { useFormContext } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
type TMInputProps = {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
};

export default function TMInput({
	name,
	type = "text",
	label,
	placeholder,
	disabled,
}: TMInputProps) {
	const { control } = useFormContext();
	return (
		<div className="space-y-2 mb-5">
			<p className="text-white">{label ? label : null}</p>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<input
						{...field}
						type={type}
						className="p-2 outline-none ring-1 ring-secondary w-full rounded"
						placeholder={placeholder}
						onChange={field.onChange}
						disabled={disabled}
					/>
				)}
			/>
		</div>
	);
}
