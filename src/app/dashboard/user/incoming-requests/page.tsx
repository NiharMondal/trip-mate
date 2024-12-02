import IncomingRequests from "@/components/dashboard/@user/@my-trip/IncomingRequests";
import React from "react";

export default function UserIncommingRequest() {
	return (
		<div className="space-y-8">
			<h3 className="font-mono text-gray-500 ">
				Tripmate requests that you received
			</h3>
			<IncomingRequests />
		</div>
	);
}
