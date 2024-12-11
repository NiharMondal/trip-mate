"use client";
import TMTable from "@/components/shared/TMTable";
import { useAllDestinationQuery } from "@/redux/api/destination.api";

import React from "react";


import CreateDestination from "./CreateDestination";

export default function AllDestination() {
	const { data: allDestinations } = useAllDestinationQuery({});
	
	const columns = [
		{ header: "Destination", accessor: "destination" },
		{ header: "Description", accessor: "shortInfo" },
	];
	return (
		<div>
			<CreateDestination />
			<TMTable
				columns={columns as []}
				data={allDestinations?.result}
				keyField="_id"
			/>
		</div>
	);
}
