type WOInfoProps = {
	icon: React.ReactNode;
	subHeading: string;
	details: string;
};
export default function WOInfo({ icon, details, subHeading }: WOInfoProps) {
	return (
		<div className="flex gap-x-4 md:gap-x-6">
			<div className="text-7xl text-primary">{icon}</div>
			<div className="space-y-3">
				<h4 className="font-sans text-xl font-medium">{subHeading}</h4>
				<p className="w-full text-lg tracking-wide text-gray-500">{details}</p>
			</div>
		</div>
	);
}
