import React from 'react'
import PropertyCarousel from './ui/PropertyCarousel'
import { motion } from 'framer-motion'

const FindYourPlace = () => {
  return (
<>
<div className="container mx-auto py-5  px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className='pt-10 text-center font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-[#065E33]'
    >
      FIND WHERE YOU WANT TO LIVE
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className='py-5 font-light text-sm sm:text-base lg:text-xl text-center text-gray-500 px-10 lg:px-40'
    >
      Premium's vast range of developments are ongoing. your home is a place
that enlivens you. With all that Dhaka has to offer, choose a community that fits your lifestyle.
    </motion.p>
</div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
>
  <PropertyCarousel/>
</motion.div>
</>
  )
}

export default FindYourPlace