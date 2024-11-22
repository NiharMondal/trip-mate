import React from "react";
import { useFormContext } from "react-hook-form";

type TMInputProps = {
	name: string;
	type?: string;
	label?: string;
};

export default function TMInput({ name, type = "text", label }: TMInputProps) {
    const {register} = useFormContext()
	return (
		<div className="space-y-2 mb-5">
			<p>{label ? label : null}</p>
			<input
				type={type}
				{...register(name)}
				className="p-2  outline-none ring-1 ring-secondary w-full rounded"
			/>
		</div>
	);
}
