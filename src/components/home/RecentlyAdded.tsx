import React from 'react'
import SectionHeading from '../shared/SectionHeading';
import VCardWithDetails from '../@ui/VCardWithDetails';
import LinkButton from '../@ui/LinkButton';

export default function RecentlyAdded() {
  return (
		<div className="max-w-7xl mx-auto px-5">
			<SectionHeading text1="Freshly" text2="Added" />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
				<VCardWithDetails />
				<VCardWithDetails />
				<VCardWithDetails />
				<VCardWithDetails />
			</div>
			<LinkButton href="/tour" title="View All Tours" />
		</div>
  );
}
