import React from 'react'
import Hero from '../components/Hero'
import Caption from '../components/Caption'
import Advertise from '../components/ui/Advertise'
import MovingImages from '../components/MovingImages'
import FindYourPlace from '../components/FindYourPlace'
import ClientReview from '../components/ClientReview'
import ProjectType from '../components/ProjectType'
import Progress from '../components/Progress'
import Blogs from '../components/Blogs'
import ScrollTriggeredSingle from '../components/ui/ScrollTriggeredSingle'

const Home = () => {
  return (
    <>
      <Hero />
      
      <div className="relative">
        <Caption/>
        <Advertise/>
        
        {/* Scroll Triggered Image - positioned absolutely over Caption + Advertise */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 h-full">
          <ScrollTriggeredSingle 
            scrollHeight="100%"
            className="
              w-[40vw]
              sm:w-[35vw]
              md:w-[30vw]
              lg:w-[25vw]
              xl:w-[500px]
              2xl:w-[600px]
              max-w-[700px]
            " 
          />
        </div>
      </div>
      
      <MovingImages/>
          <ProjectType/>
      <FindYourPlace/>
      <ClientReview/>
  
      <Progress/>
      <Blogs/>
    </>
  )
}

export default Home