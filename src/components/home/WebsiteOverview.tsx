import React from "react";

import { siteInformation } from "@/helpers/site-information";

export default function WebsiteOverview() {
	return (
		<section className="relative bg-[url(/images/section-bg.png)] py-20 md:py-32 xl:py-40  ">
			<div className="max-w-7xl mx-auto px-5 ">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
					{siteInformation.map((item, index) => (
						<div
							key={index}
							className="bg-[url(/images/features.png)] bg-primary hover:bg-accent duration-500 transition-colors rounded-md overflow-hidden bg-blend-lighten "
						>
							<div className="text-white text-center py-8 px-6">
								<div className="mx-auto w-fit mb-3">
									{
										<item.icon className="size-20 text-white" />
									}
								</div>
								<p className="text-2xl font-semibold mb-1">
									{item.title}
								</p>
								<p className=" text-gray-100">
									{item.subTitle}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
