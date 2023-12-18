import Image from 'next/image'
import React from 'react'

function LogoImage() {
  return (
    <Image 
      src="/logo.png"
      alt=""
      width={100}
      height={100}
      className='w-40 h-24'/>
  )
}

export default LogoImage

