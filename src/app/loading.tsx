import Image from "next/image";
import React from "react";

export default function Loading() {
	return (
		<div className="grid place-content-center place-items-center h-screen">
			<Image
				src={"/loading.gif"}
				height={60}
				width={60}
				alt="loading"
				className="object-contain object-center"
			/>
		</div>
	);
}
