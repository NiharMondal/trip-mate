import { assets } from '@/assets/image';
import { destinationIntroductionText } from '@/helpers';
import { TDestinationResponse } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type VCardProps = {
    cardHeight?: string;
    translate?: string;
	data: TDestinationResponse
}

export default function VCard({data, cardHeight="h-[250px]", translate="translate-y-[50%]"}:VCardProps) {
  return (
		<div className={`relative rounded-xl bg-gray-200  overflow-hidden group ${cardHeight}`}>
			<div className="bg-black/80 absolute inset-0  bg-blend-darken">
				<Image src={assets.logo} fill alt="godo" className='object-cover object-center' />
			</div>

			<div className={`space-y-3 p-5 text-center flex flex-col items-center justify-center h-full group-hover:translate-y-0 duration-300 group-hover:bg-black/70 text-white ${translate}`}>
				<h4 className="text-2xl">{data?.destination}</h4>
				<p className="opacity-0 group-hover:opacity-100">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, veritatis.
				</p>
				<p>
					<Link href={""}>See all</Link>
				</p>
			</div>
		</div>
  );
}
