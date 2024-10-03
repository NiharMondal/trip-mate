import { assets } from '@/assets/image'
import Image from 'next/image'
import React from 'react'

export default function VCardWithDetails() {
  return (
    <div className='bg-white rounded-lg shadow-md'>
        <Image alt='photo' src={assets.logo} height={200} width={200} className='w-full h-[250px]'/>
        <div className='p-8'>
            <h4 className='text-2xl heading mb-2'>Africa Amazing African Safari</h4>
            <p>****** (1 Review)</p>
            <p className='mt-8'>From $100</p>
        </div>

        
    </div>
  )
}
