import React from "react";

import { useFormContext } from "react-hook-form";

type TMTextAreaProps = {
	name: string;
	label?: string;
	placeholder?: string;
};
export default function TMTextArea({
	name,
	label,
	placeholder,
}: TMTextAreaProps) {
	const { register } = useFormContext();
	return (
		<div className="flex flex-col">
			<label htmlFor="details" className="mb-2 text-white">
				{label}
			</label>
			<textarea
				{...register(name)}
				id={name}
				name={name}
				rows={4}
				className="outline-none p-2 rounded-md"
				placeholder={placeholder}
			></textarea>
		</div>
	);
}
