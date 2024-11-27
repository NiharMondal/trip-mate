import React from "react";
import PageTitle from "@/components/shared/PageTitle";
import ParentComponent from "@/components/tour/ParentComponent";

export default  function TourPage() {
	return (
		<div className="pb-10 space-y-12 bg-white">
			<PageTitle
				title="Search Tours"
			/>
			<ParentComponent/>
		</div>
	);
}
