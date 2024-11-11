import { TResponseTrip } from "@/types";
import Image from "next/image";

type VCardWithDetailsProps = {
	trip: TResponseTrip;
};
export default function VCardWithDetails({ trip }: VCardWithDetailsProps) {
	
	return (
		<div className="bg-white rounded-lg shadow-md">
			<Image
				alt={trip.slug}
				src={trip.photos[0]}
				height={200}
				width={200}
				className="w-full h-[250px]"
			/>
			<div className="p-8">
				<h4 className="text-2xl heading mb-2">{trip.title}</h4>
				<p> ****** (1 Review)</p>
				<p className="mt-8">From ${trip.budget}</p>
			</div>
		</div>
	);
}
