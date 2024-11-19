import React from 'react'
import SectionHeading from '../shared/SectionHeading'
// import VCard from '../@ui/VCard'
import LinkButton from '../@ui/LinkButton'
import { popularTrip } from '@/actions/trip'

export default async function PopularTour() {
  const data = await popularTrip()
  console.log(data)
  return (
    <div className='max-w-7xl mx-auto px-5'>
        <SectionHeading text1='Popular' text2='Tours'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10'>
          {/* <VCard data={[{_id:"012381",destination:"Jomla",}]} />
          <VCard data={} />
          <VCard data={} /> */}
        </div>
        <LinkButton href='/tours' title='See more'/>
    </div>
  )
}
