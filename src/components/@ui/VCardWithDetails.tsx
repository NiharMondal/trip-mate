import { TResponseTrip } from "@/types";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";

type VCardWithDetailsProps = {
	trip: TResponseTrip;
};
export default function VCardWithDetails({ trip }: VCardWithDetailsProps) {
	return (
		<div className="bg-white rounded-lg shadow-md">
			<Link href={`/tours/${trip.slug}`}>
				<Image
					alt={trip.slug}
					src={trip.photos[0]}
					height={200}
					width={200}
					className="w-full h-[250px]"
				/>
			</Link>
			<div className="p-8">
				<Link href={`/tours/${trip.slug}`}>
					<h4 className="text-2xl heading mb-2">{trip.title}</h4>
				</Link>
				<div className="inline-flex gap-2 items-center">
					<Rating
						style={{ maxWidth: "100px" }}
						readOnly={true}
						value={trip.rating}
					/>
					<p className="text-xs text-gray-500">
						({trip.reviews.length} Reviews)
					</p>
				</div>

				<p className="mt-3 text-gray-600">
					From <span className="text-primary font-bold font-mono">${trip.budget}</span>
				</p>
			</div>
		</div>
	);
}
