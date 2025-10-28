import React from 'react'
import PropertyCarousel from './ui/PropertyCarousel'

const FindYourPlace = () => {
  return (
<>
<div className="container mx-auto py-24 ">
    <h1 className='pt-10 text-center font-bold  text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-[#065E33]'>FIND WHERE YOU WANT TO LIVE</h1>
    <p className='py-5 font-light text-base lg:text-xl text-center text-gray-500 px-20 lg:px-40'>Premium's vast range of developments are ongoing. your home is a place
that enlivens you. With all that Dhaka has to offer, choose a community that fits your lifestyle.</p>
</div>
<PropertyCarousel/>
</>
  )
}

export default FindYourPlace