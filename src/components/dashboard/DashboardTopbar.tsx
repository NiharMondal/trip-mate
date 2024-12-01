import React from "react";
import UserPopover from "../@ui/Popover";
import { LuMenuSquare } from "react-icons/lu";
type DashboardTopbarProps = {
	
	toggle: () => void;
};

export default function DashboardTopbar({toggle}: DashboardTopbarProps) {
	return (
		<div
			className="px-10 py-3 bg-accent flex justify-between lg:justify-end items-center w-full"
		>
			<span onClick={toggle} className="">
				<LuMenuSquare className="size-8 text-gray-500 hover:text-primary cursor-pointer lg:hidden"/>
			</span>
			<UserPopover />
		</div>
	);
}
