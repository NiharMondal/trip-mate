import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import VCard from '../@ui/VCard'
import LinkButton from '../@ui/LinkButton'

export default function PopularTour() {
  return (
    <div className='max-w-7xl mx-auto px-5'>
        <SectionHeading text1='Popular' text2='Tours'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
          <VCard cardHeight='h-[450px]' />
          <VCard cardHeight='h-[450px]' />
          <VCard cardHeight='h-[450px]' />
         
        </div>
        <LinkButton href='/tour' title='See more'/>
    </div>
  )
}
