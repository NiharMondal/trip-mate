import { assets } from '@/assets/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function DestinationCard() {
  return (
		<div className="relative rounded-xl bg-gray-200 h-[240px] overflow-hidden group">
			<div className="bg-black/80 absolute inset-0  bg-blend-darken">
				<Image src={assets.logo} fill alt="godo" />
			</div>

			<div className="space-y-3 p-5 text-center flex flex-col items-center justify-center h-full translate-y-[50%] group-hover:translate-y-0 duration-300 group-hover:bg-black/70 text-white">
				<h4 className="text-2xl">America</h4>
				<p className="opacity-0 group-hover:opacity-100">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Error, hic!
				</p>
				<p>
					<Link href={""}>See all</Link>
				</p>
			</div>
		</div>
  );
}
