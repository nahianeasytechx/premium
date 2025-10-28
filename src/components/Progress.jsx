import React from 'react';
import progressOne from "../assets/Progress/1.webp";
import progressTwo from "../assets/Progress/2.webp";
import progressThree from "../assets/Progress/3.webp";

const Progress = () => {
  const progressData = [
    {
      image: progressOne,
       context: "Virtual Tour",
    },
    {
      image: progressTwo,
      context: "Project Map",
    },
    {
      image: progressThree,
      context: "See Our Progress",

    }
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className=' text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#065E33]'>
          PROGRESS OF OUR PROJECTS
        </h1>
        <p className='py-5 lg:py-10 px-6 lg:px-40 text-center text-base lg:text-xl'>
          Rest Assured, check everything in live to make yourself comfortable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 pb-10">
          {progressData.map((item, index) => (
            <div key={index} className="relative group overflow-hidden  shadow-lg cursor-pointer">
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/10 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">

              </div>

              {/* Optional: View More Button on Hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                <button className=" py-2  text-white  transition-colors duration-300 font-bold text-3xl ">
           {item.context}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Progress;