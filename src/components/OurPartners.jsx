import React from 'react'
import partner1 from "../assets/about/partner1.webp"
import partner2 from "../assets/about/partner2.webp"
import partner3 from "../assets/about/partner3.webp"
import partner4 from "../assets/about/partner4.webp"
const OurPartners = () => {
  return (
 <>
 <section>
    <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Our Partners/Suppliers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 justify-center items-center">
<div className="flex justify-center items-center">
<img src={partner1} alt={partner1} className='w-30'/>
</div>
<div className="flex justify-center items-center">
<img src={partner2} alt={partner2} className='w-30'/>
</div>

<div className="flex justify-center items-center">
<img src={partner3} alt={partner3} className='w-30'/>
</div>
<div className="flex justify-center items-center">
<img src={partner4} alt={partner4} className='w-30'/>
</div>
        </div>
    </div>
 </section>
 </>
  )
}

export default OurPartners