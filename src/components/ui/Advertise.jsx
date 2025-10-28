import React from 'react'
import advertiseOne from "../../assets/advertise/advertise one.webp"
import advertiseTwo from "../../assets/advertise/advertise three.jpg"
const Advertise = () => {
  return (
   <>
   <div className="container mx-auto">
    <div className="flex justify-between">
<img src={advertiseOne} alt={advertiseOne} className='w-[159px] md:w-[300px] lg:w-[418px]'/>
<img src={advertiseTwo} alt={advertiseTwo} className='w-[159px] md:w-[300px] lg:w-[418px]'/>
    </div>
   </div>
   </>
  )
}

export default Advertise