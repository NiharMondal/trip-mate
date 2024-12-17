import UpdateTrip from "@/components/dashboard/UpdateTrip";
import { useDeleteTripMutation } from "@/redux/api/trip.api";
import { TTripResponse } from "@/types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

type TMTripTableProps = {
	trips: TTripResponse[];
};

export default function TMTripTable({ trips }: TMTripTableProps) {
	const [deleteTrip] = useDeleteTripMutation();

	const handleDeleteTrip = async (id: string) => {
		try {
			const res = await deleteTrip(id).unwrap();
			if (res.success) {
				toast.success("Trip deleted successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};
	return (
		<div className="p-4 shadow rounded overflow-x-scroll text-nowrap">
			<table className="w-full text-gray-600">
				<thead className="bg-gray-200 text-left text-gray-700 font-semibold">
					<tr>
						<th className="py-5 pl-2">Title</th>
						<th>Destination</th>
						<th>Start date</th>
						<th>End date</th>
						<th>Budget</th>
						<th>Max Guests</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{trips?.map((trip) => (
						<tr key={trip._id}>
							<td>{trip.title}</td>
							<td>{trip.destination}</td>
							<td>{trip.startDate}</td>
							<td>{trip.endDate}</td>
							<td>{trip.budget}</td>
							<td>{trip.maxGuests}</td>

							<td className="inline-flex gap-x-3">
								<span
									title="Delete Trip"
									onClick={() => handleDeleteTrip(trip._id)}
								>
									<RiDeleteBin2Fill className="size-5 text-red-500 hover:text-red-600 cursor-pointer" />
								</span>
								<UpdateTrip tripId={trip._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
