import OutGoingRequest from "@/components/dashboard/@user/OutGoingRequest";
import React from "react";

export default function UserOutGoingRequest() {
	return (
		<div className="space-y-8">
			<h3 className="font-mono text-gray-500 ">
				Tripmate requests that you sent
			</h3>
			<OutGoingRequest />
		</div>
	);
}
