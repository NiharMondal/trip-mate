
import Link from "next/link";
import React from "react";
export default function HighlightSection() {
	return (
		<div className="mx-auto max-w-7xl px-5 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="h-[330px] rounded-md beach-bg">
					<div className="flex flex-col space-y-4 justify-center p-10 h-full z-10 text-white">
						<h3 className="heading">Discover Special Deals!</h3>
						<p className="max-w-[270px] text-gray-100">Make sure to check out these special promotions</p>

						<Link href="/tours" className="btn btn-primary max-w-fit text-gray-100">See Tours</Link>
					</div>
				</div>
				<div className="bg-secondary p-10 flex flex-col justify-center h-full rounded-md space-y-4 text-xl">
					<h3 className="heading">
						Do&apos;t miss a thing!
					</h3>
					<div className="text-gray-500">
						<p>Get update to special deals and exclusive offers.</p>
						<p>Sign up to our newsletter!</p>
					</div>
					<div className="flex items-center justify-between bg-white rounded-full overflow-hidden relative">
						<input
							type="text"
							className="outline-none py-3 pl-10 text-base"
							placeholder="Your Email Address "
						/>
						<button className="btn btn-primary h-full text-white rounded-full">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
