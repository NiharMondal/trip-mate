import React from 'react'
import ToursQuery from '../../tours/ToursQuery';
import Tours from '../../tours/Tours';

export default function TourDestination() {
  return (
		<div className='py-20'>
			<div className="mx-auto max-w-7xl px-5 sm:px-36 md:px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* start of left side */}
				<ToursQuery />

				{/* start of right side */}
				<Tours />
			</div>
		</div>
  );
}
