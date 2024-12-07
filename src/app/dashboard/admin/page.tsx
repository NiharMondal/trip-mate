"use client";

import MetaCard from "@/components/dashboard/MetaCard";
import { IoPlanetOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { useAdminMetaDataQuery } from "@/redux/api/meta.api";
import { FaCodePullRequest } from "react-icons/fa6";
import TMLoading from "@/components/shared/TMLoading";

export default function AdminHomePage() {
	const { data: metaData, isLoading } = useAdminMetaDataQuery(undefined);

	if (isLoading) return <TMLoading />;
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 ">
				<MetaCard
					icon={<IoPlanetOutline size={50} />}
					title="Trips"
					value={metaData?.result?.trips}
					bg="bg-pink-400"
				/>
				<MetaCard
					icon={<FaUserCheck size={50} />}
					title="Users"
					value={metaData?.result?.users}
					bg="bg-emerald-400"
				/>
				<MetaCard
					icon={<FaMagnifyingGlassLocation size={50} />}
					title="Destinations"
					value={metaData?.result?.destinations}
					bg="bg-green-400"
				/>
				<MetaCard
					icon={<MdOutlineRateReview size={50} />}
					title="Reviews"
					value={metaData?.result?.reviews}
					bg="bg-lime-400"
				/>
				<MetaCard
					icon={<FaCodePullRequest size={50} />}
					title="Buddy Requests"
					value={metaData?.result?.buddies}
					bg="bg-amber-400"
				/>
			</div>
		</div>
	);
}
