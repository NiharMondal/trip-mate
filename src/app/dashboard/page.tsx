"use client";
import TMLoading from "@/components/shared/TMLoading";
import useFetchUser from "@/lib/loadUser";
import { useUserMetaDataQuery } from "@/redux/api/meta.api";
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { IoPlanetOutline } from "react-icons/io5";
import MetaCard from "@/components/dashboard/MetaCard";

export default function DashboardPage() {
	const { user } = useFetchUser();
	const { data: metaData, isLoading } = useUserMetaDataQuery(user?.id);

	if (isLoading) return <TMLoading />;

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
				<MetaCard
					icon={<IoPlanetOutline size={50} />}
					title="My Trips"
					value={metaData?.result?.trips}
					bg="bg-emerald-400"
				/>
				<MetaCard
					icon={<RiInboxArchiveFill size={50} />}
					title="Incoming Requests"
					value={metaData?.result?.incoming}
					bg="bg-green-400"
				/>
				<MetaCard
					icon={<RiInboxUnarchiveFill size={50} />}
					title="Outgoing Requests"
					value={metaData?.result?.outgoing}
					bg="bg-pink-400"
				/>
				<MetaCard
					icon={<MdOutlineRateReview size={50} />}
					title="Reviews"
					value={metaData?.result?.reviews}
					bg="bg-amber-400"
				/>
			</div>
		</div>
	);
}
