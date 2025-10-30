import React from 'react'
import ReviewCard from './ui/ReviewCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MovingImages = () => {
  return (
    <>
    <div className=" bg-[#065E33] py-10 ">
<div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className='pt-10 text-center font-bold text-white text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
        >
          YOUR NEW HOME AWAITS
        </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className=' py-5 px-10 lg:px-40 text-center text-sm md:text-base lg:text-xl  text-white'
    >
      At Azizi, we pride ourselves on design that combines sleek aesthetics with functional comfort.Our far-reaching portfolio has something for everyone, so you can find a home that's authentically you
    </motion.p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
>
  <ReviewCard/>
</motion.div>
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  className="flex justify-center"
>
    <button className='text-white hover:text-black bg-black/20 hover:bg-white hover:bg-white-100 hover:text-black-100 focus:ring-0 font-medium px-7 py-2.5 border border-inherit hover:border-current focus:outline-none text-sm rtl:text-[15px] text-center uppercase transition duration-300 ease-out link-button min-w-[150px] inline-block'>
    <Link to="/projects">See All</Link>
    </button>
</motion.div>
</div>
</div>
    </>

  )
}

export default MovingImages