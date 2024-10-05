import { assets } from "@/assets/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Logo() {
	return (
		<Link href="/">
			<Image src={assets.logo} alt="logo" height={100} width={100} />
		</Link>
	);
}
