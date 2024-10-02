import Banner from "@/components/home/Banner";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function Home() {
	return (
		<section className="space-y-20">
			<Navbar />
			<Banner />
		</section>
	);
}
