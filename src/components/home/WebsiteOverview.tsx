import React from 'react'
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";



type WOInfoProps  = {
    icon: React.ReactNode;
    subHeading: string;
    details: string

}
export default function WebsiteOverview() {
  return (
		<div className="bg-white py-28 px-5 sm:px-28 md:px-5">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
				<WOInfo
					icon={<LiaGlobeAmericasSolid />}
					subHeading="700 Destinations"
					details="Our expert team handpicked all destinations in this site"
				/>
				<WOInfo
					icon={<FaHandHoldingDollar />}
					subHeading="700 Destinations"
					details="Our expert team handpicked all destinations in this site"
				/>
				<WOInfo
					icon={<MdSupportAgent />}
					subHeading="700 Destinations"
					details="Our expert team handpicked all destinations in this site"
				/>
			</div>
		</div>
  );
}


const WOInfo = ({icon, details, subHeading}:WOInfoProps)=>{
    return (
        <div className='flex gap-x-4 md:gap-x-8'>
            <div className='text-7xl text-primary'>
                {icon}
            </div>
            <div className='space-y-3'>
                <h4 className='heading text-2xl font-semibold'>{subHeading}</h4>
                <p className='w-full text-lg'>{details}</p>
            </div>
        </div>
    )
}
