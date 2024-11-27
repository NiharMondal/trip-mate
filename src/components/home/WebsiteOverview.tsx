import React from 'react'
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import WOInfo from '../shared/WOInfo';




export default function WebsiteOverview() {
  return (
		<div className="bg-white py-28 px-5 sm:px-28 md:px-5">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
				<WOInfo
					icon={<LiaGlobeAmericasSolid />}
					subHeading="700 Destinations"
					details="Our expert team handpicked all destinations in this site"
				/>
				<WOInfo
					icon={<FaHandHoldingDollar />}
					subHeading="Best Price Gurantee"
					details="Price match within 48 hours of order confirmation"
				/>
				<WOInfo
					icon={<MdSupportAgent />}
					subHeading="Top Notch Support"
					details="We are here to help, before, during, and even after your trip."
				/>
			</div>
		</div>
  );
}



