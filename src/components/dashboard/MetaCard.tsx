import React from "react";
type MetaCardProps = {
	icon: React.ReactNode;
	value: number;
	title: string;
	bg: string;
};
export default function MetaCard({ icon, value, title, bg }: MetaCardProps) {
	return (
		<div
			className={`flex flex-col items-center justify-center h-[200px] p-10 rounded-md text-white ${bg}`}
		>
			<span className="p-3 shadow-lg rounded-full">{icon}</span>
			<h5 className="mt-2 font-mono">{value}</h5>
			<p className="font-serif tracking-widest font-medium">{title}</p>
		</div>
	);
}
