import { imageHelpers } from '@/assets/image-helpers';
import Image from 'next/image';
import React from 'react'

export default function ClassicCard() {
  return (
		<div className="flex flex-wrap items-center text-center justify-between overflow-hidden shadow-xl rounded-md ">
			<div className="relative h-[250px] w-full lg:max-w-[300px]">
				<Image src={imageHelpers.beach} alt="photo" fill />
			</div>
			<h4 className="border-r border-primary/40 p-5 text-wrap min-h-full">
				Hello Beautiful travelers
			</h4>
			<div className="space-y-3 p-5">
				<p className="text-gray-400">From</p>
				<p className="text-primary text-xl font-semibold">$60</p>
				<button className="text-xs uppercase btn btn-primary text-white py-3">
					view details
				</button>
			</div>
		</div>
  );
}
