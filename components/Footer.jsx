import Image from 'next/image'
import React from 'react'
import font from '@/public/assets/fontssf.png'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <div className='md:px-56 px-10 py-10 flex justify-between items-center'>
      <div>
        <Image src={font} sizes='100%' className='w-[50%] ' loading='lazy' quality={100} alt='ssf' />
        <h1 className='font-extrabold text-base md:text-lg uppercase'>Manjeshwar</h1>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Footer
