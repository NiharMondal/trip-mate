import React from "react";

import Tours from "./Tours";
import ToursQuery from "./ToursQuery";

export default function TourPage() {
	return (
		<div className="py-20 bg-white">
			<div className="mx-auto max-w-7xl px-5 sm:px-36 md:px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* start of left side */}
				<ToursQuery />

				{/* start of right side */}
				<Tours />
			</div>
		</div>
	);
}
