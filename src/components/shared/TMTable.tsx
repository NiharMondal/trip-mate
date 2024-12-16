import React from "react";
import TMNoData from "./TMNoData";

// Define the types for the column and table props
interface Column<T> {
	header: string;
	accessor?: keyof T; // Optional, to access row fields
	render?: (row: T) => React.ReactNode; // Optional, for custom rendering
}

interface TableProps<T> {
	columns: Column<T>[];
	data: T[];
	keyField: keyof T; // Key to uniquely identify rows
}

const TMTable = <T,>({ columns, data, keyField }: TableProps<T>) => {
	return (
		<div className="p-4 shadow rounded overflow-x-scroll text-nowrap">
			<table className="w-full text-gray-600">
				{/* Render table header */}
				<thead className="bg-gray-200 text-left text-gray-700 font-semibold">
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col.header}</th>
						))}
					</tr>
				</thead>

				{/* Render table body */}
				<tbody>
					{!data?.length && <TMNoData />}
					{data?.map((row, rowIndex) => (
						<tr key={String(row[keyField]) || rowIndex}>
							{columns.map((col, colIndex) => (
								<td key={colIndex}>
									{col.accessor
										? (row[col.accessor] as React.ReactNode)
										: col.render?.(row)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TMTable;
