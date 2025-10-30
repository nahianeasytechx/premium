import React from 'react'
import advertiseOne from "../../assets/Property/featured/fprop1.webp"
import advertiseTwo from "../../assets/Property/featured/fprop3.webp"
import advertiseThree from "../../assets/Property/featured/fprop3.webp"
import advertiseFour from "../../assets/Property/featured/fprop1.webp"
const Advertise = () => {
  return (
   <>
   <div className="container mx-auto">
    <div className="flex justify-between">
<div>
  <img src={advertiseOne} alt={advertiseOne} className='w-[159px] md:w-[300px] lg:w-[418px] '/>
<img src={advertiseTwo} alt={advertiseTwo} className='w-[159px] md:w-[300px] lg:w-[418px]'/>
</div>
<div>
  <img src={advertiseThree} alt={advertiseOne} className='w-[159px] md:w-[300px] lg:w-[418px]'/>
<img src={advertiseFour} alt={advertiseTwo} className='w-[159px] md:w-[300px] lg:w-[418px]'/>
</div>
    </div>
   </div>
   </>
  )
}

export default Advertise