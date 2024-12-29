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
			{label && (
				<label htmlFor={name} className="text-gray-700 f_label">
					{label}
				</label>
			)}
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<input
						{...field}
						type={type}
						id={name}
						className="w-full outline-none p-2 ring-1 focus:ring-primary rounded-md"
						placeholder={placeholder}
						onChange={field.onChange}
						disabled={disabled}
					/>
				)}
			/>
		</div>
	);
}
