import React from "react";
type PageTitleProps = {
	title: string;
	subTitle?: string;
};
export default function PageTitle({ title, subTitle }: PageTitleProps) {
	return (
		<div className="h-auto py-28 max-h-[400px] grid grid-cols-1 place-items-center  page-title-bg">
			<div className="text-center">
				<h1 className="heading font-semibold">{title}</h1>
				<p>{subTitle}</p>
			</div>
		</div>
	);
}
