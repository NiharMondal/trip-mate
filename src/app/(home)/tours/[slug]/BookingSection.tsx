"use client"
import { useState } from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';


type BookingSectionProps = {
	budget: number;
	seats: number;
	date: string;
};


export default function BookingSection({ budget, seats, date }: BookingSectionProps) {

	const dt = new Date(date).toLocaleDateString();

	const [guest, setGuest] = useState("1");

	return (
		<div className="bg-secondary rounded-md shadow-lg p-8">
			<h5>Price</h5>
			<h2 className="font-semibold">${budget}</h2>
			<div className="space-y-5 mt-5">
				<div className="inline-flex gap-x-8">
					<span>
						<BsCalendarDate className="size-8 text-primary" />
					</span>
					<span>{dt}</span>
				</div>

				<div>
					<p className="pl-16 mb-3 font-medium text-gray-700">
						Available seats: {seats}
					</p>
					<div className="flex gap-x-8">
						<span>
							<HiOutlineUserGroup className="size-8 text-primary" />
						</span>
						<input
							type="number"
							className="p-2 outline-none rounded-md"
							value={guest} 
							onChange={(e)=> setGuest(e.target.value)}
						/>
					</div>
				</div>

				<div>
					<button className="btn btn-primary w-full py-5 mt-5 capitalize">
						proceed booking
					</button>
				</div>
			</div>
		</div>
	);
}
