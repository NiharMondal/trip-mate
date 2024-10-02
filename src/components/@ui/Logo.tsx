import { assets } from "@/assets/image";
import Image from "next/image";
import React from "react";

export default function Logo() {
	return (
		<div>
			<Image src={assets.logo} alt="logo" height={100} width={100} />
		</div>
	);
}
