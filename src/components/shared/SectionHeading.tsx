import React from 'react'
type SectionHeadingProps ={
    text1:string;
    text2: string;
}
export default function SectionHeading({text1, text2}: SectionHeadingProps) {
  return (
    <h3 className='text-center heading font-semibold'>{text1} <span className='text-primary'>{text2}</span></h3>
  )
}
