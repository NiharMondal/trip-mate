import React from "react";
type PaginationProps = {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
};
export default function Pagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: PaginationProps) {
	// Function to calculate the visible page numbers
	const getVisiblePages = () => {
		const maxVisible = 5;
		let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
		let end = start + maxVisible - 1;

		if (end > totalPages) {
			end = totalPages;
			start = Math.max(end - maxVisible + 1, 1);
		}

		const pages = [];
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}
		return pages;
	};

	// Handle page change
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<div className="flex items-center justify-end pr-5">
			{/* Previous Button */}
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`mr-2 ${
					currentPage === 1
						? "cursor-not-allowed"
						: "cursor-pointer"
				}`}
			>
				Previous
			</button>

			{/* Page Numbers */}
			{getVisiblePages().map((page) => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					className={`my-0 mx-1 size-10 border rounded cursor-pointer ${
						page === currentPage
							? "bg-primary text-white"
							: "text-primary"
					}`}
				>
					{page}
				</button>
			))}

			{/* Next Button */}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`ml-2 ${
					currentPage === totalPages
						? "cursor-not-allowed"
						: "cursor-pointer"
				}`}
			>
				Next
			</button>
		</div>
	);
}
