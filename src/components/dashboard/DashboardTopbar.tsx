
import React from "react";
import UserPopover from "../@ui/Popover";

export default function DashboardTopbar() {
	return (
		<div className="p-5 bg-accent flex justify-end">
			<UserPopover />
		</div>
	);
}
