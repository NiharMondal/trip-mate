import { TTripResponse } from "@/types";
import React from "react";
import GridCard from "../@ui/GridCard";
type ResultComponentProps = {
	data: TTripResponse[];
	isLoading: boolean;
};
export default function ResultComponent({
	data,
	isLoading,
}: ResultComponentProps) {
    
	if (isLoading) return <p>Please wait...</p>;
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{data.map((trip) => (
				<GridCard key={trip._id} trip={trip} />
			))}
		</div>
	);
}
