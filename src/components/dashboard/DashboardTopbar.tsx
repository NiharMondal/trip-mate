import React from "react";
import UserPopover from "../@ui/Popover";


export default function DashboardTopbar() {
	return (
		<div
			className="px-10 py-3 bg-accent flex justify-end items-center w-full"
		>
			<UserPopover />
		</div>
	);
}
